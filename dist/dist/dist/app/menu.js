'use strict';

// menu.js

// Create a menu object

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
    },
    getRandomDishFromCourse: function getRandomDishFromCourse(courseName) {
        var dishes = this.courses[courseName];
        var randomNumber = Math.floor(Math.random() * dishes.length);
        return dishes[randomNumber];
    },
    generateRandomMeal: function generateRandomMeal() {
        var appetizer = this.getRandomDishFromCourse('appetizers');
        var main = this.getRandomDishFromCourse('mains');
        var dessert = this.getRandomDishFromCourse('desserts');
        return '   Today\'s menu\n\nAppetizer: ' + appetizer.name + '\nMain: ' + main.name + '\nDessert: ' + dessert.name + '\nTotal price: $' + (appetizer.price + main.price + dessert.price).toFixed(2) + '.';
    }
};

menu.addDishToCourse('appetizers', 'Poppers', 7.50);
menu.addDishToCourse('appetizers', 'Calamari', 6.50);
menu.addDishToCourse('appetizers', 'Chicken Wings', 7.50);
menu.addDishToCourse('mains', 'Burger', 12.00);
menu.addDishToCourse('mains', 'Banana', 1.00);
menu.addDishToCourse('mains', 'Steak', 14.00);
menu.addDishToCourse('desserts', 'Chocolate Ice-cream', 4.00);
menu.addDishToCourse('desserts', 'S\'mores', 6.00);
menu.addDishToCourse('desserts', 'Bunt Cake', 5.00);

var meal = menu.generateRandomMeal();
console.log(meal);
//# sourceMappingURL=menu.js.map
//# sourceMappingURL=menu.js.map
//# sourceMappingURL=menu.js.map