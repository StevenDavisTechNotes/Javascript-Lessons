// public async Task<string> SayHello(string name)
// {
//     await Task.Delay(100);
//     return $"Hello {name}!";
// }

// public async void TestSayHello()
// {
//     var message = await SayHello("George");
//     Console.WriteLine("Got Message: {0}", message);
// }







/* Example with JQuery's $.Deferred ****************************************/
// function SayHello$(name) {
//     var deferred = $.Deferred(function (d) {
//         setTimeout(function SayHello$Timeout() {
//             d.resolve("Hello "+name+"!");
//         }, 100);
//     });
//     return deferred.promise();
// }
// (function TestSayHello$() {

//     var promise = SayHello$("George");
//     promise.then(
//         function TestSayHelloFulfilled(result) {
//             console.log("Got Message with jQuery's $ {0}".format(result))
//         },
//         function TestSayHelloRejected(err) {
//             console.log("Failed {0}".format(err))
//         },
//         function TestSayHelloProgress(progress) {
//             console.log("Progress with {0}".format(progress))
//         }
//     );

// })();






// /* Example with Q's Q.defer ****************************************/

// function SayHelloQ(name) {
//     var deferred = Q.defer();
//     setTimeout(function () {
//         deferred.resolve("Hello "+name+"!");
//     }, 100);
//     return deferred.promise;
// }
// (function TestSayHelloQ() {

//     var promise = SayHelloQ("George");
//     promise.then(function (result) {
//         console.log("Got Message with Q {0}".format(result))
//     });
    
// })();



/* Example with es6 Promise ****************************************/
// Waiting for adoption 
// function SayHelloES6(name) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function () {
//             resolve("Hello "+name+"!");
//         }, 100);
//     });
// }
// (function TestSayHelloES6() {

//     var promise = SayHelloES6("George");
//     promise.then(function (result) {
//         console.log("Got Message with ES6Promise {0}".format(result))
//     });
    
// })();


// // Word of warning  Some promise systems immediately call callback, some push to the event queue






// /* Chaining Receivers ****************************************/
// (function ChainingReceivers() {

//     var promise = Promise.resolve("George"); // Task.FromResult("George")
//     promise.then(function (result) {
//         console.log("Got Message first time {0}".format(result))
//         return result;
//     }).then(function (result) {
//         console.log("Got Message second time {0}".format(result))
//         return result;
//     }).then(function (result) {
//         console.log("Got Message third time {0}".format(result))
//         return result;
//     // }).done(function (result) {
//     //     console.log("Got Message in done {0}".format(result))
//     });
    
// })();






// /* Failure Handling ****************************************/
// (function HandlingFailures() {

//     var promise = Promise.resolve("George"); // Task.FromResult("George")
//     promise.then(function (result) {
//         console.log("Got Message first time {0}".format(result))
//         if(result !== "Steve") {
//             throw "That's not when I expected"
//         }
//         return result;
//     }).then(function (result) {
//         console.log("Got Message second time {0}".format(result))
//         return result;
//     }).catch(function (error) {
//         console.log("Got Error {0}".format(error))
//     });

// })();







// /* Parallel Async Behavior ****************************************/
// (function ParallelAsyncBehavior() {

//     var promise0 = Promise.resolve("John");
//     var promise1 = Promise.resolve("Paul");
//     var promise2 = Promise.resolve("Ringo");
//     var promise3 = Promise.resolve("George");
//     var promise = Promise.all([promise0, promise1, promise2, promise3]);
//     promise
//         .then(function (results) {
//             console.log("Got 0 {0}".format(results[0]))
//             console.log("Got 1 {0}".format(results[1]))
//             console.log("Got 2 {0}".format(results[2]))
//             console.log("Got 3 {0}".format(results[3]))
//         });

// })();





function MakeResolvingTimeoutPromise(delay, resolutionValue) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve(resolutionValue);
        }, delay);
    });
}


function MakeRejectingTimeoutPromise(delay, failureMessage) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            reject(failureMessage);
        }, delay);
    });
}

// /* Promise as Timeout ********************************************/
// (function ParallelWithTimeoutBehavior() {

//     var jobPromise = MakeResolvingTimeoutPromise(10000, {field:"LongRunningJob"});
//     var timeout = MakeRejectingTimeoutPromise(1000, "Didn't happen fast enough!");
//     Promise
//         .race([jobPromise,timeout])
//         .then(function(result){
//             console.log("First to resolve was {0}".format(result.field))            
//         })
//         .catch(function(error) {
//             console.log("Catch error {0}".format(error))            
//         });

// })();






// /* Chaining Async Behavior ****************************************/
// (function ChainingAsyncBehavior() {

//     var promise = Promise.resolve([]);
//     promise
//         .then(function (band) {
//             return new Promise(function(resolve,reject) {
//                 setTimeout(function () {
//                     band.push("Paul");
//                     resolve(band);
//                 }, 100);
//             });
//         }).then(function (band) {
//             return new Promise(function(resolve,reject) {
//                 setTimeout(function () {
//                     band.push("Ringo");
//                     resolve(band);
//                 }, 100);
//             });
//         }).then(function (band) {
//             return new Promise(function(resolve,reject) {
//                 setTimeout(function () {
//                     band.push("George");
//                     resolve(band);
//                 }, 100);
//             });
//         }).then(function (band) {
//             console.log("Got band: {0}".format(band.join(", ")));
//         });

// })();





// /* Graphing Async Behavior ****************************************/
// (function GraphingAsyncBehavior() {

//     var fabFour = Promise.resolve({ main: ['John', 'Paul', 'George', 'Ringo']});
//     var drummers = Promise.resolve({drummers: ['Pete Best',
//                 'Andy White', 'Tommy Moore', 'Jimmy Nicol']});
//     var plusSinger = fabFour.then(function(band){
//         $.extend(band, {singer: 'Tony Sheridan'})
//         return band;
//     });
//     var plusBassist = drummers.then(function(band){
//         $.extend(band, {bassist: 'Stuart Sutcliffe'})
//         return band;
//     });
//     var allPromise = Promise
//         .all([plusSinger, plusBassist])
//         .then(function(bandParts){
//             var band = bandParts[0];
//             $.extend(band, bandParts[1]);
//             return band;
//         });
//     allPromise.then(function (band) {
//             console.log("Got band:", band);
//         });

// })();




// /* Lambdas with es6 or Typescript ****************************************/
// {
//     Promise.resolve([])
//         .then(band => new Promise((resolve,reject) =>
//             setTimeout(()=> {
//                 band.push("Paul");
//                 resolve(band);
//             }, 100)))
//         .then(band => new Promise((resolve,reject) =>
//             setTimeout(()=> {
//                 band.push("Ringo");
//                 resolve(band);
//             }, 100)))
//         .then(band => new Promise((resolve,reject) =>
//             setTimeout(()=> {
//                 band.push("George");
//                 resolve(band);
//             }, 100)))
//         .then(band => 
//             console.log("Got band: {0}".format(band.join(", "))));
// }


