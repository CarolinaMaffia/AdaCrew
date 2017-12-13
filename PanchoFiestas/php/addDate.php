<?php 
	if (!empty($_POST)) {
		$respuesta = true;
	}else{
		$respuesta = false;
	}

	echo(json_encode($respuesta));