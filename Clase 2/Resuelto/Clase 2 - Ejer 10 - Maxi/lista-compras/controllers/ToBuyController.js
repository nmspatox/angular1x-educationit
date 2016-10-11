(
	function(){
	'use strict';
	
	angular.module('ShoppingListCheckOff')
		.controller('ToBuyController', ['ShoppingListCheckOffService', ToBuyController])

	 function ToBuyController(ShoppingListCheckOffService){
		
		this.moveToBought = function(itemIndex) {
			ShoppingListCheckOffService.moveToBought(itemIndex);
		}

		this.items = ShoppingListCheckOffService.getToBuyItems();
		this.newItem = { name: '', unit: ''};

		this.addNewItem = function(){
			if (this.newItem.name != '')	{
				ShoppingListCheckOffService.addToBuyItem(this.newItem);
				this.newItem = { name: '', unit: ''};

				this.items = ShoppingListCheckOffService.getToBuyItems();

			}
		};
	}	
})();