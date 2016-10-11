(
	function(){
	'use strict';

	angular.module('ShoppingListCheckOff')
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

	function ShoppingListCheckOffService (){
		var toBuyItems = [
			{name: "Milk", quantity: "1", unit:'L'},
			{name: "Meat", quantity: "2", unit: 'kg'},
			{name: "Rice", quantity: "1", unit: "kg"},
			{name: "Apples", quantity: "2", unit: "kg"},
			{name: "Bananas", quantity: "2", unit: "kg"},
		];
		var boughtItems = [];

		this.moveToBought = function (itemIndex){
			var item = toBuyItems[itemIndex];
			toBuyItems.splice(itemIndex, 1);
			boughtItems.push(item);
		};

		this.getToBuyItems = function(){
			toBuyItems.forEach((el,idx,arr) => { el.quantity= 1 });
			return toBuyItems;
		};


		this.addToBuyItem = function(newItem){
			toBuyItems.push(newItem);
		};

		this.getBoughtItems = function(){
			return boughtItems;
		};

	}
})()