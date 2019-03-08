var xhr = new XMLHttpRequest();
var button = document.getElementById('country');

function showCountry(country){
    var countryName = document.getElementById(country).value;
    console.log(countryName);
     xhr.open("GET", "https://restcountries.eu/rest/v2/name/"+countryName);
     xhr.send();
     xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            detail();
        }   
     }
}
function detail(){
    var country = JSON.parse(xhr.response);

    console.log(country);
}
