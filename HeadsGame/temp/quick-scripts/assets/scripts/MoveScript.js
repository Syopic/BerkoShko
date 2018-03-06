(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/MoveScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '87a04zMvL5Fg7W+fv/f5n5H', 'MoveScript', __filename);
// scripts/MoveScript.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        head: {
            default: null,
            type: cc.Node
        },
        speed: {
            default: 2,
            type: cc.Integer
        }
    },

    onLoad: function onLoad() {},

    update: function update(dt) {
        this.node.x = this.node.x + this.speed;
        // this.node.rotation =  this.node.rotation + this.speed;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=MoveScript.js.map
        