<script>
	import { cuttedURLs } from '$lib/store';
	import { toast } from '@zerodevx/svelte-toast';
	import { page } from '$app/stores';

	let url = '';
	let isURLValid = '';
	let isFetching = false;

	const validateURLReg = new RegExp(
		/((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/,
		'gi'
	);

	const handleNewUrlSubmit = async () => {
		if (url.length === 0 || !isURLValid) {
			toast.push("Invalid link or we don't currently support this URL", {
				theme: { '--toastBackground': '#F56565', '--toastBarBackground': '#C53030' }
			});
			return;
		}
		isFetching = true;
		try {
			const cutUrlRequest = await fetch(`/cut`, {
				method: 'POST',
				body: JSON.stringify({ link: url })
			});
			const cuttedUrl = await cutUrlRequest.json();
			if (cuttedUrl && cuttedUrl.id) {
				cuttedURLs.update((prevURLs) => {
					const newURL = {
						id: cuttedUrl.id,
						url: url,
						shortUrl: `${$page.url.origin}/cut/${cuttedUrl.id}`
					};
					const newURLs = [newURL, ...prevURLs];
					localStorage.setItem('urls', JSON.stringify(newURLs));
					return newURLs;
				});
				url = '';
				toast.push('Your link has been successfully shortened!!', {
					theme: { '--toastBackground': '#48BB78', '--toastBarBackground': '#2F855A' }
				});
			} else {
				toast.push('An error occurred while shortening your link!', {
					theme: { '--toastBackground': '#F56565', '--toastBarBackground': '#C53030' }
				});
			}
			isFetching = false;
		} catch (err) {
			isFetching = false;
		}
	};

	$: {
		if (validateURLReg.test(url) || url.length === 0) {
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
			<label class="url-cutter__label">
				<input
					data-valid={isURLValid}
					class="url-cutter__inp"
					placeholder="Enter the link here"
					name="cutter-url"
					type="text"
					title={isURLValid ? undefined : 'Invalid URL'}
					bind:value={url}
				/>
			</label>
			<button type="submit" class="url-cutter__btn" disabled={isFetching}
				>{isFetching ? 'Cutting...' : 'Cut it!'}</button
			>
		</form>
		<h5 class="url-cutter__info">Use it, its FREE FOREVER... Fast - Secure - Long Term Link</h5>
	</div>
</section>

<style lang="scss">
	.url-cutter {
		&__label {
			width: 100%;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				left: 1rem;
				top: 50%;
				transform: translate(0, -50%);
				height: 1.25rem;
				width: 1.25rem;
				background: url('/assets/link.svg') no-repeat center center;
				background-size: contain;
				z-index: 299;
				user-select: none;
			}
		}
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
			color: var(--secondary-accent-color);
			font-weight: 500;
			line-height: 1.5;
		}

		&__user-form {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			width: 100%;
			padding: 3.5rem;
			box-shadow: 0 2.875rem 3.125rem 0.15rem rgb(59 52 154 / 15%);
			border-radius: 0.5rem;
		}

		&__highlight {
			color: var(--accent-color);
			font-weight: 700;
		}

		&__inp {
			width: 100%;
			padding: 1rem 10rem 1rem 3rem;
			border: none;
			border-radius: 0.25rem;
			font-size: 1.25rem;
			background-color: rgb(240, 238, 249);
			color: rgb(9, 8, 52);

			&::placeholder {
				color: rgb(208, 204, 229);
			}
		}

		&__inp[data-valid='false']:not(focus) {
			outline: 2px solid rgb(255, 0, 0);
			outline-offset: 1px;
		}

		&__btn {
			position: absolute;
			cursor: pointer;
			width: 9rem;
			padding: 0.75rem 1.25rem;
			font-weight: 600;
			color: var(--neutral-color);
			background: linear-gradient(to right, rgb(147, 141, 236), rgb(113, 106, 221));
			border: none;
			transition: all 0.1s ease-in-out;
			border-radius: 0.25rem;
			right: 4rem;

			&:disabled {
				opacity: 0.5;
			}
		}

		&__info {
			margin: 0;
			color: rgb(155, 155, 155);
			text-align: center;
		}
	}

	@media (max-width: 578px) {
		.url-cutter {
			&__user-form {
				flex-direction: column;
			}

			&__inp {
				padding: 1rem 1rem 1rem 3rem;
			}

			&__btn {
				position: initial;
				width: 100%;
			}
		}
	}
</style>
