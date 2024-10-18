# Math Agent API

The Math Agent API is an Express.js-based server application that provides a mathematical calculation service using natural language processing. It utilizes the Google Vertex AI platform to interpret mathematical queries and perform calculations.

## Features

- Natural language processing for mathematical queries
- Integration with Google Vertex AI (Gemini 1.5 Flash model)
- RESTful API endpoint for calculations
- Structured output with results, steps, and explanations
- Logging in logger files for better tracking using winston logger

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12 or higher recommended)
- npm (Node Package Manager) installed
- Google Cloud account with Vertex AI API enabled
- Google Application Credentials JSON file

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/math-agent-api.git
   cd math-agent-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/google-credentials.json
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will start running on `http://localhost:3000` (or the port specified in your `.env` file).

3. To use the Math Agent API, send a POST request to `/api/agent` with a JSON body containing a `message` field:
   ```json
   {
     "message": "What is 25 multiplied by 4?"
   }
   ```

4. The API will respond with a JSON object containing the result, steps, and explanation:
   ```json
   {
     "message": {
       "result": 100,
       "steps": ["Used multiply function: multiply(25, 4)"],
       "explanation": "The calculation multiplies 25 by 4 to get 100."
     }
5. Logging
This project uses Winston for logging. Logs are written to:

Console
error.log file (for error-level logs)
combined.log file (for all logs)

Log files are stored in the project root directory.
Log Levels

info: General operational logs (e.g., server start, successful calculations)
error: Error logs (e.g., calculation errors, server issues)
   }
   ```

## Project Structure

- `server.js`: Main entry point for the Express server
- `routes/agentRoutes.js`: Defines API routes
- `controllers/calculateController.js`: Handles API requests and responses
- `services/mathAgent.js`: Implements the core logic for processing math queries
- `services/mathFunctions.js`: Defines basic math operations

## Dependencies

- express: Web server framework
- @langchain/google-vertexai: Integration with Google Vertex AI
- @langchain/core: Core functionality for LangChain
- dotenv: Environment variable management

## Contributing

Contributions to the Math Agent API are welcome. Please ensure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)