$( document ).ready(function(){
    var $btns = $('.btn').click(function(){
        //if all button was clicked
        if(this.id == 'all') {
            //show everything in between the element
            // that has the id 'basket'
            $('#basket > div').show();
        }
        // if any button other than all was clicked
        else {
            // el holds the id of the button that
            // was clicked.

            //show everything with the clikced class
            var  $el  = $('.' + this.id).show();
            //hide everything with not the clicked class
            $('#basket > div').not($el).hide();
        }
        //remove the older green coloring on the btn
        $btns.removeClass('active');
        //make the new button clicked on active
        $(this).addClass('active');

    })
})
