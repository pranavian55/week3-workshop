$(document).ready(function(){
    console.log("page ready")
    $("#loginform").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    })

    function ajaxPost(){
        var formData = {
            email: $("#email").val(),
            upwd : $("#upwd").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer){
                
                if (customer.valid == true){
                    console.log("here");
                    $("#loginform").addClass("success");
                    $("#loginform").removeClass("fail");
                    $("#errormsg").removeClass("showmessage");
                    $("#errormsg").addClass("hidemessage");
                    
                }else{
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                    $("#errormsg").removeClass("hidemessage");
                    $("#errormsg").addClass("showmessage");
                }
                $("postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email+ "</br>" +
                 "Password: " +customer.upwd+ "</br>" + "Valid User: " +customer.valid + "</p>");
            },
            error : function(e) {
                alert("Error!")
                console.log(window.location + "api/login");
                console.log ("sup ")
                console.log ("ERROR: ",e);
            }
        });
        //reset formadata
        resetData();
    }
    function resetData(){
        $("#email").val("");
        $("#upwd").val("");
    }
})