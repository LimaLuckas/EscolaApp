// Navegação.
escolaApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('escolas', {
            url: '/escolas',
            templateUrl: 'listarEscolas.html',
            controller: 'ListarEscolasCtrl'
        })
        .state('escolaPorCodigo', {
            url: '/escolas/:codEscola',
            templateUrl: 'pesquisarEscola.html',
            controller: 'PesquisarEscolaCtrl'
        })
        .state('tiposAvaliacao', {
            url: '/tiposavaliacao',
            templateUrl: 'listarTiposAvaliacao.html',
            controller: 'ListarTiposAvaliacaoCtrl'
        })
        .state('escolaPorNome', {
            url: '/escolas/:nome',
            templateUrl: 'pesquisarEscolaPorNome.html',
            controller: 'PesquisarEscolaPorNomeCtrl'
        })
        .state("avaliacoesDaEscola", {
            url: '/escolas/:codEscola/avaliacoes',
            templateUrl: 'pesquisarAvaliacoesDaEscola.html',
            controller: 'PesquisarAvaliacoesDaEscolaCtrl'
        })
        .state("avaliacoesDaEscolaPorAno", {
            url: '/escolas/:codEscola/avaliacoes/ano/:ano',
            templateUrl: 'pesquisarAvaliacoesDaEscolaPorAno.html',
            controller: 'PesquisarAvaliacoesDaEscolaPorAnoCtrl'
        })
        .state("mediaAvaliacoes", {
            url: '/escolas/:codEscola/avaliacoes/media',
            templateUrl: "pesquisarMediaAvaliacoes.html",
            controller: 'PesquisarMediaAvaliacaoCtrl'
        })
        .state("mediaAvaliacoesPorAno", {
            url: '/escolas/:codEscola/avaliacoes/ano/:ano/media',
            templateUrl: "pesquisarMediaAvaliacoesPorAno.html",
            controller: "PesquisarMediaAvaliacaoPorAnoCtrl"
        })
        .state("avaliacoesDaEscolaPorAnoETipo", {
            url: '/escolas/:codEscola/avaliacoes/ano/:ano/tipo/:tipo',
            templateUrl: 'pesquisarAvaliacoesPorAnoEtipo.html',
            controller: 'PesquisarAvaliacoesPorAnoETipoCtrl'
        });
           
});