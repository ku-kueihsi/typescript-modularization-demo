require.config({
    // baseUrl: "./script",
    paths: {
        'jquery' : './libs/jquery-2.1.4.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    }
});

//jQuery is loaded via a script tag, but it could also be loaded just once via AMD, like so:
//require( ['jquery'], function(){});
require( ['app'], function(AppModule) {
    var App = AppModule.App;
    var app = new App();
    app.start();
});
