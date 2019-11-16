//Functions for plans page

//drop down botton
var dropdown_current = document.getElementById("dropdown-current");
var dd_owner = document.getElementById("dd_owner"), dd_not_owner = document.getElementById("dd_not_owner"), 
dd_all_plans = document.getElementById("dd_all_plans");

dd_owner.onclick = function () {
    dropdown_current.innerHTML = dd_owner.innerHTML;
}
dd_all_plans.onclick = function () {
    dropdown_current.innerHTML = dd_all_plans.innerHTML;
}
dd_not_owner.onclick = function () {
    dropdown_current.innerHTML = dd_not_owner.innerHTML;
}

//passing the id parameter
var patientID  = localStorage.getItem('currentID'); 
var righttopID = document.querySelector('#right_top_id');
righttopID.innerHTML = "Patient id: " + patientID;

//displaying plan cards
var plans_col = document.querySelector('#plans_col');
request_api(varian_api+"patients/Head_Neck",null,"GET");

