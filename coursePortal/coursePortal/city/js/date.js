var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August",
    "September", "October", "Noveber", "December"]

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


document.getElementById("datemodified").innerHTML = days[d.getDay()] + ", " + d.getDate() + ' ' + month[d.getMonth()] + " " + d.getUTCFullYear();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}
