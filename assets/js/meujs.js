 // PLANO DE FUNDO - INICIO
 $.backstretch([      
	      "img/arena.jpg",
	      "img/fundo.png"
	      ], {
	        fade: 750,
	        duration: 9000
	    });



// Tela de Login
function scrollLogin (){
	var posicaoMenu = $(".login").offset().top;
	$("#navbar").animate(
	{
		scrollTop: posicaoMenu+"px"
	},500);
}


$("#login").click(telaLogin);
function telaLogin(event){	
	event.preventDefault();
	var login = $(".login");
	var isVisible = login.is( ":visible" );
	var isHidden = login.is( ":hidden" );	
	if(isVisible){
		login.stop().slideToggle(500);

	}else{
		login.stop().slideToggle(500);
		scrollLogin();
	};
	
};

	
