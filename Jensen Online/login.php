<?php

session_start();

?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Jensen Online</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
   
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</head>

<body>
    
 <nav class="navbar navbar-inverse">
        <div class="container">
           <a class="navbar-brand" href="#">Jensen Online</a>
           <a id="hjalp" class="navbar-brand" href="#">Hjälp</a>
        </div>
    </nav>
    
    
    <header class="page-header">
    </header>
    
    <?php

if(isset($_POST["submit"])){
	$pnumber = $_POST['pnumber'];
	$password = $_POST['password'];


try{


require_once("db_connect.php");


$query = "SELECT * ";
$query .= "FROM users ";
$query .= "WHERE pnumber = :pnumber ";
$query .= "AND password = :password ";


$ps = $db->prepare($query);

$result = $ps->execute(
	array(
	'pnumber'=>$pnumber, 
	'password'=>$password
));

$user = $ps->fetch(PDO::FETCH_ASSOC);
    
if($user){
    //print_r($user);
	$_SESSION['pnumber'] = $user['pnumber'];
	$_SESSION['id'] = $user['id'];
	header("Location: index.php");
    //$url = "welcome.php";
    //echo '<script>window.location = "'.$url.'";</script>';
    
} else{
	echo "<script>alert ('Wrong username/password!')</script>";
}


} catch(Exception $exception){

	echo "Query failed, see error message below: <br /><br />";
	echo $exception. "<br /><br />";
}



}
else{

}




?>      
    
    
 
    <div class="container">
        
       <main class="jumbotron">
           
   <!--        
<form action="login.php" method="POST">
	<table>
		<tr>
			<td>Username: </td>
			<td><input type="text" name="pnumber" /></td>
		</tr>
		<tr>
			<td>Password: </td>
			<td><input type="text" name="password" /></td>
		</tr>
		<tr>
			<td><input type="submit" name="submit" value="login" /></td>
		</tr>
	</table>
</form>
   -->        
           
           <form role="form" action="login.php" method="POST">
  <div class="form-group">
    <label for="exampleInputEmail1">Personal number</label>
    <input type="text" class="form-control" name="pnumber" placeholder="Ex 199010190202">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name="password" placeholder="Password">
  </div>
  
  <input type="submit" class="btn btn-default" name="submit" value="Log in" />
</form>
           
</div>
        

<img class="img-responsive center-block" id="loginbild" src="images/Symbol%20med%20lagerblad.jpg">

   
</body>
</html>
