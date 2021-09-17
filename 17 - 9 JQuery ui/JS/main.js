$( function() {
    $( document ).tooltip();
    $( "#accordion" ).accordion();
    
    $( function() {
        $( "#datepicker" ).datepicker();
        $( "#format" ).on( "change", function() {
          $( "#datepicker" ).datepicker( "option", "dateFormat", $( this ).val() );
        });
      } );
      
    $( function() {
        $( "#slider" ).slider({
          value:50,
          min: 0,
          max: 500,
          step: 50,
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.value );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
      } );
  } );
