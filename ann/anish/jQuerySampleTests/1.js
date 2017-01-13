var eid = [];//Array to store employee ID

$(document).ready(function () {
    $("#dob").datepicker({ dateFormat: 'dd-mm-yy', maxDate: '0' });

    $("#dialog-1").dialog({ autoOpen: false });

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
                    var dateOfBirth = $("#dob").val();
                    var department = $("#departments").val();
                    var gender = $("input[name='gender']:checked").val();
                    var display = "<tr> <td>" + id + "</td> <td>" + name + "</td> <td>" + dateOfBirth + "</td> <td>"
                        + department + "</td> <td>" + gender + "</td> </tr>";
                    $("table").append(display);
                    $("#form1").trigger('reset');
                }
            });
        }

    });

});