// menu.js

// Create a menu object
let menu = {
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
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[`_${courseName}`].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        const randomNumber = Math.floor(Math.random() * dishes.length);
        return dishes[randomNumber];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        return `   Today's menu

Appetizer: ${appetizer.name}
Main: ${main.name}
Dessert: ${dessert.name}
Total price: $${(appetizer.price + main.price + dessert.price).toFixed(2)}.`;
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

const meal = menu.generateRandomMeal();
console.log(meal);
