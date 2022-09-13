const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', and 'school' properties with the 'new' keyword", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        })

        it("should set 'name', 'id', 'email', and 'school' when created", () => {
            const name = "Rita";
            const id = 23;
            const email = "rpecuch@test.com";
            const obj = new Intern("Rita", 23, "rpecuch@test.com", "oakland");

            expect(obj.name).toEqual("Rita");
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual("rpecuch@test.com");
            expect(obj.school).toEqual("oakland");
        })
    })
    describe("getName", () => {
        it("should return the 'name' value", () => {
            const obj = new Intern("Rita", 23, "rpecuch@test.com");
            expect(obj.getName()).toEqual("Rita");
        })
    })
    describe("getId", () => {
        it("should return the 'id' value", () => {
            const obj = new Intern("Rita", 23, "rpecuch@test.com");
            expect(obj.getId()).toEqual(23);
        })
    })
    describe("getEmail", () => {
        it("should return the 'email' value", () => {
            const obj = new Intern("Rita", 23, "rpecuch@test.com");
            expect(obj.getEmail()).toEqual("rpecuch@test.com");
        })
    })
    describe("getSchool", () => {
        it("should return the 'school' value", () => {
            const obj = new Intern("Rita", 23, "rpecuch@test.com", "oakland");
            expect(obj.getSchool()).toEqual("oakland");
        })
    })
    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const obj = new Intern();
            expect(obj.getRole()).toEqual("Intern");
        })
    })
})