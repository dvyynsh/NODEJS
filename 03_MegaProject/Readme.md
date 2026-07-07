# Finally Mega Project

# first we did
  bash `npm init`

# adding .gitignore file
  it will ensure that node_modules folder is not pushed to git
  go to the website [ gitignore genrators] and type Node there copy whole code paste it here

# Then we make .env file ( you can avoid )
  it will ensure that our sensitive data is not pushed to git
  create a file called .env and add your sensitive data there

# Then we make folder called "src"
  for just in sake of organization.

# Then in package.json file we add
  type: "module"

# we using Nodemon for running our project
 (what it does is it will automatically restart the server when we make changes in our code)
  bash ` npm i -D nodemon `

  But also change package.json file to add script for nodemon
  in script remove test and add "dev": "nodemon src/index.js" in scripts

# next we add folders in src folder
  1. controllers
  2. models
  3. routes
  4. utils
  as this is how production apps are structured and organized.

{
## How to connect a Databse to our project (using MongoDB)
# We made an account on mongoDb atlas (free trial)
  1. After creating account and choosing plan we create a cluster
  2. Then In security tab in Quickstart section
  3. select local environment and ip 0.0.0.0/0 Finish and close
  4. You can view in Project Overview section.
  5. Also if you want to delete then go to security/NetworkAccess.

# Now here's comes interesting part
  1. In database/clusters section click on connect --> compass.
  2. you saw the string but password not written there.
  3. copy the string and paste it in .env file and add your password there.
  4. Make sure remove that ending '/'.
}

# Now we need to install packages for our project 
# Using three major packages
  1. express
  2. mongoose
  3. dotenv
  bash `npm i express mongoose dotenv`
package.json file will be updated with these dependencies.

-----------------------------------------------------------------------------------------------

## Game Begin....
  approch 1: In index.js file we will write code to connect our database and start our server.
  but approch 1 looks messy and unorganized so we will go for approch 2.
  we going to write in db/index.js file and export it to index.js file.

  After Completion we got error
  ` cannot find module 'C:\Users\divya\OneDrive\Desktop\NodeJS\03_MegaProject\src\constants.js' imported from C:\Users\divya\OneDrive\Desktop\NodeJS\03_MegaProject\src\index.js `
  1. this error can be cured by changing the import files like ./db to ./db.index.js
  2. but the error may also come 'querySrv ECONNREFUSED` and many more big error
  3. So instead use connect through CONNECT->DRIVERS->OFF srvconnectionstring-> then copy that to your env.


## installed cookie-parser cors
bash ` npm i cookie-parser cors `  

# Finished API, Errors All Handling 
  1. put in the folder [ utils ]
  2. Manupulated App.js and added one line in .env file also
  3. Manupulated index.js also

## Making Schema
 1. Folder Models

## USing Aggregate-Paginate-v2
bash ` npm i mongoose-aggregate-paginate-v2 `
and using on video.model.js

## Using Another Library
 1. bcrypt
 2. jsonwebtoken
bash ` npm i bcrypt jsonwebtoken `

import it into user.models
Using JsonWebtoken in .env file ( you can cheack how to use this in their website)

## Now how to upload files...
we are using cloudinary
  1. bash ` npm install cloudinary `
  2. Create an account there
  3. Putting in utils/cloudinary.js ---> prototyped code 
  4. Adding in .env file also

## We install mutler also
bash ` npm i multer `
working on folder middleWare/mutler
Simple thing in every npm install if want to use it read documention in their website how to use
Then Copy paste code from there no need to learn or MugUp...

## Handled with Controller

## Till now what we did Server will run 
It will show running at port

----------------------------------------------------------------------------------------------------------------

# Dounloading Postman

