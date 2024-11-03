# SimpleSocial
SimpleSocial is an app to connect with people within your network. 

## Description

This is a full stack application that is built with React, Node.js., and sequelize. In this application, you are presented with a login to the Simple Socail App. . The user must enter both a valid username and password to access the app. If either username and/or password is invalid they are not allowed access to Simple Social. Valid user information is stored in the Users table of the SimpleSocial_DB. 
When authenticated user is logged into the application and their token to access the site is stored into local storage. The user is then able to access the add circles, join circles, create new posts, edit, and add comments. When the user logs out their access token is removed from local storage and they are directed back to the login screen. 

## Screenshots


## Installation

This project is build using React. To run and initiate the app the user must install:

 * `npm install vite --save-dev`
 * `npm install react react-dom`
 * `npm install bcrypt`
 *  `npm install sequelize`
 * `npm install jsonwebtoken`
 

## Usage 

To run this project:

* Open the command line.
* Navigate to the directory of your project that contains the `package.json` file that runs the both the client and server side (In this Project the app is run from the Develop directory)
* Run the command `npm start` (this may vary based on specifics in your `package.json` scripts). 

 To create a new user
* Navigate to the Login page.
* Select to Create a New User. 
* Input all required Information.
* Click Submit. 
* (User is created) 

To Login:
* Navigate to the Login 
* Input valid credentials 
* Click Login button. 
* (User is logged in and directed to the Home Page)

From the Home page you can:
* View existing circles that to which you belong. 
* Click  to "Add A Circle", input circle name and save. 
* Click  to "Join a Circle". If selected you are prompted to input applicable permission key to join circle and click "Join"
* Click on circle and access the Post page. 

From the Post page:
* You can add a post 
* You can add comments to post. 
    


    

## License

This project includes the MIT License.

## Contributions

This project was quite challenging...


 This repository is available to the public. Please feel free to clone this repository, submit a pull request, and add any issues. You can contact me via GitHub or email!

* [Link to Simple Social Repo](https://github.com/shannonMG/revised_Simple_Social)


* [Shannon's email]()
* [Shuki's Email](mailto:kathuriashuki@gmail.com)


## Tests

Example Test Cases:

On Login Page:  
* Verify that the secret token is saved in local storage after logging in. 
* Input valid credentials to ensure access to the Simple Social  page. 
* Input invalid credentials and verify that you remain on the login page and receive an error message. 
* Error message is displayed when trying to create user without all required inputs. 
* Error message is displayed when trying to log in without all required inputs. 



On Home page you see:
* Circles to with ones you have joined and/or created. 
* An Instructional Circle if you have not yet joined/created a circle. 

When joining a circle:
* Input invalid or blank permission key ensure you receive an error message that you cannot join the circle. 
* Input valid permission key and you receive a message that join was successful and circle renders on home page

When creating a circle:
* Input all required inputs and save and you receive a message that circle was created and new circle renders on page. 
* Try to create a circle without valid inputs and ensure you receive a message that inputs are required. 

When clicking on Circle:
* You are directed to Posts page
* On Post page verify you can add posts and comments


* Logout and ensure you are directed back to Screen with the token removed  from local storage.




