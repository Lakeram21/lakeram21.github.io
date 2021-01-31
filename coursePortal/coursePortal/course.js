var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August",
    "September", "October", "Noveber", "December"]

var year = getFullYear()

var date = new Date()
var day = date.getDate()
console.log(days[day])


var string = document.lastModified;
let year = new Date
year = year.getFullYear()
document.getElementById('datemodified').textContent = "Last Updated: " + string
document.getElementById("currentYear").textContent = year