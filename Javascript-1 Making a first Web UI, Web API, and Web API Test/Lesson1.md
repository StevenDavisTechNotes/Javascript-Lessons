# Making a first Web UI, Web API, and Web API Test

## Agenda

* Goal: Have a Visual Studio Project from which to learn Javascript
* Step 1: Make a Visual Studio ASP.Net Web 2 API Project
* Step 2: Make a Web API
* Step 3: Create a Web App
* Step 4: Create a Python Automated Tester

## Step 1: Make a Visual Studio ASP.Net Web 2 API Project

Platform: [ASP.NET Web API 2 vs ASP.Net MVC](http://stackoverflow.com/questions/11350853/asp-net-webapi-vs-mvc)

[Set IE Caching Policy]<a href="file://V:\IPG\Users\SDavis\Trainings\Javascript Training\Javascript-2 Scopes, Closures, and Memory Leaks\Internet Options Caching.png">link</a>

Let's follow along with a [tutorial](https://www.asp.net/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api).

## Step 2: Make a Web API


Add a Trade Model
~~~~
public class Trade
{
    public int TradeId { get; set; }
    public int Quantity { get; set; }
    public string Symbol { get; set; }
}
~~~~

[HTML Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

[Favorite Web Api Standard](https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf)

Add Controller
~~~~
public class TradeController : ApiController
{
    // GET: api/Trade
    public IEnumerable<Trade> Get()
    {
        return TradeRepository.Instance.GetAllTrades();
    }

    // GET: api/Trade/5
    public IHttpActionResult Get(int id)
    {
        var trade = TradeRepository.Instance.GetTrade(id);
        if (trade == null)
            return NotFound();
        return Ok(trade);
    }

    // POST: api/Trade
    public HttpResponseMessage Post([FromBody]Trade trade)
    {
        var tradeId = TradeRepository.Instance.InsertTrade(trade);
        var result = new HttpResponseMessage(HttpStatusCode.Created) { Content = new StringContent(tradeId.ToString())};
        result.Headers.Location = new Uri(Url.Link("MyDemoApi", new {id = tradeId}));
        return result;
    }

    // PUT: api/Trade/5
    public void Put(int tradeId, [FromBody]Trade trade)
    {
        TradeRepository.Instance.UpdateTrade(trade);
    }

    // DELETE: api/Trade/5
    public void Delete(int id)
    {
        TradeRepository.Instance.DeleteTrade(id);
    }
}
~~~~

Add a TradeRepository
~~~~
public class TradeRepository
{
    public static TradeRepository Instance = new TradeRepository();
    private TradeRepository()
    {
    }

    private readonly Dictionary<int, Trade> _blotter = (new[]
    {
        new Trade { TradeId = 1, Quantity = 1234, Symbol = "MSFT" },
        new Trade { TradeId = 2, Quantity = 2345, Symbol = "INTC" },
        new Trade { TradeId = 3, Quantity = 3456, Symbol = "IBM" }
    }).ToDictionary(x => x.TradeId, x => x);

    private int LastTradeId = 4;

    public IEnumerable<Trade> GetAllTrades()
    {
        return _blotter.Values;
    }
    public Trade GetTrade(int id)
    {
        Trade trade;
        if (_blotter.TryGetValue(id, out trade))
        {
            return trade;
        }
        return null;
    }
    public int InsertTrade(Trade trade)
    {
        trade.TradeId = Interlocked.Increment(ref LastTradeId);
        _blotter[trade.TradeId] = trade;
        return trade.TradeId;
    }
    public void UpdateTrade(Trade trade)
    {
        _blotter[trade.TradeId] = trade;
    }
    public void DeleteTrade(int id)
    {
        _blotter.Remove(id);
    }
}
~~~~

<a href="http://localhost:3364/api/trade">Try out collection</a>, 
<a href="http://localhost:3364/api/trade/3">Try out item</a>
<a href="http://localhost:3364/api/trade/3">Try out Swagger</a>

[Adding Swagger(Swashbuckle)](http://www.wmpratt.com/swagger-and-asp-net-web-api-part-1/)

## Step 3: Create a Web App

Add a section to display the blotter
~~~~
<div>
    <h2>All Trades</h2>
    <ul id="trades" />
</div>
~~~~
Populated by a Web API call
~~~~
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min.js"></script>
<script>
    var uri = '/api/trade';

    $(document).ready(function () {
        // Send an AJAX request
        $.getJSON(uri)
            .done(function (data) {
                // On success, 'data' contains a list of products.
                $.each(data, function (key, item) {
                    // Add a list item for the product.
                    $('<li>', { text: formatItem(item) }).appendTo($('#trades'));
                });
            });
    });

    function formatItem(item) {
        return item.TradeId + ' ' + item.Symbol + ': Qty ' + item.Quantity;
    }
</script>
~~~~

Add Search
~~~~
<div>
    <h2>Search by ID</h2>
    <input type="text" id="tradeId" size="5" />
    <input type="button" value="Search" onclick="find();" />
    <p id="trade" />
</div>
~~~~
~~~~
function find() {
    var id = $('#tradeId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#trade').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#trade').text('Error: ' + err);
        });
}
~~~~

See that there is a bug and fix it.

## Step 4: Create a Python Automated Tester

~~~~
import win32com.client

class FetchedValue(object):
    __slots__ = ["winHttp"]
    def __init__(self, winHttp):
        self.winHttp = winHttp
    
    @property
    def status_code(self):
        return self.winHttp.status
    
    @property
    def responseText(self):
        return self.winHttp.responseText
    
    def GetResponseHeader(self, name):
        return self.winHttp.GetResponseHeader(name)

def fetchNoArg(verb, url):
    win_resp = win32com.client.Dispatch('WinHTTP.WinHTTPRequest.5.1')
    win_resp.SetAutoLogonPolicy(0)
    win_resp.SetTimeouts(60000  # ResolveTimeout - 60,000 default
                            , 60000  # ConnectTimeout - 60,000 default
                            , 120000  # SendTimeout - 30,000 default
                            , 120000  # ReceiveTimeout - 30,000 default
                            )
    win_resp.Open(verb, url, False)
    win_resp.Send()
    return FetchedValue(win_resp)

def fetch(verb, url, requestBody):
    win_resp = win32com.client.Dispatch('WinHTTP.WinHTTPRequest.5.1')
    win_resp.SetAutoLogonPolicy(0)
    win_resp.SetTimeouts(60000  # ResolveTimeout - 60,000 default
                            , 60000  # ConnectTimeout - 60,000 default
                            , 120000  # SendTimeout - 30,000 default
                            , 120000  # ReceiveTimeout - 30,000 default
                            )
    win_resp.Open(verb, url, False)
    win_resp.SetRequestHeader("Content-Type", "application/json; charset=utf8")
    win_resp.Send(requestBody)
    return FetchedValue(win_resp)

def fetchGet(url):
    return fetchNoArg("GET",url)

def fetchDelete(url):
    return fetchNoArg("DELETE",url)


~~~~

Create some tests
~~~~
import json
from FetchHttp import fetchGet, fetch, fetchDelete

class TestClass:
    baseurl = 'http://localhost:3364/api/trade/'
    def test_crud(self):
        ### DELETE to clean db
        res = fetchGet(self.baseurl)
        assert res.status_code == 200
        data = json.loads(res.responseText)
        for item in data:
            print "removing ", item['TradeId']
            fetchDelete(self.baseurl+"%d" % (item['TradeId']))

        ### POST
        res = fetch('POST', self.baseurl, json.dumps(
            {
                # "TradeId":4,
                "Quantity":9999,
                "Symbol":"IMCL"
            }))
        assert res.status_code == 201
        trade_id = int(res.responseText)
        expected_url = self.baseurl+"%d" % (trade_id)
        url = res.GetResponseHeader('location')
        assert url == expected_url

        res = fetchGet(self.baseurl)
        assert res.status_code == 200
        data = json.loads(res.responseText)
        url = self.baseurl+"%d" % (data[0]['TradeId'])

        ### GET
        res = fetchGet(url)
        assert res.status_code == 200
        data = json.loads(res.responseText)
        assert data['Quantity'] == 9999
        assert data['Symbol'] == 'IMCL'
        assert data['TradeId'] == trade_id

        ### DELETE
        res = fetchDelete(url)
        assert res.status_code == 200

        ### Deuplicate DELETE
        res = fetchDelete(url)
        assert res.status_code == 200

        ### GET after gone
        res = fetchGet(url)
        assert res.status_code == 404

~~~~

Fix some stuff
~~~~
public IHttpActionResult Get(int id)
{
    var trade = TradeRepository.Instance.GetTrade(id);
    if (trade == null)
        return NotFound();
    return Ok(trade);
}
public HttpResponseMessage Post([FromBody]Trade trade)
{
    var tradeId = TradeRepository.Instance.InsertTrade(trade);
    var result = new HttpResponseMessage(HttpStatusCode.Created) { Content = new StringContent(tradeId.ToString())};
    result.Headers.Location = new Uri(Url.Link("MyDemoApi", new {id = tradeId}));
    return result;
}
~~~~