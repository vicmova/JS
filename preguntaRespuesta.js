//<script type = "text/javascript">

    var puntos = 0;

    var preguntas = [

        ['¿Pregunta?', "Respuesta"],
        ['¿Pregunta?', "Respuesta"],
        ['¿Pregunta?', "Respuesta"],
        ['¿Pregunta?', "Respuesta"]

        ];

function hazPregunta(pregunta){

    var resp = prompt(pregunta[0],'')

        if(resp==pregunta[1]){

        alert('Correcto!');
        puntos++;
  
        } else {

        alert('Lo sentimos. La respuesta correcta es: ' + pregunta[1]);

  }
}

for(var i=0;i<preguntas.length;i++){

    hazPregunta(preguntas[i]);

}

//document.write("Puntos finales = " + puntos);

//</script>