# Travel-Tales-Front-end

Travel Tales is a full-stack blog platform where users can share their travel experiences, read blogs from other travelers, and interact with the community. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this app allows users to sign up, log in with JWT authentication, and create, edit, or delete their travel blogs.

Key Features:
Authentication: Secure user sign-up and login using JSON Web Tokens (JWT) for authentication.
User Profiles: Manage personal profiles and see the posts created by the logged-in user.
Blog Creation: Users can write, edit, and delete their travel blogs.
Read Blogs: Browse and read travel stories shared by others.
CRUD Operations: Full support for creating, reading, updating, and deleting blogs.
Backend: Built with Express.js and MongoDB to handle user authentication and blog data.
Frontend: React.js for a responsive and dynamic user interface.
Responsive Design: Styled with  CSS for a modern user interface.

Tech Stack:
Frontend: React.js,  CSS
Backend: Node.js, Express.js, MongoDB
Authentication: JWT (JSON Web Tokens)
State Management: React ContextAPi
Deployment: https://travel-tales-3c8.netlify.app/
Setup Instructions

1. Clone the Repository
bash
git clone https://github.com/ainan-code/travel-tales.git

2. Install Dependencies
bash
npm install

4. Configure Environment Variables
In the server directory, create a .env file and add the following environment variables:

plaintext
MONGO_URI=your_mongo_connection_string
PORT=your_preferred_backend_port
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development_or_production
4. Start the Development Servers
Run both the backend and frontend servers in separate terminal windows:

Start Command:

bash
Copy code
cd server
npm start
