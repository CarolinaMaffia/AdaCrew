<?php 

	$_POST['fotografos'] = "on";
	
	if(!empty($_POST)){

		$turno = rand(1,25);

		if($turno > 5 && $turno < 10){ 

			$mensaje = "Tu consulta se ha procesado con exito.";

			$resultado = array('status'=>"Ok",'mensaje'=>$mensaje);
		
		}else{

			if($turno > 10 && $turno < 20 && ($_POST['fotografos']== "on")){

				$resultado = array('status'=>"error",'mensaje'=>"Lo lamentamos pero no disponemos de Fotografo para esa fecha.");
			
			}else{

				$mensaje = "Tu consulta se ha procesado con exito.";

				$resultado = array('status'=>"Ok",'mensaje'=>$mensaje);
			}	
		}	

	}else{

		$resultado = array('status'=>"error",'mensaje'=>"No se ha podido procesar tu pedido.");
	}

	print(json_encode($resultado));