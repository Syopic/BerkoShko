cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: 2,
            type: cc.Integer
        },
        score: {
            default: 0,
            type: cc.Integer
        },
        head1: {
            default: null,
            type: cc.Node
        },
        head2: {
            default: null,
            type: cc.Node
        },
        head3: {
            default: null,
            type: cc.Node
        },
        head4: {
            default: null,
            type: cc.Node
        },
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        gameover: {
            default: null,
            type: cc.Node
        },
    },

    // запускається на початку програми
    onLoad: function () {
        this.head1.on('mousedown', function (event) {
            this.dropHead(event.currentTarget);
        }.bind(this));
        this.head2.on('mousedown', function (event) {
            this.dropHead(event.currentTarget);
        }.bind(this));
        this.head3.on('mousedown', function (event) {
            this.dropHead(event.currentTarget);
        }.bind(this));
        this.head4.on('mousedown', function (event) {
            this.dropHead(event.currentTarget);
        }.bind(this));
    },

    // викликається 30 разів в секунду  
    update: function (dt) {
        // беремо випадкове число від 1 до 4
        var i = Math.floor(Math.random() * 4) + 1;
        // викликаємо функцію рухання голови
        this.moveHead(this["head" + i]);
    },

    // функція рухання голови
    moveHead: function (head) {
        // рухаємо по осі абсцис угору на величину speed
        head.y = head.y + this.speed;
    },

    // функція рухання голови
    dropHead: function (head) {
        // рухаємо по осі абсцис угору на величину speed
        head.y = 60;
        this.score ++;
        this.scoreLabel.string = this.score;
    }


});
