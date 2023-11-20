const CLIENT_ID =
  "694324505999-almt5sivsdpp8a7tlskl7ftibn8230jc.apps.googleusercontent.com";
// Load the Google API client library
gapi.load("auth2", function () {
  gapi.auth2.init({
    client_id: CLIENT_ID,
  });
});

export function signInWithGoogle() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signIn().then(function (googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
    console.log("Email: " + profile.getEmail());

    // You can use the profile information as needed, e.g., send it to your server

    // For example, you might want to send the user's ID token to your server for server-side validation
    const idToken = googleUser.getAuthResponse().id_token;

    console.log("ID Token: " + idToken);
  });
}
