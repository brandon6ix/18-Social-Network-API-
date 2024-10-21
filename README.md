# Social Network API

## Description
This project is a RESTful API for a social network web application built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**. The API allows users to share their thoughts, react to friends' thoughts, and manage a friend list. MongoDB is used to handle large amounts of unstructured data, making this API suitable for social networking platforms.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
  - [Reaction Routes](#reaction-routes)
- [Models](#models)
  - [User Model](#user-model)
  - [Thought Model](#thought-model)
  - [Reaction Schema](#reaction-schema)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/social-network-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd social-network-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Ensure MongoDB is running locally or set up MongoDB Atlas.
5. Optionally, configure a `.env` file for the MongoDB connection string:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/socialnetwork
   ```

## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. The API will run on `http://localhost:3001`. You can test the API using **Insomnia**, **Postman**, or any similar API testing tool.

## API Routes

### User Routes
- **GET** `/api/users` - Get all users
- **GET** `/api/users/:userId` - Get a single user by ID
- **POST** `/api/users` - Create a new user
- **PUT** `/api/users/:userId` - Update a user by ID
- **DELETE** `/api/users/:userId` - Delete a user by ID
- **POST** `/api/users/:userId/friends/:friendId` - Add a friend to a user’s friend list
- **DELETE** `/api/users/:userId/friends/:friendId` - Remove a friend from a user’s friend list

### Thought Routes
- **GET** `/api/thoughts` - Get all thoughts
- **GET** `/api/thoughts/:thoughtId` - Get a single thought by ID
- **POST** `/api/thoughts` - Create a new thought
- **PUT** `/api/thoughts/:thoughtId` - Update a thought by ID
- **DELETE** `/api/thoughts/:thoughtId` - Delete a thought by ID

### Reaction Routes
- **POST** `/api/thoughts/:thoughtId/reactions` - Create a reaction for a thought
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction from a thought

## Models

### User Model
- **username**: String, unique, required, trimmed
- **email**: String, required, unique, must match a valid email address
- **thoughts**: Array of `_id` values referencing the Thought model
- **friends**: Array of `_id` values referencing the User model
- **friendCount**: Virtual property that returns the length of the friends array

### Thought Model
- **thoughtText**: String, required, 1-280 characters
- **createdAt**: Date, default value set to the current timestamp
- **username**: String, required
- **reactions**: Array of nested documents created with the reactionSchema
- **reactionCount**: Virtual property that returns the length of the reactions array

### Reaction Schema
- **reactionId**: ObjectId, default value set to a new ObjectId
- **reactionBody**: String, required, 280 character maximum
- **username**: String, required
- **createdAt**: Date, default value set to the current timestamp

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia for API testing

## License
This project is licensed under the MIT License.
