var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Typescriptclasses;
(function (Typescriptclasses) {
    var Foobar9 = (function () {
        function Foobar9(theField) {
            this.theField = theField;
        }
        Object.defineProperty(Foobar9.prototype, "theProperty", {
            get: function () { return this.theField; },
            set: function (value) { this.theField = value; },
            enumerable: true,
            configurable: true
        });
        Foobar9.prototype.theMethod = function () {
            this.theField = 'aa';
        };
        return Foobar9;
    }());
    Typescriptclasses.Foobar9 = Foobar9;
    var ChildOfFoobar9 = (function (_super) {
        __extends(ChildOfFoobar9, _super);
        function ChildOfFoobar9(theField) {
            _super.call(this, theField);
            this.theField = theField;
        }
        Object.defineProperty(ChildOfFoobar9.prototype, "theProperty", {
            get: function () { return this.theField; },
            set: function (value) { this.theField = value; },
            enumerable: true,
            configurable: true
        });
        ChildOfFoobar9.prototype.theMethod = function () {
            this.theField = 'bb';
        };
        return ChildOfFoobar9;
    }(Foobar9));
    Typescriptclasses.ChildOfFoobar9 = ChildOfFoobar9;
})(Typescriptclasses || (Typescriptclasses = {}));
//# sourceMappingURL=TypescriptClasses.js.map