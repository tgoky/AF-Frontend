<script>
	// Import necessary components or libraries if needed
</script>

<main>
	<header>
		<h1> Aequor 💧 Finance</h1>
		<p>Welcome to 💧 Aequor Finance</p>
	</header>
  <img src="/mrm.png" alt="Aeff" class="header-image" style="width: 300px;">

	<!-- <section class="ocean">
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
	</section> -->
</main>

<style>
	/* Overall page styling */
	body {
		margin: 0;
		padding: 0;
		overflow: hidden;
		font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to bottom, #006994, #2ecc71); 
		color: #ffffff; /* White text */
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
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-shadow: 0 0 20px rgba(0, 255, 255, 0.8); /* Neon glow effect */
		animation: pulse 2s infinite;
	}

	header p {
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

	/* Ocean waves animation */
	.ocean {
		position: relative;
		width: 100%;
		height: 200px;
		margin-top: 50px;
		overflow: hidden;
	}

	.wave {
		position: absolute;
		width: 200%;
		height: 100%;
		background: url('https://i.imgur.com/AMO9NWv.png') repeat-x;
		background-size: 50% 100px;
		opacity: 0.5;
		bottom: 0;
		left: -50%;
		animation: wave 10s infinite linear;
		transform: translateZ(-500px) rotateX(30deg);
	}

	.wave:nth-child(2) {
		animation: wave 12s infinite linear;
		opacity: 0.7;
		transform: translateZ(-400px) rotateX(30deg);
	}

	.wave:nth-child(3) {
		animation: wave 15s infinite linear;
		opacity: 0.9;
		transform: translateZ(-300px) rotateX(30deg);
	}

	@keyframes wave {
		0% {
			transform: translateX(0) translateZ(-500px) rotateX(30deg);
		}
		100% {
			transform: translateX(100%) translateZ(-500px) rotateX(30deg);
		}
	}
</style>
