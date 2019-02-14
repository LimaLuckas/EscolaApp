//Controller - pesquisar avaliacoes da escola

var pesquisarAvaliacoesDaEscolaCtrl = function($scope, $stateParams, $mdToast, escolaApi){
    $scope.avaliacoes = {};
    $scope.codEscola = $stateParams.codEscola;
    
    $scope.pesquisarAvaliacoes = function(codEscola){
        escolaApi.getAvaliacoesDaEscola(codEscola)
            .then(function(response){
            
                //Toast
                var toast = $mdToast.simple()
                    .textContent('As avaliacoes das escola foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
            
                $scope.avaliacoes = response.data;
        })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados da escola.')
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

escolaApi.controller("PesquisarAvaliacoesDaEcolaCtrl", pesquisarAvaliacoesDaEscolaCtrl);