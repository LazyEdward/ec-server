import { MongoMemoryServer } from "mongodb-memory-server";
import Connector from "../src/connector/connector";
import mongoose from "mongoose";

class MongoTestConnector implements Connector {
	private static instance: MongoTestConnector;
	private static mongod: MongoMemoryServer;

	private constructor(){
	}

	public static getInstance() {
		if (!MongoTestConnector.instance) {
			MongoTestConnector.instance = new MongoTestConnector();
		}

		return MongoTestConnector.instance;
	}

	public async connect(successCallback: () => void, failCallback?: (err: string) => void) {
		try{
			MongoTestConnector.mongod = await MongoMemoryServer.create();
			const uri = MongoTestConnector.mongod.getUri();

			await mongoose.connect(uri)
			successCallback()
		}
		catch(err){
			let errStr = "UNKNOW ERROR";

			if (err instanceof Error)
				errStr = err.message
			
			if(failCallback)
				failCallback(errStr);
		}
	}

	public async disconnect(successCallback: () => void, failCallback?: (err: string) => void) {
		try{
			await mongoose.disconnect();
			await MongoTestConnector.mongod.stop();
			successCallback()
		}
		catch(err){
			let errStr = "UNKNOW ERROR";

			if (err instanceof Error) 
				errStr = err.message
			
			if(failCallback)
				failCallback(errStr);
		}
	}
}

export default MongoTestConnector