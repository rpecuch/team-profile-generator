const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', and 'github' properties with the 'new' keyword", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        })

        it("should set 'name', 'id', 'email', and 'github' when created", () => {
            const name = "Rita";
            const id = 23;
            const email = "rpecuch@test.com";
            const obj = new Engineer("Rita", 23, "rpecuch@test.com", "rpecuch");

            expect(obj.name).toEqual("Rita");
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual("rpecuch@test.com");
            expect(obj.github).toEqual("rpecuch");
        })
    })
    describe("getName", () => {
        it("should return the 'name' value", () => {
            const obj = new Engineer("Rita", 23, "rpecuch@test.com");
            expect(obj.getName()).toEqual("Rita");
        })
    })
    describe("getId", () => {
        it("should return the 'id' value", () => {
            const obj = new Engineer("Rita", 23, "rpecuch@test.com");
            expect(obj.getId()).toEqual(23);
        })
    })
    describe("getEmail", () => {
        it("should return the 'email' value", () => {
            const obj = new Engineer("Rita", 23, "rpecuch@test.com");
            expect(obj.getEmail()).toEqual("rpecuch@test.com");
        })
    })
    describe("getGithub", () => {
        it("should return the 'github' value", () => {
            const obj = new Engineer("Rita", 23, "rpecuch@test.com", "rpecuch");
            expect(obj.getGithub()).toEqual("rpecuch");
        })
    })
    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const obj = new Engineer();
            expect(obj.getRole()).toEqual("Engineer");
        })
    })
})