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
        .state("AvaliacoesDaEscola", {
            url: '/escolas/:codEscola/avaliacoes',
            templateUrl: 'pesquisarAvaliacoesDaEscola.html',
            controller: 'PesquisarAvaliacoesDaEscolaCtrl'
        })
        .state("AvaliacoesDaEscolaPorAno", {
            url: '/escolas/:codEscola/avaliacoes/ano/:ano',
            templateUrl: 'pesquisarAvaliacoesDaEscolaPorAno.html',
            controller: 'PesquisarAvaliacoesDaEscolaPorAnoCtrl'
        })
        .state("MediaAvaliacoes", {
            url: '/escolas/:codEscola/avaliacoes/media',
            templateUrl: "pesquisarMediaAvaliacoes.html",
            controller: 'PesquisarMediaAvaliacaoCtrl'
        })
        .state("MediaAvaliacoesPorAno", {
            url: '/escolas/:codEscola/avaliacoes/ano/:ano/media',
            templateUrl: "pesquisarMediaAvaliacoesPorAno.html",
            controller: "PesquisarMediaAvaliacaoPorAnoCtrl"
        })
        .state("AvaliacoesDaEscolaPorAnoETipo", {
            url: '/escolas/:codEscola/avaliacoes/ano/:ano/tipo/:tipo',
            templateUrl: 'pesquisarAvaliacoesPorAnoEtipo.html',
            controller: 'PesquisarAvaliacoesPorAnoETipoCtrl'
});