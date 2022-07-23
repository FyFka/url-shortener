export const GET = async ({ params }) => {
	return {
		status: 200,
		body: {
			test: 'param'
		}
		// headers: {
		// 	Location: params.id
		// }
	};
};
