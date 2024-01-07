import Product from "../../../src/model/product"

describe("Product model test", () => {
	it("Get Product model from json", () => {
		const json = {
			id: "testing",
			img: "https://testing-img.com/test-img",
			titleEn: "Test Title",
		}

		const newProduct = new Product(json);

		expect(newProduct.id).toBe("testing");
		expect(newProduct.titleEn).toBe("Test Title");
		expect(newProduct.titleJa).toBeNull();
		expect(newProduct.descriptionEn).toBeNull();
	})

	it("Create json from Product model", async() => {
		const newProduct = new Product({
			id: "testing",
			img: "https://testing-img.com/test-img",
			titleEn: "Test Title",
			descriptionEn: "This is a Test",
		});

		const json = newProduct.toJson();

		expect(json).not.toHaveProperty('titleJa');
		expect(json).not.toHaveProperty('descriptionZhCHT');
		expect(json).toHaveProperty('id');
		expect(json).toHaveProperty('img');
		expect(json).toHaveProperty('descriptionEn');
	})
})