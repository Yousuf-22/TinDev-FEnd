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
    - sudo systemctl start nginx => To start ngnix
    - sudo systemctl enable nginx => Enable ngnix
    - cd /var/www/html/ 
    - cd
    - cd TinDev-FEnd
    - copy code from dist(build files) to var/www/html/

    - sudo scp -r dist/* /var/www/html/
    - Enable port:80 of your instance

- Back-End
    - cd Document 
    - cd chrome Download
    - chmod 400 "TinDev-secret.pem"
    - ssh -i "TinDev-secret.pem" ubuntu@ec2-13-61-141-164.eu-north-1.compute.amazonaws.com
    - cd Tindev-BEnd
    - npm i
    - npm run dev (not work)
    - Allowed ec2 instance, Public IP on MongoDB server
    - install pm2 (for 24x7 running the server)

    - npm install pm2 -g
    - pm2 start npm -- start (for start the pm2)
    - pm2 logs (To see Error)
    - pm2 list (To see the Process)
    - pm2 flush npm  --> npm is the name of process
    - pm2 stop npm
    - pm2 delete npm
    - pm2 start npm --name "Tindev-BEnd" -- start (for changing the name of the process)
    - config nginx :
    - sudo nano /etc/nginx/sites-available/default

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

    - restart nginx: sudo systemctl restart nginx
    - sudo systemctl daemon-reexec
    - modify the BaseUrl in front-End project to /api

    - if frontend change or update then:
        - git pull
        - npm run build
        - sudo scp -r dist/* /var/www/html/


# Adding a Custom Domain Name

    - Purchased domain name from Namecheap.com
    - signup on cloudflare & add a new domain name
    - change the nameservers on Namecheap and point into cloudflare
    - wait for sometime till your nameserver are updated it make 5min for me
    - DNS record: A -> tindev.site in 13.61.141.164
    - Enable SSL for website

# Sending Email via SES

    - Create a IAM user
    - Give access AMAZONSESFULLAccess
    - Amazon ESE: Create an Identity
    - verify your domain name Identity
    - verify your emailaddress Identity
    - Install AWS SDK - v3 
    - setup SESclient
    - Access credentails should be created in IAM user securityCredentailsTab
    - Add the credentails to the .env file
    - write code for sesClient
    - write code for sendingEmail
    - Make the email dynamic by passing more params to the run function

Domain name = tindev.com
Front-End = http://13.61.141.164/
Back-End = http://13.61.141.164:7777 => tindev.com/api

# Scheduling cron Jobs in Nodejs

    - Installing node-cron
    - Learn about cron expression systax visit - crontab
    - Schedule a job
    - data-fns
    - find all the unique email id who have got connection request in previous day
    - Send Email

# Razorpay Payment Gateway intergration 

    - Sign-up and complete KYC
    - Created a UI for premium page
    - create an API for create order in BE   




# Real time chat using Websocket(Socket.io)
    - Build the UI for a chat window on /chat/:targetUserId
    - Setup socket.io in backend
    - npm i socket.io
    
- Basic Structure

Body
NavBar
Route = / => Feed
Route = /login => Login
Route = /connections => Connections
Route = /profile => Profile
