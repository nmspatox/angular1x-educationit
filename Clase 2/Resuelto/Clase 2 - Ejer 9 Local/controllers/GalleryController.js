(
function(){
	angular.module('gemStore').controller('GalleryController', galleryController);

	function galleryController()
	{
        this.current = 0;
        this.setCurrent = function(val){
            this.current = val || 0;
        };
    }
})();