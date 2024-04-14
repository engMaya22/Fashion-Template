const navBtn  = document.getElementById("navBtn");
const nav = document.getElementById("navMobile");
const closeBtn = document.getElementById('closeBtn');
navBtn.addEventListener('click',()=>{
    nav.classList.remove('hidden')
});
closeBtn.addEventListener('click',()=>{
    nav.classList.add('hidden');

});