(
function(){
	
	angular.module('gemStore').controller('TabController', tabController);

	function tabController()
	{
        this.tab = 1;
        this.setTab = function(val){
            this.tab = val;
        };

        this.isSet = function(val){
            return this.tab == val;
        };

        this.getArray = function(num){
        	return new Array(num || 1);
        }
    }
})();