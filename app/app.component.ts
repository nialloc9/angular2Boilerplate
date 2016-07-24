import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }


//AppComponent is the root of the application. Every Angular app has at least one root
// component, conventionally named AppComponent, that hosts the client user experience.
// Components are the basic building blocks of Angular applications. A component controls
// a portion of the screen — a view — through its associated template.

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