<script>
	import Header from '$lib/header/Header.svelte';
	import UrlCutter from '$lib/urlCutter/UrlCutter.svelte';
	import CutTable from '$lib/cutTable/cutTable.svelte';
	import { onMount } from 'svelte';
	import { cuttedURLs } from '$lib/store';
	import '../app.css';

	onMount(() => {
		try {
			const userUrls = JSON.parse(localStorage.getItem('urls'));
			if (userUrls && Array.isArray(userUrls)) {
				cuttedURLs.update(() => userUrls);
			}
		} catch (err) {
			console.log(err);
		}
	});
</script>

<svelte:head>
	<title>URL Shortener</title>
	<meta
		name="description"
		content="A URL shortener is a tool that creates a short URL that will redirect to the specific website."
	/>
</svelte:head>

<Header />
<UrlCutter />
<CutTable />
