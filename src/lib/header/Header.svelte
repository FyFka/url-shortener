<header class="header">
	<a href="/" class="header__container">
		<svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 484 448"
			><g opacity=".8"
				><g opacity=".8"
					><path fill="#6366f1" d="M175.778 10.028 473.58 89.821 255.57 307.83z" /><path
						fill="none"
						stroke="#000"
						stroke-miterlimit="20"
						d="M175.778 10.028 473.58 89.821 255.57 307.83z"
					/></g
				><g opacity=".8"
					><path fill="#6366f1" d="M375.222 55.028 295.429 352.83 77.42 134.82z" /><path
						fill="none"
						stroke="#000"
						stroke-miterlimit="20"
						d="M375.222 55.028 295.429 352.83 77.42 134.82z"
					/></g
				><g opacity=".8"
					><path fill="#6366f1" d="m292.575 89.537.004 308.307L25.572 243.687z" /><path
						fill="none"
						stroke="#000"
						stroke-miterlimit="20"
						d="m292.575 89.537.004 308.307L25.572 243.687z"
					/></g
				><g opacity=".8"
					><path fill="#6366f1" d="m228.12 140.173 79.8 297.8-297.807-79.796z" /><path
						fill="none"
						stroke="#000"
						stroke-miterlimit="20"
						d="m228.12 140.173 79.8 297.8-297.807-79.796z"
					/></g
				></g
			><path fill="#6366f1" d="M308.222 10.028 228.429 307.83 10.42 89.82z" /><path
				fill="none"
				stroke="#000"
				stroke-miterlimit="20"
				d="M308.222 10.028 228.429 307.83 10.42 89.82z"
			/><path fill="#6366f1" d="m108.778 55.028 297.802 79.793-218.01 218.01z" /><path
				fill="none"
				stroke="#000"
				stroke-miterlimit="20"
				d="m108.778 55.028 297.802 79.793L188.57 352.83z"
			/><g
				><path fill="#6366f1" d="m191.425 89.537 267.003 154.15L191.42 397.844z" /><path
					fill="none"
					stroke="#000"
					stroke-miterlimit="20"
					d="m191.425 89.537 267.003 154.15L191.42 397.844z"
				/></g
			><g
				><path fill="#6366f1" d="m255.88 140.173 218.007 218.004-297.807 79.797z" /><path
					fill="none"
					stroke="#000"
					stroke-miterlimit="20"
					d="m255.88 140.173 218.007 218.004-297.807 79.797z"
				/></g
			></svg
		>
		<h1 class="header__app-name">URL Shortener</h1>
	</a>
</header>

<style lang="scss">
	.header {
		position: sticky;
		top: 0;
		left: 0;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 0.5rem;
		background-color: rgba(248, 248, 248, 0.55);
		border-bottom: 1px solid rgba(32, 32, 32, 0.45);
		backdrop-filter: blur(10px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 5%);

		&__container {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.75rem;
			border-radius: 0.25rem;
		}

		&__app-name {
			font-size: 1.5rem;
			margin: 0;
			color: rgb(9, 8, 52);
		}
	}
</style>
