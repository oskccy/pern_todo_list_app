# Task List Made with PERN stack
This is a simple todo list web application built with PERN stack (PostgreSQL, Express, React, and Node.js). 
The application allows users to add, edit, and delete tasks. 
I made this app to futher my knowledge in CRUDing in sync with a PostgreSQL database, creating a localhost API and making a React.js UI.

## Getting Started

To get started with downloading and running this app locally, follow the instructions below.

### Prerequisites

You must have the following tools installed before proceeding:

- _Node.js_ (check if it's installed in command line, with: __node -v__), (you can install Node.js here: https://nodejs.org/en/download)
- _PostgreSQL_ (check if it's installed in command line, with: __postgres -V__), (you can install PostgreSQL here: https://www.postgresql.org/download/)
- _Git_ (check if it's installed in command line, with: __git -v__), (you can install Git here if it already isn't on your local machine: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installing

Open your command line in order to run the following:

1. Clone this repository to your local machine: __git clone https://github.com/oskccy/pern_todo_list_app.git__
2. Navigate to the project directory: __cd pern_todo_list_app__
3. Install the dependencies for both the client and server: __cd server && npm install && cd .. && cd client && npm install && cd ..__
4. Create a new PostgreSQL database & table for this application using the postgres superuser:
      1. Open and enter the postgreSQL shell as the postgres superuser: __psql -U postgres__
      2. Paste & run the SQL in the ./server/db.sql file in the postgreSQL shell.
5. Exit the postgreSQL shell: __ctrl + d__
6. Start the client and server (each will be running using a command line window): 
      1. Start the frontend with: __cd client && npm run start:frontend__
      2. Create a new command line window (it will be dedicated to running the backend), navigate to the project directory, start the server: __npm run start:backend__
     
7. If a browser window did not open automatically when running the client, open your web browser and navigate to http://localhost:3000 to view/use the app!

## Usage

To use this application, follow the instructions below:

- Add a new task by entering the task description in the input field and clicking the "Add" button.
- Edit a task by clicking the "Edit" button next to the task you want to edit. A modal will appear where you can edit the task description.
- Delete a task by clicking the "Delete" button next to the task you want to delete.

## Frameworks + Technologies Used

- _PostgreSQL_ - The open source object-relational database system
- _Express.js_ - The fast, unopinionated, minimalist web framework for Node.js
- _React.js_ - A JavaScript library for building user interfaces
- _Node.js_ - A JavaScript runtime built on Chrome's V8 JavaScript engine
- _Bootstrap_ CSS - A free online CSS import, used for quick and simple styling and easy HTML/JSX class syntax.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
