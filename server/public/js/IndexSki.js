$(document).ready(function() {
    $("#loginForm").show();
    $('#Home_Content').hide();
})
var socket = io.connect('http://localhost:3000');