var eid = [];//Array to store employee ID

$(document).ready(function () {
    $("#dialog-1").dialog({ autoOpen: false });

    //disabling
    $("#form1").prop("disabled", true);

    $('#new').click(function () {
        $("#form1 input").prop("disabled", false);
    });

    $('#cancel').click(function () {
        $('#form1').each(function () {
            this.reset();//reseting form after each save
        });
        $("#form1 input").prop("disabled", true);
    });

    
   //sum();

   $('.pay').keyup(function () {
       var BP = document.getElementById('basicPay').value;
       var HRA = document.getElementById('hrAllowance').value;
       var DA = document.getElementById('dailyAllowance').value;
       var MA = document.getElementById('medAllowance').value;
       
       if (DA == "")
           DA = 0;
       if (HRA == "")
           HRA = 0;
       if (BP == "")
           BP = 0;
       if (MA == "")
           MA = 0;
           
       var result = parseInt(DA) + parseInt(HRA)+parseInt(BP) + parseInt(MA);
       if (!isNaN(result)) {
           document.getElementById('salary').value = result;
            console.log(result);
       }      
   });


    $("#save").click(function () {
        var valid = true,
            message = ''; //To store the validation alert message
        $('form input').each(function () //Validating text fields
        {
            var $this = $(this);
            if (!$this.val()) {
                valid = false;
                message += 'Please enter your ' + $this.attr('name') + '\n';
            }
        });
        if (!valid) {
            alert(message);
        }
        else {
            $('#empId').each(function () //Employee id validation
            {
                if ($.inArray(this.value, eid) >= 0) {
                    alert("Existing Employee ID. Please enter a unique one.");
                    return false;
                }
                else {
                    eid.push(this.value); //push empID into eid[]
                    $("#dialog-1").dialog("open");
                    var id = $("#empId").val();
                    var name = $("#name").val();
                    var designat = $("#designation").val();
                    var totSal = $("#salary").val();
                    var display = "<tr> <td>" + id + "</td> <td>" + name + "</td> <td>" + designat + "</td> <td>"
                        + totSal + "</td> <td> <button id='edit'> Edit </button></td> <td> <button id='delete'> Delete </button> </td> </tr>";
                    $("table").append(display);
                    $("#form1").trigger('reset');
                }
            });
        }

    });

//Deleting row
    $(document).on('click','#delete', function(){
        alert("sure");
     $(this).parents('tr').remove();
    });

});