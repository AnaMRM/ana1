/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
  }

    


};




function onDeviceReady(){
        
  navigator.geolocation.getCurrentPosition(app.geoCallback,app.onError)

}



function geoCallback(position){
  var lati = position.coords.latitude;
  var long = position.coords.longitude;
  var latLong = new google.maps.LatLng(latitude,longitude)
  
  var mapOptions = {
    center: latLong,
    zoom:13,
    mapTypeId: google.map.mapTypeId.ROADMAP
  };

    var map = new google.maps.Map(document.getElementById("map"),mapOptions);
    
    var marker = new google.maps.marker({
      position: latLong,
      map: map,
      title:'my location'


    });
  }
function  onError(error){
    alert("cod error" + error.code +".\n"+"mensagem: "+ error.message);
  }







  //weather

  var getWeatherPosition = function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        showWeatherPosition(lat, long)
      })
    }
       else {
            window.alert("error");
      }
  }



var temperature;

window.onload = function() {
  temperature = document.getElementById("current-temperature");
}

 function showWeather(lat, long) {
    var url = `https://api.darksky.net/forecast/3ecbaedb361d5a2bd560f9e2d34116c4/${lat},${long}` + `?format=jsonp&callback=displayWeather`;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    displayWeather(object)   
  }

var object;

 function displayWeather(object) {
    temperature.innerHTML = farenheitToCelsius(object.currently.temperature) + " C" + " / " + object.currently.temperature + " F";
   
    console.log(object);

 }


