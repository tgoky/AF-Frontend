<style>

    @import url('https://fonts.googleapis.com/css?family=Caesar+Dressing&display=swap');
    .docs-container {
        padding: 2rem;
        max-width: 120%;
        margin: 0 auto;
        background: url('/oceandeep.PNG') no-repeat center center;
        background-size: cover;
        border-radius: 10px;
        color: #ffffff;
        position: relative; /* Container is relative for positioning the SVG */
        overflow: hidden; /* Ensure the SVG doesn't overflow outside the container */
      }
      
      h1 {
        font-family: 'Caesar Dressing', cursive;
        color: #00c853;
        text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
      }
      
      p {
        font-family: 'Splash', sans-serif;
        color: #ffffff;
        line-height: 1.6;
      }
      
    
    
      .cry {
      font-family: 'Caesar Dressing', cursive;
      display: inline-block; /* Ensure the element is treated as an inline-block for transformations */
      position: relative; /* To position the magnifier effect correctly */
      overflow: hidden; /* Hide overflow to maintain clean effect */
      transition: transform 0.3s ease; /* Smooth transition */
    }
    
    .cry:hover {
      transform: scale(2.2); /* Scale up the text on hover */
      z-index: 1; /* Ensure it stays on top */
    }
    
    .cry::before {
      content: 'ttt';
      position: absolute;
      top: 390;
      left: 50%;
      width: 200%;
      height: 200%;
      background: rgba(255, 255, 255, 0.2); /* Semi-transparent white overlay */
      border-radius: 50%; /* Circular shape to simulate lens effect */
      transform: translate(-50%, -50%) scale(0); /* Start with no magnification */
      transition: transform 0.3s ease; /* Smooth transition */
      pointer-events: none; /* Ignore mouse events */
    }
    
    .cry:hover::before {
      transform: translate(-50%, -50%) scale(1); /* Apply magnification effect on hover */
    }
    
      .swimming-fish {
        position: absolute;
        top: 20%; /* Adjust as needed */
        width: 100px; /* Adjust size */
        animation: swim 10s linear infinite;
      }
      
      @keyframes swim {
        0% {
          transform: translateX(-120px); /* Start position, adjusted for size */
        }
        100% {
          transform: translateX(calc(100% + 120px)); /* End position, adjusted for size */
        }
      }
    
      .top {
    
        margin-top: 40px;
      }
      
      .loading-image {
  width: 190px; /* Make the image take up 100% of the container's width */
  height: auto; /* Maintain aspect ratio by adjusting height automatically */
  max-width: 100%; /* Ensure the image doesn't exceed the container's width */
  display: block; /* Center the image if the container is narrower */
  margin: 0 auto; 
  /* Center the image within the container */
  margin-top: -14%;
  object-fit: contain; /* Fit the image within the container while preserving aspect ratio */
  border-radius: 10px; /* Match the border radius of the container */
  z-index: 2; /* Higher z-index to place it in front */
}

.countdown-container {
    position: absolute; /* Position it absolutely within the container */
    top: 50%; /* Adjust as needed */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Center vertically and horizontally */
    text-align: center;
    z-index: 1; /* Lower z-index to send it backward */

    color: rgba(255, 255, 255, 0.8); /* Semi-transparent white text */
}

#countdown {
    margin-top: -30px;
    display: flex; /* Use flexbox for horizontal alignment */
  font-size: 1.5rem;
  color: #ffffff;
  font-family: 'Caesar Dressing', cursive;
}

#countdown span {
  font-weight: bold;
  color: #00c853;
}

     
      </style>
      
      <div class="docs-container">
        <header>
          <h1>Documentation</h1>
        </header>
      
        <section class="content">
          <p class="cry"><strong>read the docs !</strong></p>
     
          <!-- Add SVG fish animation here -->
          <svg class="swimming-fish" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" width="100" height="50">
            <path d="M10,25 Q30,5 50,25 Q30,45 10,25" fill="#00c853" />
          </svg>
        </section>
      </div>
      
    <br>
    
    
      <div class="docs-container">
        
        <div class="countdown-container">
            
            <div id="countdown">
                <span id="time">{formattedTime}</span>
            </div>
          </div>
          
        <img src="/presale.gif" alt="e" class="loading-image" />
          <!-- Add SVG fish animation here -->
          <svg class="swimming-fish" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" width="100" height="50">
            <path d="M10,25 Q30,5 50,25 Q30,45 10,25" fill="#00c853" />
          </svg>
      
      </div>


      <script lang="ts">
        import { onMount } from "svelte";
        
        let formattedTime: string = "";
      
        onMount(() => {
          const countdownDate = new Date("August 28, 2024 00:00:00 UTC").getTime();
      
          const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
      
            if (distance < 0) {
              clearInterval(interval);
              formattedTime = "00:00:00";
              return;
            }
      
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
            formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          };
      
          updateCountdown(); // Initial call to display immediately
          const interval = setInterval(updateCountdown, 1000);
        });
      </script>
      