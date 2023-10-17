// JavaScript Document

$( function() {
   $("map area").click( function(){

if ($(this).attr("id") == "VRE") {
         $("#feedback").css("color","black");
         $("#feedback").html("Enterococci bacteria that are resistant to Vancomycin Antibiotics. VRE can cause urinary tract infections, wound infections, etc.");
      }
if ($(this).attr("id") == "CRAsp") {
         $("#feedback").css("color","black");
         $("#feedback").html("These areas are not normally contaminated but should be included in the Enhanced cleaning after a patient with a multi resistant drug infection or contagious disease like MRSA, VRE, or C-Diff.");
      }
if ($(this).attr("id") == "MRSA") {
         $("#feedback").css("color","black");
         $("#feedback").html("MRSA is a type of staph bacteria. Its unfortunately very common in hospitals. These are usually skin infections but can become severe.");
      }       
if ($(this).attr("id") == "CRE") {
         $("#feedback").css("color","black");
         $("#feedback").html("Enterobacterales bacteria like ESBL, but these ones are specifically resistant to the Carbapenem antibiotic family.");
      }
if ($(this).attr("id") == "ESBL") {
         $("#feedback").css("color","black");
         $("#feedback").html("Enterobacterales are a large group of bacteria including E Coli. These bacteria create an enzyme that breaks down certain antibiotics making them ineffective.");
	}
if ($(this).attr("id") == "MDR") {
         $("#feedback").css("color","black");
         $("#feedback").html("Pseudomonas aeruginosa can cause infections in the blood and lungs.");
      } 
   });	
	
}); //end main jQuery function