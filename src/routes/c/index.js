import { db } from '$lib/database';
import { Timestamp } from 'firebase-admin/firestore';

const saveLinkToDB = async (link) => {
	const result = await db.collection('links').add({
		link: link,
		date: Timestamp.fromDate(new Date()),
		clicks: 0
	});
	return result;
};

const findLinkInDB = async (link) => {
	const linksRef = db.collection('links');
	const existingLinks = await linksRef.where('link', '==', link).limit(1).get();
	if (!existingLinks.empty) {
		return existingLinks.docs[0].id;
	}
	return null;
};

export const POST = async ({ request }) => {
	try {
		const data = await request.json();
		if (data.link && data.link.length > 0) {
			const foundLink = await findLinkInDB(data.link);
			if (foundLink) {
				return { status: 200, body: { id: foundLink } };
			}
			const saveResult = await saveLinkToDB(data.link);
			return { status: 200, body: { id: saveResult.id } };
		} else {
			return { status: 400, body: { info: 'Incorrect body' } };
		}
	} catch (err) {
		return { status: 404, body: { err } };
	}
};
