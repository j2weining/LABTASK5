function reset() {
    location.reload();
}
function send() {
    let selection1 = confirm('Do you want to send?');
    if (selection1 == true) {
        var name = document.getElementById("name").value;
        var experience = document.getElementById("Experience").value;
        var work = document.getElementById("work").value;
        var language = " ";

        if (name && experience && work) {
            if (document.getElementById("male").checked) {
                document.getElementById("male").value;
            } else if (document.getElementById("female").checked) {
                document.getElementById("female").value;
            }

            if (document.getElementById("php").checked) {
                language = language + " " + document.getElementById("php").value;
            }
            if (document.getElementById("python").checked) {
                language = language + " " + document.getElementById("python").value;
            }
            if (document.getElementById("dotnet").checked) {
                language = language + " " + document.getElementById("dotnet").value;
            }
            if (document.getElementById("java").checked) {
                language = language + " " + document.getElementById("java").value;
            }

            alert("Send Successful");
        }
        else {
            alert("Please fill in all the field.");
        }
    } else {
        alert("Please try again.");
    }
}