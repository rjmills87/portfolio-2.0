const projects = [
  {
    id: "1",
    name: "Dino Studio",
    summary:
      "Dino Studio was built collaboratively by taking part in a Chingu.io Voyage. The project was designed and built over a 6-week period, utilising Agile Development principles",
    description: `

Dino Studio was built collaboratively by taking part in a Chingu.io Voyage. The project was designed and built over a 6-week period, utilising Agile Development principles.

This Web App is an educational application that allows users to dive into the world of dinosaurs. This single-page application enables users to discover and learn about various prehistoric reptiles.

### Functionality

The app offers a range of features to enhance the user experience:

- **Dinosaur Profiles**: View detailed information about dinosaurs, including their name, weight, length, country of origin, and diet, accompanied by corresponding images.
- **Advanced Search**: Easily search for dinosaurs by name, weight, length, country, and diet, with results displayed seamlessly across the app.
- **Data Visualisation**: Enjoy visually appealing charts and a map feature that illustrate the distribution of dinosaur types and diets, providing a clear overview of the data.
- **Detailed Dinosaur Views**: Explore comprehensive details about individual dinosaurs, such as their taxonomy, description, and the location where they were discovered.
- **News Updates**: Stay up-to-date with the latest news and discoveries related to the world of dinosaurs.

### Tech Stack

Dino Studio was built using a cutting-edge technology stack, including:

- **React**: The app’s user interface and interactivity are powered by this popular JavaScript library.
- **Bootstrap**: This CSS framework ensures a responsive and visually appealing design.
- **Nivo**: The charting and data visualization components are implemented using this robust data visualization library.
- **Google Maps**: The app integrates seamlessly with Google Maps to showcase the geographic distribution of dinosaur discoveries.
- **Vite**: This modern build tool streamlines the development process and optimizes the app’s performance.

The team also leveraged various development tools, such as **ESLint** for code quality, **Git** for version control, and **Linear** for project management, to ensure a smooth and efficient development workflow.
`,
    techStack: [
      {
        techIcon: "/src/assets/images/skills/html-5.svg",
        techName: "HTML5",
      },
      {
        techIcon: "/src/assets/images/skills/css-3.svg",
        techName: "CSS3",
      },
      {
        techIcon: "/src/assets/images/skills/javascript.svg",
        techName: "JavaScript",
      },
      {
        techIcon: "/src/assets/images/skills/react.svg",
        techName: "React",
      },
      {
        techIcon: "/src/assets/images/skills/bootstrap.svg",
        techName: "Bootstrap 5",
      },
      {
        techIcon: "/src/assets/images/skills/vite.svg",
        techName: "Vite",
      },
    ],
    screenshot: "/src/assets/images/projects/dino-studio-screenshot.png",
    liveLink: "https://dino-studio.netlify.app/",
    repoLink: "https://github.com/chingu-voyages/v48-tier2-team-14",
  },
];

export default projects;
