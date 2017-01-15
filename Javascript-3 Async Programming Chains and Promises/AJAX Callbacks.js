var utils = {
    dateFormat: 'YYYY-MM-DD',
};
function formAjaxRequestForURL(url){
    return {
        "url": url,
        "dataSrc": "",
        cache: false,
        xhrFields: {
            withCredentials: true
        },
        timeout: 10000,
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect.\n Verify Network.');
            } else if (jqXHR.status === 403) {
                alert('Edit was Forbidden. [403]');
            } else if (jqXHR.status === 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status === 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
        }            
    };
}

var dataLoadServiceUrl = "http://localhost:7117";

function fetchData(requestedReportingMonthRaw) {
    var reportingMonth = moment(requestedReportingMonthRaw).endOf("month").format(utils.dateFormat);

    return $.when(
            $.ajax(formAjaxRequestForURL(dataLoadServiceUrl + "/api/AccountList/Reporting/Monthly/" + reportingMonth + "/?includeExclusions=true")),
            $.ajax(formAjaxRequestForURL(dataLoadServiceUrl + "/api/AccountList/EditReason/DateAdjustReason/")),
            $.ajax(formAjaxRequestForURL(dataLoadServiceUrl + "/api/AccountList/EditReason/ExclusionReason/"))
        )
        .then(function (accountListResponse, 
            possibleOverrideReasonListResponse,
            possibleExclusionReasonListResponse) {

            var overrideReasonMap = _.keyBy(_.filter(possibleOverrideReasonListResponse[0], function (reason) {
                return reason.IsActive;
            }), "ReasonKey");

            var exclusionReasonMap = _.keyBy(_.filter(possibleExclusionReasonListResponse[0], function (reason) {
                return reason.IsActive;
            }), "ReasonKey");

            var tableViewModel =
                _.orderBy(_.values(accountListResponse[0].Data), ["AccountCode"])
                    .map(function (item) {
                        $.extend(item,
                            {
                                StartDateOverrideReasonCode: "Default",
                                EndDateOverrideReasonCode: "Default",
                                ExclusionReasonCode: "Default"
                            });
                        if (item.StartDateOverrideReasonKey) {
                            item.StartDateOverrideReasonCode = _.get(overrideReasonMap, [item.StartDateOverrideReasonKey, "ReasonCode"], "");
                        }
                        if (item.EndDateOverrideReasonKey) {
                            item.EndDateOverrideReasonCode = _.get(overrideReasonMap, [item.EndDateOverrideReasonKey, "ReasonCode"], "");
                        }
                        if (item.ExclusionReasonKey) {
                            item.ExclusionReasonCode = _.get(exclusionReasonMap, [item.ExclusionReasonKey, "ReasonCode"], "");
                        }
                        if ((item.Warnings) && (item.Warnings.length > 0)) {
                            item.FatalError = true;
                        }
                        item.ExcludedMessage = item.FatalError
                            ? "Data Error: " + item.Warnings.join(", ")
                            : (item.IsExcluded ? "Excluded" : "");
                        return item;
                    });
            console.log("Found {0} rows onwhich to bind the grid".format(tableViewModel.length));
            return tableViewModel;
        });
}

fetchData([2016,8,3]);