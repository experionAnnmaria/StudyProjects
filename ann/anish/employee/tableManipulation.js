// All functionalities written in ready function

$(document).ready(function () {
    $( "#datepicker" ).datepicker();

// Click function load when button save pressed

    $("#save").click(function (e) {
        e.preventDefault();   //This method prevent the default behaviour of html

// Clear the validation and message div
        $("#dialog").empty()
        $("#validateEid").empty()
        $("#validateName").empty()
        $("#validateDob").empty()

//Read the content from form  
        var flag = 0;
        var eid = $("#eid").val();
        var ename = $("#ename").val();
        var dob = $("#datepicker").val();
        var gender = $('input:radio[name=gender]:checked').val()
        var department = $("#department").val();
        var table = document.getElementById("table1");
        var len = table.rows.length;
//Check if the text fields are empty 
        if (eid != '' && ename != '' && dob != '') {

//Check the Employee Id is already in the table
            for (i = 1; i < len; i++) {
                var y = document.getElementById("table1").rows[i].innerHTML; //read the content row by row to variable
                var res = y.split("td") //split the row based on td
                y = res[1]; //Select the second element from the array (Example of y : >523</)
                var eid1 = '>' + eid + '</'; //Append additional element to the Employee ID for comparison
                if (y == eid1) {
                    flag = 1;
                    break;
                }

            }
// If the Employee Id not in the table
            if (flag == 0) {

// write content to Dailog div
                $("#dialog").append(
                    $("<h4/>").text("Employee Details"),
                    $("<p/>").text("Employee ID :" + eid),
                    $("<p/>").text("Employee Name :" + ename),
                    $("<p/>").text("Date of birth :" + dob),
                    $("<p/>").text("Gender :" + gender),
                    $("<p/>").text("Department :" + department)

                )

//Display dialog box with entered data
                $("#dialog").dialog({
                    dialogClass: "no-close",
                    buttons: [
                        {
                            text: "Save",
                            click: function () {

//click the save button in dialog box Save the content in table
                                $(this).dialog("close");
                                var row = table.insertRow();
                                var cell1 = row.insertCell(0);
                                var cell2 = row.insertCell(1);
                                var cell3 = row.insertCell(2);
                                var cell4 = row.insertCell(3);
                                var cell5 = row.insertCell(4);
                                cell1.innerHTML = eid;
                                cell2.innerHTML = ename;
                                cell3.innerHTML = dob;
                                cell4.innerHTML = gender;
                                cell5.innerHTML = department;
                            }
                        }
                    ]
                })
            }
            else {
                alert("Employee ID alredy in table")
            }
        }

//Validation of each field in form
        else if (eid == '') {
            $("#validateEid").append(
                $("<p/>").text("Please Enter Employee ID ")
            )
        }
        else if (ename == '') {
            $("#validateName").append(
                $("<p/>").text("Please Enter Employee Name ")
            )
        }
        else if (dob == '') {
            $("#validateDob").append(
                $("<p/>").text("Please Enter Date of Birth ")
            )
        }
    })
});
