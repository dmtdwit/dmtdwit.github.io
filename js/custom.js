/**
 * Created by Sumit Shrestha on 2/14/2018.
 */

$(document).ready(function () {
    $("#individualForm").validate({
            rules:{
                beneficialOwnerName: {
                    required: true
                }
            },
            messages:{
                beneficialOwnerName:{
                    required: "Please enter Beneficial Owner Name"
                }
            }
        }
    );
});

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
        $('.list-group a[href="#step2"]').removeClass('disabled').click();
    });
    $('#step2 .next-btn').click(function() {
        $('.list-group a[href="#step3"]').removeClass('disabled').click();
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
    document.getElementById('minorGuardianDetail').style.display = 'table-row-group';
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
