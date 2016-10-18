(
	function(){
		angular.module('gemStore')
		.directive('productDescription', productDescription);

		function productDescription(){
			return {
			    restrict: 'E',
			    templateUrl: 'directives/product-description.html'
			  };
		}
	}
)();