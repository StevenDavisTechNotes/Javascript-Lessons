function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

var outerValue = true;

function outerFn(arg1) {
    var innerValue = true;
    assert(typeof otherValue === "undefined", "Variables defined late are not in the closure.");

    function innerFn(arg2) {
        assert(outerFn && outerValue, "These still come from the closure.");
        assert(innerFn && innerValue && arg1, "All from a closure, as well.");
    }
    innerFn(true);
}

outerFn(true);
var otherValue = true;
assert(outerFn && outerValue, "Globally-accessible variables and functions.");

{
    let myVar = 3;
    for (let i = 0; i < 4; i++) {
        let myVar = 100 + i;
    }
    console.log("myVar = ", myVar);
}
{
    let blockVar = "a";
    assert(blockVar === "a", "Block Variables are defined in TypeScript and es6");
    {
        let blockVar = "b";
        assert(blockVar === "b", "This redeclaration is actually a separate variable");
    }
}
{
    let blockVar = "b";
    assert(blockVar === "b", "This redeclaration is actually a separate variable");
}
