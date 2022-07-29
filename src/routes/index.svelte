<script>
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import UrlCutter from '$lib/urlCutter/UrlCutter.svelte';
	import CutTable from '$lib/cutTable/cutTable.svelte';
	import { onMount } from 'svelte';
	import { cuttedURLs } from '$lib/store';

	onMount(() => {
		try {
			const userUrls = JSON.parse(localStorage.getItem('urls'));
			if (userUrls && Array.isArray(userUrls)) {
				cuttedURLs.update(() => userUrls);
			} else if (userUrls) {
				throw new Error('Failed to restore urls');
			}
		} catch (err) {
			toast.push(err.message, {
				theme: { '--toastBackground': '#F56565', '--toastBarBackground': '#C53030' }
			});
			localStorage.clear();
		}
	});
</script>

<svelte:head>
	<title>URL Shortener</title>
	<meta
		name="description"
		content="A URL shortener is a tool that creates a short URL that will redirect to the specific website."
	/>
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content=" URL shortener is a tool that creates a short URL" />
	<meta property="og:url" content="https://urlsh.vercel.app/" />
	<meta property="og:site_name" content="URL Shortener" />
	<meta name="google-site-verification" content="0Ih8y0i9XRwFHzI0mOqyl39O9JhIrKXX0SbeqESdgZA" />
</svelte:head>

<UrlCutter />
<CutTable />
<SvelteToast options={{ duration: 2000 }} />
