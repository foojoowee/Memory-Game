# piano-deploy

Overview:

This project replicates a simple and fun memory game. The project is built using ReactJS. There are 2 mini games on this web-app, self explanatory when you try to launch it.

Usage/Development:

I did not incorporate Redux into this project as the level of complexity of the project was not too high - just some minor prop-drilling was required to make it work. The data for high scores is stored in LocalStorage. 

There is also written code for MongoDB connection (commented out, the main configuration file in DB --> server.js ) which works locally on my PC (but since this is deployed statically on GH pages - I will just use the code which stores data in localStorage for now.)

The project can be ran locally using "npm run start" and built for deployment using "npm run build". The ExpressJS dependency will be installed when you install dependencies as it was used for the MongoDB implementation.


Contact:

You can contact me at foo.joowee@gmail.com.
