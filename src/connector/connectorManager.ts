import FirebaseConnector from "./firebase";
import MongoConnector from "./mongo";

class ConnectorManager {
	private static instance: ConnectorManager;

	private constructor(){
	}

	public static getInstance() {
		if (!ConnectorManager.instance) {
			ConnectorManager.instance = new ConnectorManager();
		}

		return ConnectorManager.instance;
	}

	public getConnector(connectorName: string){
		switch(connectorName){
			case "MONGO":
				return MongoConnector.getInstance()
			case "FIREBASE":
				return FirebaseConnector.getInstance()
			default:
				return null
		}
	}
}

export default ConnectorManager