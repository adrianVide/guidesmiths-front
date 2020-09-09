Test challenge using React/Redux and NodeJS

## Available Scripts

Please navigate to `/back` on the console and run:

### ```npm i``` 
### ```npm run dev``` 
to keep the backend running with nodemon on port 3001.

## Local run

On a new console tab please navigate to `/front` and run:

### ```npm i```
### ```npm start```

the React/Redux app will be running on [http://localhost:3000](http://localhost:3000)
While both front and back are running, you can open a new console tab and run:

### ```npm run cypress```

the cypress UI will pop up and tests can be run from there. 
Please note the line 12 in `/front/src/storeConfig.js` has been commented out so cypress can run. If you want to use Redux dev tools please include that line and cypress will behave unpredictably.

## Dockerized run

On a new console navigate to `/front` and run:

### ```docker-compose up```

Wait for docker to build the container and install dependancies and the React/Redux app will be running on [http://localhost:3000](http://localhost:3000). Remember that backend NodeJS app must be running.

To use cypress in the dockerized app modify line 12 in `Dockerfile.dev` as follow:

### ```CMD ["npm", "run", "cypress"]```


