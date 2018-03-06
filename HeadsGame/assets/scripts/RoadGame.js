cc.Class({
    extends: cc.Component,

    properties: {
<<<<<<< HEAD
        // прапорець - якщо true - граємл - інакше - пауза
        isPlay: {
            type: cc.Boolean
        },
        // швидкість ругу голів
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
        speed: {
            default: 2,
            type: cc.Integer
        },
<<<<<<< HEAD
        // рахунок
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
        score: {
            default: 0,
            type: cc.Integer
        },
<<<<<<< HEAD
        // голови
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
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
<<<<<<< HEAD
        // тектова мітка ждя рахунку
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
        scoreLabel: {
            default: null,
            type: cc.Label
        },
<<<<<<< HEAD
        // логотип
        logo: {
            default: null,
            type: cc.Node
        },
        // заставка кінця гри 
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
        gameover: {
            default: null,
            type: cc.Node
        },
<<<<<<< HEAD
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
        },
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
    },

    // запускається на початку програми
    onLoad: function () {
<<<<<<< HEAD
        // додаємо рекцію всіх голів га клік мишки
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
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
<<<<<<< HEAD

        // починаємо грати фонову музику в меню
        this.menuMusic.play();
    },

    // функція повертає все на початок
    startGame: function() {
        // голови вниз
        this.head1.y = 60;
        this.head2.y = 60;
        this.head3.y = 60;
        this.head4.y = 60;

        // рахунок в 0
        this.score  = 0;
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
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
    },

    // викликається 30 разів в секунду  
    update: function (dt) {
<<<<<<< HEAD
        // якщо гра йде
        if (this.isPlay == true) {
            // беремо випадкове число від 1 до 4
            var i = Math.floor(Math.random() * 4) + 1;
            // викликаємо функцію рухання голови
            this.moveHead(this["head" + i]);
            // збільшуємо швидкість
            this.speed += 0.01;
        }
=======
        // беремо випадкове число від 1 до 4
        var i = Math.floor(Math.random() * 4) + 1;
        // викликаємо функцію рухання голови
        this.moveHead(this["head" + i]);
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
    },

    // функція рухання голови
    moveHead: function (head) {
        // рухаємо по осі абсцис угору на величину speed
        head.y = head.y + this.speed;
<<<<<<< HEAD
        // якщо ми досягли краю
        if (head.y > 700) {
            // викликаємо функцію кінця гри
            this.gameEnd();
        }
=======
>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
    },

    // функція рухання голови
    dropHead: function (head) {
<<<<<<< HEAD
        // якщо гра йде
        if (this.isPlay == true) {
            // рухаємо по осі абсцис угору на величину speed
            head.y = 60;
            // збільшуємо рахунок на 1
            this.score ++;
            // і показуємо у тестовій мітці
            this.scoreLabel.string = this.score;
            // звук удару
            this.kickSound.play();
            // зойк
            this.maleOhSound.play();
        }
    },

    // функція програшу
    gameEnd: function (head) {
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
=======
        // рухаємо по осі абсцис угору на величину speed
        head.y = 60;
        this.score ++;
        this.scoreLabel.string = this.score;
    }


>>>>>>> 47171381e6967028b882b81b747f8c7b050be532
});
