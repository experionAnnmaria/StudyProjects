var values = [];

$(document).ready(function() 
{
    $("#dob").datepicker({ dateFormat: 'dd-mm-yy', maxDate: '0'});  
    $( "#dialog-1" ).dialog({autoOpen: false });

    $( "#save" ).click(function() 
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
        else if(valid)
        {   
             $('#empId').each(function () 
             {
                if ($.inArray(this.value, values) >= 0) 
                {
                    alert("id must be unique.");
                    return false;
                }              
                else 
                {  
                    values.push(this.value);
            
                    $( "#dialog-1" ).dialog( "open" );
                    var id = document.getElementById('empId').value;
                    var name = document.getElementById('name').value;
                    var dateOfBirth = document.getElementById('dob').value;
                    var department = document.getElementById('departments').value;
                    var gender =$("input[name='gender']:checked").val();
                    var display = "<tr> <td>" + id + "</td> <td>" + name + "</td> <td>" + dateOfBirth + "</td> <td>" 
                    + department + "</td> <td>" + gender + "</td> </tr>";
                    $("table").append(display);
                    $("#form1").trigger('reset');
                }
         });  
        }      
           
   });

});

