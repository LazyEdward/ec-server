import MongoTestConnector from "../../../__helper__/mongoTestConnector"

describe("MongoTestConnector test (Cannot test Mongo directly)", () => {
	it("connect is callable", async() => {
		const successMock = jest.fn()
		const failMock = jest.fn()

		await MongoTestConnector.getInstance().connect(successMock, failMock)
		expect(successMock).toHaveBeenCalled()
	})

	it("disconnect is callable", async() => {
		const successMock = jest.fn()
		const failMock = jest.fn()
		
		await MongoTestConnector.getInstance().disconnect(successMock, failMock)
		expect(successMock).toHaveBeenCalled()
	})
})