
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
