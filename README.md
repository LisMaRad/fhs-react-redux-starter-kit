# FHS React/Redux Starter Kit

This a starter kit for students of the University of Applied Sciences Salzburg, for the lectures:

- Frontend Development 2 (Bachelor)
- Client Side Web-Engineering 2 (Master)

It includes React/Redux/Storybook and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Prerequisite

- Node 8.10 or later
  - Windows https://github.com/coreybutler/nvm-windows
  - OSX/Linux https://github.com/creationix/nvm

# Setup

```
git clone git@github.com:webpapaya/fhs-react-redux-starter-kit.git
npm install
npm run start
```

# Deployment to firebase

```
npm run build
firebase deploy
```

# Available Scripts

```
npm run start # starts storybook and the react app
npm run start:app # starts the react app
npm run start:storybook # starts storybook

npm run build # builds storybook and the react app
npm run build:app # builds the react app
npm run build:storybook # builds storybook

npm run test # runs tests
npm run test -- --watch # runs tests in watch mode
npm run lint # lints files
npm run lint -- --fix # lints files and automatically fixes errors
```

# Folder Structure

```
├── .storybook                # storybook configuration
├── build                     # app build
├── storybook-static          # storybook build
├── public                    # public assets (favicon, ...)
└── src                       # Application Code
  ├── action-creators         # Redux action creators
  ├── components              # Components which could be reused in other applications
  ├── containers              # Components which can't be reused in other applications
  └── reducers                # Redux reducers
```
