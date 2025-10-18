

// FUNCIONALIDAD DEL MENU
$(".hide").on('click', function () {
    $("nav ul").toggleClass('show'); // Alterna la clase "show" para mostrar u ocultar el menú

    // Cambiar márgenes dependiendo del estado del menú
    if ($("nav ul").hasClass('show')) {
      // Si el menú está visible, elimina el margen inferior del icono y el margen superior de las opciones
      $(".hide").css('margin-bottom', '0'); // Elimina el margen del ícono
      $("nav ul").css('margin-bottom', '0'); // Elimina el margen de las opciones
    } else {
      // Si el menú está oculto, aplica un margen entre el menú y el carrusel
      $(".hide").css('margin-bottom', '20px'); // Aplica margen al ícono
      $("nav ul").css('margin-bottom', '0'); // Elimina el margen de las opciones
    }
});

