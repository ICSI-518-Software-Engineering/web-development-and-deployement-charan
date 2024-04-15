
# MyApp - Simple React Application

MyApp is a simple React application that provides two main features: Profile and Calculator. It allows users to manage their profile information and perform addition calculations using a backend API.

## Features

### 1. Profile

The Profile feature allows users to edit their name and biography. It includes the following components:

- Profile Component (`Profile.jsx`): This component renders a form where users can input their name and biography. The input fields are linked to state variables (`name` and `description`) using React hooks (`useState`). The input values are stored in the browser's local storage to persist across page reloads.

### 2. Calculator

The Calculator feature enables users to perform addition calculations. It includes the following components:

- Calculator Component (`Calculator.jsx`): This component renders a form with two input fields for entering numbers to be added. When the user clicks the "Submit" button, it calculates the addition result both on the frontend (using React state) and on the backend (using an API endpoint). The addition result from the backend is fetched asynchronously using Axios.

### 3. Navbar

The Navbar component (`Navbar.jsx`) provides navigation links to the Profile and Calculator pages. It is a responsive navigation bar built using Bootstrap.

### 4. Login Component
The Login component allows users to authenticate themselves by providing their credentials (e.g., username/email and password). Upon successful authentication, it redirects the user to a "user-details" page.

### 5. Signup Component
The Signup component allows new users to create an account by providing necessary information such as username, email, and password. Upon successful signup, it redirects the user to the login page ("/login") where they can authenticate with their newly created credentials.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A library for handling navigation in React applications.
- Axios: A promise-based HTTP client for making asynchronous requests.
- Bootstrap: A front-end framework for building responsive and mobile-first websites.
- Local Storage: A web API used to store key-value pairs in a web browser.

## Getting Started

To run the application locally:

1. Clone this repository to your local machine.
2. Enter the frontend directory by using `cd frontend`
3. Install the dependencies using `npm install`.
4. Run the client-side application(frontend) using `npm run dev`
5. Enter the backend (API) using `cd backend`
6. Install the dependencies using `npm install`.
7. Start the development server using `node server.js`.
8. Open your web browser and navigate to `http://localhost:5173` to view the application.

## Folder Structure

- `src/`: Contains the source code of the application.
  - `components/`: Contains React components for different features.
  - `App.jsx`: Main component that renders different pages based on the URL.
  - `Main.jsx`: Entry point of the application where React is rendered to the DOM.
- `public/`: Contains static assets such as images and HTML files.
- `README.md`: Documentation file providing information about the application.
- `package.json`: Metadata file containing project dependencies and scripts.

### ChatGPT Usage Explanation
0: No Experience

I choose not to use ChatGPT as a student working on this assignment mostly because I wanted to concentrate on using other tools and methods that are more in line with my present skill set and knowledge. I choose to solve problems and communicate via conventional techniques because of the assignment's scope and my goals. I'm still willing to learn more about ChatGPT and other AI technologies, though, as I pursue my academic and professional goals and continue to advance in my education.


## Name: sai charan panthulu
## Public IPv4 DNS::ec2-54-221-169-89.compute-1.amazonaws.com
## Public IPv4 address: 54.221.169.89
## Address for the website: http://54.221.169.89/
## Git Repository : https://github.com/ICSI-518-Software-Engineering/web-development-and-deployement-charan