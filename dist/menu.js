'use strict';

// menu

var menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        get desserts() {
            return this._desserts;
        },

        set appetizers(appetizers) {
            this._appetizers = appetizers;
        },
        set mains(mains) {
            this._mains = mains;
        },
        set desserts(desserts) {
            this._desserts = desserts;
        }
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        };
    },
    addDishToCourse: function addDishToCourse(courseName, dishName, dishPrice) {
        var dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses['_' + courseName].push(dish);
    }
};

menu.addDishToCourse('appetizers', 'Poppers', '7.50');
menu.addDishToCourse('appetizers', 'Calamari', '6.50');
menu.addDishToCourse('mains', 'Burger', '12.00');
console.log(menu.courses);
//# sourceMappingURL=menu.js.map