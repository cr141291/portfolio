function Projects() {
  return (
    <section>
      <h1>Projects Page</h1>
      <h2>My Projects</h2>

      <div>
        <h3>Project 1: React Static Page</h3>
        <p>A React app with three components:MenuApp, Menu, MenuItem. They dynamically displays menu data from props.</p>
        <p>It uses array mapping to render menu categories and items, ensuring the UI updates based on the provided data.</p>
        <a href="https://github.com/cr141291/react-static-story">Repository Link</a>
      </div>

      <div>
        <h3>Project 2: React Exercise Tracker</h3>
        <p>This is a React Exercise Tracker app with two main views: a menu of exercises and an exercise screen.</p>
        <p>Users choose an exercise (repetition or duration), and the app displays the corresponding exercise.</p>
        <a href="https://github.com/cr141291/Finished_Exercise_Tracker">Repository Link</a>
      </div>

      <div>
        <h3>Project 3: React Menu App</h3>
        <p>This is a React app that displays a simple static page based on a famous story.</p>
        <a href="https://github.com/cr141291/menu-app">Repository Link</a>
      </div>
    </section>
  )
}

export default Projects