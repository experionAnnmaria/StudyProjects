$(document).ready(function () {

$( "#datepicker" ).datepicker();

    $("div #form1").append(
        $("<h3/>").text("Employee Details"), $("<p/>").text("Please Fill the Form"),
        $("<form/>", {
            action: '#',
            method: '#'
        }).append(
            $("<p/>").text("Enter Employee ID : "),
            $("<input/>", { type: 'text', id: 'eid', name: 'eid', placeholder: 'Your Employee ID' }),
        
            $("<p/>").text("Enter Name : "),
            $("<input/>", { type: 'text', id: 'ename', name: 'ename', placeholder: 'Your Name' }),
       
            $("<p/>").text("Date Of Birth : "),
            $("<input/>", { type: 'text', id: 'datepicker', name: 'dob', placeholder: 'Date of birth' })        
        )
            )
}
);



/* this is table manipulation using jquery*/


$(document).ready(function () {
        $( "#datepicker" ).datepicker();
        var data = [["Employee ID", "Name", "Date Of Birth", "Gender", "Department"]] //headers                
        var empTable = makeTable($(document.body), data);




$("div #table").append(
        $("#save").click(function () {

            var eid = $("#eid").val();
            var ename = $("#ename").val();
            var dob = $("#datepicker").val();
            var gender = $('input:radio[name=gender]:checked').val()
            var department = $("#department").val();
            var data = [[eid, ename, dob, gender, department]]
           


    $( "#dialog" ).dialog({
  dialogClass: "no-close",
  buttons: [
    {
      text: "Save",
      click: function() {
        $( this ).dialog( "close" );
        var empTable = makeTable($(document.body), data);
      }
    }
  ]
})

        })
     )
    });


function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}



// ============================================================



 $("div #dialog").append(            
            $("<p/>").text("Employee ID : "+eid),            
            $("<p/>").text("Name : "+ename),                   
            $("<p/>").text("Date Of Birth : "+dob),
                 
        )
            


$("<p/>").text("Employee ID : "),
                    $("<p/>").text("Name : "),
                    $("<p/>").text("Date Of Birth : ")
