const toggler = document.querySelector('#toggler');
const listitems = document.querySelector('.list-items');
const closebtn = document.querySelector('#close');
const sidebar = document.querySelector('.dropdown');
console.log(listitems);


toggler.addEventListener('click', dropdown);
closebtn.addEventListener('click', dropdown);
function dropdown() {
    if (closebtn.style.display === 'none') {
        sidebar.style.opacity = '100%';
        closebtn.style.display = 'block';
        toggler.style.display = 'none';

    }
    else {
        sidebar.style.opacity = '0%';
        closebtn.style.display = 'none';
        toggler.style.display = 'block';
    }

}