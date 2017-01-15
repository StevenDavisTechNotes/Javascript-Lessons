describe("MyTests", function () {
    it("should use ===", function () {
        //expect(0 == "0.0").toBeTruthy();
    });
});
var Game = (function () {
    function Game() {
        this.color = "blue";
        this.restart();
    }
    Game.prototype.clearBoard = function () { };
    Game.prototype.restart = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            _this.clearBoard();
        }, 1000);
    };
    return Game;
}());
//# sourceMappingURL=UnitTestsInTypeScript.js.map