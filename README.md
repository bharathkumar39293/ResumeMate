# ResumeMate — AI Powered Resume Builder

A modern, full-stack resume builder application that helps you create professional, ATS-friendly resumes in minutes. Features customizable templates with real-time preview, AI-powered content enhancement, and cloud storage for managing multiple resumes.

## Features

### Beautiful Templates
- 4 Professional Templates: Classic, Modern, Minimal, and Minimal with Image
- Customizable Colors: Personalize your resume with a built-in color picker
- Dark Theme UI: Modern dark slate interface with blue/purple gradients
- Real-time Preview: See changes instantly as you build your resume

### AI-Powered Content
- Smart Summaries: Generate professional summaries tailored to your experience
- Intelligent Suggestions: AI-assisted content generation for better impact
- Job Description Enhancement: AI-powered enhancement of work experience descriptions
- PDF Resume Parsing: Upload existing PDF resumes and automatically extract content using AI
- Powered by OpenAI API: Advanced AI for natural, professional content generation

### Comprehensive Sections
- Personal Information with profile photo upload
- Professional Summary
- Work Experience with multiple positions
- Education history
- Projects showcase
- Skills with proficiency levels

### Cloud Storage & Management
- Save & Edit: Store resumes securely in the cloud with auto-save functionality
- Multiple Resumes: Create and manage unlimited resumes
- Quick Actions: Template-based resume creation and AI-powered PDF resume parsing
- Public/Private Sharing: Share resumes publicly with shareable links or keep them private
- Profile Image Upload: Upload and manage profile photos with background removal option

### Secure Authentication
- JWT-based authentication
- Secure user data storage
- Protected routes and API endpoints

## Tech Stack

### Frontend
- **React 19** - Modern UI library with latest features
- **Vite 7** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Redux Toolkit** - State management for authentication and app state
- **React Router v7** - Client-side routing and navigation
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications for user feedback
- **Lucide React** - Modern icon library
- **React PDF to Text** - PDF parsing for resume uploads

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express 5** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose 8** - MongoDB object modeling and ODM
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcrypt** - Password hashing for security
- **Multer** - File upload middleware
- **ImageKit** - Cloud image storage and optimization
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### AI Integration
- **OpenAI API** - AI content generation for resume enhancement
  - Professional summary generation
  - Job description enhancement
  - Resume data extraction from PDF uploads

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB database (local or cloud like MongoDB Atlas)
- ImageKit account (for image storage)
- OpenAI API key (for AI features)

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
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-3.5-turbo
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

## Key Features Implementation

- **Real-time Preview**: Live preview updates as you edit your resume
- **Template System**: 4 professional templates (Classic, Modern, Minimal, Minimal with Image)
- **Color Customization**: Built-in color picker for accent colors
- **PDF Export**: Print-friendly resume export functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme UI**: Modern dark interface with gradient accents

## Acknowledgments

- OpenAI for AI-powered content generation
- ImageKit for image storage and optimization
- The React and Node.js communities

Built with ❤️ by Bharath Kumar
