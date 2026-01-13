 const xhr = new XMLHttpRequest();

        xhr.onload = function(){
           if(xhr.status === 200){
                const data= JSON.parse(xhr.responseText);
           }
        };
        xhr.open("GET", "player.json");
        xhr.send();
