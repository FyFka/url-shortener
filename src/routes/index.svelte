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
</svelte:head>

<UrlCutter />
<CutTable />
<SvelteToast options={{ duration: 2000 }} />
