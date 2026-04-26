function Projects() {
  return (
    <section>
      <h1>Projects Page</h1>
      <p>These are 3 of my projects, these show a build up in skill.</p>
      <div>
        <h3>Project 1: React Menu App</h3>
        <p>This project built a data-driven menu page using React. It uses three reusable components: MenuApp, Menu, and MenuItem.</p>
        <p>These components work together to display menu categories and their items based entirely on data passed through props.</p>
        <p>It renders menus by looping over arrays, generating the correct HTML structure without hardcoding values.</p>
        <p>Each component handles any input data, it ensures the UI updates automatically when the data changes.</p>
        <a href="https://github.com/cr141291/menu-app">Repository Link</a>
      </div>

      <div>
        <h3>Project 2: React Exercise App</h3>
        <p>A simple React Exercise Tracker app with two main views: a menu of exercises and an exercise screen.</p>
        <p>Users choose an exercise (repetition or duration), and the app displays the corresponding component.</p>
        <a href="https://github.com/cr141291/Finished_Exercise_Tracker">Repository Link</a>
      </div>

      <div>
        <h3>Project 3: React Static Page</h3>
        <p>A React app connected to a GitHub repository that displays a simple static page based on a famous story.</p>
        <a href="https://github.com/cr141291/react-static-story">Repository Link</a>
      </div>
    </section>
  )
}

export default Projects