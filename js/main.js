const navBtn  = document.getElementById("navBtn");
const nav = document.getElementById("navMobile");
const closeBtn = document.getElementById('closeBtn');

const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const cloths = document.querySelectorAll('.cloth');
const hats = document.querySelectorAll('.hat');
const shoes = document.querySelectorAll('.shoe');


navBtn.addEventListener('click',()=>{
    nav.classList.remove('hidden')
});
closeBtn.addEventListener('click',()=>{
    nav.classList.add('hidden');

});
tabs.forEach(tab=>
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{
            tab.classList.remove('active');
        } );
        tab.classList.add('active');
        const tabVal = tab.getAttribute('data-tabs')
        all.forEach(item=>{
            item.style.display = 'none';

        } );
        if(tabVal == 'cloth'){
            cloths.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }
        else if(tabVal == 'hat'){
            hats.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }
        else if (tabVal == 'shoe'){
            shoes.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }
   
        else {
            all.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }



    
    })

)