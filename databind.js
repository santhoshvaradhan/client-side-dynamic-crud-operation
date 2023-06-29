var idinc = 2;
var deleteidvar;
var updateindex;
var updateid;
var students = [{
        id: 1,
        Firstname: "Santhosh",
        Lastname: "Varadhan",
        Gender: "Male",
        Dateofbirth: "2003-10-02",
        Mobilenumber: 9487271507,
        Email: "santhosh.varadhan02@gmail.com",
        Department: "CSE",
        Year: "2021"

    },
    {
        id: 2,
        Firstname: "Pradeep",
        Lastname: "Varadhan",
        Gender: "Male",
        Dateofbirth: "2005-07-21",
        Mobilenumber: 9487271501,
        Email: "pradeep.varadhan02@gmail.com",
        Department: "CSE",
        Year: "2023"
    }
];
$(document).ready(function() {
    $.each(students, function(index, obj) {
        appendToUsrTable(obj)

    });

    $("#delete-button-popup").click(function() {
        deletedata(deleteidvar);
    });
});

function deletefunc(objdt) {
    $("#myModal-delete").modal('show')
    deleteidvar = objdt;
}

function appendToUsrTable(obj) {
    $("tbody").append(`
          <tr class="row-value" id="students-${obj.id}">
              <td class="studentsData first-name-value" id="Firstname-${obj.id}">${obj.Firstname}</td>
              <td class="studentsData last-name-value" id="Lastnameid-${obj.id}">${obj.Lastname}</td>
              <td class="studentsData gender-value" id="Gender-${obj.id}">${obj.Gender}</td>
              <td class="studentsData dob-value" id="DOB-${obj.id}">${obj.Dateofbirth}</td>
              <td class="studentsData mobile-value" id="Mobileno-${obj.id}">${obj.Mobilenumber}</td>
              <td id="Email-${obj.id}" class="studentsData email-value" >${obj.Email}</td>
              <td id="Dept-${obj.id}" class="studentsData department-value" >${obj.Department}</td>
              <td class="studentsData year-value" id="Year-${obj.id}">${obj.Year}</td>
              <td id="buttonsid"><button type="button" class="btn btn-primary firstbutton" onclick="viewdata(${obj.id})" id="${obj.id}">View</button><button  type="button" onclick="updatedata(${obj.id})" class="btn btn-primary middlebutton" id="${obj.id}">Update</button>
                            <button onclick="deletefunc(${obj.id})" type="button" class="btn btn-primary lastbutton" id="${obj.id}">Delete</button>
                        </td>
              
          </tr>
      `)
}


function addfunction() {
    $('#buttons-remove-addtime').css("display", "none");
    emptyformstate();
    $("#myModal-add").modal('show');
    $("#updatebutton").css("display", "none")
    $("#registerbutton").css("display", "block");
}

function viewdata(objid) {
    $("#myModal-view").modal("show")
    $.each(students, function(index, obj) {

        if (objid == obj.id) {
            $("#first-value-container").text(obj.Firstname);
            $("#last-value-container").text(obj.Lastname);
            $("#gender-value-container").text(obj.Gender);
            $("#dob-value-container").text(obj.Dateofbirth);
            $("#mobilenumber-value-container").text(obj.Mobilenumber);
            $("#email-value-container").text(obj.Email);
            $("#dept-value-container").text(obj.Department);
            $("#year-value-container").text(obj.Year);
        }

    });
}

function updatedata(objidu) {
    $("#buttons-remove-addtime").css("display", "block");
    $("#myModal-add").modal("show");
    $.each(students, function(index, obj) {

        if (objidu == obj.id) {
            updateindex = index;
            updateid = obj.id;
            $("#Firstname").val(obj.Firstname);
            $("#Lastname").val(obj.Lastname);
            genderdatafetch(obj.Gender).prop('checked', true);;
            $("#Dateofbirth").val(obj.Dateofbirth);
            $("#Mobilenumber").val(obj.Mobilenumber);
            $("#Email").val(obj.Email);
            $("#Department").val(obj.Department);
            $("#Year").val(obj.Year);
            $("#registerbutton").css("display", "none");
        }

    });
}

function datareplace() {
    students[updateindex] = {
        id: updateid,
        Firstname: $("#Firstname").val(),
        Lastname: $("#Lastname").val(),
        Gender: $('input[type="radio"]:checked').val(),
        Dateofbirth: $("#Dateofbirth").val(),
        Mobilenumber: $("#Mobilenumber").val(),
        Email: $("#Email").val(),
        Department: $("#Department").val(),
        Year: $("#Year").val()
    };

    emptyformstate();
    $(".row-value").remove();
    $.each(students, function(index, obj) {
        appendToUsrTable(obj);

    });
}

function deletedata(objd) {

    $.each(students, function(index, obj) {

        if (objd == obj.id) {

            students.splice(index, 1);

            $(".row-value").remove();
            $("#myModal-delete").modal("hide");
            $.each(students, function(index, obj) {
                appendToUsrTable(obj);

            });
        }

    });
}

function registerfunc() {
    idinc++;
    students.push({
        id: idinc,
        Firstname: $("#Firstname").val(),
        Lastname: $("#Lastname").val(),
        Gender: $('input[type="radio"]:checked').val(),
        Dateofbirth: $("#Dateofbirth").val(),
        Mobilenumber: $("#Mobilenumber").val(),
        Email: $("#Email").val(),
        Department: $("#Department").val(),
        Year: $("#Year").val()
    });
    appendToUsrTable({
        id: idinc,
        Firstname: $("#Firstname").val(),
        Lastname: $("#Lastname").val(),
        Gender: $('input[type="radio"]:checked').val(),
        Dateofbirth: $("#Dateofbirth").val(),
        Mobilenumber: $("#Mobilenumber").val(),
        Email: $("#Email").val(),
        Department: $("#Department").val(),
        Year: $("#Year").val()
    })
    $("#myModal-add").modal("hide");
}

function genderdatafetch(gender) {
    if (gender == "Male" || gender == "male") {
        return $("input[type='radio'][value='Male']");
    } else {
        return $("input[type='radio'][value='Female']");;
    }
}

function emptyformstate() {
    $("#Firstname").val("");
    $("#Lastname").val("");
    genderdatafetch($('input[type="radio"]:checked').val()).prop('checked', false);
    $("#Dateofbirth").val("");
    $("#Mobilenumber").val("");
    $("#Email").val("");
    $("#Department").val("");
    $("#Year").val("");
    $("#myModal-add").modal("hide");
    $("#updatebutton").css("display", "none");

}