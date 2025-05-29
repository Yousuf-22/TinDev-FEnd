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
- Edit Profile feature
- Show Toast message on save of profile

- See all connections Page
- New page - See all my connection
- New page - See all my connection request
- Feature - Accept/reject connection request

# Deployment

- SignUp on AWS
- Lauch Instance
- locally chmod 400 "TinDev-secret.pem"
- locally ssh -i "TinDev-secret.pem" ubuntu@ec2-13-61-141-164.eu-north-1.compute.amazonaws.com
- install node and the correct version of node => 20.19.0 by nvm install 20.19.0

- git clone TinDev -FEnd and BEnd

- Front-End
    - install dependencies by npm i 
    - npm run build
    - sudp apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - cd /var/www/html/
    - cd
    - cd TinDev-FEnd
    - copy code from dist(build files) to var/www/html/

    - sudo scp -r dist/* /var/www/html/
    - Enable port:80 of your instance

- Back-End
    - Allowed ec2 instance Public IP on MongoDB server
    - install pm2 (for 24x7 running the server)
    - npm install pm2 -g
    - pm2 start npm -- start 
    - pm2 logs
    - pm2 list
    - pm2 flush npm  -- npm is the name of process
    - pm2 stop npm
    - pm2 delete npm
    - pm2 start npm --name "Tindev-BEnd" -- start 
    - config nginx - /etc/nginx/sites-available/default
    - restart nginx
    - sudo systemctl restart nginx
    - modify the BaseUrl in front-End project to /api

# Nginx Configuration

    - Server Name:
        server_name 13.61.141.164;


    - ngins config :
        location /api/ {
            proxy_pass http://localhost:7777/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }


Domain name = tindev.com
Front-End = http://13.61.141.164/
Back-End = http://13.61.141.164:7777 => tindev.com/api


- Basic Structure

Body
NavBar
Route = / => Feed
Route = /login => Login
Route = /connections => Connections
Route = /profile => Profile
