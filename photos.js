//En lugar de 5.000 imágenes, solo trae 4

const API_URL = "http://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status == 200){
       
        const photo = JSON.parse(this.response);
        console.log(photo);

        let div = document.getElementById('app');
        div.innerHTML=" ";

        for (let i = 0; i <= 3; i++){
            let divInside = document.createElement('div');
            divInside.innerHTML = "<li>URL N° <b>" + (i + 1) + "</b>: " + photo[i].url + "</li><br><a href=" + photo[i].url + "><img src=" + photo[i].thumbnailUrl + "></a><br><br><hr size=7 color=black><br>";
            div.appendChild(divInside);
        }    
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/photos`);
xhr.send();



