<script>
  // No need for additional script in this case unless you want to dynamically add raindrops
</script>

<main>
  <nav class="menu-bar">
    <a href="#docs">Docs</a>
    <a href="#stake">Stake</a>
    <a href="#social">Social</a>
    <a href="#bank">Bank</a>
  </nav>

  <header>
    <h1>Aequor 💧 Finance</h1>
    <p>Welcome to 💧 Aequor Finance</p>
  </header>

  <img src="/mrm.png" alt="fx logo" class="glow-effect" width="300px" />

  <section class="bubble-container">
    <!-- Bubbles -->
    <div class="bubble" style="--i: 0; --size: 40px; --left: 10%;"></div>
    <div class="bubble" style="--i: 1; --size: 60px; --left: 20%;"></div>
    <!-- Add more bubbles as needed -->
  </section>

  
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Splash:wght@400&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
  @import url('https://fonts.googleapis.com/css?family=Caesar+Dressing&display=swap');

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

  .menu-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
 
  width: 100px;
  max-width: 1200px; /* Adjust this value to your desired max width */
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

  .menu-bar a {
    font-family: 'Caesar Dressing', cursive;
    font-size: 1.5rem;
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .menu-bar a:hover {
    transform: translateY(-10px);
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.8));
  }

  header h1 {
    font-size: 4rem;
    text-transform: uppercase;
    font-family: 'Caesar Dressing', cursive;
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
    width: var(--size);
    height: var(--size);
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    left: var(--left);
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


  @keyframes drop {
    0% {
      top: -50px;
    }
    100% {
      top: 100vh;
    }
  }


  .glow-effect {
    animation: glow 2s infinite alternate, float 5s infinite ease-in-out;
    filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.8));
  }

  @keyframes glow {
    0% {
      filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.4));
    }
    100% {
      filter: drop-shadow(0 0 20px rgba(0, 255, 255, 1));
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }
</style>
