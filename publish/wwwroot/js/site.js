/* valida e-mail e senha */
$(document).ready(function () {
    $("#senha").on("focus", function () {
        var email = $("#email").val().trim();
        if (email === "") {
            alert("O campo email não pode ficar vazio!");
        }
    });

    $("form").on("submit", function (e) {
        e.preventDefault();

        var email = $("#email").val().trim();
        var senha = $("#senha").val().trim();
        var errorMessage = "";

        if (email === "" && senha === "") {
            errorMessage = "Os campos email e senha não podem ficar vazios!";
        } else if (email === "") {
            errorMessage = "O campo email não pode ficar vazio!";
        } else if (senha === "") {
            errorMessage = "O campo senha não pode ficar vazio!";
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            $(location).attr('href', '/home/index');
        }
    });
});

/* valida e-mail 2*/
$(document).ready(function () {
    var emailMostre = false;
    $("#senha").on("focus", function () {
        var email = $("#email").val().trim();

        if (!sevalido(email) && !emailMostre) {
            alert("Insira um E-mail valido");
            emailMostre = true;
        }
    });

    function sevalido(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }

    $("#email").on("input", function () {
        emailMostre = false;
    });
});


/* faz com que o menu adicionado na navbar fique com a cor amarela*/

(function ($) {
    "use strict";
    var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
}
)(jQuery);


$(document).ready(function () {
    $('.components li').on('click', function () {
        $('.components li').removeClass('active');
        $(this).addClass('active');
    });
});


$(document).ready(function () {

    var mapping = {
        'inicio': 'inicio-view',
        'meusdados': 'dados-view',
        'notifica': 'notifica-view',
        'holerite': 'holerite-view',
        'fale': 'fale-view'

    };

    function toggleViews(clickedButton) {
        for (var id in mapping) {
            $('#' + mapping[id]).hide();
        }
        $('#' + mapping[clickedButton]).show();
    }

    for (var id in mapping) {
        $('#' + id).on('click', function () {
            var clickedButton = $(this).attr('id');
            toggleViews(clickedButton);
        });
    }

});

/* relação de quantas mensagens vc tem em não lida ao clicar no checkbox ele devolve a diminuição do valor*/

$(document).ready(function () {
    var count = $('.message-checkbox:not(:checked)').length; // inicializa o contador com o número de checkboxes não marcadas
    $('#status-message').val('Status: Mensagens Não lidas (' + count + ')');
    
    $('.message-checkbox').click(function () {
        if ($(this).is(':checked')) {
            count--;
        } else {
            count++;
        }
        $('#status-message').val('Status: Mensagens Não lidas (' + count + ')');
    });
});

function falseSend() {
    var1=document.getElementById('rh-mensagem').value
if (var1 !== "") {
        alert("Mensagem enviada com sucesso!"); 
    } else {
        alert('não deixe isto vazio. fela da puta ')
    }
}