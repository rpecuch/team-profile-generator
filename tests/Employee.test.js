const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', and 'email' properties with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        })

        it("should set 'name', 'id', and 'email' when created", () => {
            const name = "Rita";
            const id = 23;
            const email = "rpecuch@test.com";
            const obj = new Employee("Rita", 23, "rpecuch@test.com");

            expect(obj.name).toEqual("Rita");
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual("rpecuch@test.com");
        })
    })
    describe("getName", () => {
        it("should return the 'name' value", () => {
            const obj = new Employee("Rita", 23, "rpecuch@test.com");
            expect(obj.getName()).toEqual("Rita");
        })
    })
    describe("getId", () => {
        it("should return the 'id' value", () => {
            const obj = new Employee("Rita", 23, "rpecuch@test.com");
            expect(obj.getId()).toEqual(23);
        })
    })
    describe("getEmail", () => {
        it("should return the 'email' value", () => {
            const obj = new Employee("Rita", 23, "rpecuch@test.com");
            expect(obj.getEmail()).toEqual("rpecuch@test.com");
        })
    })
    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const obj = new Employee();
            expect(obj.getRole()).toEqual("Employee");
        })
    })
})