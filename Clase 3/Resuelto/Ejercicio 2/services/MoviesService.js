(
function(){
	angular.module('MoviesApp').factory('MoviesService', MoviesService);

	var movies = [{
	    title: 'The Avengers',
	    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
	    rate: 8,
	    trailer: "https://www.youtube.com/embed/jSvcbzK_bD8",
	    director: "Joss Whedon",
	    stars: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
	    images: [
	      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY113_CR0,0,76,113_AL_.jpg",
	      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY113_CR0,0,76,113_AL_.jpg",
	      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY113_CR0,0,76,113_AL_.jpg"
	    ],
	    reviews: [{
	        stars: 5,
	        body: "Aburrida",
	        author: "joe@example.org",
	        createdOn: 1397490980837
	    }, {
	        stars: 1,
	        body: "mmm....",
	        author: "tim@example.org",
	        createdOn: 1397490980837
	    }]
	  }];

	function MoviesService(){
		return {
			getAll : function(){ 
				return movies;
			},
			addMovie : function(movie){
				movies.push(movie);
			}
		};
	}
}
)();