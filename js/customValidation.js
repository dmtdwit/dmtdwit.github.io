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

    $('#organizationBranch').validate({
        rules:{
            organization_name:"required"
        },
        messages:{
            organization_name:"Please insert Organization Branch Name"
        }
    });
});
