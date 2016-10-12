(
function(){
	angular.module('MoviesApp')
	.controller('MoviesController', MoviesController);

	function MoviesController(MoviesService){
		var vm = this;

		vm.movies = MoviesService.getAll();

		vm.addMovie = addNewMovie;

		function addNewMovie(movie){
			MoviesService.addMovie(movie);
		}
		
	}
}
)();