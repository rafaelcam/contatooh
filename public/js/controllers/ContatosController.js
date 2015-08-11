angular.module('contatooh').controller('ContatosController', 
function($scope, $resource, Contato) {
    
    $scope.contatos = [];
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};
    
    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
                $scope.mensagem = {};
            },
            function(erro) {
                console.log(erro);
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista'
                };
            }
        );
    }
    buscaContatos();
    
    $scope.remove = function(contato) {
       
       console.log('excluindo contato');
        
       Contato.delete({id: contato._id},
            buscaContatos,
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível remover o contato'
                };
                console.log(erro);
            }
        );
        
    };
    
    
});