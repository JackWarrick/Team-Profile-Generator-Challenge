const Engineer = require('../lib/Engineer');

test('validate objects', () => {
    // An employee object - its going to have a name, an ID, an email - all should be keys
    const engineer = new Engineer ('Jack', 27, "email@email.com", "github.com"); // 'Jack', 24, 'testemail@email.com'
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));


    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGitHub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual("Engineer");


})
