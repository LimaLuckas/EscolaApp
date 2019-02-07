// Factory - API
var escolaApi = function ($http) {

    var _getEscolas = function (quantidadeDeItens) {
        return $http.get(baseUrl + "/rest/escolas?quantidadeDeItens=" +
            quantidadeDeItens);
    };

    var _getEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola);
    };

    var _getEscolaPorNome = function (nome) {
        return $http.get(baseUrl + "/rest/escolas/?nome=" + encodeURIComponent(nome));
    };
    
    var _getAvaliacoesDaEscola = function(codEscola){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola +"/avaliacoes");    
    };
    
    var _getAvaliacoesDaEscolaPorAno = function(codEscola, ano){
        return $http.get(baseUrl + '/rest/escolas/' + codEscola + '/avaliacoes/ano/' + ano);
    };
    
    var _getMediaAvaliacoesPorAno = function(codEscola, ano){
        return $http.get(baseUrl + '/rest/escolas/' + codEscola + "/avaliacoes/ano/" + ano + "/media");
    };
    
    var _getMediaAvaliacoes = function(codEscola){
        return $http.get(baseUrl + '/rest/escolas/' + codEscola + "/avaliacoes/media");
    };
    
    var _getAvaliacoesDaEscolaPorCodigoAnoETipo = function(codEscola, ano, tipo){
        return $http.get(baseUrl + "/rest/escolas/" +codEscola + "/avaliacoes/ano/" + ano + "/tipo/" + tipo);
    };
    
    return {
        getEscolas: _getEscolas,
        getEscola: _getEscola,
        getEscolaPorNome: _getEscolaPorNome,
        getAvaliacoesDaEscola: _getAvaliacoesDaEscola,
        getAvaliacoesDaEscolaPorAno: _getAvaliacoesDaEscolaPorAno,
        getMediaAvaliacoes: _getMediaAvaliacoes,
        getMediaAvaliacoesPorAno: _getMediaAvaliacoesPorAno,
        getAvaliacoesDaEscolaPorCodigoAnoETipo: _getAvaliacoesDaEscolaPorCodigoAnoETipo
    };
}

escolaApp.factory("escolaApi", escolaApi);