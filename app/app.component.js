"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//AppComponent is the root of the application. Every Angular app has at least one root
// component, conventionally named AppComponent, that hosts the client user experience.
// Components are the basic building blocks of Angular applications. A component controls
// a portion of the screen � a view � through its associated template.
//@Component is a decorator function which associate metadata with the component class.
//The metadata tells Angular how to create and use this component.
//selector specifies a simple CSS selector for an HTML element that represents the component.
//The element for this component is named my-app. Angular creates and displays an instance
//of our AppComponent wherever it encounters a my-app element in the host HTML.
//Template: The template specifies the component's companion template, written in an enhanced form of
// HTML that tells Angular how to render this component's view.
//Our template is a single line of HTML announcing "My First Angular 2 App".
//Component class: At the bottom of the file is an empty, do-nothing class named AppComponent.
//When we're ready to build a substantive application, we can expand this class with properties
// and application logic. Our AppComponent class is empty because we don't need it to do anything
// in this QuickStart.
///We export AppComponent so that we can import it elsewhere in our application, as we'll see
// when we create main.ts. 
//# sourceMappingURL=app.component.js.map