define(["require", "exports", 'jquery'], function (require, exports, $) {
    var App = (function () {
        function App() {
        }
        App.prototype.start = function () {
            var html = "Hello World!";
            $("#content").html(html);
        };
        return App;
    })();
    exports.App = App;
});
