// JavaScript


// jQuery

// Accordion start===================

$(document).ready(function(){

$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

});

// Autocomplete start===================

// Scrollable Results start

$(document).ready(function(){
  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
});

// Datepicker start
// Default Functionality Start
$(document).ready(function(){
  $( function() {
    $( "#datepicker1" ).datepicker();
  } );
});

// Display Month & Year Menus Start
$(document).ready(function(){
  $( function() {
    $( "#datepicker2" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );
});

// Icon Trigger
$(document).ready(function(){
  $( function() {
    $( "#datepicker3" ).datepicker({
      showOn: "button",
      buttonImage: "./images/calender.png",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );
});

// Progressbar start ==========
// Custom level start
$(document).ready(function(){
  $( function() {
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
  } );
});

//Download Dialogue start
$(document).ready(function(){
  $( function() {
    var progressTimer,
      progressbar = $( "#progressbar2" ),
      progressLabel = $( ".progress-label" ),
      dialogButtons = [{
        text: "Cancel Download",
        click: closeDownload
      }],
      dialog = $( "#dialog" ).dialog({
        autoOpen: false,
        closeOnEscape: false,
        resizable: false,
        buttons: dialogButtons,
        open: function() {
          progressTimer = setTimeout( progress, 2000 );
        },
        beforeClose: function() {
          downloadButton.button( "option", {
            disabled: false,
            label: "Start Download"
          });
        }
      }),
      downloadButton = $( "#downloadButton" )
        .button()
        .on( "click", function() {
          $( this ).button( "option", {
            disabled: true,
            label: "Downloading..."
          });
          dialog.dialog( "open" );
        });
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
        dialog.dialog( "option", "buttons", [{
          text: "Close",
          click: closeDownload
        }]);
        $(".ui-dialog button").last().trigger( "focus" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
 
      if ( val <= 99 ) {
        progressTimer = setTimeout( progress, 50 );
      }
    }
 
    function closeDownload() {
      clearTimeout( progressTimer );
      dialog
        .dialog( "option", "buttons", dialogButtons )
        .dialog( "close" );
      progressbar.progressbar( "value", false );
      progressLabel
        .text( "Starting download..." );
      downloadButton.trigger( "focus" );
    }
  } );
});

// Tabs start ==================

// Default Functionality start
$(document).ready(function(){
  $( function() {
    $( "#tabs" ).tabs();
  } );
});

// Collapse Content start
$(document).ready(function(){
  $( function() {
    $( "#tabs2" ).tabs({
      collapsible: true
    });
  } );
});

// Open on Mouseover start
$(document).ready(function(){
  $( function() {
    $( "#tabs3" ).tabs({
      event: "mouseover"
    });
  } );
});

// Sortable start
$(document).ready(function(){
  $( function() {
    var tabs = $( "#tabs4" ).tabs();
    var previouslyFocused = false;
 
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
 
      // Sortable removes focus, so we need to restore it if the tab was focused
      // prior to sorting
      start: function(event, ui) {
        previouslyFocused = document.activeElement === ui.item[ 0 ];
      },
      stop: function(event, ui) {
        tabs.tabs( "refresh" );
        if (previouslyFocused) {
          ui.item.trigger( "focus" );
        }
      }
    });
  });
});

// Tooltip start ===================
//default functionality start
$(document).ready(function(){
  $( function() {
    $( document ).tooltip();
  } );
});

//forms start
$(document).ready(function(){
  $( function() {
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    $( "<button>" )
      .text( "Show help" )
      .button()
      .on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
  });
});