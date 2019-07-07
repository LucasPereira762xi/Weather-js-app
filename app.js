window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat  = position.coords.latitude;
            
            const api = 'https://api.darksky.net/forecast/79c0804681efa552dfd5807732d660d9/${lat},${long}';
        });

        fetch(api)
            .then(data =>{
                
            });
    }else{
        h1.textContent = "SEM LOCALIZAÇÃO :(";
    }
    
});