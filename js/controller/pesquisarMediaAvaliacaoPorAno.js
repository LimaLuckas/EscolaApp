var pesquisarMediaAvaliacaoPorAnoCtrl = function($scope, $stateParams, $mdToast, escolaApi){
    
    $scope.medias = {};
    $scope.ano = $stateParams.ano;
    $scope.codEscola = $stateParams.codEscola;
    
    var pesquisarAvaliacoes= function(codEscola, ano){
        escolaApi.getMediaAvaliacoesPorAno(codEscola, ano)
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
        var ano = $stateParams.ano;
        console.log(codEscola,ano);
    }
    
    inicializarEscola();
    
};

escolaApi.controller("PesquisarMediaAvaliacaoPorAnoCtrl", pesquisarMediaAvaliacaoPorAnoCtrl);