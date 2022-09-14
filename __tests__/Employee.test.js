//I think we need to first include the index.js file to get the data into the tests
const Employee = require('../lib/Employee');

test('validate objects', () => {
    // An employee object - its going to have a name, an ID, an email - all should be keys
    const employee = new Employee ('Jack', 27, "email@email.com"); // 'Jack', 24, 'testemail@email.com'
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));


    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual("Employee");


})

// import {describe, expect, test} from '@jest/globals';
// import {sum} from './sum';

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

// describe("Employee", () => {
//     it("should ...", () => {
//       const obj = new Arithmetic();

//       expect("number" in obj).toEqual(true);
//     });

//     it("should ...", () => {
//       const num = 108;

//       const obj = new Arithmetic(num);

//       expect(obj.number).toEqual(num);
//     });

//     it("should ...", () => {
//       const obj = new Arithmetic();

//       expect(obj.number).toEqual(0);
//     });
//   });
