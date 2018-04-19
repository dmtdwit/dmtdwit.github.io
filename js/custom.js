/**
 * Created by Sumit Shrestha on 2/14/2018.
 */
$(document).ready(function () {
    /* $('#individual').change(function () {
     $('.individualTabs').toggle();
     });*/

    $(document).on('click', '#close-preview', function(){
        $('.image-preview').popover('hide');
        // Hover befor close the preview
        $('.image-preview').hover(
            function () {
                $('.image-preview').popover('show');
            },
            function () {
                $('.image-preview').popover('hide');
            }
        );
    });
    $(function() {
        // Create the close button
        var closebtn = $('<button/>', {
            type:"button",
            text: 'x',
            id: 'close-preview',
            style: 'font-size: initial;',
        });
        closebtn.attr("class","close pull-right");
        // Set the popover default content
        $('.image-preview').popover({
            trigger:'manual',
            html:true,
            title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
            content: "There's no image",
            placement:'bottom'
        });
        // Clear event
        $('.image-preview-clear').click(function(){
            $('.image-preview').attr("data-content","").popover('hide');
            $('.image-preview-filename').val("");
            $('.image-preview-clear').hide();
            $('.image-preview-input input:file').val("");
            $(".image-preview-input-title").text("Browse");
        });
        // Create the preview image
        $(".image-preview-input input:file").change(function (){
            var img = $('<img/>', {
                id: 'dynamic',
                width:250,
                height:200
            });
            var file = this.files[0];
            var reader = new FileReader();
            // Set preview image into the popover data-content
            reader.onload = function (e) {
                $(".image-preview-input-title").text("Change");
                $(".image-preview-clear").show();
                $(".image-preview-filename").val(file.name);
                img.attr('src', e.target.result);
                $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
            }
            reader.readAsDataURL(file);
        });
    });

    $('#nonResidence').change(function () {
        $('.nonResidence').toggle();
    });

    $('#personalAccount').change(function () {
        $('#personalAccountContent').hide()
        $('#personalAccountDiv').show()
        $('#personalAccountButton').show()
        $('#businessAccountDiv').hide()
    })
    $('#businessAccount').change(function () {
        $('#businessAccountContent').hide()
        $('#businessAccountDiv').show()
        $('#businessAccountButton').show()
        $('#personalAccountDiv').hide()

    })
    $('#personalAccountButton').click(function () {

        $('#personalAccountContent').show()
        $('#personalAccountButton').hide()
    })
    $('#businessAccountButton').click(function () {

        $('#businessAccountContent').show()
        $('#businessAccountButton').hide()
    })

    /* $(function() {
     $('input[type="radio"]').change(function() {
     var rad = $(this).attr('id');
     $('#' + rad + 'Button').show();
     $('#' + rad + 'Button').siblings('div').hide();
     });
     });*/


    /*$(".remove").click(function(){
     var value=$('.remove').val()
     alert(value)
     $("#branchesForm-"+value).remove();
     });*/
    var cloneCount = 1;
    $("#add").click(function(){
        var clone = $("#branchesForm").clone().show();
        clone.attr("id", "branchesForm-"+cloneCount);

        clone.find(".remove").val(cloneCount++)

        $("#branches").append(clone);

    });


    var cloneCounts=1
    $("#addExecutive").click(function(){
        var clone = $("#executivesForm").clone().show();
        clone.attr("id", "executivesForm-"+cloneCounts);

        clone.find(".removeExecutive").val(cloneCounts)
        cloneCounts++;
        $("#executives").append(clone);


    });
    branchesCount=1
    $("#addBranches").click(function () {
        var clone=$("#branches_forms").clone().show();
        clone.attr("id","branches_forms-"+branchesCount)
        clone.find(".removeOrgBranches").val(branchesCount)
        branchesCount++
        $("#branches_content").append(clone)
    })

});
function callOrganization() {
    value=$("#organization").val()
    if(value == "DP"){

        $("#select_agent").show()
    }else{
        $("#select_agent").hide()
    }


}
function removeOrgBranches(id) {
    $("#branches_forms-"+id).remove()
}
function removeExecutive(id) {
    $("#executivesForm-"+id).remove()
}
function removeBranches(id) {
    $("#branchesForm-"+id).remove()
}
$(document).ready(function () {
    $('#otherNationalityForm').hide('fast');
    $('#otherOccupationForm').hide('fast');
    $('#typesOfAccountCorporateForm').hide('fast');
    $('#nepaliNationality').click(function () {
        $('#otherNationalityForm').hide('fast');
    });
    $('#clearing').click(function () {
        $('#typesOfAccountCorporateForm').hide('fast');
    });
    $('#beneficialOwner').click(function () {
        $('#typesOfAccountCorporateForm').hide('fast');
    });
    $('#otherNationality').click(function () {
        $('#otherNationalityForm').show('fast');
    });

    $('#typesOfAccountOthers').click(function () {
        $('#typesOfAccountCorporateForm').show('fast');
    });
    $('#occupationSelector').on('change', function() {
        if ( this.value == '0')
        {
            $("#otherOccupationForm").show();
        }
        else
        {
            $("#otherOccupationForm").hide();
        }
    });

    $('#personalDetailSubmit').on('click', function(e) {
        $('ul.nav-tabs li:eq(1)').removeClass('disabled');
        $('ul.nav-tabs li a[href="#address"]').trigger('click');
        $(this).remove();
    });
    $("#occupationOthersForm").hide();
    $('#occupationSelector').on('change',function () {
        if($(this).val()=== "Others"){
            $("#occupationOthersForm").show();
        }
        else{
            $("#occupationOthersForm").hide();
        }
    });

    jQuery.fn.extend({
        listrap: function () {
            var listrap = this;
            listrap.getSelection = function () {
                var selection = new Array();
                listrap.children("li.active").each(function (ix, el) {
                    selection.push($(el)[0]);
                });
                return selection;
            }
            var toggle = "li .listrap-toggle ";
            var selectionChanged = function() {
                $(this).parent().parent().toggleClass("active");
                listrap.trigger("selection-changed", [listrap.getSelection()]);
            }
            $(listrap).find(toggle + "img").on("click", selectionChanged);
            $(listrap).find(toggle + "span").on("click", selectionChanged);
            return listrap;
        }
    });

    // Main page
    $('.list-group > a').click(function() {
        if($(this).hasClass('disabled')) {
            return false;
        } else {
            var linkIndex = $(this).parent().index() - 1;
            $('.list-group > a').each(function(index, item) {
                $(item).attr('rel-index', index - linkIndex);
            });
        }
    });
    $('#step1 .next-btn').click(function() {
        if(validateIndividualFormStep1()){
            $('.list-group a[href="#step2"]').removeClass('disabled').click();
        }
    });
    $('#step2 .next-btn').click(function() {
        if(validateIndividualFormStep2()){
            $('.list-group a[href="#step3"]').removeClass('disabled').click();
        }
    });
    $('#step3 .final-btn').click(function (e) {
       if(validateIndividualStep3()){
               e.preventDefault();
               swal({
                       title: "Are you sure?",
                       text: "Do you want to submit KYC Form",
                       type: "warning",
                       showCancelButton: true,
                       confirmButtonColor: '#046031',
                       cancelButtonTextColor: '#FF0000',
                       confirmButtonText: 'Yes, I am sure!',
                       cancelButtonText: "No, cancel it!",
                       closeOnConfirm: false,
                       closeOnCancel: false
                   },
                   function(isConfirm) {
                       if (isConfirm) {
                           swal({
                               title: 'Submitted!',
                               text: 'KYC Form has been submitted. Click OK to continue submit another form',
                               type: 'success'
                           }, function() {
                               window.location.href = 'dashboard.html';
                           });

                       } else {
                           swal("Cancelled", "", "error");
                       }
                   });
       }
    });
    $('#step3 .next-btn').click(function() {
        $('.list-group a[href="#step4"]').removeClass('disabled').click();
    });
    $('#step4 .next-btn').click(function() {
        $('.list-group a[href="#step5"]').removeClass('disabled').click();
    });
    $('#nstep1 .next-btn').click(function() {
        $('.list-group a[href="#nstep2"]').removeClass('disabled').click();
    });
    $('#nstep2 .next-btn').click(function() {
        $('.list-group a[href="#nstep3"]').removeClass('disabled').click();
    });
    $('#nstep3 .next-btn').click(function() {
        $('.list-group a[href="#nstep4"]').removeClass('disabled').click();
    });
    $('#nstep4 .next-btn').click(function() {
        $('.list-group a[href="#nstep4"]').removeClass('disabled').click();
    });
    // step 2
    $(".listrap").listrap().on("selection-changed", function (event, selection) {
        console.log(selection);
    });
});

