"use string";

describe("MyTests1",
    function() {
        it("careful of ==", function() {
            expect(0 == "0.0").toBeTruthy();
        });
        it("testing null",
            function() {
                var myObj = null;
                expect(myObj != null).toBe(false);
                myObj = "sweater";
                expect(myObj != null).toBe(true);
                expect(typeof myObj !== "undefined" && myObj !== null).toBe(false);
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


