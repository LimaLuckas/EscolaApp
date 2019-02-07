var pesquisarAvaliacoesDaEscolaPorAnoETipoCtrl = function($scope, $stateParams, $mdToast, escolaApi){
    
    $scope.avaliacoes = {};
    $scope.ano = $stateParams.ano;
    $scope.codEscola = $stateParams.codEscola;
    $scope.tipo = $stateParams.tipo;
    
    var pesquisarAvaliacoes= function(codEscola, ano, tipo){
        escolaApi.getAvaliacoesDaEscolaPorAno(codEscola, ano, tipo)
            .then(function(response){
            
                //Toast
                var toast = $mdToast.simple()
                    .textContent('As avaliacoes da escola do respectivo ano e tipo foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
            
                $scope.avaliacoes = response.data;
        })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação das avaliacoes da escola.')
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
        var tipo = $stateParams.tipo;
        console.log(codEscola,ano,tipo);
    }
    
    inicializarEscola();
    
};

escolaApi.controller("PesquisarAvaliacoesDaEcolaPorAnoETipoCtrl", pesquisarAvaliacoesDaEscolaPorAnoETipoCtrl);