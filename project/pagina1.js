$(document).ready(function() {

    //logo dinamico
    function carregaimagem() {
        var logoimg= $(".logo");
        var rand= Math.round(Math.random()*9) + 1;
        logoimg.addClass("logo"+rand);
    };
    carregaimagem();

    //lightbox
    function fecha_popup() {
        document.getElementById("tela").style.display="none";
        document.getElementById("popup").style.display="none";
        $('body').css('overflow', 'scroll');
    }

    function mostra_popup() {
        document.getElementById("tela").style.display="block";
        document.getElementById("popup").style.display="block";
    }

    var cidades= ["Braga", "Porto", "Coimbra", "Lisboa", "Faro"];
    $("#tela").css("display", "block");
    $('body').css('overflow', 'hidden');
    var ul= document.createElement('ul');
    document.getElementById("popup").appendChild(ul);
    cidades.forEach(function(cidade){
        var li = document.createElement('li');
        ul.appendChild(li);    
      	li.setAttribute("id", cidade);
        li.innerHTML += cidade;
    });
    
    $("#popup > ul > li").click( function(){
   		$('.localidade').empty();
   		var cidade= $(this).attr('id');
        $('.localidade').append('<p>'+cidade+'</p>');
      fecha_popup();
    });


    // var cidades= ["Braga", "Porto", "Coimbra", "Lisboa", "Faro"];
    // $("#tela").css("display", "block");
    // $('body').css('overflow', 'hidden');
    // var ul= document.createElement('ul');
    // document.getElementById("popup").appendChild(ul);
    // cidades.forEach(function(cidade){
    //     var li = document.createElement('li');
    //     ul.appendChild(li);
    //     li.innerHTML += cidade;
    // });

    // $("#popup > ul > li").on("click", function(){
    //     var p= document.createElement("p");
    //     document.getElementsByClassName("localidade").append(p);
    //     p.innerHTML+=this;
    // });

//     $("#popup > ul > li").click( function(){
//         $('.localidade').prepend('<p>Bla bla bla</p>');
//   });
    $(".localidade").on("click",function(){
        mostra_popup();
    });

    document.getElementById("popup").getElementsByClassName("fecha_popup")[0];
    document.querySelectorAll("#popup .fecha_popup")[0].addEventListener("click",function() {
        fecha_popup();
        $('.localidade').append('<p>'+cidades[0]+'</p>');
    }, false);

    document.querySelector("#tela").addEventListener("click",function() {
        fecha_popup()
    }, false);

    document.body.addEventListener("keyup", function(evt) {
        if (evt.keyCode==27) {
          fecha_popup();  
        }
    }, false);

    //data
    var dias= ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira","Sexta-feira", "Sábado", "Domingo"]
    var meses= ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    var hoje= new Date();

    hoje.setDate(hoje.getDate());
    $("#data").html(dias[hoje.getDay()-1] + ", " + hoje.getDate() + " " + meses[hoje.getMonth()] + " " + hoje.getFullYear());

    //tabs
    $(".tablink").on("mouseover", function(){
        var imagem= $(".tabimage").find("img");
        var index= $(this).data("index");
        imagem.removeClass("activeimage");
        imagem.eq(index).addClass("activeimage");
    });

    //cookie button
    $(".cookiebutton").on("click", function(){
        $("#cookies").css("display", "none");
    });

    //ao fadeout
    $(".ao").on("click", function(){
        $(this).fadeOut();
    });



});