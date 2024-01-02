import { credential, ServiceAccount, firestore } from "firebase-admin";
import { App, initializeApp, getApps, getApp, deleteApp } from "firebase-admin/app";
import { Firestore } from "firebase-admin/firestore";

import Connector from './connector';

class FirebaseConnector implements Connector {
	private static instance: FirebaseConnector;
	private static firebaseAdmin: App;
	private static db: Firestore | null;

	private constructor() {
	}

	public static getInstance() {
		if (!FirebaseConnector.instance) {
			FirebaseConnector.instance = new FirebaseConnector();
		}

		return FirebaseConnector.instance;
	}

	public async connect(successCallback: () => void, failCallback?: (err: string) => void) {
		try {
			FirebaseConnector.firebaseAdmin = 
				getApps().length === 0 ? 
						initializeApp({
							credential: credential.cert({
								type: `${process.env.FIREBASE_CERT_TYPE}`,
								project_id: `${process.env.FIREBASE_CERT_PROJECT_ID}`,
								private_key_id: `${process.env.FIREBASE_CERT_PRIVATE_KEY_ID}`,
								private_key: process.env.FIREBASE_CERT_PRIVATE_KEY ? JSON.parse(process.env.FIREBASE_CERT_PRIVATE_KEY!) : "",
								client_email: `${process.env.FIREBASE_CERT_CLIENT_EMAIL}`,
								client_id: `${process.env.FIREBASE_CERT_CLIENT_ID}`,
								auth_uri: `${process.env.FIREBASE_CERT_AUTH_URI}`,
								token_uri: `${process.env.FIREBASE_CERT_TOKEN_URI}`,
								auth_provider_x509_cert_url: `${process.env.FIREBASE_CERT_AUTH_PROVIDER_X509_CERT_URL}`,
								client_x509_cert_url: `${process.env.FIREBASE_CERT_CLIENT_X509_CERT_URL}`,
								universe_domain: `${process.env.FIREBASE_CERT_UNIVERSE_DOMAIN}`,
							} as ServiceAccount),
							// databaseURL: `${process.env.FIRESTORE_URL}`
						})
					:
						getApp();

			FirebaseConnector.db = firestore()

			if(FirebaseConnector.db === null)
				throw Error('DB NOT FOUND')

			successCallback()
		}
		catch (err) {
			let errStr = "UNKNOW ERROR";

			if (err instanceof Error)
				errStr = err.message

			if (failCallback)
				failCallback(errStr);
		}
	}

	public async disconnect(successCallback: () => void, failCallback?: (err: string) => void) {
		try {
			deleteApp(FirebaseConnector.firebaseAdmin);
			successCallback()
		}
		catch (err) {
			let errStr = "UNKNOW ERROR";

			if (err instanceof Error)
				errStr = err.message

			if (failCallback)
				failCallback(errStr);
		}
	}
}

export default FirebaseConnector;