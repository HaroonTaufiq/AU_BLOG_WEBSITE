# Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and JWT authentication.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a blog website where users can create, edit, delete, and view blogs. It utilizes JWT authentication for user login and signup processes.

## Features

- User Authentication (Signup/Login)
- Create, Edit, Delete Blogs
- Upload and display images
- Comment on blogs
- Category-wise blog search

## Technologies Used

### Frontend

- React.js
- Material-UI

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication

- JSON Web Token (JWT)

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js
- MongoDB

1. Clone the repository.

    ```bash
    git clone https://github.com/your-username/blog-application.git
    cd blog-application
    ```

2. Install dependencies for both client and server.

    ```bash
    # Install server dependencies in the main directory of the project
    npm install

    # Install client dependencies
    cd frontend
    npm install
    ```

3. Create a `.env` file in the server directory with the following content:

    ```plaintext
    PORT=5000
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret
    ```

4. Run the application.

    ```bash
    # Start the server
    npm start

    # Start the client
    cd client
    npm start
    ```

## Usage

1. Open your browser and navigate to http://localhost:3000.
2. Sign up for a new account or log in with an existing account.
3. Create, edit, or delete blogs.
4. Add comments to blogs and manage your posts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

If you have any questions or feedback, feel free to reach out.

GitHub: [HaroonTaufiq](https://github.com/HaroonTaufiq)
Email: itx.haroon1@gmail.com
