function addParrafo(){
    var divp = document.getElementById("principal");
    var cont = 0;
    const elements = [1,0];

    for(var i = 0;i<22;i++){
        if(i == 6) cont-=4;
        if(i == 12) cont-=4;

        var p = document.createElement("p");

        if(i>=19){
            p.className = "raiz";
            for(var j = 0;j<5;j++){
                p.innerHTML +=""+elements[Math.floor(Math.random() * elements.length)];         
            }
        }else{
            for(var j = 0;j<cont;j++){
                p.innerHTML +=""+elements[Math.floor(Math.random() * elements.length)];         
            }
            if(i == 0) p.innerHTML= ""+elements[Math.floor(Math.random() * elements.length)]; 
            cont+=3
        }  
        divp.appendChild(p);
    }
}

addParrafo();
