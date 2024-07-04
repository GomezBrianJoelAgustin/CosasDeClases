<?php
    
    $name = "El bocha";
   

?>

<form action="recibir.php" method="post">

    <h1> <?php echo $name ?> </h1>

    <input type="text" name="user" placeholder="User">

    <input type="password" name="pass" placeholder="Pass"> 

    <input type="checkbox" name="checkbox" id="checkbox"> Aceptar terminos de condiciones

    <button type="submit">Ingresar</button>

</form>