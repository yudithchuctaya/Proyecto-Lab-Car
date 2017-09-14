
 function initMap() {
        
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom:5,
          center : {lat: -10.1191427, lng: -77.0349046},
          mapTypeControl:false,
          zoomControl:true,
          streetViewControl:false,
        });


      
      
      function buscar(){
      	if(navigator.geolocation){
      		 
      		navigator.geolocation.getCurrentPosition(funcionExito,funcionError);
      	}
      }

      document.getElementById("encuentrame").addEventListener("click",buscar);
      var latitud,longitud;
      var funcionExito = function(posicion) {
      	latitud = posicion.coords.latitude ;
      	longitud = posicion.coords.longitude ;
      var miUbicacion = new google.maps.Marker({
      position:{lat:latitud,lng:longitud},
      animation:google.maps.Animation.DROP,
      map:map
    });
    map.setZooom(18);
    map.setCenter({lat:latitud, lng:longitud});
    }
    var funcionError = function(error){
      alert("Tenemos un problema con encontrar tu ubicación")
       }
   }



   // ******************************   PROYECTO OPCIONAL DE HACKER
   




	 var inputPartida = document.getElementById("punto-partida");
	 var inputDestino = document.getElementById("punto-destino");
	 new google.maps.places.Autocomplete(inputPartida);
	 new google.maps.places.Autocomplete(inputDestino);
	 var directionsService = new google.maps.DirectionsService;
     var directionsService = new google.maps.DirectionsRenderer;

    var calculateAndDisplayRoute = function(directionsService,directionsDisplay){
    directionsService.route({
    	  original:inputPartida.value,
    	  destination:inputDestino.value,
    	  travelModel:"DRIVING"
    }, function(responsive ,status){
    	if(status==="OK"){
    		directionsDisplay.setDirections(response);
    	} else {
    			window.alert("No encontrar una  ruta.")
    	}
    });
   }
   directionsDisplay.setMap(map);
   var trazarRuta=function(){
   	calculateAndDisplayRoute(directionsService,directionsDisplay);

   };
   document.getElementById("trazar-ruta").addEventListener("click",trazarRuta);
