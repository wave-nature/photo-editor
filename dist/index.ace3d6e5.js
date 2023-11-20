// Attach click event to the Google login button
// Load the Google API client library
gapi.load("auth2",function(){gapi.auth2.init({client_id:"694324505999-almt5sivsdpp8a7tlskl7ftibn8230jc.apps.googleusercontent.com"})});const t=document.getElementById("google-login-button");t.addEventListener("click",function(){!function(){let t=gapi.auth2.getAuthInstance();t.signIn().then(function(t){let e=t.getBasicProfile();console.log("ID: "+e.getId()),console.log("Name: "+e.getName()),console.log("Email: "+e.getEmail());// You can use the profile information as needed, e.g., send it to your server
// For example, you might want to send the user's ID token to your server for server-side validation
let n=t.getAuthResponse().id_token;console.log("ID Token: "+n)})}()});//# sourceMappingURL=index.ace3d6e5.js.map

//# sourceMappingURL=index.ace3d6e5.js.map
