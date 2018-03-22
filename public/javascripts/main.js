$(document).ready(function(e) {
    // First name animation code here
    setTimeout(function() {
        $('.fly-in-text1').removeClass('hidden');
    }, 500);

    // Last name animation code here
    setTimeout(function() {
        $('.fly-in-text2').removeClass('hidden');
    }, 1000);
    
    $('#name').on('input', function() {
        let input=$(this);
        const is_name=input.val();
        if(is_name){
            input.removeClass("invalid animated pulse").addClass("valid");
        } else{
            input.removeClass("valid").addClass("invalid animated pulse");
        }
    });

    $('#email').on('input', function() {
        let input2=$(this);
        const is_email=input2.val();
        if(is_email){
            input2.removeClass("invalid animated pulse").addClass("valid");
        } else{
            input2.removeClass("valid").addClass("invalid animated pulse");}
    });

    $('#phone').on('input', function() {
        let input3=$(this);
        const is_phone=input3.val();
        if(is_phone){
            input3.removeClass("invalid animated pulse").addClass("valid");
        } else{
            input3.removeClass("valid").addClass("invalid animated pulse");
        }
    });    
    
    $('#message').on('input', function() {
        let input4=$(this);
        const is_message=input4.val();
        if(is_message){
            input4.removeClass("invalid animated pulse").addClass("valid");
        } else{
            input4.removeClass("valid").addClass("invalid animated pulse");
        }
    });    
 });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            $('input[name=name]').addClass('animated pulse');
            $('input[name=email]').addClass('animated pulse');
            $('input[name=phone]').addClass('animated pulse');
            $('input[name=message]').addClass('animated pulse');
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);
})();

function showProgrammingListMobile() {
    const x = document.getElementById("myLanguagesMobile");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showProgrammingListWeb() {
    const x = document.getElementById("myLanguagesWeb");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}