"use strict";
cc._RF.push(module, '87a04zMvL5Fg7W+fv/f5n5H', 'MoveScript');
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