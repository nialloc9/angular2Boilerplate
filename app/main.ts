import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
bootstrap(AppComponent);

//Bootstrapping is platform-specific
//Notice that we import the bootstrap function from @angular/platform-browser-dynamic,
// not @angular/core. Bootstrapping isn't core because there isn't a single way to bootstrap
// the app. True, most applications that run in a browser call the bootstrap function from this
// library. But we can load a component in a differant environment. For example we might want to
//load it on a mobile device with Apache Cordova. These things require a differant kind of
//bootstraping function that we import from a differant library.

//Angular2 best practice is to seperate concerns so even though main ts is tiny and so is app.component.
//We seperate these because they have differant concerns. i.e App bootstrapping is a separate concern from presenting a view.
