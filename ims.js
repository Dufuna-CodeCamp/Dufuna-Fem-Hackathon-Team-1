
var sideBarIsOpen = true;

toggleBtn.addEventListener( 'click', (event) => {
    event.preventDefault();
    if(sideBarIsOpen) {
        sidebar_container.style.width = '10%';
        sidebar_container.style.height = '100vh';
        sidebar_container.style.transition = '0.3s all';
        mainbody_container.style.width = '100%';
        mainbody_container.style.marginLeft = '120px';
        headtitle.style.fontSize = '10px';  
            
        menuText = document.getElementsByClassName('menuText');
        for(var i=0; i < menuText.length; i++){
            menuText[i].style.display = 'none';
            sideBarIsOpen = false;
        } 
    } else { 
        sidebar_container.style.width = '25%';
        mainbody_container.style.width = '90%';
        mainbody_container.style.marginLeft = '330px';
        headtitle.style.fontSize = '30px';   
            
        menuText = document.getElementsByClassName('menuText');
        for(var i=0; i < menuText.length; i++){
            menuText[i].style.display = 'inline-block';
        }
        sideBarIsOpen = true;
        }
});
