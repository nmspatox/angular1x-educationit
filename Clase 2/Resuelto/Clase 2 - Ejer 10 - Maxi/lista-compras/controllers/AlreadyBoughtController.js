(
	function(){
	'use strict';
	
	angular.module('ShoppingListCheckOff')
		.controller('AlreadyBoughtController', ['ShoppingListCheckOffService', AlreadyBoughtController]);

	function AlreadyBoughtController(ShoppingListCheckOffService){
		this.items = ShoppingListCheckOffService.getBoughtItems();
	}
})()