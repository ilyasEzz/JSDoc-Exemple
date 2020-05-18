const { add, subtract, divide, multiply } = require('./calculator');

/**
 * Student Name
 * @type {string}
 */
const studentName = 'Ezzahid Ilyas';

/**
 * Array of grades
 * @type {Array<number|string>}
 */
const grades = [1, 2, 3, 4, '5'];

/**
 * Cours object
 * @type {{id: number|string, courseName: string, teacherName: string}}
 */

const cours = {
  id: 1,
  courseName: 'МДК 03.01 Моделирование и анализ программного обеспечения',
  teacherName: 'Жабин Дмитрий Иванович',
};

/**
 * a function that calculate taxes
 * @param {number} amount - Total amount
 * @param {number} tax  - Tax percentage
 * @return {string} - Total with dollar sign
 */
function calculateTax(amount, tax) {
  const result = amount + tax * amount;
  return `$${result}`;
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {number|string} group - Student group
 * @property {number|string} [age] - Student age (optional)
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'Ezzahid Ilyas',
  group: 481,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   * @param {Object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Person name
     */
    this.name = personInfo.name;
    /**
     * @property {string} age Person age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with the name and the age
   */
  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * Person one
 * @type {Person}
 * See {@link Person}
 */
const person1 = new Person({
  age: 30,
  name: 'Jonh Doe',
});

console.log(add(20, 30));
