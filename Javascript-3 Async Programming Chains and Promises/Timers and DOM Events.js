
console.log("Ticking things off in my in-line code");
(function() {
    console.log("Ticking things off in a Self Executing Anonymous Function");

    var timeoutHandle = setTimeout(function() {
        console.log("Timed out at {0}".format(Date()));
    }, 100);

    var numberOfElapsedTicks = 0;
    var intervalHandle = setInterval(function() {
        numberOfElapsedTicks++;
        console.log("Ticked # {0} at {1}".format(numberOfElapsedTicks, Date()));
        if(numberOfElapsedTicks>=10) {
            clearInterval(intervalHandle);
            console.log("Done Ticking");
        }
    }, 1000);

    $(document).ready(function () {
        console.log("Ticking things off Before the page is loaded");
    });

    console.log("Leaving my Self Executing Anonymous Function");
})();
console.log("Leaving my in-line imperative");

