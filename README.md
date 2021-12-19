# Quick Start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Clone the repository :

### `git clone https://github.com/udogabrieludo/sales-chat.git`

Install the dependencies

### `npm install`

Launch the app
### `npm start `

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `Push to Github`
 create an empty repo at Github, and then follow the instructions shown on the repo to push an existing repository from the command line.

### `auto deployment from Github to Heroku `

To get started, log in to your Heroku account and create a new app using the “New” button in the top right corner.

You will be redirected to the Create New App page. There, you can enter the name for your app. Choose the region along with it.

Add your app name, then click on Create App button, Heroku will create your app and redirect you to the app’s dashboard

There are three methods to deploy on Heroku, select  Connect to GitHub method

Before proceeding with deployment via Github, you’ll need to add the Buildpack to your app.

 go to the Settings tab. Scroll down to the Buildpack section and click on the Add Buildpack button. This will open a pop-up. Copy and paste the following URL, then save changes:

### `https://github.com/mars/create-react-app-buildpack.git`

Next, navigate back to the Deploy tab. Scroll down to the deployment method section and choose GitHub. To have your repository available here, you’ll need to connect to GitHub.

Once you have connected your account to GitHub, you will see your GitHub username selected and an input field to search your repository. Search your repository then click the Connect button.

Once the deployment is finished, you will get an update that tells you that your app was successfully deployed


