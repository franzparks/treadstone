# Treadstone 71 Museum
Capstone Project for Udacity Senior Web Developer Nanodegree

This is a progressive web app which uses modern web capabilities to deliver an app-like user experience.

Upon applicatio launch a service worker is installed (on supported browsers) to support most of the fucntionality when the app is offline or in a low connectivity area

For form fields which require a user to enter an address, the application supports geo-location functionality
which will provide a reasonable guess of the user's address and prefill the field. Other form fields are prefilled with the user's information which is at the time available in the application. 

The application  is also installable to the user's homescreen (via dev-tools => application on chrome)

- build process is not yet fully automated so all steps are necessary

## Steps to run:

 Clone the repository or download the source code

- `npm install` then `bower install`

Dev:

- `gulp generate-service-worker`
- `gulp serve`


Prod:

- `gulp build`
- `gulp generate-service-worker`  (inside 'dist' folder)
- `gulp serve:dist`

To do:

1. Add push notifications for subscribers

2. Add blog functionality

3. Add a backend (Firebase for starters)
