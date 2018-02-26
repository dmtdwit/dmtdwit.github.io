/**
 * Created by Sumit Shrestha on 2/14/2018.
 */
$(document).ready(function () {
    $('#individual').change(function () {
        $('.individualTabs').toggle();
    });
    $('#nonResidence').change(function () {
        $('.nonResidence').toggle();
    });

    $("#remove").click(function(){
        $("#branchesForm").remove();
    });

    $("#add").click(function(){
        $("#branchesForm").clone().appendTo("#branches");
    });

    $("#removeExecutive").click(function(){
        $("#executivesForm").remove();
    });

    $("#addExecutive").click(function(){
        $("#executivesForm").clone().appendTo("#executives");
    });
});

$(document).ready(function () {
    $('#otherNationalityForm').hide('fast');
    $('#nepaliNationality').click(function () {
        $('#otherNationalityForm').hide('fast');
    });
    $('#otherNationality').click(function () {
        $('#otherNationalityForm').show('fast');
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
    $('.nav-seq > li > a').click(function() {
        if($(this).hasClass('disabled')) {
            return false;
        } else {
            var linkIndex = $(this).parent().index() - 1;
            $('.nav-seq > li').each(function(index, item) {
                $(item).attr('rel-index', index - linkIndex);
            });
        }
    });
    $('#step1 .next-btn').click(function() {
        $('.nav-seq a[href="#step2"]').removeClass('disabled').click();
    });
    $('#step2 .next-btn').click(function() {
        $('.nav-seq a[href="#step3"]').removeClass('disabled').click();
    });
    $('#step3 .next-btn').click(function() {
        $('.nav-seq a[href="#step4"]').removeClass('disabled').click();
    });
    $('#nstep1 .next-btn').click(function() {
        $('.nav-seq a[href="#nstep2"]').removeClass('disabled').click();
    });
    $('#nstep2 .next-btn').click(function() {
        $('.nav-seq a[href="#nstep3"]').removeClass('disabled').click();
    });
    $('#nstep3 .next-btn').click(function() {
        $('.nav-seq a[href="#nstep4"]').removeClass('disabled').click();
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