/**
 * Auth steps how it goes:-------------------------------------------------
 * 1. create a new project on console.firebase.google.com 
 * 2. install the firebase
 * 3. create firebase.init.js and import getAuth to export auth
 * 4. go to firebase setting > authentication > get start > then enable     email & password
 * 5. create login and sign in component also, setup route
 * 6. attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks
 * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9. if user is created redirect to the expected page
 * 10. signInWithEmailAndPassword for sign in
 * 11. create <RequireAuth> component ==> check user exists also track user location
 * 12. in rout wrap protected component by using <RequireAuth> component
 */






/**
 * This is Firebase hosting steps:
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 3. firebase init
 * 4. firebase deploy
 */