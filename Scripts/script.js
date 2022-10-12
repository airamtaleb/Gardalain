//10- cambiar background color
$(document.body).on('click', function (e) {
    //si pulsamos en body pero no en hijos
    if (e.target == this) {
      cambiarColor()
    }
  })
  function cambiarColor() {
    //generamos un color hexadecimal aleatorio
    let simbolos, color
    simbolos = '0123456789ABCDEF'
    color = '#'
  
    for (let i = 0; i < 6; i++) {
      color = color + simbolos[Math.floor(Math.random() * 16)]
    }
    //asignamos el color al background
    document.body.style.backgroundColor = color

    document.getElementsByClassName("content").backgroundColor = color
    //tambien cambiamos el titulo y botones
    document.getElementsByTagName('h1')[0].style.color = color
    document.getElementsByTagName('button')[0].style.backgroundColor = color
    document.getElementsByTagName('button')[1].style.backgroundColor = color
  }
  