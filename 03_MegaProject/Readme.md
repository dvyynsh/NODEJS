# Finally Mega Project

# first we did
  1. npm init

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
  [ npm i -D nodemon ]

  But also change package.json file to add script for nodemon
  in script remove test and add "dev": "nodemon src/index.js" in scripts
