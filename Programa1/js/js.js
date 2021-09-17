function figtotal(){
    var num = document.getElementById("numeros").value;
    var r = document.getElementsByName("opcion");
    var op = document.getElementsByName("forma");

    html="";

    for(var i=0; i< r.length; i++){
        if(op[i].checked){
            var f = op[i].value;
        }
    }
    switch(f){
        case 'cu':
            for(var i=0; i< r.length; i++){
                if(r[i].checked){
                    var e = r[i].value;
                }
            }
            switch(e){
                case 'a':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:green; display: inline-block; margin: 5px;'></div>";
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
        
                case 'b':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:white; display: inline-block; margin: 5px;'></div>" 
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
        
                case 'c':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:red; display: inline-block; margin: 5px;'></div>" 
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
            }
        break;

        case 'ci':
            for(var i=0; i< r.length; i++){
                if(r[i].checked){
                    var e = r[i].value;
                }
            }
            switch(e){
                case 'a':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:green; display: inline-block; margin: 5px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;'></div>" 
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
        
                case 'b':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:white; display: inline-block; margin: 5px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;'></div>" 
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
        
                case 'c':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:red; display: inline-block; margin: 5px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;'></div>" 
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
            }
        break;

        case 'tr':
            for(var i=0; i< r.length; i++){
                if(r[i].checked){
                    var e = r[i].value;
                }
            }
            switch(e){
                case 'a':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:green; display: inline-block; margin: 15px; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg)'></div>" 
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
        
                case 'b':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:white; display: inline-block; margin: 15px; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg)'></div>"  
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
        
                case 'c':
                    for(var i = 0; i < num;i++){
                        html += "<div style='height: 50px; width:50px; background:red; display: inline-block; margin: 15px; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg)'></div>" 
                    }
                
                    document.getElementById("resultado").innerHTML = html;
                break;
            }
        break;
    }


   
}