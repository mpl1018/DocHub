//Functions for plans page
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

