import User from "../../../src/model/user"

describe("User model test", () => {
	it("Get user model from json", () => {
		const json = {
			id: "testing",
			firstName: "Jon",
			lastName: "Lowe",
			loginName: "jolo@gmail.com",
			password: "<ENCRYPTED_PASSWORD>",
			email: "jolo@gmail.com",
		}

		const newUser = new User(json);

		expect(newUser.id).toBe("testing");
		expect(newUser.phone).toBeNull();
	})

	it("Create json from user model", async() => {
		const newUser = new User({
			id: "testing",
			firstName: "Jon",
			lastName: "Lowe",
			loginName: "jolo@gmail.com",
			password: "<ENCRYPTED_PASSWORD>",
			phone: "080-1234-5678",
		});

		const json = newUser.toJson();

		expect(json).not.toHaveProperty('email');
		expect(json).not.toHaveProperty('password');
		expect(json).toHaveProperty('id');
	})
})