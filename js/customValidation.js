/**
 * Created by Sumit Shrestha on 4/19/2018.
 */
$(document).ready(function () {
    $("#signUpForm").validate({
        rules:{
            userName:"required",
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:5
            },
            cpassword:{
                required:true,
                minlength:5,
                equalTo:'#password'
            }
        },
        messages:{
            userName: "Please enter an username",
            email:{
                required:"Please enter an email",
                email:"Please insert a valid email"
            },
            password:{
                required:"Please enter a password",
                minlength:"Please enter at least 5 characters"
            },
            cpassword:{
                required:"Please enter a password",
                minlength:"Please enter at least 5 characters",
                equalTo: "Password doesnot match"
            }
        }
    });

    $("#loginUserForm").validate({
        rules:{
            userName:"required"
        },
        messages:{
            userName: "Please enter an username"
        }
    });

    $('#addUserForm').validate({
        rules:{
            firstName:"required",
            lastName: "required",
            officialEmail:{
                required:true,
                email:true
            },
            contactNumber:{
                required:true,
                minlength:7,
                number:true
            }
        },
        messages:{
            firstName:"Please enter First Name",
            lastName: "Please enter Last Name",
            officialEmail:{
                required:"Please enter an Email Address",
                email:"Please enter valid Email Address"
            },
            contactNumber:{
                required:"Please insert Contact Number",
                minlength:"Phone number must be 7 digits",
                number:"Phone number must be numberic"
            }
        }
    });
    $('#addOrganizationForm').validate({
        rules:{
            organizationId:"required",
            organizationName:"required",
            organizationCountry:"required",
            organizationDistrict:"required",
            organizationVDC:"required",
            wardNo:"required",
            phoneNumber:"required",
            organizationEmail:"required",
            firstName:"required",
            headFirstName:"required",
            lastName: "required",
            headLastName: "required",
            contactEmail:{
                required:true,
                email:true
            },
            headEmail:{
                required:true,
                email:true
            },
            contactTelephone:{
                required:true,
                email:true
            },
            headTelephone:{
                required:true,
                email:true
            },
            contactPhone:{
                required:true,
                minlength:7,
                number:true
            },
            headPhoneNumber:{
                required:true,
                minlength:7,
                number:true
            }
        },
        messages:{
            organizationId: "Please enter Organization ID",
            organizationName: "Please enter Organization Name",
            organizationCountry:"Please enter Organization Country",
            organizationDistrict:"Please enter Organization District",
            organizationVDC:"Please enter Organization VDC / Municipality / Metropolitan",
            wardNo:"Please enter Ward Number",
            phoneNumber:"Please enter Phone Number",
            organizationEmail:"Please enter Organization Email Address",
            headFirstName:"Please enter Organization Head First Name",
            headLastName: "Please enter Organization Head Last Name",
            firstName:"Please enter First Name",
            lastName: "Please enter Last Name",
            contactEmail:{
                required:"Please enter an Email Address",
                email:"Please enter valid Email Address"
            },
            headEmail:{
                required:"Please enter an Email Address",
                email:"Please enter valid Email Address"
            },
            contactTelephone:{
                required:"Please insert Telephone Number",
                minlength:"Telephone number must be 7 digits",
                number:"Telephone number must be numberic"
            },
            headTelephone:{
                required:"Please insert Telephone Number",
                minlength:"Telephone number must be 7 digits",
                number:"Telephone number must be numberic"
            },
            contactPhone:{
                required:"Please insert Contact Number",
                minlength:"Phone number must be 7 digits",
                number:"Phone number must be numberic"
            },
            headPhoneNumber:{
                required:"Please insert Contact Number",
                minlength:"Phone number must be 7 digits",
                number:"Phone number must be numberic"
            }
        }
    });

    $('#addOrganizationBranch').click(function(e) {
        if(validateOrganizationBranch()){
            e.preventDefault();
            swal({
                    title: "Are you sure?",
                    text: "Do you want to submit the Form?",
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
                            text: 'Form has been submitted.',
                            type: 'success'
                        }, function() {
                            window.location.href = 'organization_info.html';
                        });

                    } else {
                        swal("Cancelled", "", "error");
                    }
                });
        }
    });

    function validateOrganizationBranch(){
        var flag = true;
        var branchName = document.getElementsByClassName('organizationBranchName').className;
        if(branchName === '' || branchName === null){
            $("#error_organizationBranchName").text("Organization Branch cannot be empty");
            flag = false;
            $(".organizationBranchName").focus();
        }else{
            $("#error_organizationBranchName").text('');
        }
        var branchCountry = document.getElementById('organizationBranchCountry').value.trim();

        if(branchCountry === '' || branchCountry === null){
            $("#error_organizationBranchCountry").text("Organization Country cannot be empty");
            flag = false;
            $("#organizationBranchCountry").focus();
        }else{
            $("#error_organizationBranchCountry").text('');
        }

        var branchVDC = document.getElementById('organizationVDC').value.trim();

        if(branchVDC === '' || branchVDC === null){
            $("#error_organizationVDC").text("Organization VDC/Municipality/Metropolitan cannot be empty");
            flag = false;
            $("#organizationVDC").focus();
        }else{
            $("#error_organizationVDC").text('');
        }

        var branchDistrict = document.getElementById('organizationBranchDistrict').value.trim();

        if(branchDistrict === '' || branchDistrict === null){
            $("#error_organizationBranchDistrict").text("Organization District cannot be empty");
            flag = false;
            $("#organizationBranchDistrict").focus();
        }else{
            $("#error_organizationBranchDistrict").text('');
        }

        var branchWard = document.getElementById('organizationBranchWard').value.trim();

        if(branchWard === '' || branchWard === null){
            $("#error_organizationBranchWard").text("Organization Ward Number cannot be empty");
            flag = false;
            $("#organizationBranchWard").focus();
        }else{
            $("#error_organizationBranchWard").text('');
        }

        var branchPhoneNumber = document.getElementById('organizationBranchphoneNumber').value.trim();

        if(branchPhoneNumber === '' || branchPhoneNumber === null){
            $("#error_organizationBranchphoneNumber").text("Organization Phone Number cannot be empty");
            flag = false;
            $("#organizationBranchphoneNumber").focus();
        }else{
            $("#error_organizationBranchphoneNumber").text('');
        }

        var organizationSecondary = document.getElementById('organizationBranchSecondaryNumber').value.trim();

        if(organizationSecondary === '' || organizationSecondary === null){
            $("#error_organizationBranchSecondaryNumber").text("Organization Secondary Number cannot be empty");
            flag = false;
            $("#organizationBranchSecondaryNumber").focus();
        }else{
            $("#error_organizationBranchSecondaryNumber").text('');
        }

        var organizationEmail = document.getElementById('organizationBranchEmail').value.trim();

        if(organizationEmail === '' || organizationEmail === null){
            $("#error_organizationBranchEmail").text("Organization Email cannot be empty");
            flag = false;
            $("#organizationBranchEmail").focus();
        }else{
            $("#error_organizationBranchEmail").text('');
        }

        var branchFirstName = document.getElementById('branchFirstName').value.trim();

        if(branchFirstName === '' || branchFirstName === null){
            $("#error_branchFirstName").text("First Name cannot be empty");
            flag = false;
            $("#branchFirstName").focus();
        }else{
            $("#error_branchFirstName").text('');
        }

        var branchLastName = document.getElementById('branchLastName').value.trim();

        if(branchLastName === '' || branchLastName === null){
            $("#error_branchLastName").text("Last Name cannot be empty");
            flag = false;
            $("#branchLastName").focus();
        }else{
            $("#error_branchLastName").text('');
        }

        var branchEmail = document.getElementById('branchEmail').value.trim();

        if(branchEmail === '' || branchEmail === null){
            $("#error_branchEmail").text("Email cannot be empty");
            flag = false;
            $("#branchEmail").focus();
        }else{
            $("#error_branchEmail").text('');
        }

        var branchPhoneNumber = document.getElementById('branchPhoneNumber').value.trim();

        if(branchPhoneNumber === '' || branchPhoneNumber === null){
            $("#error_branchPhoneNumber").text("Phone Number cannot be empty");
            flag = false;
            $("#branchPhoneNumber").focus();
        }else{
            $("#error_branchPhoneNumber").text('');
        }

        var telephoneNumber = document.getElementById('branchTelephoneNumber').value.trim();

        if(telephoneNumber === '' || telephoneNumber === null){
            $("#error_branchTelephoneNumber").text("Telephone Number cannot be empty");
            flag = false;
            $("#branchTelephoneNumber").focus();
        }else{
            $("#error_branchTelephoneNumber").text('');
        }

        var branchHeadFirstName = document.getElementById('branchHeadFirstName').value.trim();

        if(branchHeadFirstName === '' || branchHeadFirstName === null){
            $("#error_branchHeadFirstName").text("First Name cannot be empty");
            flag = false;
            $("#branchHeadFirstName").focus();
        }else{
            $("#error_branchHeadFirstName").text('');
        }

        var branchHeadLastName = document.getElementById('branchHeadLastName').value.trim();

        if(branchHeadLastName === '' || branchHeadLastName === null){
            $("#error_branchHeadLastName").text("Last Name cannot be empty");
            flag = false;
            $("#branchHeadLastName").focus();
        }else{
            $("#error_branchHeadLastName").text('');
        }

        var branchHeadEmail = document.getElementById('branchHeadEmail').value.trim();

        if(branchHeadEmail === '' || branchHeadEmail === null){
            $("#error_branchHeadEmail").text("Email cannot be empty");
            flag = false;
            $("#branchHeadEmail").focus();
        }else{
            $("#error_branchHeadEmail").text('');
        }

        var branchHeadPhoneNumber = document.getElementById('branchHeadPhoneNumber').value.trim();

        if(branchHeadPhoneNumber === '' || branchHeadPhoneNumber === null){
            $("#error_branchHeadPhoneNumber").text("Email cannot be empty");
            flag = false;
            $("#branchHeadPhoneNumber").focus();
        }else{
            $("#error_branchHeadPhoneNumber").text('');
        }

        var branchHeadTelephoneNumber = document.getElementById('branchHeadTelephoneNumber').value.trim();

        if(branchHeadTelephoneNumber === '' || branchHeadTelephoneNumber === null){
            $("#error_branchHeadTelephoneNumber").text("Email cannot be empty");
            flag = false;
            $("#branchHeadTelephoneNumber").focus();
        }else{
            $("#error_branchHeadTelephoneNumber").text('');
        }
        return flag;
    }
});
