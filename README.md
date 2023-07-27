Evaluate a News Article with Natural Language Processing
<img width="847" alt="Screenshot_2023-07-26_at_4 39 50_PM" src="https://github.com/amarranjan1/Evaluate-a-News-Article-with-NLP/assets/35811614/eb792b40-bd38-496a-a608-7fe9a2bfbfff">

This project is designed to evaluate a news article using Natural Language Processing (NLP) techniques. It aims to provide insights into the sentiment and subjectivity of the given article, helping users understand the overall tone and credibility of the information.

Project Architecture
The project follows a specific architecture to ensure its proper functioning. The main files and folders present in the project are as follows:

src/views/: Contains the HTML file(s) with valid semantic HTML.
src/js/: Minimum of 2 JavaScript files, all found by webpack.
styles/ or scss/: Contains the SCSS files for styling the project.
webpack.config.js: Webpack configuration file for development.
webpack.prod.js: Webpack configuration file for production.
server.js: Contains the API keys and handles API calls and responses.

To run the app, 

Install project dependencies using npm:
npm install

Start the production server:
npm run build-prod
npm start

Open your web browser and visit the following URL:
http://localhost:8081

Start the development server:
npm run build-dev

Open your web browser and visit the following URL:
http://localhost:8080

Dependencies
The project relies on the following dependencies:

Webpack: For bundling the application.
Babel: To transpile modern JavaScript code to older versions.
Workbox: For implementing service workers and enabling offline functionality.
Jest: For running unit tests.
Please ensure you have Node.js and npm installed on your system before running the application.

Functionality
API
The app makes a successful API call to retrieve information about the news article. The API keys are securely stored in the server.js file and are not exposed to the client-side code. The response from the API is then displayed in the view, showing the following data points:

Polarity: Positive or negative sentiment of the article.
Subjectivity: Whether the article is subjective or factual.
Text: A text snippet from the article.
Offline Functionality
The project is equipped with service workers using the Workbox plugin in webpack.prod.js. This enables the application to work offline by caching the required resources.

Testing
The project has Jest installed, and you can run the unit tests using the following command:


npm test
Each JavaScript file in the src/js folder should have at least one corresponding unit test, and all the tests should pass successfully.

Interactions
The application includes a single field form that uses the correct HTML tags and structure. It validates the form input and returns an error to alert the user if the input field is left blank. Additionally, regex is implemented to check the validity of the provided URL for bonus points.

Contact Information
If you have any questions or need further assistance, please feel free to contact the project maintainer:

Name: Amar Ranjan
Email: amarranjan0@gmail.com
We hope you find this project helpful and insightful in evaluating news articles with NLP. Happy analyzing!