$(document).ready(function () {

    $(".next-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        prevTab($active);

    });
});
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$(document).ready(function(){
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    })
});

$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });


});

function hideMinorGuardian(){
    document.getElementById('minorGuardianDetail').style.display ='none';

}
function showMinorGuardian(){
    document.getElementById('minorGuardianDetail').style.display = 'block';
    document.getElementById('typesOfIDCard').innerHTML = "Types of Identity Card *";
    document.getElementById('citizenshipNumber').innerHTML = "Citizenship Number";
}
function changeNRNLabel(){
    document.getElementById('passportName').innerHTML = "Passport No. *";
    document.getElementById('typesOfIDCard').innerHTML = "Types of Identity Card *";
    document.getElementById('citizenshipNumber').innerHTML = "Citizenship Number";
}
function changeIndividualLabel(){
    document.getElementById('passportName').innerHTML = "Passport No.";
    document.getElementById('typesOfIDCard').innerHTML = "Types of Identity Card";
    document.getElementById('citizenshipNumber').innerHTML = "Citizenship Number *";
}
function changeForeignLabel(){
    document.getElementById('passportName').innerHTML = "Passport No. *";
    document.getElementById('typesOfIDCard').innerHTML = "Types of Identity Card";
    document.getElementById('citizenshipNumber').innerHTML = "Citizenship Number";
}

