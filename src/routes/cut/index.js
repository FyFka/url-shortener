import { db } from '$lib/database';
import { Timestamp } from 'firebase-admin/firestore';

const saveLinkToDB = async (link) => {
	const result = await db.collection('links').add({
		link: link,
		date: Timestamp.fromDate(new Date()),
		clicks: 0
	});
	console.log(result);
	return result;
};

export const POST = async ({ request }) => {
	try {
		const data = await request.json();
		if (data.link) {
			return { status: 200, body: { id: saveLinkToDB(data.link) } };
		} else {
			return { status: 400, body: { info: 'Incorrect body' } };
		}
	} catch (err) {
		return { status: 404, body: { err } };
	}
};
