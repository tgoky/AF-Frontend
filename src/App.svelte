<script>
	// Import necessary components or libraries if needed
</script>

<main>
	<header>
		<h1> Aequor 💧 Finance</h1>
		<p>Welcome to  Aequor Finance</p>
	</header>

	<img src="/mrm.png" alt="fx logo"  width="300px"/>

	<section class="bubble-container">
		<div class="bubble"></div>
		<div class="bubble"></div>
		<!-- Add more bubbles as needed -->
	</section>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Splash:wght@400&display=swap');
  @import  url('https://fonts.googleapis.com/css?family=Press+Start+2P');
@import url('https://fonts.googleapis.com/css?family=Caesar+Dressing&display=swap');


	/* Overall page styling */
	body {
		margin: 0;
		padding: 0;
		overflow: hidden;
		font-family: 'Montserrat', sans-serif;
		background: linear-gradient(to bottom, #006994, #2ecc71);
		color: #ffffff;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
		perspective: 1000px; /* 3D effect */
	}

	header h1 {
		font-size: 4rem;
    font-family: 'Caesar Dressing', cursive;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
		animation: pulse 2s infinite;
	}

	header p {
		font-family: 'Caesar Dressing', cursive;
		font-size: 1.5rem;
		margin-top: 0.5rem;
		text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
	}

	/* Pulse animation for the title */
	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.05);
			opacity: 0.8;
		}
	}

  p {

    font-size: 40px;
  }

	/* Bubble animation */
	.bubble-container {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index: -1;
	}

	.bubble {
		position: absolute;
		bottom: -100px;
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		animation: rise 10s infinite ease-in;
		animation-delay: calc(-10s * var(--i));
		box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
		transform: scale(1) translateZ(0);
	}

	@keyframes rise {
		0% {
			bottom: -100px;
			transform: scale(1) translateZ(0);
		}
		50% {
			transform: scale(1.2) translateZ(50px);
		}
		100% {
			bottom: 100vh;
			transform: scale(0.8) translateZ(0);
		}
	}
</style>
