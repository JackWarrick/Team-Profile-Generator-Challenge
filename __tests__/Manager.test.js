const Manager = require('../lib/Manager');

test('validate objects', () => {
    // An employee object - its going to have a name, an ID, an email - all should be keys
    const manager = new Manager ('Jack', 27, "email@email.com", 129); // 'Jack', 24, 'testemail@email.com'
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));


    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOffice()).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual("Manager");


})
