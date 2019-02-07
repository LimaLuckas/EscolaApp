//Controller - pesquisar escola por nome

var pesquisarEscolaPorNomeCtrl = function($scope, $stateParams, $mdToast, escolaApi){
    
    $scope.escola = {};
    $scope.nome = $stateParams.nome;
    
    var pesquisarEscola= function(nome){
        escolaApi.getEscolaPorNome(nome)
            .then(function(response){
            
                //Toast
                var toast = $mdToast.simple()
                    .textContent('A escola foi listada abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
            
                $scope.escola = response.data;
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
        var nome = $stateParams.nome;
        console.log(nome);
    }
    
    inicializarEscola();
    
};
escolaApp.controller("PesquisarEscolaPorNome",pesquisarEscolaPorNomeCtrl);