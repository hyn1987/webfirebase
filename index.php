<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>FireBase Example</title>
</head>
<body>
<h1 id="bigOne"></h1>
<link href="https://fonts.googleapis.com/css?family=Robot:300,500" ref="stylesheet">
<script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
<link ref="stylesheet" href="style.css">
<!--
<script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
-->

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="app.js"></script>
<div class="container">
	<input id ="txtEmail" type="email" placeholder="Email">
	<input id="txtPassword" type="password" placeholder="Password">
	<button id="btnLogin" class="btn btn-active btn-primary">Login</button>
	<button id="btnSignUp" class="btn btn-secondary">Sign Up</button>
	<button id="btnLogout" class="btn btn-action">Log out</button>
	<progress value="0" max="100" id="uploader">0%</progress>
	<input class="btn btn-active" type="file" value="upload" id="fileButton"/>
</div>

	
</script>
</body>
</html>