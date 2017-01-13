/*
$(document).ready(function(){
        $('#searchKey').on('keyup', function(){
            var key= $(this).val();
            console.log(key);
                $('table').unhighlight();
                $('table').highlight($(this).val());

        });    
    });*/

$(document).ready(function () {
 
    /* initially hide product list items */
   // $("#tab").hide();
 
    /* highlight matches text */
    var highlight = function (string) {
        $("#tab tr.match").each(function () {
            var matchStart = $(this).text().toLowerCase().indexOf("" + string.toLowerCase() + "");
            var matchEnd = matchStart + string.length - 1;
            var beforeMatch = $(this).text().slice(0, matchStart);
            var matchText = $(this).text().slice(matchStart, matchEnd + 1);
            var afterMatch = $(this).text().slice(matchEnd + 1);
            $(this).html(beforeMatch + "<em>" + matchText + "</em>" + afterMatch);
        });
    };
 
 
    /* filter products */
    $("#searchKey").on("keyup click input", function () {
        if (this.value.length > 0) {
            $("#tab tr").removeClass("match").hide().filter(function () {
                return $(this).text().toLowerCase().indexOf($("#searchKey").val().toLowerCase()) != -1;
            }).addClass("match").show();
            highlight(this.value);
            $("#tab tr").show();
        }
        else {
            $("#tab, #tab tr").removeClass("match").hide();
        }
    });
 
 
});