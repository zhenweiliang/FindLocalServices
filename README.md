This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)... still in development.

## Start the App

- create mysql database with /src/mockServer/ModelExport.sql
- nodemon server.js at port 4000 within /src/mockServer
- npm start

### CSS
- every component styled by respective ComponentName.module.scss
- only app.scss ,index.css and statics/css has a global scope

### React
- src/containers : major Smart components, have its own set of store,actionCreator,reducer, and sub-ui-components.
- src/components: components shared by multiple components


