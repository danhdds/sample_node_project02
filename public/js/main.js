$(() => {

    $('.main-search-field').on('focus', function () {

        $(this).css("border-radius", "6px 6px 0px 0px");
        $('.all-users').css("visibility", "visible");
        
    });

    $(".main-search-field").on('keyup', function (e) {

        var input, filter, ul, li, liItem, i, txtValue;
        input = $('.main-search-field')[0];
        filter = input.value.toUpperCase();
        ul = $(".all-users")[0];
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            liItem = li[i];
            txtValue = liItem.textContent || liItem.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                $(".main-search-field").css("border-radius", "6px 6px 0px 0px");
                $(".all-users").css("visibility", "visible");
                li[i].style.display = "";
                $(".all-users").css("border-bottom", "1px solid #ddd");
                $('.all-users li:visible:last').css("border-bottom", "0px");
            } else {
                li[i].style.display = "none";

                if (i == 0) {

                    $(".main-search-field").css("border-radius", "6px");
                    $(".all-users").css("border-bottom", "0px");

                } // end 

            } // end if else

        } // end for

    });

    $('.all-users li').on('click', function () {
         
        var json_placeholder_user_id = "placeholder-id "+($(this).clone().children().remove().end().text()).trim();
        json_placeholder_user_id = json_placeholder_user_id.toLocaleLowerCase();
        json_placeholder_user_id = document.getElementsByClassName(json_placeholder_user_id);
        
        for (var i = 0; i < json_placeholder_user_id.length; i++) {
            var jsonPlaceHolderId = json_placeholder_user_id[i].innerText;
        } // end for
        
        $('.json-placeholder-id').val(jsonPlaceHolderId);
        var text = ($(this).clone().children().remove().end().text()).trim();
        $(".main-search-field").val(text).css("border-radius", "6px");
        $(".all-users").css("visibility", "hidden");

    });

    $('.button-display').on('click', function (){
        $('.debt-details').css("display", "none");
        var classId = "debt-details "+ ($(this).clone().children().text());
        if( document.getElementById(classId) != null){
            document.getElementById(classId).style.display =  "block";
        }
        
    });

});