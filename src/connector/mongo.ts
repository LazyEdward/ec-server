import dotenv from 'dotenv';
import mongoose from "mongoose";
import Connector from "./connector";
dotenv.config();

class MongoConnector implements Connector {
	private static instance: MongoConnector;

	private constructor(){
	}

	public static getInstance() {
		if (!MongoConnector.instance) {
			MongoConnector.instance = new MongoConnector();
		}

		return MongoConnector.instance;
	}

	public async connect(successCallback: () => void, failCallback?: (err: string) => void) {
		try{
			await mongoose.connect(`${process.env.MONGO_CONNECTION_URL}`)
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

export default MongoConnector