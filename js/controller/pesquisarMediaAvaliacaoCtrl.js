var pesquisarMediaAvaliacaoCtrl = function($scope, $stateParams, $mdToast, escolaApi){
    
    $scope.medias = {};
    $scope.codEscola = $stateParams.codEscola;
    
    $scope.pesquisarAvaliacoes = function(codEscola){
        escolaApi.getMediaAvaliacoes(codEscola)
            .then(function(response){
            
                //Toast
                var toast = $mdToast.simple()
                    .textContent('As medias das avaliacoes da escola no respectivo ano foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
            
                $scope.medias = response.data;
        })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação das medias avaliativas da escola.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
        });
    }
    
    let inicializarEscola = function(){
        var codEscola = $stateParams.codEscola;
        console.log(codEscola);
    }
    
    inicializarEscola();
    
};

escolaApi.controller("PesquisarMediaAvaliacaoCtrl", pesquisarMediaAvaliacaoCtrl);