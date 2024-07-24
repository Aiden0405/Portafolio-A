// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

        $(window).on('scroll load',function(){

            $('#menu').removeClass('fa-times');
            $('header').removeClass('toggle');

            if($(window).scrollTop() > 0){
                $('.top').show();
            }else{
                $('.top').hide();
            }

    });

    //smoth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
        500,
        'linear'

        );

    });

});

/*
const portfolioImages = document.querySelectorAll('.portfolio-image');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// Add event listener to each portfolio image
portfolioImages.forEach(image => {
    image.addEventListener('click', () => {
        const largeImageSrc = image.getAttribute('data-src');
        modalImage.src = largeImageSrc;
        modal.style.display = 'block';
    });
});

function closeModal() {
    modal.style.display = 'none';
}
*/
