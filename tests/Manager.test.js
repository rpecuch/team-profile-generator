const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', and 'officeNumber' properties with the 'new' keyword", () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        })

        it("should set 'name', 'id', 'email', and 'officeNumber' when created", () => {
            const name = "Rita";
            const id = 23;
            const email = "rpecuch@test.com";
            const obj = new Manager("Rita", 23, "rpecuch@test.com", "248");

            expect(obj.name).toEqual("Rita");
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual("rpecuch@test.com");
            expect(obj.officeNumber).toEqual("248");
        })
    })
    describe("getName", () => {
        it("should return the 'name' value", () => {
            const obj = new Manager("Rita", 23, "rpecuch@test.com");
            expect(obj.getName()).toEqual("Rita");
        })
    })
    describe("getId", () => {
        it("should return the 'id' value", () => {
            const obj = new Manager("Rita", 23, "rpecuch@test.com");
            expect(obj.getId()).toEqual(23);
        })
    })
    describe("getEmail", () => {
        it("should return the 'email' value", () => {
            const obj = new Manager("Rita", 23, "rpecuch@test.com");
            expect(obj.getEmail()).toEqual("rpecuch@test.com");
        })
    })
    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const obj = new Manager();
            expect(obj.getRole()).toEqual("Manager");
        })
    })
})