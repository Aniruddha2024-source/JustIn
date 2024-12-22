let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}

let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");


function toggleActivity() {
    sideActivity.classList.toggle("open-activity")

    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-<b>";
    }else{
        moreLink.innerHTML = "Show more <b>+<b>";
    }
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    // Remove 'loggedIn' status from localStorage
    localStorage.removeItem('loggedIn');
    
    // Optionally, redirect to the login page
    window.location.href = "login.html"; // Adjust this if necessary
});