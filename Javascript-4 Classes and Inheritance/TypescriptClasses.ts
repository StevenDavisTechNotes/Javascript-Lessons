namespace Typescriptclasses {
    export class Foobar9 {
        public constructor(public theField: string) { }
        get theProperty() { return this.theField; }
        set theProperty(value) { this.theField = value; }

        public theMethod(): void {
            this.theField = 'aa';
        }
    }
    export class ChildOfFoobar9 extends Foobar9 {
        public constructor(public theField: string) {
            super(theField);
        }
        get theProperty() { return this.theField; }
        set theProperty(value) { this.theField = value; }

        public theMethod(): void {
            this.theField = 'bb';
        }
    }
}