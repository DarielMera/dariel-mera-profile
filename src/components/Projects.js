import React from "react"

const projectsData = [
	{
		id: 1,
		title: "Impeccable Photoshoot",
		description: `This application is a specialized tool for wedding photographers, enabling pre-visualization
                            and composition of group photos. It allows brides and grooms to input guest information,
                            then drag and drop customizable avatars onto simulated frames, assigning roles (e.g.,
                            bridesmaid, uncle) and displaying names. Built with React for the interactive front-end,
                            Express for the server-side logic, and MongoDB for data persistence, the project provided
                            extensive experience in full-stack development. Key learnings included building a dynamic
                            user interface with drag-and-drop functionality, managing complex state for visual
                            arrangements, interacting with a custom API for data storage and retrieval, and handling
                            user input for guest details and roles.`,
		image: "./assets/projects/ip_project_thumbnail.png",
		liveDemoLink: "https://impeshoot.web.app/",
	},
	{
		id: 2,
		title: "Live Presentation",
		description: `Live presentation of the Impeccable Photoshoot App. This is the final project at the Boca Code Software Engineer career course.`,

		videoLink: "https://www.youtube.com/embed/3GwBpXjyt1c",
	},
	{
		id: 3,
		title: "Crown Clothing Store",
		description: `This project is a sophisticated e-commerce platform designed for selling clothing,
        showcasing a robust front-end application. Built as part of the Zero To Mastery "Complete
        React Developer" course, it provided hands-on experience with core React concepts including
        functional components, routing with React Router, and state management using both React
        Context API and Redux. Key learnings involved implementing Firebase for user authentication
        (email/password, Google Sign-In) and Firestore for database interactions, integrating
        Redux-Saga for handling asynchronous operations, and setting up Stripe for payment
        processing, demonstrating a comprehensive understanding of modern web application
        development`,

		image: "./assets/projects/eCommerce_clothing_store.png",
		liveDemoLink: "https://storied-florentine-6e59fe.netlify.app/",
	},
	{
		id: 4,
		title: "Chef Claude AI Recipe Generator",
		description: `       This application is a specialized tool for generating recipes, enabling users to create
                            personalized meal suggestions based on available ingredients. It allows users to input their
                            ingredients, then leverages artificial intelligence to craft unique recipes. Built with
                            React for the interactive front-end, the project provided extensive experience in
                            integrating AI services into a dynamic web application. Key learnings included building a
                            responsive user interface for ingredient input and recipe display, managing the data flow
                            between the front-end and an external AI model, interacting with a specialized API for
                            recipe generation, and handling the presentation of AI-generated content.`,
		image: "./assets/projects/chef_claude_recipe.png",
		liveDemoLink: "https://darielmera.github.io/chef-claude-ai-recipe-generator/",
	},
	{
		id: 5,
		title: "open AI chatGPT clone react app",
		description: `This project is a React-based ChatGPT clone application that utilizes the OpenAI API, built with React for the frontend and Node.js for the backend. Developing this app solidified concepts around dynamic UI updates and intricate state management in React, emphasizing the effective use of useState for tracking conversational flow and implementing conditional rendering to manage chat interactions. It highlighted key features like starting new conversations, continuing existing ones, creating new chats, and saving/accessing chat history, enhancing skills in creating interactive user experiences while also addressing important considerations such as API key security and token usage. This application was developed by following a tutorial.`,
		image: "./assets/projects/chatGPT_clone.png",
		liveDemoLink: "https://darielmera.github.io/chatGPT-clone-react-express-app/",
	},
	{
		id: 6,
		title: "React Assembly Game",
		description: `                            This project is a React-based assembly game where users interactively select and combine
                            various components to build a final item. Building this application solidified concepts
                            around dynamic UI updates and intricate state management in React. It emphasized the
                            effective use of useState for tracking component selections and assembled parts,
                            implementing conditional rendering to visualize the assembly process, and designing reusable
                            components to manage individual selectable pieces, enhancing skills in creating interactive
                            user experiences.`,
		image: "./assets/projects/assembly.png",
		liveDemoLink: "https://darielmera.github.io/react-assembly-game/",
	},
	{
		id: 7,
		title: "Tenzies Game",
		description: `                            The Tenzies game is a classic dice-rolling game where the player aims to roll ten dice to
                            the same value and hold them. Developed by following Bob Ziroll's "Learn React" course on
                            Scrimba, this project was instrumental in mastering essential React Hooks like useState for
                            managing game state (dice values, held status, win condition) and useEffect for handling
                            side effects such as checking for a win and updating the UI accordingly. It also provided
                            practical experience with event handling, dynamic styling, and basic accessibility
                            considerations like focusing elements.`,
		image: "./assets/projects/tenzie_game.png",
		liveDemoLink: "https://darielmera.github.io/tenzies-game/",
	},
	{
		id: 8,
		title: "Meme Generator",
		description: `This application is a fun web tool that allows users to select a random meme template image
                            and then add customizable top and bottom text to create their own memes. This project,
                            learned from Bob Ziroll's Scrimba course, provided valuable experience in interacting with
                            external APIs to fetch dynamic content. It focused on advanced React state management with
                            useState for managing form inputs and image URLs, handling API responses, and dynamically
                            rendering images and text within the component, showcasing practical application of Hooks
                            for interactive UIs.`,
		image: "./assets/projects/meme_generator.png",
		liveDemoLink: "https://meme-generator-f3a6c.firebaseapp.com/",
	},
	{
		id: 9,
		title: "Monsters Rolodex",
		description: `The Monsters Rolodex is a React application that displays a searchable list of "monsters"
                            (fetched data), allowing users to filter the list based on search input. This project, from
                            the Zero To Mastery React course, was crucial for understanding how to integrate API calls
                            into a React app using useEffect for data fetching. It reinforced core React principles like
                            component lifecycle, useState for managing both the monster data and the search field's
                            input, and efficient list rendering with keys, providing a strong foundation for data-driven
                            applications.`,
		image: "./assets/projects/Monsters_Rolodex.png",
		liveDemoLink: "https://darielmera.github.io/monsters-rolodex-project/",
	},
	{
		id: 10,
		title: "Simon Game",
		description: ` This is a web-based recreation of the classic Simon memory game, challenging players to
                            replicate increasingly long sequences of flashing lights and sounds. Developed during Dr.
                            Angela Yu's Udemy bootcamp, the project significantly deepened understanding of core
                            JavaScript event handling for user clicks and interaction. It involved implementing complex
                            game logic using arrays to manage sequences, utilizing timing functions (setTimeout,
                            setInterval) for visual and auditory feedback, and dynamically updating the DOM to reflect
                            game states and animations.`,
		image: "./assets/projects/simon_game.png",
		liveDemoLink: "https://darielmera.github.io/simon-game/",
	},
	{
		id: 11,
		title: "Dicee Game",
		description: `                            This project is a simple web-based competition that simulates rolling two dice, instantly
                            declaring a winner between Player 1 and Player 2, or a draw. As part of Dr. Angela Yu's
                            Udemy "Complete Full-Stack Web Development Bootcamp," this exercise primarily focused on
                            fundamental JavaScript concepts. Key learnings included generating random numbers,
                            manipulating the Document Object Model (DOM) to dynamically update image sources and text
                            based on game logic, and applying conditional statements to determine the game's outcome.`,
		image: "./assets/projects/Dicee_game.png",
		liveDemoLink: "https://darielmera.github.io/roll-the-dice-competition/",
	},
	{
		id: 12,
		title: "Product Preview Card",
		description: `                            This project is a static web component designed to display a product's preview card,
                            typically featuring an image, product name, description, pricing, and an "Add to Cart"
                            button. It serves as a foundational exercise to hone skills in modern web layout and
                            styling. Key concepts applied include semantic HTML for structuring the content, advanced
                            CSS techniques like Flexbox or Grid for creating a responsive and visually appealing card
                            layout, and careful management of typography, colors, and spacing to achieve a polished,
                            pixel-perfect design. It demonstrates a strong grasp of creating reusable UI elements with a
                            focus on visual fidelity.`,
		image: "./assets/projects/card_product_preview.png",
		liveDemoLink: "https://darielmera.github.io/product-preview-card-component/",
	},
	{
		id: 13,
		title: "Drum Kit",
		description: `The Drum Kit project is an interactive web application that functions as a virtual drum set,
                            allowing users to play different drum sounds by clicking on screen elements or pressing
                            corresponding keyboard keys. As part of Dr. Angela Yu's Udemy bootcamp, this project
                            solidified fundamental JavaScript concepts related to event handling, particularly click and
                            keydown events. It provided hands-on experience with the HTML Audio API for playing sounds,
                            performing basic DOM manipulation to add visual feedback to played drums, and structuring a
                            simple, interactive front-end application. `,
		image: "./assets/projects/drumkit.png",
		liveDemoLink: "https://darielmera.github.io/drumkit/",
	},
	{
		id: 14,
		title: "Profile Page",
		description: `      This project is a personal profile based on a react template popular design. I am very
                            fortunate to have worked in so many different fields. From Banks to the Hospitality
                            Industry. However, I have concluded that coding is my true passion. I love to think and that
                            great intrigue and satisfaction of looking for solutions to problems. After refining my
                            education by completing an updated Software Engineering Career Course at Boca Code, Florida
                            , I seek never to work again in my life (as they say out there) since I will dedicate myself
                            to what I am really passionate about, coding.
`,
		image: "./assets/projects/DarielMera_profile_page.png",
		liveDemoLink: "https://darielmera.web.app/",
	},
]

const Projects = () => {
	return (
		<section id="project-presentation">
			<div id="project-title-section">
				Projects<span style={{ opacity: ".6", fontSize: "small" }}>&nbsp;&nbsp;slide right</span>
				<span> &nbsp;&rarr;</span>
			</div>
			<div id="project-presentation-container">
				{projectsData.map(project => (
					<section key={project.id} className="frame-and-description-container">
						<div className="project-frame">
							{project.image ? (
								<a href={project.liveDemoLink}>
									<img
										src={project.image}
										width="450"
										height="350"
										alt={`${project.title} thumbnail`}
										loading="lazy"
									/>
									<div id="project-liveDemo-link">Live Demo</div>
								</a>
							) : (
								<iframe
									width="450"
									height="348"
									src={project.videoLink}
									title={project.title}
									loading="lazy"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen></iframe>
							)}
						</div>
						<p className="project-description">{project.description}</p>
					</section>
				))}
			</div>
		</section>
	)
}

export default Projects
