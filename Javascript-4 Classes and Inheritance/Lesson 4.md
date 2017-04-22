# Javascript-4 Classes and Inheritance

## Agenda
* Classes and Inheritance
    * http://jsfiddle.net/pwalczyszyn/PVY9g/
    * http://www.typescriptlang.org/play/ 
* Examine Real World Coding
    * https://github.com/socketio/socket.io/blob/master/lib/namespace.js
    * https://github.com/moment/moment/blob/develop/src/moment.js
* Classes in Inheritance next pass
    * javascriptprototypes.js
* Bonus - Mixins
    * https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/
    * https://www.typescriptlang.org/docs/handbook/mixins.html
* Modules and AMD
    * V:\IPG\Users\SDavis\Trainings\Javascript Training\AMD Loading
    * https://addyosmani.com/writing-modular-js/
    * file:///C:/srcarm/src/asc.ta.returnattribution.load.web/scripts/app/analysis.js

References:
* http://www.standardista.com/javascript/15-common-javascript-gotchas/
* https://angularjs.org/
* https://github.com/johnpapa/hottowel-angular-typescript

## Code Location

~~~~
V:\IPG\Users\SDavis\Trainings\Javascript Training\Javascript-4 Classes and Inheritance
~~~~

## Javasript Classes and Inheritance
[Javascript Inheritance](http://jsfiddle.net/pwalczyszyn/PVY9g/)

### Function as a ClassFactory
~~~~
var print = function(text) {
    $('#output').append('<p>' + text + '</p>');
};
function MyClass(a) {
    this.fieldA = a;
};
MyClass.prototype.funA  = function() {
    print('Parent.funA called');
};
var myInstance = new MyClass(3);
print(myInstance.fieldA);
~~~~
### Named Anonymous Function as a ClassFactory
~~~~
var print = function(text) {
    $('#output').append('<p>' + text + '</p>');
};
var MyClass = function(a) {
    this.fieldA = a;
};
MyClass.prototype.funA  = function() {
    print('Parent.funA called');
};
var myInstance = new MyClass(3);
print(myInstance.fieldA);
~~~~

## Typescript Classes and Inheritance
[Typescript Playgound](http://www.typescriptlang.org/play/)

~~~~
class Greeter {
    public greeting_field: string;

    constructor(message: string) {
        this.greeting_field = message;
    }
    greet():string {
        return `Hello, {this.greeting_field}`;
    }
}

let greeter = new Greeter("world");
~~~~
~~~~
interface IGreeter {
    greeting_field: string;
    optional_field?: string;
    greet(): string;
}
class Greeter implements IGreeter {
    public greeting_field: string;

    private _private_field: string;
    get greeting_accessor(): string {
        return this._private_field;
    }
    set greeting_accessor(value: string) {
        this._private_field = value;
    }

    constructor(message: string) {
        this.greeting_field = message;
    }
    greet():string {
        return `Hello, {this.greeting_field}`;
    }
}

let greeter = new Greeter("world");
~~~~
~~~~
interface IGreeter {
    greeting_field: string;
    optional_field?: string;
    greet(): string;
}
class Greeter implements IGreeter {
    public greeting_field: string;
    public static greeting_static_field: string ="Standard greeting";

    private readonly _readonly_field: string;
    get greeting_accessor(): string {
        return this._readonly_field;
    }
    set greeting_accessor(value: string) {
        this._readonly_field = value;
    }
    constructor(message: string, private autofield: number) {
        this.greeting_field = message;
    }
    greet():string {
        return `Hello, {this.greeting_field}`;
    }
}

class WalmartGreeter extends Greeter {
    constructor(message: string) {
        super(message);
    }
}

let greeter = new Greeter("world");
let walmartGreeter = new WalmartGreeter("world");
let otherGreeter = <IGreeter>{
    greeting_field: 'other value',
    greet(): string { return 'other method'}
};
walmartGreeter = otherGreeter;

~~~~


## Examine Real World Coding
[Socket.IO code](https://github.com/socketio/socket.io/blob/master/lib/namespace.js)

[Moment.js code](https://github.com/moment/moment/blob/develop/src/moment.js)

## Classes, Properties/Fields, Accessors/Properties, AutoField
[Exhaustive Javascript Prototypes](JavascriptPrototypes.html)
* JavascriptPrototypes.js
* ThisVariable.js

## Mixins
[In Javasript](https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/)

[In Typescript](https://www.typescriptlang.org/docs/handbook/mixins.html)

## AMD Modules & Require.JS page loading

<p><a href="https://en.wikipedia.org/wiki/Asynchronous_module_definition" target="_blank">Asynchronous Module Definition (AMD)</a> is a depenency injection system for WebDev</p>

<p><a href="https://github.com/volojs/create-template/tree/master/www" target="_blank">Example walkthru</a></p>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
