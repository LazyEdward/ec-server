type Connector = {
	connect(successCallback: () => void, failCallback?: (err: string) => void): void;
	disconnect(successCallback: () => void, failCallback?: (err: string) => void): void;
}

export default Connector;