# trackYoSelf
A smart journal web app to track your feelz. Create a user account and start tracking! TrackYoSelf will automatically perform a sentiment analysis on your journal entry and score 5 emotions based on the text. See a graph of the emotion in each entry and of the emotions over the past 30 tracks.
https://track-yo-self.herokuapp.com/

# Technologies Used
MongoDB</br>
Mongoose</br>
Express</br>
React</br>
Node.js</br>
Passport</br>
Axios</br>
Victory</br>
Indico API</br>

# Getting Started
Visit the deployed app using the link above. To try out locally, follow these steps:</br>
1. npm install the package.json in both the root and client directories
1. create a .gitignore in the root and client directories and add:
    * /node_modules
    * /coverage
    * /build
    * .DS_Store
    * .env.local
    * .env.development.local
    * .env.test.local
    * .env.production.local
    * npm-debug.log*
    * yarn-debug.log*
    * yarn-error.log*
    * .env
1. create a .env in the root directory and add your Indico.io API key (https://indico.io/plans)
1. start your mongo server
1. npm start

# Contributors
Jesse Bustamante</br>
Ryan Evans</br>
Alvin Go</br>
Julie Groth</br>