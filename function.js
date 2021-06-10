function reset() {
    location.reload();
}
function send() {
    let selection1 = confirm('Do you want to send?');
    if (selection1 == true) {
        var name = document.getElementById("name").value;
        var experience = document.getElementById("Experience").value;
        var work = document.getElementById("work").value;

        if (name && experience && work != null) {
            if (document.getElementById("male").checked) {
                
            }
            else if (document.getElementById("female").checked) {
            }

            if (document.getElementById("php").checked) {
                
            }
            else if (document.getElementById("python").checked) {
                
            }
            else if (document.getElementById("dotnet").checked) {
                
            }
            else if (document.getElementById("java").checked) {
                
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