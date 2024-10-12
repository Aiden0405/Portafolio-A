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


// FIREBASE 
// // Get the form element
// const form = document.querySelector('form');

// // Add an event listener to the form submission event
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Get the form data
//   const name = document.querySelector('input[name="name"]').value;
//   const email = document.querySelector('input[name="email"]').value;
//   const project = document.querySelector('input[name="project"]').value;
//   const message = document.querySelector('textarea[name="message"]').value;

//   // Use Firebase to send the form data to your database
//   firebase.database().ref('contact-form-submissions').push({
//     name,
//     email,
//     project,
//     message,
//   }).then(() => {
//     console.log('Form data sent successfully!');
//   }).catch((error) => {
//     console.error('Error sending form data:', error);
//   });
// });