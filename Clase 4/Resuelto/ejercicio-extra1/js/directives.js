(
	function(){
		angular.module('appMarket')
		.directive('appGallery', appGallery)
		.directive('appInstallButton', appInstallButton);

		function appGallery(){
			return {
				restrict: 'E',
				templateUrl: 'components/directives/app-gallery.html'
			}
		}

		function appInstallButton($timeout){

			return {
				restrict: 'E',
				templateUrl: 'components/directives/app-install-button.html',
				controller: function(){
					this.installApp = function (app) {
						console.log(app);						
					}

					this.statusText = 'Install';
				},
				controllerAs: 'ctrl',
				link: function(scope, element, attrs){					
					var el = element.find('button');
										
					element.bind('click', function(){						
						el[0].innerText = 'Installing...';
					    //element.inner = 'Installing...'
					    setTimeout(function(){ el[0].innerText = "Done!"}, 3000);
					});
		        }
			}
		}
	}
)();