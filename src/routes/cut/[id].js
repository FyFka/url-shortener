import { db } from '$lib/database';
import { FieldValue } from '@google-cloud/firestore';

export const GET = async ({ params }) => {
	const linksRef = db.collection('links').doc(params.id);
	const doc = await linksRef.get();

	if (doc.exists) {
		linksRef.update({ clicks: FieldValue.increment(1) });
	}

	return {
		status: 302,
		headers: {
			Location: doc.exists ? doc.data().link : '/incorrect-link'
		}
	};
};
