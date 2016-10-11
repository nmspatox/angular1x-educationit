(function() {
	var app = angular.module('OrderForm', []);
	app.controller("OrderFormController", ['$scope', OrderFormController]);

	function OrderFormController($scope) {
		var vm = this;
		vm.services = [
		{
			price: 28.79,
			name: 'Oreos',
			active: false
		}, {
			price: 100,
			name: 'Beer Pack',
			active: false
		}, {
			price: 53000,
			name: 'TV LED',
			active: false
		}, {
			price: 11,
			name: 'Water',
			active: false
		}];

		vm.total = function(){
			let val = 0;
			vm.services.forEach(function(el, idx, arr) { if (el.active) val += el.price; });

			return val;
		};

		vm.toggleActive = function(service){
			service.active = !service.active;
		};
	}

})();