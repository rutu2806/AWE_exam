function validation() {
    // Empty validation for all the fields

    let a = document.querySelector("#inp1").value;

    let b = document.querySelector("#inp2").value;

    if (a == "") {
        alert("Enter username")
    }
    else if (b == "") {
        alert("Enter Password")
    }


    // Clear the fields once the user submit the form.

    document.querySelector("#inp1").value = "";

    document.querySelector("#inp2").value = "";


    // Read the value of the above fields and display it in the page, below the forms. 


    let x = document.querySelector("commentBlock").value;

    let y = document.querySelector("#commentContainer").cloneNode(true);

    y.removeAttribute('id');

    y.children[0].innerHTML = x;

    let z = document.querySelector("#commentContainer");

    z.appendChild(y);

    z.insertBefore(y, commentConatiner.firstChild);


}