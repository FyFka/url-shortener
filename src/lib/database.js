import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
	type: import.meta.env.VITE_FIRE_TYPE,
	project_id: import.meta.env.VITE_FIRE_PROJECT_ID,
	private_key_id: import.meta.env.VITE_FIRE_PRIVATE_KEY_ID,
	private_key: import.meta.env.VITE_FIRE_PRIVATE_KEY,
	client_email: import.meta.env.VITE_FIRE_CLIENT_EMAIL,
	client_id: import.meta.env.VITE_FIRE_CLIENT_ID,
	auth_uri: import.meta.env.VITE_FIRE_AUTH_URI,
	token_uri: import.meta.env.VITE_FIRE_TOKEN_URI,
	auth_provider_x509_cert_url: import.meta.env.VITE_FIRE_AUTH_PROVIDER_X509_CERT_URL,
	client_x509_cert_url: import.meta.env.VITE_FIRE_CLIENT_X509_CERT_URL
};

initializeApp({
	credential: cert(serviceAccount)
});

export const db = getFirestore();
