window.addEventListener("scroll",function(){
    let nav = document.getElementById('nav-bar')
    nav.classList.toggle('rolagem',window.scrollY > 0 )
    
})