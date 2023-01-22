/* $(function() {
    $("a").click(function(event) {
    if (this.hash!=="") {
        event.preventDefault();
        var gato=this.hash;
        alert('prueba de bloque '+gato);     
        $('html, body').animate({scrollTop: $(gato).offset().top}, 800, function(){
        window.location.hash=gato; 
        alert('prueba de bloque '+gato);
            });
        } // Fin del if    
    })
}); */

$(function() {
    $("a").click(function(event) {
        if (this.hash!=="") {// Previene el comportamiento de click predeterminado
            event.preventDefault();// Guarda el valor del hash en una variable llamada gato
            var gato=this.hash;// Usa el método animate para animar el scroll y hacerlo de una formasuave
            // alert(gato);
        // El número opcion a (800) especifica el número de milisegundos que sedemorará en llegar hasta el área
        $('html, body').animate({scrollTop: $(gato).offset().top-70}, 800, function(){
        // Agrega hash (#) a la URL cuando haya terminado de desplazarse(comportamiento de click predeterminado)
        // window.location.hash=gato;      
            });
        } // Fin del if    
    })
});

$(function(){
    $('[data-toggle="popover"]').popover({
        trigger:'hover'
    });

});
// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });