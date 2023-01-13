<script>
import Spacer from './components/Spacer.svelte';
import Modal from 'svelte-simple-modal';
import PortfolioScreen from './screens/PortfolioScreen.svelte';
import toast, { Toaster } from 'svelte-french-toast';

async function copyToClipboard() {
	const promise = navigator.clipboard.writeText("jagrutchaudhari18@gmail.com");
	toast.promise(promise, { loading: 'Copying...', success: 'Email Copied!', error: 'Could not copy' });
  }

</script>

	<Modal>
		<div class="root_container">
			<Toaster />
			<div class="profile">
				<div class="profile_text">
					<div class="hey">Hey there,</div>
					<div class="name">I'M JAGRUT CHAUDHARI
						<div class="scroller">
							<span>
							  SOFTWARE ENGINEER<br/>
							  FRONTEND DEVELOPER<br/>
							  BACKEND DEVELOPER
							</span>
						  </div>
					</div>
				</div>
				<div class="social_buttons_row">
					<img src={"assets/linkedin.svg"} alt="" class="social_button" on:click={() => window.open("https://www.linkedin.com/in/jagrut-chaudhari-111a30183/", "_blank")} />
					<img src={"assets/email.svg"} alt="" class="social_button" on:click={copyToClipboard} />
				</div>
			</div>
			<Spacer height='20px' />
			<div class="triangle1"></div>
			<div class="triangle2"></div>
			<PortfolioScreen title="Portfolio" />
		</div>
	</Modal>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
	/* Dark */
	:global(:root) {
		--background: #202450;
		--text: #F1F1F1;
		--text-secondary: rgba(220, 220, 220, 0.48);
		--background-primary: #101547;
		--primary: #E86B6B;
		--secondary: #FFC961;
		--divider: #949494;
		--highlight: #5966FF;
		--folder: #9CA4FF;

	}

	:global(html) {
		box-sizing: border-box;
	}
	:global(*, *:before, *:after) {
		font-family: 'Manrope', sans-serif;
		box-sizing: inherit;
	}

	:global(body) {
		background-color: var(--background);
		margin: 0;
		overflow-x: hidden;
	}

	.root_container {
		height: 100vh;
		padding: 3% 6%;
		padding-bottom: 10px;
	}

	.profile {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		min-height: 60px;
	}
	.hey {
		color: var(--text);
		font-size: 16px;
	}
	.name {
		color: var(--text);
		font-size: 26px;
		letter-spacing: 2px;
	}
	.social_buttons_row {
		display: flex;
		gap: 10px;
		margin-bottom: 5px;
		z-index: 10;
	}
	.social_button {
		padding: 5px;
		border: 1px solid var(--folder);
		border-radius: 6px;
		height: 35px;
		width: 35px;
		cursor: pointer;
	}
	.social_button:hover {
		filter: brightness(0.9);
	}
	.triangle1 {
		position: absolute;
		right: -150px;
		bottom: 250px;
		height: 300px;
		width: 300px;
		background: linear-gradient(180deg, #DC7878 0%, #980C0C 100%, #980C0C 100%);
		border-radius: 64px;
		transform: rotate(55.5deg);
	}
	.triangle2 {
		position: absolute;
		left: -150px;
		bottom: 100px;
		height: 300px;
		width: 300px;
		background: linear-gradient(181.74deg, #000A79 14.08%, rgba(46, 57, 176, 0.93) 72.69%);
		border-radius: 64px;
		transform: rotate(55.5deg);
	}

	/* TEXT SCROLLING ANIMATION */
	.scroller {
		height: 1em;
		line-height: 1em;
		position: relative;
		overflow: hidden;
	}
	.scroller > span {
		position: absolute;
		top: 0;
		animation: slide 5s infinite;
		color: var(--secondary);
		font-size: 18px;
	}
	@keyframes slide {
		0% {
			top: 0;
		}
		33% {
			top: -1.4em;
		}
		66% {
			top: -2.8em;
		}
	}
</style>