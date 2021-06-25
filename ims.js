$(function(){

var sideBarIsOpen = true;

toggleBtn.addEventListener( 'click', (event) => {
    event.preventDefault();
    if(sideBarIsOpen) {
        sidebar_container.style.width = '150px';
        sidebar_container.style.height = '100%';
        sidebar_container.style.transition = '0.3s all';
        rightPageContent_container.style.width = '100%';
        rightPageContent_container.style.marginLeft = '150px';
        headtitle.style.fontSize = '15px';  
            
        menuText = document.getElementsByClassName('menuText');
        for(var i=0; i < menuText.length; i++){
            menuText[i].style.display = 'none';
            sideBarIsOpen = false;
        } 
    } else { 
        sidebar_container.style.width = '300px';
        rightPageContent_container.style.width = '100%';
        rightPageContent_container.style.marginLeft = '300px';
        headtitle.style.fontSize = '30px';   
            
        menuText = document.getElementsByClassName('menuText');
        for(var i=0; i < menuText.length; i++){
            menuText[i].style.display = 'inline-block';
        }
        sideBarIsOpen = true;
        }
});
/*====================== Category ========================*/

    $('#formCategory').submit(function(e){
        console.log('function Test for Category')
        // $.ajax({
        //     type: 'POST',
        //     url: '',
        //     data: $('#formCategory').serialize(),
        //     success: function(data){ 
        //         console.log('data')
        //     }
        // })
        e.preventDefault();
    }) 


/*====================== Inventory ========================*/

    $('#formInventory').submit(function(e){
        console.log('function Test Inventory')
        // $.ajax({
        //     type: 'POST',
        //     url: '',
        //     data: $('#formCategory').serialize(),
        //     success: function(data){ 
        //         console.log('data')
        //     }
        // })

        e.preventDefault();
    })
    
    
/*====================== Purchase ========================*/

    $('#formPurchase').submit(function(e){
        console.log('function Test Purchase')
        // $.ajax({
        //     type: 'POST',
        //     url: '',
        //     data: $('#formCategory').serialize(),
        //     success: function(data){ 
        //         console.log('data')
        //     }
        // })
        e.preventDefault();
    }) 

    
/*====================== Sale ========================*/

    $('#formSale').submit(function(e){
        console.log('function Test Sale')
        // $.ajax({
        //     type: 'POST',
        //     url: '',
        //     data: $('#formCategory').serialize(),
        //     success: function(data){ 
        //         console.log('data')
        //     }
        // })
        e.preventDefault();
    })


/*====================== Vendor ========================*/
    
    $('#formVendor').submit(function(e){
        console.log('function Test Vendor')
        // $.ajax({
        //     type: 'POST',
        //     url: '',
        //     data: $('#formCategory').serialize(),
        //     success: function(data){ 
        //         console.log('data')
        //     }
        // })
        e.preventDefault();
    })


    
})
