// $ is a global variable loaded via script tag (could also be loaded once with AMD)
// declare keyword just lets TypeScript know it is there.
// This is an example of statically importing a library with help of Ambient Declaration ('declare var x')
///<reference path="../../typings/tsd.d.ts"/>
import $ = require('jquery');
export class App {
   start() {
      var html:string = "Hello World!";
      $( "#content" ).html( html );
   }
}
