//* <!-- ========== Hamburger script ========== -->
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    })
    navMenu.addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })


//* <!-- ========== Active Color script ========== -->

const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    });
});


//* <!-- ========== Open Hour Time Table script ========== -->

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
const currentDay = days[today.getDay()];

const dropdown = document.getElementById("schedule");
if (dropdown) {
    const options = dropdown.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === currentDay) {
            options[i].classList.add("highlight");
            dropdown.selectedIndex = i;
            break;
        }
    }
}
const scheduleItems = document.querySelectorAll('.schedule-item');
scheduleItems.forEach(item => {
    if (item.getAttribute('data-day') === currentDay) {
        item.classList.add('openHourHighlight');
    }
});
