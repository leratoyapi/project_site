# Lerato Yapi Portfolio

## Project Overview

This is my personal portfolio website. It was originally built using standard HTML, CSS, and Bootstrap. I transferred the entire project to Vue.js to make it a modern single page application. The portfolio showcases who I am, my tech stack, my projects, my reflection, and a way to contact me.

## Features

*   Dark mode and light mode toggle.
*   Single page application using Vue Router.
*   Responsive layout for desktop and mobile.
*   Project showcase with links to GitHub and live demos.
*   Interactive contact form with success message.
*   Custom glowing buttons and themed cards.

## Technologies Used

*   Vue 3 (Options API)
*   Vue Router
*   Vuex
*   Vite
*   HTML5
*   CSS3
*   JavaScript
*   Bootstrap

## What I Did To Transfer My Old Work To Vue

1.  Created a new Vue project using Vite.
2.  Moved every single HTML page into its own Vue component inside the `views` folder. This includes Home, About, TechStack, Projects, Reflection, and Contact.
3.  Moved the navigation bar and the footer into `App.vue` so that I do not have to repeat the same code on every single page.
4.  Changed every `a href` link into a `router-link` tag. This stops the page from refreshing and makes the site feel like a real application.
5.  Moved all my images into the `src/components/icons` folder and updated every image path in my code.
6.  Upgraded my CSS file to use CSS variables. This allowed me to add a dark mode and a light mode toggle button in the navigation bar.
7.  Added Vue data binding to my contact form using `v-model` so that the form inputs are connected to the Vue component data.
8.  Added a method to my contact form that shows a success message when the user submits the form.

## Challenges Faced

1.  Fixing broken image paths. Vite is very strict about file names and paths. I had to make sure every image name matched exactly in my code, including uppercase and lowercase letters.
2.  Understanding how to pass data between components. I had to learn how to use props and the Vue Router to make everything link together.
3.  Setting up the dark and light mode. I had to rewrite a lot of my CSS to use variables instead of hardcoded colors. This was tricky at first but it made the theme switch work perfectly.
4.  Changing all the navigation links. It was easy to forget to change an `a href` to a `router-link`, and that caused the page to refresh or break.

## Future Improvements

1.  Connecting the contact form to a backend. I am learning PHP, XAMPP, MySQL, and Node.js. I plan to build a small database to store the messages sent through the form.
2.  Adding real screenshots to the Projects page so visitors can see what each project looks like before clicking the links.
3.  Adding page transitions. Vue has a built in transition component that can make moving between pages look very smooth.
4.  Adding a price range filter and sorting options to the Projects page.

## Installation and Run Instructions

1.  Clone the repository.
2.  Open the terminal in the project folder.
3.  Run `npm install` to install all the dependencies.
4.  Run `npm run dev` to start the development server.
5.  Open the local link provided in the terminal to view the portfolio.

## Project Structure

*   `src/App.vue` This is the main layout. It holds the navigation bar, the footer, and the theme toggle.
*   `src/main.js` This is the entry point of the application.
*   `src/router/index.js` This holds all the routes for the different pages.
*   `src/store/index.js` This holds the Vuex store.
*   `src/views/` This folder holds all the page components like HomeView, AboutView, SkillsView, ProjectView, ReflectionView, and ContactView.
*   `src/components/icons/` This folder holds all the images and icons used in the project.

## Author

Lerato Yapi
Cape Town, South Africa
Life Choices Academy (YouthCode Programme)