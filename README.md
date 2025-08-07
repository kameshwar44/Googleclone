# Google Search Clone

A React-based Google search interface clone that uses the Google Custom Search API to provide real search functionality.

## Features

- 🔍 Real Google search using Custom Search API
- 🎨 Responsive Google-like UI
- 🔗 Working navigation between home and search pages
- ⚡ Fast search results display
- 🛡️ Secure API key management
- ♿ Accessibility improvements
- 🎯 Error handling and loading states

## Prerequisites

Before you begin, ensure you have:
- Node.js (version 14 or higher)
- npm or yarn package manager
- A Google Custom Search API key
- A Google Custom Search Engine ID

## Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd my-app
npm install
```

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your Google API credentials:
   ```
   REACT_APP_GOOGLE_API_KEY=your_actual_api_key_here
   REACT_APP_SEARCH_ENGINE_ID=your_actual_search_engine_id_here
   ```

### 3. Getting Google API Credentials

#### Get Custom Search API Key:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the "Custom Search API"
4. Create credentials (API Key)
5. Copy the API key to your `.env` file

#### Get Custom Search Engine ID:
1. Go to [Google Programmable Search Engine](https://programmablesearchengine.google.com/)
2. Create a new search engine
3. Configure it to search the entire web
4. Copy the Search Engine ID to your `.env` file

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App configuration.

## Project Structure

```
src/
├── Components/
│   ├── HomeScreen.js          # Main search page (Google homepage clone)
│   ├── HomeScreen.css         # Styles for home page
│   ├── Navbar.js             # Navigation component
│   ├── Navbar.css            # Navigation styles
│   └── SearchScreen/
│       ├── SearchScreen.js    # Search results page
│       └── SearchScreen.css   # Search results styles
├── App.js                     # Main app component with routing
├── index.js                   # React app entry point
└── StateProvider.js           # Context API setup (for future state management)
```

## Technologies Used

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Material-UI** - Icons and components
- **Google Custom Search API** - Real search functionality
- **Bootstrap Icons** - Additional icons
- **Recoil** - State management (configured for future use)

## Features Explained

### Search Functionality
- Real-time search using Google's Custom Search API
- Proper error handling for API failures
- Loading states during search operations
- URL encoding for search queries

### UI/UX Improvements
- Responsive design that works on all devices
- Google-accurate styling and layout
- Proper accessibility attributes
- Semantic HTML structure

### Security
- API keys stored in environment variables
- Secure external link handling
- Input sanitization for search queries

## Environment Variables

The following environment variables are required:

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_GOOGLE_API_KEY` | Google Custom Search API key | Yes |
| `REACT_APP_SEARCH_ENGINE_ID` | Google Custom Search Engine ID | Yes |

## Troubleshooting

### Search Not Working
1. Verify your API keys are correct in the `.env` file
2. Ensure the Custom Search API is enabled in Google Cloud Console
3. Check that your search engine is configured to search the entire web
4. Verify you haven't exceeded API quotas

### Build Issues
1. Run `npm install` to ensure all dependencies are installed
2. Clear cache with `npm start -- --reset-cache`
3. Delete `node_modules` and `package-lock.json`, then run `npm install`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please respect Google's trademarks and terms of service.

## Deployment

To deploy this application:

1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Ensure environment variables are set in your hosting environment
4. Configure your hosting service to serve `index.html` for all routes (for client-side routing)

Popular deployment options:
- Netlify
- Vercel
- GitHub Pages
- Heroku
