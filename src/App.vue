<template>

  <div :class="{ 'light-mode': isLightMode }" class="app-container">

    <nav class="nav-bar">

      <div class="nav-brand">

        <p>
          <i>Lerato Yapi</i>
        </p>
      </div>

      <ul>

        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>

        <li>
          <router-link to="/skills">
            TechStack
          </router-link>
        </li>

        <li>
          <router-link to="/projects">
            Projects
          </router-link>
        </li>

        <li>
          <router-link to="/reflection">
            Reflection
          </router-link>
        </li>

        <li>
          <router-link to="/contact">
            Contact
          </router-link>
        </li>

        <li>
          <button @click="toggleTheme" class="theme-toggle">
            {{ isLightMode ? 'Dark Mode' : 'Light Mode' }}
          </button>
        </li>
        
      </ul>
    </nav>

    <router-view></router-view>

    <footer>
      <p>
        &copy; 2026 Lerato Yapi | Built with curiosity and code
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLightMode: false
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.isLightMode = true;
    }
  },
  methods: {
    toggleTheme() {
      this.isLightMode = !this.isLightMode;
      if (this.isLightMode) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    }
  }
}
</script>