$("document").ready(function(){
	imagenes();
	drag_drop();
;	$("h1").animate({
		color: '#4B0082'
	}, 3000, function(){
		$(this).animate({
			color: '#DCFF0E'
		}, 3000);
	});
	setInterval(color(), 3000)
	function color(){
		$("h1").animate({
			color: '#2E8B57'
		}, 2000, function(){
			$(this).animate({
				color: '#FF4500'
			}, 2000)
		});
	}
	
	function imagenes(){
		for(i=1; i<=7; i++){
			for(j=1; j<=7; j++){
				$('.col-'+j).append('<img src="image/'+Math.floor(Math.random(i)*4+1)+'.png">');
			}
		}
		$('img').css('height','100px')
		
	}
	function ini_juego() {
		
		for(k=0; k<=5; k++){
			if(1+2 ==3){
				alert("bien")
			}
		}
	}
	function tiempo(){
		$('#timer').timer({
			countdown:true, //activa conteo regresivo
			duration:'30s',
			callback: function(){
				$("#timer").timer("remove");
				$('.panel-tablero').fadeOut("fast");
				$('.panel-score').animate({
					width: '+=800px'
				},4000);
				$('.moves').animate({
					width: '+=800px'
				},4000)
			}
		});
	}
	function tiempo2(){
				$('.panel-score').animate({
					width: '-=800px'
				},1000);
				$('.moves').animate({
					width: '-=800px'
				},1000);
				$(".panel-tablero").delay(2000);
				$('.panel-tablero').fadeIn(3000);
	}

	function drag_drop(){
		var d1;
		var d2;
		$("img").draggable({
			helper:"clone"
		})
		$("img").droppable({
			drop: function (event, ui) {
				$(this).replaceWith(ui.draggable);
			}
		})

	}

	$(".btn-reinicio").click(function(){
		if($(this).html()=="Iniciar"){
			
			cargar();
			tiempo();
			
			$(this).html("Reiniciar")
		}else{
			$(this).html("Iniciar");
			tiempo2();

		}
	});
	
	function cargar(){
		for(h=1; h<=7; h++){
			if($(".col-"+h+"  img").length<7){
			$(".col-"+h).slideDown(500, function(){
				$(this).append('<img src="image/'+Math.floor(Math.random(h)*4+1)+'.png">');
			});
				$('img').css('height','100px')
				//alert ("calse imagen No. " +h)
		   }
		}
		
	}
});


