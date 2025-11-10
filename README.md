# ResumeMate

A modern, AI-powered resume builder that helps you create professional resumes in minutes. Built with React and powered by Google Gemini AI for intelligent content suggestions.

## Features

### Beautiful Templates
- 4 Professional Templates: Classic, Modern, Minimal, and Minimal with Image
- Customizable Colors: Personalize your resume with a built-in color picker
- Dark Theme UI: Modern dark slate interface with blue/purple gradients
- Real-time Preview: See changes instantly as you build your resume

### AI-Powered Content
- Smart Summaries: Generate professional summaries tailored to your experience
- Intelligent Suggestions: AI-assisted content generation for better impact
- Powered by Google Gemini: Advanced AI for natural, professional content

### Comprehensive Sections
- Personal Information with profile photo upload
- Professional Summary
- Work Experience with multiple positions
- Education history
- Projects showcase
- Skills with proficiency levels

### Cloud Storage
- Save & Edit: Store resumes securely in the cloud
- Multiple Resumes: Create and manage unlimited resumes
- Quick Actions: Template-based resume creation and AI-powered resume upload parsing

### Secure Authentication
- JWT-based authentication
- Secure user data storage
- Protected routes and API endpoints

## Tech Stack

### Frontend
- React 19 - Modern UI library
- Vite 7 - Lightning-fast build tool
- Tailwind CSS 4 - Utility-first styling
- Redux Toolkit - State management
- React Router v7 - Navigation
- Axios - HTTP client

### Backend
- Express 5 - Web framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- Multer - File uploads
- ImageKit - Image storage

### AI Integration
- Google Gemini 2.5 Flash - AI content generation

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB database
- ImageKit account
- Google AI API key

### Installation

1. Clone the repository
git clone https://github.com/bharathkumar39293/ResumeMate.git
cd ResumeMate

2. Install dependencies
cd client
npm install
cd ../server
npm install

3. Environment Setup

Create .env file in the server directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_ai_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url

Create .env file in the client directory:
VITE_API_URL=http://localhost:5000/api

4. Run the application

Terminal 1 - Start backend server:
cd server
npm start

Terminal 2 - Start frontend dev server:
cd client
npm run dev

5. Access the application
Open your browser and navigate to http://localhost:5173

## Project Structure

ResumeMate/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/        # Images, templates
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── app/           # Redux store & slices
│   │   └── configs/       # API configuration
│   └── package.json
│
├── server/                 # Backend Express application
│   ├── configs/           # Database, AI, ImageKit configs
│   ├── controllers/       # Route controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── middlewares/       # Auth middleware
│   └── server.js          # Entry point
│
└── README.md

## Design Highlights

- Dark Theme: Modern slate-950/900 gradient backgrounds
- Blue/Purple Accents: Vibrant gradient CTAs and highlights
- Glass Morphism: Semi-transparent cards with backdrop blur
- Responsive Design: Mobile-first approach
- Smooth Animations: Polished hover effects and transitions

## Security

- Passwords hashed with bcrypt
- JWT token-based authentication
- Protected API routes
- Secure file uploads
- Environment variable configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

Bharath Kumar
- GitHub: @bharathkumar39293
- Email: Bharath.ccbp@gmail.com

## Acknowledgments

- Google Gemini AI for intelligent content generation
- ImageKit for image storage and optimization
- The React and Node.js communities

Built with ❤️ by Bharath Kumar
