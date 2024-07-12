# Quora Clone

This repository contains a simple Quora-like web application built using Node.js, Express, and EJS. Users can create, read, update, and delete posts.

## Features

- Create new posts with a username and content.
- View a list of all posts.
- View details of a specific post.
- Edit existing posts.
- Delete posts.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mradul-bansal/quora-clone.git
   cd quora-clone

2. Install dependencies:
   ```sh
   npm install
### Running the Application
   
1. Start the server:

 ```sh
node index.js
```
2. Open your web browser and navigate to http://localhost:8080.

### File Structure
```
quora-clone/
├── public/
│   └── (static assets such as CSS, images)
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
├── index.js
└── package.json
```
 - public/: Contains static assets such as CSS and images.
 - views/: Contains EJS templates for rendering the UI.
 - edit.ejs: Form for editing an existing post.
 - index.ejs: Displays the list of all posts.
 - new.ejs: Form for creating a new post.
 - show.ejs: Displays the details of a specific post.
 - index.js: The main server file.
 - package.json: Contains the project metadata and dependencies.
   
### Routes

 - GET /posts: Display all posts.
 - GET /posts/new: Display form to create a new post.
 - POST /posts: Create a new post.
 - GET /posts/:id: Display a specific post.
 - GET /posts/:id/edit: Display form to edit a post.
 - PATCH /posts/:id: Update a specific post.
 - DELETE /posts/:id: Delete a specific post.
   
### Dependencies

 - express
 - ejs
 - uuid
 - method-override

### Acknowledgments

Inspired by Quora

