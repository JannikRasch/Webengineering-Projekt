var input = document.querySelector('.input_text')
var main = document.querySelector('#name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')
var icon = document.querySelector('.icon')
var high = document.querySelector('.high')
var low = document.querySelector('.low')
var desc1 = document.querySelector('.desc1')
var icon1 = document.querySelector('.icon1')
var temp1 = document.querySelector('.temp1')
var date1 = document.querySelector('.date1')
var desc2 = document.querySelector('.desc2')
var icon2 = document.querySelector('.icon2')
var temp2 = document.querySelector('.temp2')
var date2 = document.querySelector('.date2')
var desc3 = document.querySelector('.desc3')
var icon3 = document.querySelector('.icon3')
var temp3 = document.querySelector('.temp3')
var date3 = document.querySelector('.date3')
var desc4 = document.querySelector('.desc4')
var icon4 = document.querySelector('.icon4')
var temp4 = document.querySelector('.temp4')
var date4 = document.querySelector('.date4')
var rainprecipitation = document.querySelector('.rainprecipitation')
var snowprecipitation = document.querySelector('.snowprecipitation')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var pressure = document.querySelector('.pressure')
var button = document.querySelector('.submit')
var date = document.querySelector('.date')
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget)
    openPopup(popup)
  })
})
overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active')
  popups.forEach(popup => {
    closePopup(popup)
  })
})
closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup')
    closePopup(popup)
  })
})
function openPopup(popup){
  if(popup == null) return
  popup.classList.add('active')
  overlay.classList.add('active')
}
function closePopup(popup){
  if(popup == null) return
  popup.classList.remove('active')
  overlay.classList.remove('active')
}

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1fe841666d27105582f1c814996249f4'+'&lang=de'+'&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']
  var nameValue = data['name']
  var descValue = data['weather'][0]['description']
  var iconValue = data['weather'][0]['icon']
  var highValue = data['main']['temp_max']
  var lowValue = data['main']['temp_min']
  if(data['rain'] !== undefined){
    var rainprecipitationValue = data['rain']['1h']
  }
  if(data['snow'] !== undefined){
    var snowprecipitationValue = data['snow']['1h']
  }
  var windValue = data['wind']['speed']
  var humidityValue = data['main']['humidity']
  var pressureValue = data['main']['pressure']
  var dateValue = new Date(data['dt']*1000)

  main.innerHTML = nameValue
  date.innerHTML = dateValue.toDateString()
  icon.innerHTML = "<img src=\"http://openweathermap.org/img/wn/"+iconValue+"@2x.png\"/>"
  desc.innerHTML = descValue+" bei "+tempValue+"&deg;C"
  high.innerHTML = "max. Temperatur: "+highValue+"&deg;C"
  low.innerHTML = "min. Temperatur: "+lowValue+"&deg;C"
  if(data['rain'] !== undefined){
    rainprecipitation.innerHTML = "Niederschlag (1h): "+rainprecipitationValue*100+"%"
  }
  if(data['rain'] === undefined){
    rainprecipitation.innerHTML = "Niederschlag (1h): keiner"
  }
  if(data['snow'] !== undefined){
    snowprecipitation.innerHTML = "Schneefall (1h): "+snowprecipitationValue*100+"%"
  }
  if(data['snow'] === undefined){
    snowprecipitation.innerHTML = "Schneefall (1h): keiner"
  }
  wind.innerHTML = "Wind: "+windValue+"m/s"
  humidity.innerHTML = "Luftfeuchtigkeit: "+humidityValue+"%"
  pressure.innerHTML = "Luftdruck: "+pressureValue+"mbar"
  input.value =""
})
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=1fe841666d27105582f1c814996249f4'+'&lang=de'+'&units=metric')
.then(response => response.json())
.then(data => {
  /*
  var tempValue = data['list'][0]['main']['temp']
  var nameValue = data['city']['name']
  var descValue = data['list'][0]['weather'][0]['description']
  var iconValue = data['list'][0]['weather'][0]['icon']
  var highValue = data['list'][0]['main']['temp_max']
  var lowValue = data['list'][0]['main']['temp_min']
  if(data['list'][0]['rain'] !== undefined){
    var rainprecipitationValue = data['list'][0]['rain']['3h']
  }
  if(data['list'][0]['snow'] !== undefined){
    var snowprecipitationValue = data['list'][0]['snow']['3h']
  }
  var windValue = data['list'][0]['wind']['speed']
  var humidityValue = data['list'][0]['main']['humidity']
  var pressureValue = data['list'][0]['main']['pressure']
  var dateValue = new Date(data['list'][0]['dt']*1000)

  main.innerHTML = nameValue
  date.innerHTML = dateValue.toDateString()
  icon.innerHTML = "<img src=\"http://openweathermap.org/img/wn/"+iconValue+"@2x.png\"/>"
  desc.innerHTML = descValue+" bei "+tempValue+"&deg;C"
  high.innerHTML = "max. Temperatur: "+highValue+"&deg;C"
  low.innerHTML = "min. Temperatur: "+lowValue+"&deg;C"
  if(data['list'][0]['rain'] !== undefined){
    rainprecipitation.innerHTML = "Niederschlag (3h): "+rainprecipitationValue*10+"%"
  }
  if(data['list'][0]['rain'] === undefined){
    rainprecipitation.innerHTML = "Niederschlag (3h): keiner"
  }
  if(data['list'][0]['snow'] !== undefined){
    snowprecipitation.innerHTML = "Schneefall (3h): "+snowprecipitationValue*10+"%"
  }
  if(data['list'][0]['snow'] === undefined){
    snowprecipitation.innerHTML = "Schneefall (3h): keiner"
  }
  wind.innerHTML = "Wind: "+windValue+"m/s"
  humidity.innerHTML = "Luftfeuchtigkeit: "+humidityValue+"%"
  pressure.innerHTML = "Luftdruck: "+pressureValue+"mbar"
  */

  var desc1Value = data['list'][8]['weather'][0]['description']
  var icon1Value = data['list'][8]['weather'][0]['icon']
  var temp1Value = data['list'][8]['main']['temp']
  var date1Value = new Date(data['list'][8]['dt']*1000)

  date1.innerHTML = date1Value.toDateString()
  icon1.innerHTML = "<img src=\"http://openweathermap.org/img/wn/"+icon1Value+"@2x.png\"/>"
  desc1.innerHTML = desc1Value+" bei "+temp1Value+"&deg;C"

  var desc2Value = data['list'][16]['weather'][0]['description']
  var icon2Value = data['list'][16]['weather'][0]['icon']
  var temp2Value = data['list'][16]['main']['temp']
  var date2Value = new Date(data['list'][16]['dt']*1000)

  date2.innerHTML = date2Value.toDateString()
  icon2.innerHTML = "<img src=\"http://openweathermap.org/img/wn/"+icon2Value+"@2x.png\"/>"
  desc2.innerHTML = desc2Value+" bei "+temp2Value+"&deg;C"

  var desc3Value = data['list'][24]['weather'][0]['description']
  var icon3Value = data['list'][24]['weather'][0]['icon']
  var temp3Value = data['list'][24]['main']['temp']
  var date3Value = new Date(data['list'][24]['dt']*1000)

  date3.innerHTML = date3Value.toDateString()
  icon3.innerHTML = "<img src=\"http://openweathermap.org/img/wn/"+icon3Value+"@2x.png\"/>"
  desc3.innerHTML = desc3Value+" bei "+temp3Value+"&deg;C"

  var desc4Value = data['list'][32]['weather'][0]['description']
  var icon4Value = data['list'][32]['weather'][0]['icon']
  var temp4Value = data['list'][32]['main']['temp']
  var date4Value = new Date(data['list'][32]['dt']*1000)

  date4.innerHTML = date4Value.toDateString()
  icon4.innerHTML = "<img src=\"http://openweathermap.org/img/wn/"+icon4Value+"@2x.png\"/>"
  desc4.innerHTML = desc4Value+" bei "+temp4Value+"&deg;C"
  input.value =""
})
.catch(err => alert("Wrong city name!"))
})

