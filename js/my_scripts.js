// var name=prompt("Please enter your name");
// console.log(name);

// var xmlhttp = new XMLHttpRequest();
// var url = "mock.json";

// xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//         var myArr = JSON.parse(xmlhttp.responseText);
//         myFunction(myArr);
//     }
// };

// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myFunction(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.businesses.length; i++) {
//         out += '<a href="' + arr.businesses[i].businessname + '">' + 
//         arr[i] + '</a><br>';

//         // document.getElementById("p1").innerHTML = "New text!";

//         console.log(arr.businesses[i].businessname);
//     }
// }

if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS version yet.');
}

var x = document.getElementById("demo");

function showPosition(position) {
    alert = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;  
}

// JQUERY START

// $( "#discountButton" ).click(function() {
//     alert("YES!!!");
//   // var htmlString = $( this ).html();
//   // $( this ).text( htmlString );
// });




