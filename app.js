const showPass1 = (e) => {
    let pass = document.getElementById("pass");


    if (pass.type == "text") {
        pass.type = "password"
        e.innerHTML = "<i class='far fa-eye'></i>"
    } else {
        pass.type = "text"
        e.innerHTML = "<i class='fas fa-eye-slash'></i>"
    }

}
const showPass2 = (e) => {
    let pass1 = document.getElementById("pass1");

    if (pass1.type == "text") {
        pass1.type = "password"
        e.innerHTML = "<i class='far fa-eye'></i>"
    } else {
        pass1.type = "text"
        e.innerHTML = "<i class='fas fa-eye-slash'></i>"
    }
}




const signUp = () => {
    const inp1 = document.getElementById("inp1");
    const inp2 = document.getElementById("inp2");
    const inp3 = document.getElementById("inp3");
    const inp4 = document.getElementById("pass");
    const inp5 = document.getElementById("pass1");



    if (inp1.value != "" && inp2.value != "" && inp3.value != "" && inp4.value != "" && inp5.value != "") {
        const userObj = {
            firstName: inp1.value,
            lastName: inp2.value,
            email: inp3.value,
            pass: inp4.value,
            confirmPass: inp5.value,

        }
        inp1.value = ""
        inp2.value = ""
        inp3.value = ""
        inp4.value = ""
        inp5.value = ""

        const multiUser = JSON.parse(localStorage.getItem("users")) || []
        const userInd = multiUser.findIndex((value) => {
            return value.email === userObj.email
        })

        if (userInd === -1) {
            multiUser.push(userObj)
            localStorage.setItem("users", JSON.stringify(multiUser))
            alert("SignUp Successfully")
            window.location.assign("./login.html")

        } else {
            alert("Email already exists")
        }

    }


}


const logIn = () => {

    const userEmail = document.getElementById("inp3");
    const userPass = document.getElementById("pass");
    const userData = JSON.parse(localStorage.getItem("users"));
    const checkUsers = userData.find((val) => {
        return val.email === userEmail.value && val.pass === userPass.value
    })


    if (checkUsers) {
        localStorage.setItem("currentUser", JSON.stringify(checkUsers))
        let mysec = document.getElementById("mySec");
        mysec.classList.add("mysec");
        let dashboardDiv = document.getElementById("dashboardDiv");
        let dashboardMainDiv = document.getElementById("myDashboard");
        dashboardMainDiv.style.display = "block"
        dashboardDiv.childNodes[3].innerHTML = JSON.stringify(`${checkUsers.firstName} ${checkUsers.lastName}`).toUpperCase();
        dashboardDiv.childNodes[7].innerHTML = JSON.stringify(`${checkUsers.email}`)

    } else {
        alert("Invalid User Or Password")
    }


}