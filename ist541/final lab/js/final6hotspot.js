// JavaScript Document

$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "table") {
         $("#feedback").css("color","black");
         $("#feedback").html("The operating room table and all other purple hands MUST be cleaned after EVERY patient");
      }

      if ($(this).attr("id") == "operating room wall") {
         $("#feedback").css("color","teal");
         $("#feedback").html("Operating room walls (and ceilings) are included in 'Terminal Cleaning' at the end of every day.");
      }

      if ($(this).attr("id") == "operating room floor") {
         $("#feedback").css("color","navy");
         $("#feedback").html("Floors and walls should be cleaned if soiled between each patient");
      }  

 if ($(this).attr("id") == "enhanced") {
         $("#feedback").css("color","red");
         $("#feedback").html("Enhanced areas need to be cleaned after any patient with a multi resistent drug infection.");
      } 
   });
}); //end main jQuery function