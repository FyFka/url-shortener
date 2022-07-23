<script>
	import Header from '../lib/header/Header.svelte';
	import UrlCutter from '../lib/urlCutter/UrlCutter.svelte';
	import CutTable from '../lib/cutTable/cutTable.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	let userCuttedURLs = [];

	onMount(() => {
		try {
			const userUrls = JSON.parse(localStorage.getItem('urls'));
			if (userUrls) {
				userCuttedURLs = userUrls;
			}
		} catch (err) {
			console.log(err);
		}
	});

	const handleCuttedURL = (evt) => {
		userCuttedURLs = [evt.detail.url, ...userCuttedURLs];
		localStorage.setItem('urls', JSON.stringify(userCuttedURLs));
	};
</script>

<svelte:head>
	<title>URL Shortener</title>
	<meta
		name="description"
		content="A URL shortener is a tool that creates a short URL that will redirect to the specific website."
	/>
</svelte:head>

<Header />
<UrlCutter on:newCuttedURL={handleCuttedURL} />
<CutTable {userCuttedURLs} />
