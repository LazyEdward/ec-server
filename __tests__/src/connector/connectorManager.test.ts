import ConnectorManager from "../../../src/connector/connectorManager"
import FirebaseConnector from "../../../src/connector/firebase"
import MongoConnector from "../../../src/connector/mongo"

describe("ConnectorManager test", () => {
	it("Get Nonexist connector", () => {
		const connector = ConnectorManager.getInstance().getConnector("NON_VALID_NAME")
		expect(connector).toBeNull()
	})

	it("Get MongoDB connector", () => {
		const connector = ConnectorManager.getInstance().getConnector("MONGO")
		expect(connector).toBeInstanceOf(MongoConnector)
	})

	it("Get Firebase connector", () => {
		const connector = ConnectorManager.getInstance().getConnector("FIREBASE")
		expect(connector).toBeInstanceOf(FirebaseConnector)
	})
})