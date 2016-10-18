(
	function(){
		angular.module('gemStore')
		.directive('productDescription', productDescription)
		.directive('productSpecs', productSpecs);

		function productDescription(){
			return {
			    restrict: 'E',
			    templateUrl: 'directives/product-description.html'
			  };
		}

		function productSpecs(){
			return {
			    restrict: 'A',
			    templateUrl: 'directives/product-specs.html'
			  };
		}
	}
)();