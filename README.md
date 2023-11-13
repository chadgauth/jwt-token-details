# JWT Token Decoder - Node.js Project

Today, I developed a simple yet functional Node.js application that decodes JWT tokens and verifies their signatures. This application showcases my ability to work with Node.js and JWT tokens.

## Overview

This application provides a user-friendly interface to input JWT tokens and get their decoded details. It also verifies the signatures of the tokens.

![Application Screenshot](screen.png)

## Setup and Installation

To run this application locally for development or testing, follow these steps:

### Prerequisites

Ensure you have Node.js and npm installed on your machine. If not, download and install them from [here](https://nodejs.org/en/download/).

### Steps

1. Clone the repository:

```bash
git clone https://github.com/chadgauth/jwt-token-details.git
```

2. Install the dependencies
```bash
npm install
```

3. Create a .env file in the root directory of the project and add the following:
```bash
SECRET=your_secret_key
```
Replace 'your_secret_key' with your own secret key.

4. Start the server
```bash
npm start
```

## How to Use

To decode a JWT token, make a GET request to '/tokenDetails' with the token in the 'x-access-token' header.

## Technologies Used

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Developer

* **Chad Gauthier**

## License

This project is licensed under the ISC License and is free for use, modification, and distribution.
