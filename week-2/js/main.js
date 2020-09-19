/*================================================
            Click to Change Text
=================================================*/
let main_header = document.getElementsByClassName('main-header')[0];
let header_title = document.getElementsByClassName('header-title')[0];
main_header.addEventListener('click', () => {
    header_title.textContent = "Have a Good Time!";
});

/*================================================
            Click to Show / Close Menu
=================================================*/
let nav_button = document.getElementsByClassName('nav-btn')[0];
let v_navbar = document.getElementsByClassName('vertical-navbar')[0];
let close_button = document.getElementsByClassName('close-btn')[0];
nav_button.addEventListener('click', (e) => {
    e.preventDefault();
    v_navbar.style.display = 'block';
    console.log('open');

});
close_button.addEventListener('click', (e) => {
    e.preventDefault();
    v_navbar.style.display = "none";
    console.log('close');
});

/*================================================
        Click to Show More Content Boxes
=================================================*/
let hidden_section = document.getElementsByClassName('hidden-section')[0];
function callAction() {
    hidden_section.style.display = "block";
    window.location.hash = "#hide";
    console.log(window.location.hash);
}