<template>
  <div class="projects-page">
    <main class="projects-main">
      <h1>My Projects</h1>
      <p class="projects-intro">
        A selection of projects I have built during my time at Life Choices Academy.
      </p>

      <div class="project-grid">
        <!-- Project 1: CampusSwap -->
        <div class="project-card">
          <h2>CampusSwap</h2>
          <p class="project-description">
            A campus marketplace where students can buy, sell, and swap items within their university community.
          </p>
          <p class="tech-used">
            <strong>Technologies:</strong> Vue.js, CSS, JavaScript
          </p>
          <div class="project-links">
            <a href="https://github.com/leratoyapi/CampusSwap_Frontend" target="_blank" class="glow-button">
              GitHub Repository
            </a>
          </div>
        </div>

        <!-- Project 2: GigBridge -->
        <div class="project-card">
          <h2>GigBridge</h2>
          <p class="project-description">
            A dual sided freelance portal that connects early career talent with small businesses. It features a responsive landing page, an about section, a services page, and a contact form with JavaScript validation.
          </p>
          <p class="tech-used">
            <strong>Technologies:</strong> HTML5, CSS3, JavaScript, Figma, Git and GitHub
          </p>
          <div class="project-links">
            <a href="https://github.com/leratoyapi/lca-gigbridge-startup-launch" target="_blank" class="glow-button">
              GitHub Repository
            </a>
            <a href="https://leratoyapi.github.io/lca-gigbridge-startup-launch/" target="_blank" class="glow-button">
              Live Demo
            </a>
          </div>
        </div>

        <!-- Project 3: ModernTech HR Portal -->
        <div class="project-card">
          <h2>ModernTech HR Portal</h2>
          <p class="project-description">
            An HR portal prototype designed to streamline employee management and internal communication for modern tech companies.
          </p>
          <p class="tech-used">
            <strong>Technologies:</strong> Vue.js, CSS
          </p>
          <div class="project-links">
            <a href="https://github.com/leratoyapi/moderntech-hr-portal" target="_blank" class="glow-button">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ProjectView'
}
</script>

<style scoped>
.projects-main {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-main h1 {
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
  color: var(--text-main);
}

.projects-intro {
  text-align: center;
  font-size: 20px;
  color: var(--text-muted);
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 35px 30px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h2 {
  color: var(--accent-color);
  margin-bottom: 15px;
  font-size: 26px;
}

.project-description {
  margin-bottom: 20px;
  color: var(--text-main);
  line-height: 1.7;
  flex-grow: 1;
}

.tech-used {
  font-size: 15px;
  color: var(--text-muted);
  margin-bottom: 25px;
  padding-top: 15px;
  border-top: 1px solid var(--border-color);
}

.project-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.project-links .glow-button {
  padding: 12px 24px;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  flex: 1;
  min-width: 140px;
}
</style>