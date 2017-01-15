define(["require", "exports"], function (require, exports) {
    "use strict";
    /// <reference path="../typings/requirejs/require.d.ts" />
    function initialize() {
        requirejs.config({
            paths: {
                jquery: '../../lib/jquery-1.10.2'
            }
        });
    }
    exports.initialize = initialize;
});
//# sourceMappingURL=config.js.map