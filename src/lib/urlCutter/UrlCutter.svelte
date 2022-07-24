<script>
	import { cuttedURLs } from '$lib/store';
	let url = '';
	let isURLValid = '';

	const validateURLReg = new RegExp(
		'((?:(?:http?|ftp)[s]*://)?[a-z0-9-%/&=?.]+.[a-z]{2,4}/?([^s<>#%",{}\\|\\^[]`]+)?)',
		'gi'
	);

	const handleNewUrlSubmit = () => {
		fetch(`/cut`, {
			method: 'POST',
			body: JSON.stringify({ link: url })
		});
		cuttedURLs.update((prevURLs) => {
			const newURLs = [url, ...prevURLs];
			localStorage.setItem('urls', JSON.stringify(newURLs));
			return newURLs;
		});
	};

	$: {
		if (validateURLReg.test(url) || url.trim().length === 0) {
			isURLValid = true;
		} else {
			isURLValid = false;
		}
	}
</script>

<section class="url-cutter">
	<div class="url-cutter__container">
		<p class="url-cutter__about">
			<span class="url-cutter__highlight">Fast and simple URL shortener.</span> URL Shorter allows to
			reduce long links from YouTube, Twitter, Linked In, Vkontakte and a lot of sites on the Internet,
			just paste the long URL and click the Cut it button. After a few moments, your short link will
			appear at the bottom.
		</p>
		<form class="url-cutter__user-form" on:submit|preventDefault={handleNewUrlSubmit}>
			<input
				data-valid={isURLValid}
				class="url-cutter__inp"
				placeholder="Enter the link here"
				bind:value={url}
			/>
			<button type="submit" class="url-cutter__btn">Cut it</button>
		</form>
	</div>
</section>

<style lang="scss">
	.url-cutter {
		&__container {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			gap: 1.5rem;
			padding: 4rem 2rem;
			max-width: 1280px;
			margin: 0 auto;
		}

		&__about {
			font-size: 1.25rem;
			margin: 0;
			text-align: justify;
			color: rgb(148, 163, 186);
		}

		&__user-form {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			width: 100%;
		}

		&__highlight {
			color: var(--accent-color);
			font-weight: bold;
		}

		&__inp {
			width: 100%;
			padding: 0.5rem;
			border: none;
			border-radius: 0.25rem;
			font-size: 1.15rem;
		}

		&__inp[data-valid='false']:not(focus) {
			outline: 2px solid rgb(255, 0, 0);
			outline-offset: 1px;
		}

		&__btn {
			cursor: pointer;
			min-width: 9rem;
			padding: 0.75rem 1.25rem;
			font-weight: 600;
			color: var(--accent-color);
			background-color: rgb(14, 165, 235);
			border: none;
			transition: transform 0.1s ease-in-out;
			border-radius: 0.25rem;
		}

		&__btn:hover {
			transform: scale(1.05);
		}
	}
</style>
