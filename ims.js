$(function(){

/*=============================================== Homepage ==============================================*/

    // homepage naviation control
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
/*=============================================== Category ==============================================*/

    $('#formCategory').submit(function(e){
        e.preventDefault();
        // populating the table to add new details
        var snCategory = $("input[name='snCategory']");
        var nameCategory = $("input[name='nameCategory']");

        $('#categoryTable tbody').append(
            "<tr data-snCategory='"+snCategory+"' data-nameCategory='"+nameCategory+"'>" +
            "<td>" + $("#snCategory").val() + "</td>" +
            "<td>" + $("#nameCategory").val() + "</td>" +
            "<td>" +
            "<button type='button' class='btn btn-danger btn-lg btn-delete' >" + 
            "<i class='fa fa-times' aria-hidden='true'></i>" +
            "</button>" +
            "<button type='button' class='btn btn-dark btn-lg btn-edit' style='float:right'>" + 
            'Edit' +
            "</button>" +
            "</td>" +
            "</tr>");

            $('#snCategory').val('');
            $('#nameCategory').val('');

        // deleting table row
        $('body').on('click','.btn-delete', function(){
            $(this).parents('tr').remove();
        } )

         // editing table row
         $('body').on('click','.btn-edit', function(){
            var snCategory=$(this).parents('tr').attr('data-snCategory');
            var nameCategory =$(this).parents('tr').attr('data-nameCategory');
                // creating new table when the Edit button is clicked
            $(this).parents('tr').find('td:eq(0)').html("<input name='edited_number' value=''>");
            $(this).parents('tr').find('td:eq(1)').html("<input name='edited_name' value=''>");

            $(this).parents('tr').find('td:eq(2)').prepend("<button type='button' class='btn btn-warning mr-5 btn-update'> Update</button>");

            $(this).hide()

                // function for the newly created Update button
                $('body').on('click','.btn-update', function(){
                    var snCategory=$(this).parents('tr').find("input[name='edited_number']").val();
                    var nameCategory=$(this).parents('tr').find("input[name='edited_name']").val();

                    $(this).parents('tr').find('td:eq(0)').text(snCategory)
                    $(this).parents('tr').find('td:eq(1)').text(nameCategory)

                    $(this).parents('tr').attr('data-snCategory', snCategory)
                    $(this).parents('tr').attr('data-nameCategory', nameCategory)

                    $(this).parents('tr').find('.btn-edit').show()
                    $(this).parents('tr').find('.btn-update').remove()
                })            
        } )
        // console.log('function Test for Category')
        // $.ajax({
        //     type: 'POST',
        //     url: '',
        //     data: $('#formCategory').serialize(),
        //     success: function(data){ 
        //         console.log('data')
        //     }
        // })
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
