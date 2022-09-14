const Intern = require('../lib/Intern');

test('validate objects', () => {
    // An employee object - its going to have a name, an ID, an email - all should be keys
    const intern = new Intern ('Jack', 27, "email@email.com", "Minnesota"); // 'Jack', 24, 'testemail@email.com'
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));


    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual("Intern");


})
