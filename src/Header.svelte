<script>
    import { Link } from 'svelte-navigator';
  </script>
  
  <nav>
    <ul>
      <li>
        <Link to="/docs">
          <i class="fas fa-book" /> Docs
        </Link>
      </li>
      <li>
        <Link to="/stake">
          <i class="fas fa-anchor" /> Stake
        </Link>
      </li>
      <li>
        <Link to="/socials">
          <i class="fas fa-users" /> Socials
        </Link>
      </li>
      <li>
        <Link to="/bank">
          <i class="fas fa-piggy-bank" /> Bank
        </Link>
      </li>
    </ul>
  </nav>
  
  <style>
    nav {
      background-color: #3498db; /* Aquatic blue background */
      padding: 1rem;
      text-align: center;
    }
  
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    nav li {
      display: inline-block;
      margin-right: 20px;
    }
  
    .fas {
      font-size: 24px;
      margin-right: 10px;
    }
  </style>