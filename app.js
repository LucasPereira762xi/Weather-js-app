window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.description');
    let temperatureDegree = document.querySelector('.degree');
    let timezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat  = position.coords.latitude;
            
            // ESTA VARIAVEL RECEBE UM LINK PARA PODER CHAMAR A API DE UM SERVIDOR LOCAL
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            // ESTA VARIAVEL CHAMA A API COM AS INFORMAÇÕES DO NAVEGADOR
            const api = proxy+'https://api.darksky.net/forecast/79c0804681efa552dfd5807732d660d9/'+lat+','+long;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                // PEGANDO ELEMENTOS DO DATA
                // O FORMATO 'const {temperature}' É FORMA AGIL DE COLETAR OS ELEMENTOS
                const {temperature, summary} = data.currently;
                // SET DOM ELEMENTS DIRETO DA API
                const $cel = ((temperature - 32) * 5/9);
                temperatureDegree.textContent = $cel.toFixed(0);
            })
        });

        
    }else{
        h1.textContent = "SEM LOCALIZAÇÃO :(";
    }
    
});