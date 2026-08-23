
const username = "Ayla";
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {

    console.log("Welcome Admin " + username);

} else if (isLoggedIn) {

    console.log("Welcome User " + username);

} else {

    console.log("Please Login");

}