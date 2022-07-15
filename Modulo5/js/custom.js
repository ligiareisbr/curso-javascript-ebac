// instancia jquery e evita conflitos
// jQuery( function($){
    $(document).ready(function(){
   
        $('.owl-carousel').owlCarousel();
          
        
        $('.featured-item h4').dblclick( function(){
           
           $(this).css({
              'color': '#f00',
              'background': '#ff0',
              'font-weight': '100',
           });
           
        });
        
        /*
         * Manipulação de eventos
         */
        $('.featured-item a').on('blur', function(event){
           
           event.preventDefault();
           
           alert('Produto esgotado');
           
        })
     
     
        $('#form-submit').on('click', function(e){
     
           e.preventDefault()
     
           if( $('#email').val() != '' ){
     
              $('#email').animate({
                 opacity: "toggle",
                 top: "-50"
              }, 500, function(){
                 console.log($(this).val())
              })
     
           }
     
     
        });
     
     
        /*
         * Ouvinte de eventos .nav-modal-open
         */
        $('.nav-modal-open').on('click', function(e){
     
           e.preventDefault();
     
           let elem = $(this).attr('rel')
     
           $('.modal-body').html($('#'+elem).html())
           
           $('.modal-header h5.modal-title').html($(this).text())
     
           let myModal = new bootstrap.Modal($('#modelId'))
     
           myModal.show()
     
     
        })
     
     
        /*
         * TODO: incrementar a validação
         * - checar se o nome é válido (mais de 2 caracteres)
         * - checar se o email é válido com ao menos um "@" e "."
         * - checar se o cpf é válido com regex
         */
        function validaPreenchimento (elem){
           if (elem.val() == '') {
              console.log('o campo de '+ elem.attr('name') + ' é obrigatório');
              elem.parent().find('.text-muted').show();
              elem.addClass('invalid');
     
              return false;
           } else {
              elem.parent().find('.text-muted').hide();
              elem.removeClass('invalid');
           }
         }

        function validaNome (elem) {
            if (!elem.val().match(/^[a-z]{2}/i)) {
               console.log('O campo não apresenta um nome válido');
               elem.parent().find('.text-muted').show();
               elem.addClass('invalid');

               return false;
            } else {
               elem.parent().find('.text-muted').hide();
               elem.removeClass('invalid');
              }
         }

        function validaEmail (elem) {
         console.log(elem.val());
            if (!elem.val().match(/^[a-z0-9]+@[a-z0-9]+[\.][a-z0-9]+([\.][a-z]+)?$/i)) {
               console.log('O e-mail está fora do formato');
               elem.parent().find('.text-muted').show();
               elem.addClass('invalid');

               return false;
            } else {
               elem.parent().find('.text-muted').hide();
               elem.removeClass('invalid');
            }
         }

         function validaCpf (elem) {
            if (!elem.val().match(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/)) {
               console.log('O CPF não está válido');
               elem.parent().find('.text-muted').show();
               elem.addClass('invalid');

               return false;
            } else {
               elem.parent().find('.text-muted').hide();
               elem.removeClass('invalid');
            }
         }

     
        $('body').on('submit', '.modal-body .form', function(e){

           e.preventDefault();
     
           const inputName = $('#nome');
           const inputEmail = $('#email');
           const inputCpf = $('#cpf');
     
           validaNome(inputName);
           validaEmail(inputEmail);
           validaCpf(inputCpf);
     
           if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
              console.log('Verificar campos obrigatórios');
              return false
           } /*else {
              $(this).submit(); // Não pode haver um submit da manipulação de um evento submit pois gera um loop infinito
           }*/
     
        });
     
        $('body').on('blur', '#nome', function(){
           validaPreenchimento($(this));
        });
     
        $('body').on('blur', '#email', function(){
           validaPreenchimento($(this));
        });
     
        $('body').on('focus', '#date', function(){
           //$(this).datepicker();
        });
     
        $('body').on('blur', '#date', function(){
           validaPreenchimento($(this));
           $(this).mask('00/00/0000');
        });
     
        $('body').on('blur', '#time', function(){
           validaPreenchimento($(this));
           $(this).mask('00:00');
        });
     
        $('body').on('blur', '#cep', function(){
           validaPreenchimento($(this));
           $(this).mask('00000-000');
        });
     
        $('body').on('blur', '#phone', function(){
           validaPreenchimento($(this));
           $(this).mask('00000-0000');
        });
     
        $('body').on('blur', '#cpf', function(){
           validaPreenchimento($(this));
           $(this).mask('000.000.000-00');
        });
     
     })