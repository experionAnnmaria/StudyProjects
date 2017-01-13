



$(document).ready(function() {
    $("#dob").datepicker({ dateFormat: 'dd-mm-yy', maxDate: '0', defaultDate: new Date() });

$( "#dialog-1" ).dialog({autoOpen: false, });
   $("#save").click(function(){

       if($("form1").valid())
                {
                    $( "#dialog-1" ).dialog( "open" );
                    


       var id = document.getElementById('empId').value;
       var name = document.getElementById('name').value;
       var dateOfBirth = document.getElementById('dob').value;
       var department = document.getElementById('departments').value;
       var gender =$("input[name='gender']:checked").val();
       var display = "<tr> <td>" + id + "</td> <td>" + name + "</td> <td>" + dateOfBirth + "</td> <td>" 
       + department + "</td> <td>" + gender + "</td> </tr>";
   $("table").append(display);
                }
   });

});

/*

$(document).ready(function() 
{
    $( "#dialog-1" ).dialog({autoOpen: false, });
    $( "#save" ).click(function() {
    $( "#dialog-1" ).dialog( "open" );});

    $('#save').on('click', function() 
    {
    var valid = true,
    message = '';

    $('form input').each(function() 
    {
        var $this = $(this);

        if(!$this.val()) 
        {
            var inputName = $this.attr('name');
            valid = false;
            message += 'Please enter your ' + inputName + '\n';
        }
    });

    if(!valid) 
    {
        alert(message);
    }
});
});
*/
/*
  $('#form1 input:button[name=save]').click(
                function(e){
                if($("form1").valid())
                {
                    $( "#dialog-1" ).dialog( "open" );
                     var id = $("#txt1").val();
                    var name = $("#txt2").val();
                    var dob = $("#txt3").val();
                    var dept = $("#txt4").val();
                    var gender =$("input[name='g']:checked").val();
                    var markup = "<tr><td  class=id>" + id + "</td><td>" + name + "</td><td>" + dob + "</td><td>" + dept + "</td><td>" + gender + "</td></tr>";
                    $("table").append(markup);
           
             } })     

             */