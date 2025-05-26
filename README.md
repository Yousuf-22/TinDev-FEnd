# Tindev-FEnd

- Create a Vite + React application
- Remove unnessary code and create a Hello app
- install tailwindcss
- install daisy UI
- add Navbar component to App.jsx
- create a separate Navbar.jsx Compo file
- Install react-router-dom
- Create browser router > routes > route=/body > routeChildren
- Create an Outlet comp in body comp
- create footer

- Login page
- Install axios, JS library to make an API call from frontend
- CORS - install cors in backend => add middleware with confiiguration: origin, credentials
- whenever you re making API call so pass axios => {withcredentail : true}
- Install redux toolkit
- Install react redux
- create a configureStore => Provider => createSlice => add reducer to store
- Login and see if your data is coming properly in the store
- NavBar is updated as soon as user logs in
- Refactor our code to add constants file + created a components folder

- You should not be access other routes without login
- If token is not present, redirect user to login page
- Logout feature
- Profile

- Basic Structure

Body
NavBar
Route = / => Feed
Route = /login => Login
Route = /connections => Connections
Route = /profile => Profile
