import app from "./app";
import dotenv from 'dotenv';
import ConnectorManager from "./connector/connectorManager";

dotenv.config();

const port: number = parseInt(`${process.env.PORT}`) || 5555;

const connectorManager = ConnectorManager.getInstance();
const connector = connectorManager.getConnector(`${process.env.DB}`);

if(connector !== null){
	connector.connect(() => {
		console.log('Connection success...')
		app.listen(port, () => console.log(`server start on port ${port}...`))
	}, (err) => {
		console.log(err)
	})
}
