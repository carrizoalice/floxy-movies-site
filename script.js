


        var content = document.querySelector('#contenido');
        var spinner = document.querySelector('#spinner');

        function traer(){
            var valor = document.getElementById("texto").value;


            fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=6fbbe91d&s='+valor)
            .then( res => res.json())
            .then( datos => {
            	if(spinner.style.display === "none") {spinner.style.display = "inline-block";}
                iterar(datos);                
                })
             }
            
           function iterar(datos){
           console.log(datos); 
           if(spinner.style.display === "inline-block") {spinner.style.display = "none";} 

                content.innerHTML = ''
                for(let valor of datos.Search){//si da mal acá, es porque está mal la url del fetch
                	if(valor.Poster == "N/A"){
                		valor.Poster = "images/generic_image.jpg";
                	}
                    content.innerHTML += `
                    	<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-4 align-items-stretch">
							<div class="card">
							  <div class="card-img-cont">	
							 	<img class="card-img-top" src="${valor.Poster}" alt="${valor.Title}">
							  </div>
							  <div class="card-body">
							  	<div class="badges">
		  						<span class="badge badge-info">${valor.Type}</span>
		  						</div>
							    <h5 class="card-title"><strong>${valor.Title}</strong></h5>
							    <p class="card-text">${valor.Year}</p>
							    <a href="https://www.imdb.com/title/${valor.imdbID}/fullcredits" target="_blank" class="btn btn-primary fxy-btn mb-2">See full cast</a>
							    <a href="https://www.imdb.com/title/${valor.imdbID}/videogallery/?ref_=tt_ov_vi_sm" target="_blank" class="btn btn-outline-success fxy-btn-outline mb-2">Video Gallery</a>							    
							  </div>
							</div>				
						</div>
                    `
                }                 
        } 

$(document).ready(function(){

	$("#owl-destacadas").owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		navText: ["Anterior", "Próximo"],
		autoplay: true,
		autoplayTimeout: 2000,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			360: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});

	$("#owl-series").owlCarousel({		
		loop: true,
		margin: 25,
		smartSpeed: 900,
		autoplay: true,
		autoplayTimeout: 5000,
		dots: true,
		pagination:false, navigation:true,
		responsive: {
			0: {
				items: 3
			},
			360: {
				items: 4
			},
			1000: {
				items: 8
			}
		}
	});	
})