$(document).ready(function () {
    $("#individual_form").validate({
        
        rules:{
            owner_name:{
                required:true
            }
        },
        messages:{
            owner_name:{
                required:"Please enter your name"
            }
        }
    })

})



/*
$(document).ready(function () {
    $("#grand_father_name").on("input",function () {
        var grand_father_name=$("#grand_father_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(grand_father_name == ""){
            $("#grand_father_name_error").text("Please enter the Grandfather Name").addClass("error_validation");
        }else{
            if(patt.test(grand_father_name)){
                $("#grand_father_name_error").text("Please enter Name only").addClass("error_validation");

            }else {
                $("#grand_father_name_error").text("");

            }
        }
    })
    $("#owner_name").on("input",function () {
        var owner_name=$("#owner_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(owner_name == ""){
            $("#owner_name_error").text("Please enter the Owner Name").addClass("error_validation");
        }else{
            if(patt.test(owner_name)){
                $("#owner_name_error").text("Please enter letters only").addClass("error_validation");

            }else {
                $("#owner_name_error").text("");

            }
        }
    })
    $("#father_name").on("input",function () {
        var father_name=$("#father_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(father_name == ""){
            $("#father_name_error").text("Please enter your Father Name").addClass("error_validation");
        }else{
            if(patt.test(father_name)){
                $("#father_name_error").text("Please do not enter numeric value").addClass("error_validation");

            }else {
                $("#father_name_error").text("");

            }
        }
    })
    $("#mother_name").on("input",function () {
        var mother_name=$("#mother_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(mother_name == ""){
            $("#mother_name_error").text("Please enter your Mother Name").addClass("error_validation");
        }else{
            if(patt.test(mother_name)){
                $("#mother_name_error").text("Please do not enter numeric value").addClass("error_validation");

            }else {
                $("#mother_name_error").text("");

            }
        }
    })
    $("#spouse_name").on("input",function () {
        var spouse_name=$("#spouse_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(spouse_name == ""){
            $("#spouse_name_error").text("Please enter your Spouse Name").addClass("error_validation");
        }else{
            if(patt.test(spouse_name)){
                $("#spouse_name_error").text("Please do not enter numeric value").addClass("error_validation");

            }else {
                $("#spouse_name_error").text("");

            }
        }
    })
    $("#son_name").on("input",function () {
        var son_name=$("#son_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(son_name == ""){
            $("#son_name_error").text("Please enter your Son Name").addClass("error_validation");
        }else{
            if(patt.test(son_name)){
                $("#son_name_error").text("Please do not enter numeric value").addClass("error_validation");

            }else {
                $("#son_name_error").text("");

            }
        }
    })
    $("#daughter_law_name").on("input",function () {
        var daughter_law_name=$("#daughter_law_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(daughter_law_name == ""){
            $("#daughter_law_name_error").text("Please enter your Daughter in Law Name").addClass("error_validation");
        }else{
            if(patt.test(daughter_law_name)){
                $("#daughter_law_name_error").text("Please do not enter numeric value").addClass("error_validation");

            }else {
                $("#daughter_law_name_error").text("");

            }
        }
    })
    $("#father_law_name").on("input",function () {
        var father_law_name=$("#father_law_name").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(father_law_name == ""){
            $("#father_law_name_error").text("Please enter your Daughter in Law Name").addClass("error_validation");
        }else{
            if(patt.test(father_law_name)){
                $("#father_law_name_error").text("Please do not enter numeric value").addClass("error_validation");

            }else {
                $("#father_law_name_error").text("");

            }
        }
    })
    $("#occupationSelector").onchange(function () {
        var occupationSelector=$("#occupationSelector").val();
        var patt=new RegExp(/^[0-9]+$/)
        if(occupationSelector == ""){
            $("#occupationSelector_error").text("Please enter your Daughter in Law Name").addClass("error_validation");
        }else{
            if(patt.test(occupationSelector)){
                $("#occupationSelector_error").text("Please do not enter numeric value").addClass("error_validation");

            }else {
                $("#occupationSelector_error").text("");

            }
        }
    })


     $("#e_birth_date").on("input",function () {
         var e_birth_date=$("#e_birth_date").val();
         alert(e_birth_date)

         if(e_birth_date == ""){
             $("#e_birth_date_error").text("Please enter the Date").addClass("error_validation");
         }else{
             if(!isValidDate(e_birth_date)){
                 $("#e_birth_date_error").text("Please enter full date").addClass("error_validation");

             }else {
                 $("#owner_name_error").text("");

             }
         }
     })
})
function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regEx) != null;
}*/
