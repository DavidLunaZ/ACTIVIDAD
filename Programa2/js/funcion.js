function mostrarDatos(){


    var m = document.getElementsByName("musica");
    for(var i=0; i< m.length; i++){
        if(m[i].checked){
            var music = m[i].value;
        }
    }
    var p = document.getElementsByName("peli");
    for(var i=0; i< p.length; i++){
        if(p[i].checked){
            var pelis = p[i].value;
        }
    }
    var s = document.getElementsByName("sistema");
    for(var i=0; i< s.length; i++){
        if(s[i].checked){
            var sis = s[i].value;
        }
    }
    var e = document.getElementsByName("estacion");
    for(var i=0; i< e.length; i++){
        if(e[i].checked){
            var esta = e[i].value;
        }
    }
    var c = document.getElementsByName("color");
    for(var i=0; i< c.length; i++){
        if(c[i].checked){
            var col = c[i].value;
        }
    }
    

    datos = '|Tu gusto de música es : '+music+'<br/>|Tu género de peliculas es : '+pelis+'<br/>|Tu sistema operativo preferido es : '+sis+'<br/>|Tu estación favorita del año es : '+esta+'<br/>|Tu color preferido es : '+col;
    document.getElementById("resultado").innerHTML = datos;

}