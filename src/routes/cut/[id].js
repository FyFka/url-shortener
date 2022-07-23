import { db } from '$lib/database';

export const GET = async ({ params }) => {
	console.log(params.id);
	const linksRef = await db.collection('links').doc(params.id);
	const doc = await linksRef.get();

	return {
		status: 302,
		headers: {
			Location: doc.exists ? doc.data().link : '/incorrect-link'
		}
	};
};
