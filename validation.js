 var validationvar = true;

 function validationform() {
     // firstname validation.....
     if (!$("#Firstname").val()) {
         $(".error-firstname").text(" The firstname is required.");
         $("span").css("color", "red");
         validationvar = false;
     } else if (((/[0-9]/g).test($("#Firstname").val())) === true) {
         $(".error-firstname").text(" The firstname should in text format.");
         $("span").css("color", "red");
         validationvar = false;
     } else {
         $("span").remove(".error-firstname");
         validationvar = true;

     }
     // lastname validation.....
     if (!$("#Lastname").val()) {
         $(".error-lastname").text("The lastname is required.");
         $(".error-lastname").css("color", "red");
         validationvar = false;
     } else if (((/[0-9]/g).test($("#Lastname").val())) === true) {
         $(".error-lastname").text("The lastname should in text format.");
         $(".error-lastname").css("color", "red");
         validationvar = false;
     } else {
         $("span").remove(".error-lastname");
         validationvar = true;

     }
     // gender validation..

     if ($('#radio1').is(':checked') || $('#radio2').is(':checked')) {
         $("span").remove(".error-gender");

     } else {
         $(".error-gender").text("The gender is required.");
         $(".error-gender").css("color", "red");
         validationvar = false;
     }
     // date of birth validation.....
     if (!$("#Dateofbirth").val()) {
         $(".error-dob").text("The date of birth is required.");
         $(".error-dob").css("color", "red");
         validationvar = false;
     } else {
         $("span").remove(".error-dob");
         validationvar = true;

     }
     // mobile number validation....
     var pattern = /[0-9]{10}/;
     var a = $("#Mobilenumber").val();
     if (!$("#Mobilenumber").val()) {
         $(".error-mobileno").text("The mobile number is required.");
         $(".error-mobileno").css("color", "red");
         validationvar = false;
     } else if ((pattern.test(a) === false || a.length !== 10) || (pattern.test(a) === true) && a.length !== 10) {
         $(".error-mobileno").text("Invalid mobile number.");
         $(".error-mobileno").css("color", "red");
         validationvar = false;
     } else {
         $("span").remove(".error-mobileno");
         validationvar = true;
     }
     // email validation.....
     var emailpattern1 = /@gmail.com$/;
     if (!$("#Email").val()) {
         $(".error-email").text("The email is required.");
         $(".error-email").css("color", "red");
         validationvar = false;
     } else if (/[A-Z]/g.test($("#Email").val()) == true) {
         $(".error-email").text("Invalid email format.");
         $(".error-email").css("color", "red");
         validationvar = false;
     } else if (emailpattern2.test(emailvalue) == false) {
         $(".error-email").text("No  captial character is allowed.");
         $(".error-email").css("color", "red");
         validationvar = false;
     } else {
         $("span").remove(".error-email");
         validationvar = true;
     }
     // department validation..
     if (!$("#Department").val()) {
         $(".error-department").text("The department is required.");
         $(".error-department").css("color", "red");
         validationvar = false;
     } else if (((/[0-9]/g).test($("#Department").val())) === true) {
         $(".error-department").text("The department should in text format.");
         $(".error-department").css("color", "red");
         validationvar = false;
     } else {
         $("span").remove(".error-department");
         validationvar = true;
     }
     // year validation....
     var yearpattern = /[0-9]{4}/;
     var yearvalue = $("#Year").val();
     if (!$("#Year").val()) {
         $(".error-year").text("The year is required.");
         $(".error-year").css("color", "red");
         validationvar = false;
     } else if ((yearpattern.test(yearvalue) === false || yearvalue.length !== 4) || (yearpattern.test(yearvalue) === true) && yearvalue.length !== 4) {

         $(".error-year").text("Enter the proper year.");
         $(".error-year").css("color", "red");
         validationvar = false;
     } else if (yearvalue > 2023) {
         $(".error-year").text("Enter year less than 2024.");
         $(".error-year").css("color", "red");
         validationvar = false;
     } else {
         $("span").remove(".error-year");
         validationvar = true;
     }

     return validationvar;

 }

 function isvalidation() {

     if (validationform()) {

         registerfunc();
     }
 }

 function fieldremovevalidation() {
     $("span").remove(".error-firstname");
     $("span").remove(".error-lastname");
     $("span").remove(".error-gender");
     $("span").remove(".error-dob");
     $("span").remove(".error-mobileno");
     $("span").remove(".error-email");
     $("span").remove(".error-department");
     $("span").remove(".error-year");
 }