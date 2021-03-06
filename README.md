# BurgerTime

Background Photo by Oliver Sjöström from Pexels


Create an app that allows users to add a burger to the menu and then devour it!

Link to github repository: https://github.com/OnTheRocks/BurgerTime.git

Link to the functional app: https://burger-time-54.herokuapp.com/

## Table of Contents
* [User Story](#user-story)
* [Version 1.0](#version-1.0)
* [How To Use](#how-to-use)
* [Coding Languages Used](#coding-languages-used)
* [NPMs Used](#npms-used)
* [CSS Framework](#css-framework)
* [Structure of Code and Functions](#structure-of-code-and-functions)
* [Known Issues With Code](#known-issues-with-code)

## User Story
As a burger lover, I would to create my own burgers, and be able to devour them virtualy.

## Version 1.0
* This app runs via heroku or by entering the command "node server.js."
* Make sure you are in the main folder when running the code on the command line.
* This app allows the user to add as many burgers as they want to a list on the left hand side of screen.  If they so choose they can devour those burgers, which moves them to the right hand side of the screen.

## How To Use
See the layout of the app below.


- STEP 1: To begin one types in a burger into text area and clicks "Add The Burger" button.  

- STEP 2:  When add burger is cliked the burger gets added to left side of screen and a Burger icon button renders with it to "DEVOUR IT"

- STEP 3: clicking on the Burger icon will sent it to the right side of the screen into the devourd column.

![app](/public/assets/img/Capture.PNG " ") 

 
## Coding Languages Used
* HTML
* CSS
* Javascript
* Node.js
* SQL

## NPMs Used:
* NPM express
* NPM mysql
* NPM express-handlebars

## CSS Framework:
* Bootstrap

## Structure of Code and Functions
* config - is the folder that holds my generate database connection code
    connection.js - is the file that holds my user info and creates connection to database
    orm.js - This file has generic functions that receive parameters from the models to create database queries.  
* models
    burgers.js - this file takes the orm.js functions and customizes them for the burger table
* controllers - this where the api routes interact with the models
    burgerController.js - this contains all the api routes being used in the ajax calls and delivers those parameters to the functions in models/burgers.js
* db folder - contains the database files that store the notes information
    - schme.sql - this the schema for my database
    - seed.sql - these are my seed files used for testing
* public folder - contains all the code that is needed to for the browser to run the application
    - assets folder - contains all the javascript and css code
        - css folder
            - style.css - is the actual file with all the code for css
        - images - contains images for readme and website
* views
    - layouts - folder which contains the generic layout html to have other html rendered into
      - main.handlebars - contains the html that is note dynamically changed by handlebars
    - index.handlebars - contains the unordered lists and list item html that burgers are generated by
* server.js - is the actual file that is run to create application and start server listening.


## Known Issues With Code
* Currently, if you click the Add The Burger button without entering in a burger, it will add a blank entry into the left burger column.

* Favicon is not working.
