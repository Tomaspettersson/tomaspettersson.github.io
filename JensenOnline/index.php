<?php


session_start();
	if(!isset($_SESSION["pnumber"])){
		header("Location: login.php");
	}

?>


<?php


$pageTitle = "Hem";
$section = "hem";
include("includes/header.php");
    
?>
    <h1>Välkommen till Jensen Online</h1>
    <main class="jumbotron">
        
        
        <h2>Hello, world!</h2>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        
        

    </main>
      
    <div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="images/Symbol%20med%20lagerblad2.jpg" alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a>
      </div>
    </div>
  </div>

      
         
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="images/Symbol%20med%20lagerblad2.jpg" alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a>
      </div>
    </div>
  </div>

      
      
         
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="images/Symbol%20med%20lagerblad2.jpg" alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a>
      </div>
    </div>
  </div>
</div>  

      
<?php

include("includes/footer.php");
    
?>


     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</body>
</html>
