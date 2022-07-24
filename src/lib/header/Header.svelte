<header class="header">
	<a href="/" class="header__container">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 50" width="45" height="40">
			<path fill="#4e85c5" d="M28.078.938 56.125 49.5H.031z" />
			<path
				fill="#fff"
				d="M27 19c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zM40.421 38.842a3.579 3.579 0 1 1 0 7.158 3.579 3.579 0 0 1 0-7.158z"
			/>
		</svg>

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
		background-color: rgb(15 23 42/0.75);
		border-bottom: 1px solid rgba(248, 250, 252, 0.06);
		backdrop-filter: blur(10px);

		&__container {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.75rem;
		}

		&__app-name {
			font-size: 1.5rem;
			margin: 0;
		}
	}
</style>
