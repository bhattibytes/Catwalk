# Catwalk - A Front End Capstone Project
Representative of a cloned fashion ecommerce site that enables customers the ability to search, browse, add to cart, and checkout items. This app was previously deployed on AWS using an EC2 instance.

## How to Start
  **Installation**
  1. Clone the repo:
  ```sh
  git clone https://github.com/Terrific-Trees/Catwalk.git
  ```
  2. Install NPM packages:
  ```sh
  npm install
  ```
  **Production:** To run this application in production mode type
  `npm start` inside the terminal <br />

  **Development:** To run this application in development mode you will need
  to run two separate terminals and run these scripts for the server and client sides respectively
  1) `npm run dev` (Server side development w/ nodemon)
  2) `npm run dev:react` (Client side development w/ React)

## Primary Technologies
- React
- Express
- Redux
- Jest

## Full Requirements
**List of dependencies:**
- @reduxjs/toolkit 1.5.1
- axios 0.21.1
- body-parser 19.0
- dotenv 8.2.0
- enzyme-to-json 3.6.2
- express 4.17.1
- jquery 3.6.0
- moment 2.29.1
- react 7.0.2
- react-dom 17.0.2
- react-redux 7.2.3
- redux 4.0.5
- redux-thunk 2.3.0
- request 2.88.2

**List of dev dependencies:**
- @babel/core 7.13.15
- @babel/plugin-transform-runtime 7.13.15
- @babel/preset-env 7.13.15
- @babel/preset-react 7.13.13
- @wojtekmaj/enzyme-adapter-react-17 0.6.1
- babel-loader 8.2.2
- css-loader 5.2.2
- env 0.0.2
- enzyme 3.11.0
- jest 26.6.3
- jest-css-modules 2.1.0
- live-server 1.2.1
- nodemon 2.0.7
- redux-devtools 3.7.0
- regenerator-runtime 0.13.7
- style-loader 2.0.0
- webpack 4.46.0
- webpack-cli 4.6.0

## Usage
The three main widget components: <br />
1. Overview Widget
This feature gives client the ability to filter through all styles available for a product. Client can click through a gallery of images for a given style. Client can add products by quantity and size. This was the top-most module on the Product Detail page. The functionality contained within this module can be divided into several pieces:
- Image gallery
- Product information
- Style selector
- Add to cart <br />
![Alt text](/client/src/Assests/OverviewWidget.png "Overview")

2. Related Products Widget
Related Products provides clients with a carousel of products related to the overview product above. The functionality contained within this module can be divided into several pieces:
- Related Products gallery
- Comparision overlay
- Your Outfit gallery <br />
![Alt text](/client/src/Assests/RelatedProductWidget.png "Related")

3. Ratings & Reviews Widget
The Ratings & Reviews module was implemented to allow viewing and submission of reviews for a product selected. The functionality contained within this module can be divided into several pieces:
- Write new review
- Reviews List
- Sorting
- Rating Breakdown
- Product Breakdown <br />
![Alt text](/client/src/Assests/RatingsReviewsWidget.png "Reviews")