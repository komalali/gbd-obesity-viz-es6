'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Media = function () {
    function Media(title) {
        _classCallCheck(this, Media);

        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    _createClass(Media, [{
        key: 'getAverageRating',
        value: function getAverageRating() {
            var sum = function sum(a, b) {
                return a + b;
            };
            var ratingsSum = this.ratings.reduce(sum);
            return ratingsSum / this.ratings.length;
        }
    }, {
        key: 'toggleCheckOutStatus',
        value: function toggleCheckOutStatus() {
            this._isCheckedOut = !this._isCheckedOut;
        }
    }, {
        key: 'addRating',
        value: function addRating(rating) {
            this._ratings.push(rating);
        }
    }, {
        key: 'title',
        get: function get() {
            return this._title;
        }
    }, {
        key: 'isCheckedOut',
        get: function get() {
            return this._isCheckedOut;
        }
    }, {
        key: 'ratings',
        get: function get() {
            return this._ratings;
        }
    }]);

    return Media;
}();

var Book = function (_Media) {
    _inherits(Book, _Media);

    function Book(title, author, pages) {
        _classCallCheck(this, Book);

        var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, title));

        _this._author = author;
        _this._pages = pages;
        return _this;
    }

    _createClass(Book, [{
        key: 'author',
        get: function get() {
            return this._author;
        }
    }, {
        key: 'pages',
        get: function get() {
            return this._pages;
        }
    }]);

    return Book;
}(Media);

var Movie = function (_Media2) {
    _inherits(Movie, _Media2);

    function Movie(title, director, runTime) {
        _classCallCheck(this, Movie);

        var _this2 = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, title));

        _this2._director = director;
        _this2._runTime = runTime;
        return _this2;
    }

    _createClass(Movie, [{
        key: 'director',
        get: function get() {
            return this._director;
        }
    }, {
        key: 'runTime',
        get: function get() {
            return this._runTime;
        }
    }]);

    return Movie;
}(Media);

var Cd = function (_Media3) {
    _inherits(Cd, _Media3);

    function Cd(title, artist, songs) {
        _classCallCheck(this, Cd);

        var _this3 = _possibleConstructorReturn(this, (Cd.__proto__ || Object.getPrototypeOf(Cd)).call(this, title));

        _this3._artist = artist;
        _this3._songs = songs;
        return _this3;
    }

    _createClass(Cd, [{
        key: 'artist',
        get: function get() {
            return this._artist;
        }
    }, {
        key: 'songs',
        get: function get() {
            return this._songs;
        }
    }]);

    return Cd;
}(Media);

var historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

var speed = new Movie('Speed', 'Jan de Bant', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
//# sourceMappingURL=media.js.map
//# sourceMappingURL=media.js.map
//# sourceMappingURL=media.js.map