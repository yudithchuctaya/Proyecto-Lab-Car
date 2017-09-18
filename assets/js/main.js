 var tarifa = document.getElementById("tarifaResultado")
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
   



   // ******************************   PROYECTO OPCIONAL DE HACKER
   




	 var inputPartida = document.getElementById("punto-partida");
	 var inputDestino = document.getElementById("punto-destino");
	 new google.maps.places.Autocomplete(inputPartida);
	 new google.maps.places.Autocomplete(inputDestino);

   // direccion
	 var directionsService = new google.maps.DirectionsService;
     var directionsService = new google.maps.DirectionsRenderer;

    var calculateRoute = function(directionsService, directionsDisplay){
      directionsService.route({
        origin: inputPartida.value,
        destination: inputDestino.value,
        travelMode: 'DRIVING'
      }, function(response, status){
            if(status ==='OK'){
              var km = Number((response.routes[0].legs[0].distance.text.replace("km","")).replace(",","."));
              tarifa.classList.remove("hidden");
              var costo = km * 1.75;
              if(costo < 4){
                tarifa.innerHTML = "S/. 4";
              }else{
                tarifa.innerHTML = "S/." + parseInt(costo);
              }
              if(miUbicacion!==undefined){
                miUbicacion.setMap(null);
              }
              directionsDisplay.setDirections(response);
            }else{
              window.alert("No encontramos una ruta.");
            }
      });
    }

    directionsDisplay.setMap(map);
    var trazarRuta = function(e){
      // e.preventDefault();
      calculateRoute(directionsService,directionsDisplay);
    };
     document.getElementById("trazar-ruta").addEventListener("click",trazarRuta)
};
var tarifa = document.getElementById("tarifaResultado")
