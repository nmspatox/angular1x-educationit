(
	function(){
		angular.module('gemStore')
		.directive('productDescription', productDescription)
		.directive('productSpecs', productSpecs)
		.directive('productTabs', productTabs)
		.directive('productGallery', productGallery);

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

		function productTabs(){
			return {
			    restrict: 'E',
			    templateUrl: 'directives/product-tabs.html',
			    controller: function(){
			    	this.tab = 1;

			        this.isSet = function (checkTab) {
			            return this.tab === checkTab;
			        };

			        this.setTab = function (setTab) {
			            this.tab = setTab;
			        };
			    },
			    controllerAs: 'tab'
			  };
		}

		function productGallery(){
			return {
			    restrict: 'E',
			    templateUrl: 'directives/product-gallery.html',
			    controller: function(){
			    	this.current = 0;

			        this.setCurrent = function (imageNumber) {
			            this.current = imageNumber || 0;
			        }			     
			    },
			    controllerAs: 'gallery'	
			  };
		}

	}
)();