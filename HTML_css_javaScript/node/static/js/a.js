var xhr = new XMLHttpRequest()
xhr.open('GeT','/getWeather',true)
xhr.send()
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText))
}


