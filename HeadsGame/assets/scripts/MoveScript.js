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
        },
    },

    onLoad: function () {

    },

    update: function (dt) {
        this.node.x = this.node.x + this.speed;
       // this.node.rotation =  this.node.rotation + this.speed;
    },
});
