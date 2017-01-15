define(["require", "exports", 'jquery'], function (require, exports, jq) {
    "use strict";
    function getPhotoList() {
        return jq.ajax('/photos.json');
    }
    exports.getPhotoList = getPhotoList;
});
//# sourceMappingURL=photoService.js.map