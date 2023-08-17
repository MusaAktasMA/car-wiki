$(document).ready(function () {
     $(".models").each(function (index, element) {
         $(element).click(function (e) { 
             $(".back-btn").hide();
             
         });
         
     });
 
     $(".close").click(function (e) { 
         $(".back-btn").show();
         
     });
 
 });