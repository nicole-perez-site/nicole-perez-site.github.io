// JavaScript Document

$( function() {
   $("map area").click( function(){

if ($(this).attr("id") == "wall") {
         $("#feedback").css("color","black");
         $("#feedback").html("Blue hands should be cleaned if soiled, but will always be cleaned during the 'Terminal Cleaning' at the end of every surgical day.");
      }
if ($(this).attr("id") == "orange") {
         $("#feedback").css("color","black");
         $("#feedback").html("These areas are not normally contaminated but should be included in the Enhanced cleaning after a patient with a multi resistant drug infection or contagious disease like MRSA, VRE, or C-Diff.");
      }
if ($(this).attr("id") == "enhanced") {
         $("#feedback").css("color","black");
         $("#feedback").html("Enhanced areas need to be cleaned after any patient with a multi resistant drug infection.");
      }       
if ($(this).attr("id") == "stool") {
         $("#feedback").css("color","black");
         $("#feedback").html("Enhanced areas need to be cleaned after any patient with a multi resistant drug infection.");
      }
if ($(this).attr("id") == "pedal") {
         $("#feedback").css("color","black");
         $("#feedback").html("All light purple hands must be cleaned after EVERY patient if it is used – such as equipment foot pedals");
	}
if ($(this).attr("id") == "lights") {
         $("#feedback").css("color","black");
         $("#feedback").html("All light purple hands must be cleaned after EVERY patient if it is used – such as reusable positioning devices, foot pedals, monitors, etc.");
      } 
if ($(this).attr("id") == "floor") {
         $("#feedback").css("color","black");
         $("#feedback").html("Blue hands should be cleaned if soiled, but will always be cleaned during the 'Terminal Cleaning' at the end of every surgical day.");
      } 
if ($(this).attr("id") == "backtable") {
         $("#feedback").css("color","black");
         $("#feedback").html("All light purple hands must be cleaned after EVERY patient if it is used – such as reusable positioning devices, foot pedals, monitors, etc.");
      }
if ($(this).attr("id") == "boom") {
         $("#feedback").css("color","black");
         $("#feedback").html("All light purple hands must be cleaned after EVERY patient if it is used – such as the equipment 'boom'.");
		}
if ($(this).attr("id") == "remotebelt") {
         $("#feedback").css("color","black");
         $("#feedback").html("All purple hands must be cleaned after EVERY patient including the safety belt and the operating table's remote control.");
		}
if ($(this).attr("id") == "reusables") {
         $("#feedback").css("color","black");
         $("#feedback").html("All light purple hands must be cleaned after EVERY patient if it is used – such as reusable positioning equipment.");
		}
if ($(this).attr("id") == "table"){
         $("#feedback").css("color","black");
         $("#feedback").html("The operating table must be cleaned after EVERY patient.");
		}
if ($(this).attr("id") == "anesthesia") {
         $("#feedback").css("color","black");
         $("#feedback").html("All purple hands must be cleaned after EVERY patient. The anesthesia machine also gets a new 'circuit' during cleaning.");
		}
if ($(this).attr("id") == "monitor") {
         $("#feedback").css("color","black");
         $("#feedback").html("All light purple hands must be cleaned after EVERY patient if it is used – such as video monitors");
		}
if ($(this).attr("id") == "board") {
         $("#feedback").css("color","black");
         $("#feedback").html("All light purple hands must be cleaned after EVERY patient if it is used – such as the patient transfer board.");
		}
   });	
	
}); //end main jQuery function
