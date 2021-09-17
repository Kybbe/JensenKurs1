var boxMoved = false;

$(document).ready(function () {

    $("#p1").on({
        mousedown: function () {
            $("#p1").text("OUCH, that hurts dude!");
        },
        mouseenter: function () {
            $("#p1").text("HI! :)");
        },
        mouseleave: function () {
            $("#p1").text("Bye :(");
        }
    });
    
    $("input").on({
        focus: function () {
            $(this).css("background-color", "yellow");
        },
        blur: function () {
            $(this).css("background-color", "blueviolet");
            $(this).css("color", "white");

            if( $(this).attr("name") == "fullname"){
                $("#inputValue1").text( $(this).val() )
            } else {
                $("#inputValue2").text( $(this).val() )
            }
        },
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
            $(this).css("color", "black");
        },
        mouseleave: function () {
            $(this).css("background-color", "unset");
            $(this).css("color", "black");
        }
    });
    
    $("p").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightgreen");
        },
        click: function () {
            $(this).css("background-color", "blueviolet");
        }
    });
    
    clicks = 0;

    $("#changeText").mousedown(function () {
        buttonTexts = ['What are you doing?', 'Why is my body morphing this way??', 'What is GOING OOON', 'Please stop clicking', 'It hurts!', 'STOOOOOP', 'Please i BEG YOU', 'Why wont you just stop clicking????!?!?!?!?!?', 'Well, if you dont stop i will.... Stop changing!', 'Maybe that will be less fun?', 'HMM?', 'Okay i will stop now', 'Okay i will stop now', 'Okay i will stop now', 'Okay i will stop now', 'Okay i will stop now', 'Okay i will stop now', 'Okay i will stop now', 'You have really just clicked me 20 times in a row.', 'Could you please stop now', 'Thanks!', 'You are a terrible person, I dont wanna hang out with you anymore', 'BYE', 'Mr. Stark, I dont feel so good']

        if (clicks == buttonTexts.length) {
            $(this).fadeOut(1000);
            return
        };
        $(this).text(buttonTexts[clicks]);
        clicks++;
    });


    $("#hide").mousedown(function () {
        $("#p2").hide();
    });
    $("#show").mousedown(function () {
        $("#p2").show();
    });
    $("#toggle").mousedown(function () {
        $("#p2").toggle();
    });


    $("#fadeIn").mousedown(function () {
        $("#p2").fadeIn();
    });
    $("#fadeOut").mousedown(function () {
        $("#p2").fadeOut();
    });
    $("#fadeToggle").mousedown(function () {
        $("#p2").fadeToggle();
    });


    $("#bulbUp").mousedown(function(){
        $("#bulbImg").slideUp();
    });
    $("#bulbDown").mousedown(function(){
       $("#bulbImg").slideDown();
    });
    $("#bulbToggle").mousedown(function(){
       $("#bulbImg").slideToggle();
    });



    var $box = $(" <button id='boxAnimate'> Animate Box </button> ");
    
    $box.mousedown(function(){
        if(!boxMoved) {
            $("#animatedBox").animate({
               left: '75px',
               opacity: '0.5',
               height: '150px',
               width: '150px'
            });
            boxMoved = true;
        } else {
            $("#animatedBox").animate({
                left: '50%',
                opacity: '1',
                height: '250px',
                width: '250px'
            });
             boxMoved = false;
        }

    });

    $('#animatedBox').after($box);




    $("#catchText").mouseenter(function() {
        $("#catchText").text( "You caught me!" );

        $("#catch").unbind();
        $("#catch").fadeOut(4000);

        console.log("You caught the running box! Good job!")
    })

    $("#catch").mouseenter(function(){

        y = getRandomPosition("y");
        x = getRandomPosition("x");

        $("#catch").css({
            "top": y + "px",
            "left": x + "px",
            "opacity": "1"
        })
    });

     function getRandomPosition(direction){
         if(direction == "x") {
             var width = $(document).width();
             if(width > "200"){
                 width -= "100"
             }

             var x = Math.floor((Math.random() * width) + 1);

             return x;
         } else if (direction == "y") {
             var height = $(document).height();
             if(height > "200"){
                 height -= "200"
            }

             var y = Math.floor((Math.random() * height) + 1);

             return y;
         } else {
             console.log(direction + " is invalid, try 'x' or 'y'")
         }
    }





    $("#BLOWITUP").mousedown(function(){
        $("#card").empty();
        $("#catch").remove();
        $(this).remove();

        $("#card").append(" <img src='./Pictures/explosion.gif' alt='Explosion'> ")
     });

});