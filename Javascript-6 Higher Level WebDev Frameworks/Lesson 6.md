Agenda
* Many Advanced Frameworks
    * Angular.js 1
    * Angular 2
    * React
    * Aurelia
* Community of Practice

## Many Advanced Frameworks

[TodoMVC](http://todomvc.com/)
[List on Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks)
[Blogs](https://envato.com/blog/rising-trends-in-javascript/)
[Google Trends](https://www.google.com/trends/explore?q=%2Fm%2F0j45p7w,%2Fm%2F012l1vxv,%2Fm%2F0268gyp,%2Fm%2F03clphw,knockout%20js)

## Angular 1

Key Features:
* two-way data binding
* dependency injection
* separation of concerns
* testability
* abstraction

Architecture:
<a href="https://www.smashingmagazine.com/wp-content/uploads/2014/11/01-mindbender.png" target="_blank">
<img width="600px" src="https://www.smashingmagazine.com/wp-content/uploads/2014/11/01-mindbender.png"/></a>
* Angular aware events are wrapped in a digest cycle
* Native events require $scope.$apply to manually trigger digest cycle

Component Model:
* partials - String Interpolation {{expression}}
* controllers - MVC code behind
* scope - implicit view model
* directives - reusable behavior
* services - singleton non-visual business logic
* filters - reusable formatting

<a href="http://localhost:3000/example-angular1/" target="_blank">Example</a>

## Angular 2

Key Features:
* Mobile apps
* Simpler API
* Modernized Dependency Injection
* Progressive code loading
* Richer templating
* No 2-way data binding
<a href="Angular 1 vs 2 Change Detection.png" target="_blank"><img width="600px" src="Angular 1 vs 2 Change Detection.png"/></a>
* [Zone based change detection](https://auth0.com/blog/understanding-angular-2-change-detection/)
    * Adds an OnTurnDone to async actions
    * Compares all properties within component
    * Can plug-in more sophisticated methods
* Attribute based
* directives - reusable behavior
    * Component directives
    * Decorator directives
    * Template Directives
* Component-first instead of view-first

<a href="http://localhost:3000/example-angular2/" target="_blank">Example</a>


## React

Key Features:
* Minimal Framework - need many additional libraries
* Mobile apps through React-Native
* Not MVC, ViewController separate from State(<View Model)
* Rich templating
* Better typechecking
<a href="React Architecture.png" target="_blank"><img width="600px" src="React Architecture.png"/></a>
* [Immutable/Functional Update System](https://facebook.github.io/react/docs/reconciliation.html)
* No 2-way data binding
* Written in an extension of TypeScript
* Best with highly factored/normal UI layouts
* Component/JSX-only

<a href="http://localhost:3000/example-react/" target="_blank">Example</a>


## Aurelia

Key Features:
* Minimal Framework
* Clean and simple
* ES6 / ECMAScript 2015 - Need transpiler
    * TypeScript supported
* Convension over configuration
* Elaborate 2-way data binding
    * Uses Property Observers
* Integrates with other JS Frameworks
    * No special character repurposing

# Community of Practice

Definition: A community of practice is a group of people who share a concern or a passion for something they do, and learn how to do it better as they interact regularly.
* The domain: members are brought together by a learning need they share (whether this shared learning need is explicit or not and whether learning is the motivation for their coming together or a by-product of it)
* The community: their collective learning becomes a bond among them over time (experienced in various ways and thus not a source of homogeneity)
* The practice: their interactions produce resources that affect their practice (whether they engage in actual practice together or separately)

Why?
* Feeds Organizational learning - Product alignment is not technical skills alignment
    * Organizational commitment to a technology
* Feeds adoption and curation of technology
* Feeds career development -> retention -> branding -> recruitment
<!--* Feeds moral and motivation - <img width="600px" src="http://youearnedit.com/wp-content/uploads/2014/10/Slide1-copy.png"/>-->
* Learning and Support: Who knows X?  Who can really help when stuck? 

Proposal
* Meet monthly
* Everyone takes turn talking about challenges that they have based or are facing
* Next meeting is to discuss how Javascript is being used at ASC





















<img src="http://4.bp.blogspot.com/-s0sH1kWxh6I/UWncTYe_rqI/AAAAAAAAF7Q/X1DSC3adzSU/s1600/crochet-smiley-face-pattern.jpg"/>
