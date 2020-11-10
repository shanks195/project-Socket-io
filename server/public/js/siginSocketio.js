var socket = io("http://localhost:3000");
$(document).ready(function() {
            $("#btnRegister").click(function() {
                    socket.emit("client-send-username", $("#txtUserName").val(),
                        socket.emit("client-send-password", $("#txt"))
                    });
            })