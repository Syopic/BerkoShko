"use strict";
cc._RF.push(module, 'abe648JMjhHYZ7D0x2YQTK+', 'RoadGame');
// scripts/RoadGame.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // прапорець - якщо true - граємл - інакше - пауза
        isPlay: {
            default: false
        },

        // швидкість ругу голів
        speed: {
            default: 2,
            type: cc.Integer
        },
        // рахунок
        score: {
            default: 0,
            type: cc.Integer
        },
        // голови
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
        // тектова мітка ждя рахунку
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        // логотип
        logo: {
            default: null,
            type: cc.Node
        },
        // заставка кінця гри 
        gameover: {
            default: null,
            type: cc.Node
        },
        // кнопка странту
        startButton: {
            default: null,
            type: cc.Node
        },
        // музика в меню
        menuMusic: {
            default: null,
            type: cc.AudioSource
        },
        // музика у грі
        gameMusic: {
            default: null,
            type: cc.AudioSource
        },
        // музика програшу
        gameOverSound: {
            default: null,
            type: cc.AudioSource
        },
        // звук удару
        kickSound: {
            default: null,
            type: cc.AudioSource
        },
        // крик чоловічий
        maleOhSound: {
            default: null,
            type: cc.AudioSource
        },
        // зойк жіночий
        femaleOhSound: {
            default: null,
            type: cc.AudioSource
        }
    },

    // запускається на початку програми
    onLoad: function onLoad() {
        // додаємо рекцію всіх голів га клік мишки
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

        // починаємо грати фонову музику в меню
        this.menuMusic.play();
    },

    // функція повертає все на початок
    startGame: function startGame() {
        // голови вниз
        this.head1.y = 60;
        this.head2.y = 60;
        this.head3.y = 60;
        this.head4.y = 60;

        // рахунок в 0
        this.score = 0;
        this.scoreLabel.string = 0;
        // швидкість - початкова
        this.speed = 2;

        // ховаємо всі заставки і кнопку
        this.logo.active = false;
        this.gameover.active = false;
        this.startButton.active = false;
        this.isPlay = true;

        // зупиняємо музику в меню
        this.menuMusic.stop();
        // запускаємо музику у грі
        this.gameMusic.play();
        // і почалося!
    },

    // викликається 30 разів в секунду  
    update: function update(dt) {
        // якщо гра йде
        if (this.isPlay == true) {
            // беремо випадкове число від 1 до 4
            var i = Math.floor(Math.random() * 4) + 1;
            // викликаємо функцію рухання голови
            this.moveHead(this["head" + i]);
            // збільшуємо швидкість
            this.speed += 0.01;
        }
    },

    // функція рухання голови
    moveHead: function moveHead(head) {
        // рухаємо по осі абсцис угору на величину speed
        head.y = head.y + this.speed;
        // якщо ми досягли краю
        if (head.y > 700) {
            // викликаємо функцію кінця гри
            this.gameEnd();
        }
    },

    // функція рухання голови
    dropHead: function dropHead(head) {
        // якщо гра йде
        if (this.isPlay == true) {
            // рухаємо по осі абсцис угору на величину speed
            head.y = 60;
            // збільшуємо рахунок на 1
            this.score++;
            // і показуємо у тестовій мітці
            this.scoreLabel.string = this.score;
            // звук удару
            this.kickSound.play();
            // зойк
            this.maleOhSound.play();
        }
    },

    // функція програшу
    gameEnd: function gameEnd(head) {
        // опускаємо прапорець ходу гри
        this.isPlay = false;
        // показуємо кнопку і заставку Game Over
        this.startButton.active = true;
        this.gameover.active = true;

        // звук програшу    
        this.gameOverSound.play();
        // зупиняємо музику у грі
        this.gameMusic.stop();
        // запускаємо музику в меню
        this.menuMusic.play();
    }
});

cc._RF.pop();