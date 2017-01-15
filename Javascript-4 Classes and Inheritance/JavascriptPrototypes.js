/************************************************************************/
(function(){

function Foobar0(defaultField) {
    return {
        theField: defaultField,
        theMethod: function() { this.theField = true; },

        // for the record Javascript calls fields properties and properties accessors
        get theProperty() { return this.theField; },
        set theProperty(value) { this.theField = value; }
    };
}
var myfoobar0 = new Foobar0(false);
myfoobar0.theMethod();
myfoobar0.theProperty = true;
report('myfoobar0', myfoobar0);

var myfoobar0NoNew = Foobar0(false);
report('myfoobar0NoNew', myfoobar0NoNew);

var extendAsChild = $.extend({}, 
    new Foobar0(false), 
    {
        childMethod: function() {}
    });
report('extendAsChild', extendAsChild);

console.log('')

/************************************************************************/
function ChildOfFoobar0(defaultField) {
    Foobar0.call(this, defaultField);
}
// Warning __proto__ is not part of the standard
ChildOfFoobar0.prototype.__proto__ = Foobar0.prototype;
var myChildOf0 = new ChildOfFoobar0('theValue');
myChildOf0.theProperty = true;
// myChildOf0.theMethod(); // this doesn't work
report('myChildOf0', myChildOf0);

console.log('')

})();
(function(){


/************************************************************************/
var oParent = {
    theField: '',
    theMethod: function () {
        this.theField = true;
    },
    get theProperty() { return theField; },
    set theProperty(value) { this.theField = value; },
    theOtherField: ''
};
var oChild = Object.create(oParent);
oParent.theOtherField = 'blah';
oChild.theMethod(3);
report('oChild', oChild);

console.log('')

})();
(function(){



/************************************************************************/
function Foobar1(defaultField) {
    this.theField = defaultField;
    this.theMethod = function () { this.theField = true; }
}
Object.defineProperty(Foobar1.prototype, "theProperty", {
    get: function () { return this.theField; },
    set: function (value) { this.theField = value; },
    enumerabled: true,
    configurable: true
});
var myfoobar1 = new Foobar1('theValue');
myfoobar1.theMethod();
report('myfoobar1', myfoobar1);
myfoobar1.theProperty = 23;
console.log("myfoobar1.theField=",myfoobar1.theField);
report('myfoobar1 after', myfoobar1);


console.log('')

})();
(function(){



/************************************************************************/
function Foobar2(initialValue) {
    // this.prototype.theField = false; // not allowed
    this.theField = initialValue; // instance only
}
Foobar2.prototype = {
    get theProperty() { return this.theField; },
    set theProperty(value) { this.theField = value; }
}
Foobar2.prototype.theStaticField = 'staticValue';
Foobar2.prototype.theMethod = function () { this.theField = true; }

var myfoobar2 = new Foobar2('theValue');
myfoobar2.theMethod();
myfoobar2.theProperty = true;
report('myfoobar2', myfoobar2);

Foobar2.prototype.additionalStaticField = 'theValue';
report('myfoobar2', myfoobar2);

Foobar2.theOtherStaticField =3.14
report('myfoobar2', myfoobar2);

console.log('myfoobar2.additionalStaticField=',myfoobar2.additionalStaticField);
console.log('Foobar2.theOtherStaticField=',Foobar2.theOtherStaticField);
console.log('')

/************************************************************************/
function ChildOfFoobar2a(initialValue) {//base(initialValue)
    Foobar2.call(this, initialValue);
}
ChildOfFoobar2a.prototype.theChildField = 'gray';
// Warning, non-standard
ChildOfFoobar2a.prototype.__proto__ = Foobar2.prototype;

function ChildOfFoobar2b(initialValue) {//base(initialValue)
    Foobar2.call(this, initialValue);
}
ChildOfFoobar2b.prototype = Object.create(Foobar2.prototype, {
    theChildField: { value: 'gray', writable: false, enumerable: true, configurable: true}
});
Foobar2.prototype.anotherStaticField = 'otherStatusValue';

var myChildOf2a = new ChildOfFoobar2a('theValue');
var myChildOf2b = new ChildOfFoobar2b('theValue');
myChildOf2a.theChildField = 37;
myChildOf2b.theChildField = 37;
report('myChildOf2a', myChildOf2a);
report('myChildOf2b', myChildOf2b);


console.log('')

})();

console.log('done');


/************************************************************************/
function report(name, obj) {
    console.log('');
    console.log(name + ' immediate', JSON.stringify(Object.getOwnPropertyNames(obj).sort()));
    console.log(name + ' prototype', JSON.stringify(getProperties(obj.__proto__).sort()));
    //console.log(name + ' all', JSON.stringify(getProperties(obj).sort()));
}
function getProperties(obj) {
    var ret = [];
    for (var prop in obj) {
        ret.push(prop);
    }
    return ret;
}
function getMethods(obj) {
    var ret = [];
    for (var prop in obj) {
        //  typeof is inconsitent, duck type for accuracy
        //  This could also be written to follow the internal IsCallable algorithm
        //  http://es5.github.com/#x9.11
        if (obj[prop] && obj[prop].constructor &&
              obj[prop].call && obj[prop].apply) {
            ret.push(prop);
        }
    }
    return ret;
}