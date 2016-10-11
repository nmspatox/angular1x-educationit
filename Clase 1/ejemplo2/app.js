(
function(){
	var app = angular.module('shoppingCart', []);
	app.controller('CartController', ['$scope', CartController]);

	function CartController($scope){
		var vm = this;

		vm.items = [
			{ title: 'DVDs', price: 43.50, quantity: 2 },
			{ title: 'Zapatillas', price: 466.79, quantity: 20 },
			{ title: 'Remera', price: 600, quantity: 5 },
			{ title: 'Anteojos Rayban', price: 1030.32, quantity: 4}
		];

		vm.remove = function(idx){
			vm.items.splice(idx, 1);
		}
	}
}
)();