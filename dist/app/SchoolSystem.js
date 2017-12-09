'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// SchoolSystem.js

var School = function () {
    function School(name, level, numberOfStudents) {
        _classCallCheck(this, School);

        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    _createClass(School, [{
        key: 'quickFacts',
        value: function quickFacts() {
            console.log(this.name + ' is a ' + this.level + ' school that educates ' + this.numberOfStudents + ' students.');
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }, {
        key: 'level',
        get: function get() {
            return this._level;
        }
    }, {
        key: 'numberOfStudents',
        get: function get() {
            return this._numberOfStudents;
        },
        set: function set(newNumberOfStudents) {
            if (typeof newNumberOfStudents.typeof === 'number') {
                this._numberOfStudents = newNumberOfStudents;
            } else {
                console.log('Invalid input: numberOfStudents must be set to a Number.');
            }
        }
    }], [{
        key: 'pickSubstituteTeacher',
        value: function pickSubstituteTeacher(substituteTeachers) {
            var randomNumber = Math.floor(Math.random() * substituteTeachers.length);
            return substituteTeachers[randomNumber];
        }
    }]);

    return School;
}();

var PrimarySchool = function (_School) {
    _inherits(PrimarySchool, _School);

    function PrimarySchool(name, numberOfStudents, pickupPolicy) {
        _classCallCheck(this, PrimarySchool);

        var _this = _possibleConstructorReturn(this, (PrimarySchool.__proto__ || Object.getPrototypeOf(PrimarySchool)).call(this, name, 'primary', numberOfStudents));

        _this._pickupPolicy = pickupPolicy;
        return _this;
    }

    _createClass(PrimarySchool, [{
        key: 'pickupPolicy',
        get: function get() {
            return this._pickupPolicy;
        }
    }]);

    return PrimarySchool;
}(School);

var MiddleSchool = function (_School2) {
    _inherits(MiddleSchool, _School2);

    function MiddleSchool(name, numberOfStudents) {
        _classCallCheck(this, MiddleSchool);

        return _possibleConstructorReturn(this, (MiddleSchool.__proto__ || Object.getPrototypeOf(MiddleSchool)).call(this, name, 'middle', numberOfStudents));
    }

    return MiddleSchool;
}(School);

var HighSchool = function (_School3) {
    _inherits(HighSchool, _School3);

    function HighSchool(name, numberOfStudents, sportsTeams) {
        _classCallCheck(this, HighSchool);

        var _this3 = _possibleConstructorReturn(this, (HighSchool.__proto__ || Object.getPrototypeOf(HighSchool)).call(this, name, 'high', numberOfStudents));

        _this3._sportsTeams = sportsTeams;
        return _this3;
    }

    _createClass(HighSchool, [{
        key: 'sportsTeams',
        get: function get() {
            return this._sportsTeams;
        }
    }]);

    return HighSchool;
}(School);

var lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

var alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
//# sourceMappingURL=SchoolSystem.js.map