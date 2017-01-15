/* apply method to set this variable ********************************************************/
(function() {

    var viewModel = { field: "My Field Value" };
    function ViewModelMethod() {
        console.log("Found field to have value: " + this.field);
    }
        ViewModelMethod.apply( viewModel, [] );

    $("#ApplyButton").click(function () {
        //ViewModelMethod( viewModel);
        ViewModelMethod.apply( viewModel, [] );
    });

})();


/* call method to set this variable ********************************************************/
(function() {

    var viewModel = { field: "My Field Value" };
    function ViewModelMethod() {
        console.log("Found field to have value: " + this.field);
    }
    ViewModelMethod.call( viewModel, [] );

    $("#CallButton").click(function () {
        ViewModelMethod.call( viewModel, [] );
    });

})();


/* bind method to set this variable ********************************************************/
(function() {

    var viewModel = { field: "My Field Value" };
    function ViewModelMethod() {
        console.log("Found field to have value: " + this.field);
    }
    ViewModelMethod.bind( viewModel, [] );

    $("#BindButton").click(ViewModelMethod.bind(viewModel, [] ));

})();
