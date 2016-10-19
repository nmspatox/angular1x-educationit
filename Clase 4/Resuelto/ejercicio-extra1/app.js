(function () {
    var app = angular.module('appMarket', []);

    app.controller('AppMarketController', AppMarketController);

    function AppMarketController(AppService){
        var vm = this;

        vm.apps = AppService.getApps();
        
    }
})();
