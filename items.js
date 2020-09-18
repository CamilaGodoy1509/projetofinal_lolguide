
    let xhr = new XMLHttpRequest();

    let url = `http://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/item.json`;

    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let dadosJSONText = xhr.responseText
            let obj = JSON.parse(dadosJSONText)
            let items = document.getElementById('items')
            
            
            
            for (let prop in obj.data) {
               
                items.innerHTML +=   "<img src='http://ddragon.leagueoflegends.com/cdn/10.18.1/img/item/" + prop + `.png' onclick='mostrar(${prop})' id='img-items'> `
                + `<section id='${prop}' align='center'>` + obj.data[prop].name + "<br>" 
                + obj.data[prop].plaintext + "<br>" 
                + `<button onclick='esconder(${prop})'>` + "Mostrar Menos" + "</button>"+ "<br>"
                +"</section>" 
                
            }
        }

    }

    xhr.send()



    function mostrar(prop) {
           
            $("#" + prop).show()
        
            
        }

        
    function esconder(prop) {
           
        $("#" + prop).hide()
    
        
    }
    
   
       


{/*  */}