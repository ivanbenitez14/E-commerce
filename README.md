# E-commerce

Frontend E-commerce Project

Welcome to our E-commerce frontend project! This project focuses on providing a visually appealing and functional platform for product visualization and management in an e-commerce environment.

## Key Features
Product View: Our application allows users to view products available for sale. Each product is displayed with an image, name, and corresponding price.

Admin Management: Administrators have access to exclusive views that enable them to perform Create, Read, Update, and Delete (CRUD) operations on products.

Admin Management: You can also add new administrators, facilitating collaboration in platform management.

Logout: Users can securely log out once they have finished working in the application.

## Technologies Used
React: A widely used JavaScript framework for creating interactive user interfaces.

Vite: A rapid development tool that accelerates the creation of React projects.

Redux Toolkit: For application state management.

Axios: For making HTTP requests to backend services.

React Router DOM: For navigation and routing within the application.

## Getting Started
To get started with the project, ensure you have Node.js and npm installed. Then, follow these steps:

1. **Clone the Repository**:
   ```
   git clone https://github.com/ivanbenitez14/E-commerce-frontend.git
   cd project-directory
2. Install Dependencies:
   ```
   npm install
4. Configure the .env File:
   ```
   Create a file named .env at the root of your project.
   Add the following configuration to the .env file and replace the URL with the address of your backend server:
   VITE_API_URL=http://localhost:host.com/api
6. Configure Axios:
   Ensure that your project uses Axios for making HTTP requests.
   Then, configure Axios to use the server URL defined in the .env file. Modify the file that makes requests as follows:
   ```
   import axios from 'axios';
   import { getEnvVariables } from '../helpers/getEnvVariables';
   const { VITE_API_URL } = getEnvVariables();
   const ecommerceAPI = axios.create({
        baseURL: VITE_API_URL,
   });
7. Start the Application in Development Mode:
   ```
   npm run dev
   ```
   You are now ready to start working on your E-commerce frontend project!
