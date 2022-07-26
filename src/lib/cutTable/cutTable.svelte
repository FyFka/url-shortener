<script>
	import { cuttedURLs } from '$lib/store';
	import { toast } from '@zerodevx/svelte-toast';

	const handleSelectCuttedURL = (e) => {
		const target = e.target;
		target.select();
		target.setSelectionRange(0, 99999);

		try {
			navigator.clipboard.writeText(target.value);
			toast.push('Link successfully copied!', {
				theme: { '--toastBackground': '#48BB78', '--toastBarBackground': '#2F855A' }
			});
		} catch (err) {
			toast.push('Failed to copy link!', {
				theme: { '--toastBackground': '#F56565', '--toastBarBackground': '#C53030' }
			});
		}
	};
</script>

<section class="cut-container">
	{#each $cuttedURLs as cuttedURL}
		<div class="cut">
			<h4 class="cut__raw-url">{cuttedURL}</h4>
			<input
				class="cut__cut-url"
				on:mousedown|preventDefault
				on:keydown|preventDefault
				on:click={handleSelectCuttedURL}
				on:input|preventDefault={(e) => {
					e.target.value = cuttedURL;
				}}
				value={cuttedURL}
				readonly
			/>
		</div>
	{/each}
</section>

<style lang="scss">
	.cut-container {
		display: flex;
		flex-direction: column;
		padding: 0 2rem 4rem 2rem;
		max-width: 1280px;
		margin: 0 auto;
		gap: 1rem;
	}
	.cut {
		background-color: var(--secondary-color);
		border: 1px solid rgba(32, 32, 32, 0.45);
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 10%);

		&__raw-url {
			font-size: 0.75rem;
			margin: 0 0 0.5rem 0;
			color: rgb(148, 163, 186);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		&__cut-url {
			color: var(--accent-color);
			font-size: 1.25rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 100%;
			background-color: transparent;
			border: none;
			outline: none;
			padding: 0.5rem 0;
			margin: 0;
			user-select: none;
			cursor: pointer;
		}
	}
</style>
