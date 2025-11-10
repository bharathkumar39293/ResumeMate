# ResumeMate Server

Backend API for ResumeMate - AI-powered resume builder.

## Deployment on Render

### Environment Variables Required:
- `PORT` - Auto-set by Render
- `MONGO_URI` - Your MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `GEMINI_API_KEY` - Google AI API key
- `IMAGEKIT_PUBLIC_KEY` - ImageKit public key
- `IMAGEKIT_PRIVATE_KEY` - ImageKit private key
- `IMAGEKIT_URL_ENDPOINT` - ImageKit URL endpoint

### Deployment Steps:
1. Push code to GitHub
2. Go to Render Dashboard
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure the service
6. Add environment variables
7. Deploy!
