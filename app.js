(function()
{
   var config = {
    apiKey: "AIzaSyAklo8zJoAgTtof7ypvC9ocX6o75pB-3w0",
    authDomain: "alexey-fdc60.firebaseapp.com",
    databaseURL: "https://alexey-fdc60.firebaseio.com",
    storageBucket: "alexey-fdc60.appspot.com",
  };
  firebase.initializeApp(config);

  $(document).ready(function()
  {
    const txtEmail = $("#txtEmail");
    const txtPassword = $("#txtPassword");
    const btnLogin = $("#btnLogin");
    const btnSignUp = $("#btnSignUp");
    const btnLogout = $("#btnLogout");
    const uploader = $("#uploader");
    const fileButton = $("#fileButton");

    btnLogout.hide();
    btnLogin.click(function(){
  // action goes here!!
  		const email = txtEmail.val();
  		const password = txtPassword.val();
  		const auth = firebase.auth();
  		//sign in
  		const promise = auth.signInWithEmailAndPassword(email,password);
  		promise.catch(e=> console.log(e.message));

	});

	 btnLogout.click(function(){
  		// action goes here!!
  		const auth = firebase.auth().signOut();
	});

	btnSignUp.click(function(){
  // action goes here!!
  		const email = txtEmail.val();
  		const password = txtPassword.val();
  		const auth = firebase.auth();
  		//sign in
  		const promise = auth.createUserWithEmailAndPassword(email,password);
  		promise
  			//.then(user => console.log(user))
  			.catch(e=> console.log(e.message));

	});

  fileButton.change(function(e)
  {
    
    // get file 
    var file = e.target.files[0];

    // create a storage
    var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

    //upload file
    var task = storageRef.put(file);
    
    //update progress bar
    task.on('state_changed',

      function progress(snapshot)
      {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.val(percentage);
        console.log(percentage);
      },

      function error(err)
      {
        console.log(err);
      },

      function complete()
      {
        console.log('complete');
      }
    );
  });

	firebase.auth().onAuthStateChanged(firebaseUser =>
	{
		if(firebaseUser)
		{
			console.log('logged in');
			console.log(firebaseUser);
			btnLogout.show();
		}
		else
		{
			btnLogout.hide();
			console.log('not logged in');
		}
	});
   });

}());
