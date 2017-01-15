# Javascript-2 Scopes, Closures, and Variables

## Agenda
* JavaScript Variables
* JavaScript Variable Scope
* Limiting Variable Scope
* TypeScript Variable Scope
* Common Mistakes in Javascript
* Making a Unit Test Project

## Code Location

~~~~
V:\IPG\Users\SDavis\Trainings\Javascript Training\Javascript-2 Scopes, Closures, and Memory Leaks
~~~~

## Variables

<a href="https://dorey.github.io/JavaScript-Equality-Table/" target="_blank">Equality Table</a>

## Common Mistakes in Javascript

[Resource: www.w3schools.com](http://www.w3schools.com/js/js_mistakes.asp)

## Making a Unit Test Project

[Enable Script Debugging](file:///V:/IPG/Users/SDavis/Trainings/Javascript%20Training/Javascript-2%20Scopes,%20Closures,%20and%20Memory%20Leaks/Internet%20Options%20Debugging.png)

Resharper Unit Testing 
[Options](file:///V:/IPG/Users/SDavis/Trainings/Javascript%20Training/Javascript-2%20Scopes,%20Closures,%20and%20Memory%20Leaks/ResharperUnitTestOptions.png)

Create a folder named spec
~~~~
Install-Package Chutzpah
~~~~

[Test Runner](V:\IPG\Users\SDavis\Trainings\Javascript Training\Javascript-2 Scopes, Closures, and Memory Leaks\Chutzpah Test Runner Extension.png)
[Jasmine Types](V:\IPG\Users\SDavis\Trainings\Javascript Training\Javascript-2 Scopes, Closures, and Memory Leaks\Jasmine TSD in Nuget.png)

chutzpah.json
~~~~
{
  "Framework": "jasmine",
  "Tests": [
    {
      "Path": "",
      "Include": "*/*Test.js"
    },
    {
      "Path": "",
      "Include": "*/*Tests.js"
    }
  ],
  "References": [ ]
}
~~~~

Unit tests in JS
~~~~
"use string";

describe("MyTests1",
    function() {
        it("careful of ==", function() {
            expect(0 == "0.0").toBeTruthy();
        });
        it("careful of ==", function () {
            switch (0) {
                case "0.0":
                    break;
                default:
                    fail();
            }
        });
        it("testing null",
            function() {
                var myObj;
                expect("sweater" != null).toBe(true);
                expect("sweater" != undefined).toBe(true);
                expect(null != null).toBe(false);
                expect(null != undefined).toBe(false);
                myObj = "sweater";
                expect(typeof myObj !== "undefined" && myObj !== null).toBe(false);
            });
            });
        it("common", function () {
            expect(0).toBeFalsy();
            expect("").toBeFalsy();
            expect(null).toBeFalsy();
            expect(undefined).toBeFalsy();
        });
    });

function Game() {
    this.color = "blue";
}
Game.prototype.clearBoard = function () { };
Game.prototype.restart = function () {
    this.timer = setTimeout(function () {
        this.clearBoard();
    }, 1000);
};

describe("MyTests2",
    function () {
        it("beware this", function () {
            (new Game()).restart();
        });
    });

function myFunction(a) {
    var
    power = 7;
    return
    a * power;
}

describe("MyTests3",
    function () {
        it("beware line termination", function () {
            expect(myFunction(2)===128).toBeTruthy();
        });




        it("beware foreach", function () {
            var array = [1, 2, 3, 4];
            for(var item in array) {
                expect(item).toBeGreaterThanOrEqual(1);
                expect(item).toBeLessThanOrEqual(4);
            }
            
        });
    });
~~~~

Unit Tests in TypeScript
~~~~
describe("MyTests",
    function() {
        it("should use ===", function() {
            //expect(0 == "0.0").toBeTruthy();
        });
    });

class Game {
    public constructor() {
        this.color = "blue";
        this.restart();
    }
    public clearBoard() { }
    public restart() {
        this.timer = setTimeout(() => {
                this.clearBoard();
            },
            1000);
    }
    color: string;
    timer: number;
}
~~~~