function showHideBoid(value){
    if(value === '')
        document.getElementById('boidDiv').style.display = 'none';
    else
        document.getElementById('boidDiv').style.display = 'block';
}
function showClearingMember(){
    var checkBox = document.getElementById("clearingMember");
    var text = document.getElementById("clearingMemberDiv");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
function hideClearingMember() {
    $("#clearingMemberDiv").hide()

}

function validateIndividualFormStep1() {
    var flag = true;
    var title = document.getElementsByName('title');
    if(title[0].checked===true||title[1].checked===true||title[2].checked===true||title[4].checked===true){
        $('#error_title').text('');
    }else if(title[3].checked===true){
        flag = validateMinority();
    }
    else{
        $('#error_title').text("You Must Choose One Title");
        flag = false;
    }
    var beneficialOwnerName = document.getElementById('beneficialOwnerName').value.trim();
    if(beneficialOwnerName===''||beneficialOwnerName===null){
        $("#error_beneficialOwnerName").text("Beneficial Owner Name Cannot Be Empty");
        flag = false;
    }else{
        $("#error_beneficialOwnerName").text('');
    }
    var dobBS = document.getElementById('dobBS').value.trim();
    if(dobBS===''||dobBS===null){
        $("#error_dobBS").text('Date of Birth (in B.S) Cannot Be Empty');
        flag = false;
    }else{
        $("#error_dobBS").text('');
    }
    var dobAD = document.getElementById('dobAD').value.trim();
    if(dobAD===''||dobAD===null){
        $("#error_dobAD").text('Date of Birth (in A.D) Cannot Be Empty');
        flag = false;
    }else{
        $("#error_dobAD").text('');
    }
    var genders = document.getElementsByName('gender');
    if(genders[0].checked===true||genders[1].checked===true||genders[2].checked===true){
        $('#error_gender').text('');
    }else{
        $('#error_gender').text("You Must Choose One Gender");
        flag = false;
    }
    var name_grandfather = document.getElementById('name_grandfather').value.trim();
    if(name_grandfather===''||name_grandfather===null){
        $("#error_name_grandfather").text("Grand Father's Name Cannot Be Empty");
        flag = false;
    }else{
        $("#error_name_grandfather").text('');
    }
    var name_father = document.getElementById('name_father').value.trim();
    if(name_father===''||name_father===null){
        $("#error_name_father").text("Father's Name Cannot Be Empty");
        flag = false;
    }else{
        $("#error_name_father").text('');
    }
    var name_mother = document.getElementById('name_mother').value.trim();
    if(name_mother===''||name_mother===null){
        $("#error_name_mother").text("Mother's Name Cannot Be Empty");
        flag = false;
    }else{
        $("#error_name_mother").text('');
    }
    var accountType = document.getElementsByName('accountType');
    if(accountType[0].checked===true){
        flag = validateResident();
        $('#error_accountType').text('');
    }else if(accountType[1].checked===true){
        flag = validateNRN();
        $('#error_accountType').text('');
    }else if(accountType[2].checked===true){
        flag = validateForeigner();
        $('#error_accountType').text('');
    }
    else{
        flag = validateResident();
        $('#error_accountType').text("You Must Choose One Account Type");
        flag = false;
    }
    var nationality = document.getElementsByName('nationality');
    if(nationality[0].checked===true){
        $('#error_nationality').text('');
    }else if(nationality[1].checked===true){
        var otherNationalityForm = document.getElementById('otherNationalityForm').value.trim();
        if(otherNationalityForm===''||otherNationalityForm===null){
            $('#error_nationality').text('You Must Specify Other Nationality');
            flag = false;
        }else{
            $('#error_nationality').text('');
        }
    }
    else{
        $('#error_nationality').text("You Must Choose One Nationality");
        flag = false;
    }
    return flag;
}

function validateMinority(){
    var flag = true;
    var name_guardian = document.getElementById('name_guardian').value.trim();
    if(name_guardian===''||name_guardian===null){
        $('#error_name_guardian').text('Name/Surname Cannot Be Empty');
        flag = false;
    }else{
        $('#error_name_guardian').text('');
    }
    var relationship_guardian = document.getElementById('relationship_guardian').value.trim();
    if(relationship_guardian===''||relationship_guardian===null){
        $('#error_relationship_guardian').text('Relationship Cannot Be Empty');
        flag = false;
    }else{
        $('#error_relationship_guardian').text('');
    }
    var mobile_guardian = document.getElementById('mobile_guardian').value.trim();
    if(mobile_guardian===''||mobile_guardian===null){
        $('#error_mobile_guardian').text('Mobile No. Cannot Be Empty');
        flag = false;
    }else{
        $('#error_mobile_guardian').text('');
    }
    var email_guardian = document.getElementById('email_guardian').value.trim();
    if(email_guardian===''||email_guardian===null){
        $('#error_email_guardian').text('Email ID Cannot Be Empty');
        flag = false;
    }
    else{
        $('#error_email_guardian').text('');
    }
    var citizenship_guardian = document.getElementById('citizenship_guardian').value.trim();
    if(citizenship_guardian===''||citizenship_guardian===null){
        $('#error_citizenship_guardian').text("Guardian's Citizenship Number Cannot Be Empty");
        flag = false;
    }else{
        $('#error_citizenship_guardian').text('');
    }
    return flag;
}

function validateResident() {
    var flag = true;
    var occupation = document.getElementById('occupationSelector').value.trim();
    // console.log("value is"+occupation);
    if(occupation===null||occupation===''){
        $('#error_occupation').text('You Must Select One Occupation Type');
        flag = false;
    }else if(parseInt(occupation)===0){
        var otherOccupationForm = document.getElementById('otherOccupationForm').value.trim();
        if(otherOccupationForm===''||otherOccupationForm===null){
            $('#error_occupation').text('You Must Specify Other Occupation');
            flag = false;
        }else{
            $('#error_occupation').text('');
        }
    }else{
        $('#error_occupation').text('');
    }
    var citizenship = document.getElementById('citizenship').value.trim();
    if(citizenship===''||citizenship===null){
        $("#error_citizenship").text("Citizenship Number Cannot Be Empty");
        flag = false;
    }else{
        $("#error_citizenship").text('');
    }
    return flag;
}

function validateNRN() {
    var flag = true;
    $('#error_citizenship').text('');
    var occupation = document.getElementById('occupationSelector').value.trim();
    // console.log("value is"+occupation);
    if(occupation===null||occupation===''){
        $('#error_occupation').text('You Must Select One Occupation Type');
        flag = false;
    }else if(parseInt(occupation)===0){
        var otherOccupationForm = document.getElementById('otherOccupationForm').value.trim();
        if(otherOccupationForm===''||otherOccupationForm===null){
            $('#error_occupation').text('You Must Specify Other Occupation');
            flag = false;
        }else{
            $('#error_occupation').text('');
        }
    }else{
        $('#error_occupation').text('');
    }
    var passport_number = document.getElementById('passport_number').value.trim();
    if(passport_number===''||passport_number===null){
        $('#error_passport_number').text('Password Number Field Cannot Be Empty');
        flag = false;
    }else{
        $('#error_passport_number').text('');
    }
    var identityType = document.getElementById('identityType').value.trim();
    if(identityType===null||identityType===''){
        $('#error_identity_type').text('You Must Select One Identity Type');
        flag = false;
    }else{
        $('#error_identity_type').text('');
    }
    return flag;
}

function validateForeigner() {
    var flag = true;
    $('#error_citizenship').text('');
    $('#error_identity_type').text('');
    var occupation = document.getElementById('occupationSelector').value.trim();
    // console.log("value is"+occupation);
    if(occupation===null||occupation===''){
        $('#error_occupation').text('You Must Select One Occupation Type');
        flag = false;
    }else if(parseInt(occupation)===0){
        var otherOccupationForm = document.getElementById('otherOccupationForm').value.trim();
        if(otherOccupationForm===''||otherOccupationForm===null){
            $('#error_occupation').text('You Must Specify Other Occupation');
            flag = false;
        }else{
            $('#error_occupation').text('');
        }
    }else{
        $('#error_occupation').text('');
    }
    var passport_number = document.getElementById('passport_number').value.trim();
    if(passport_number===''||passport_number===null){
        $('#error_passport_number').text('Password Number Field Cannot Be Empty');
        flag = false;
    }else{
        $('#error_passport_number').text('');
    }
    return flag;
}

function validateIndividualFormStep2() {
    var flag = true;
    var ward_correspondence = document.getElementById('ward_correspondence').value.trim();
    if(ward_correspondence===''||ward_correspondence===null){
        $('#error_ward_correspondence').text('Ward No. Cannot Be Empty');
        flag = false;
    }else{
        $('#error_ward_correspondence').text('');
    }
    var mobile_correspondence = document.getElementById('mobile_correspondence').value.trim();
    if(mobile_correspondence===''||mobile_correspondence===null){
        $('#error_mobile_correspondence').text('Mobile No. Cannot Be Empty');
        flag = false;
    }else{
        $('#error_mobile_correspondence').text('');
    }
    var email_correspondence = document.getElementById('email_correspondence').value.trim();
    if(email_correspondence===''||email_correspondence===null){
        $('#error_email_correspondence').text('Email Id Cannot Be Empty');
        flag = false;
    }else{
        $('#error_email_correspondence').text('');
    }
    var ward_permanent = document.getElementById('ward_permanent').value.trim();
    if(ward_permanent===''||ward_permanent===null){
        $('#error_ward_permanent').text('Ward No. Cannot Be Empty');
        flag = false;
    }else{
        $('#error_ward_permanent').text('');
    }
    var mobile_permanent = document.getElementById('mobile_permanent').value.trim();
    if(mobile_permanent===''||mobile_permanent===null){
        $('#error_mobile_permanent').text('Mobile No. Cannot Be Empty');
        flag = false;
    }else{
        $('#error_mobile_permanent').text('');
    }
    var email_permanent = document.getElementById('email_permanent').value.trim();
    if(email_permanent===''||email_permanent===null){
        $('#error_email_permanent').text('Email Id Cannot Be Empty');
        flag = false;
    }else{
        $('#error_email_permanent').text('');
    }
    return flag;
}

function validateIndividualStep3() {
    var flag = true;
    var money = document.getElementsByName('money');
    if(money[0].checked===true||money[1].checked===true||money[2].checked===true||money[3].checked===true){
        $('#error_money').text('');
    }else{
        $('#error_money').text("You Must Choose One Financial Details");
        flag = false;
    }
    var automaticTransaction = document.getElementsByName('automaticTransaction');
    if(automaticTransaction[0].checked===true||automaticTransaction[1].checked===true){
        $('#error_automaticTransaction').text('');
    }else{
        $('#error_automaticTransaction').text("You Must Choose One Option");
        flag = false;
    }
    var accountStatement = document.getElementsByName('accountStatement');
    if(accountStatement[0].checked===true||accountStatement[1].checked===true||accountStatement[2].checked===true||accountStatement[3].checked===true||accountStatement[4].checked===true){
        $('#error_accountStatement').text('');
    }else{
        $('#error_accountStatement').text("You Must Choose One Account Statement");
        flag = false;
    }
    return flag;
}
