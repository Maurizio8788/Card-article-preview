let share_box = document.querySelector( '.card__footer-social-share-icon ' );
let share_icon = document.querySelector( '.card__footer-social-share-icon i' );
let social = document.querySelector( '.social' );

share_box.addEventListener( 'click', function() {
        social.classList.toggle('animate');
        share_box.classList.toggle('box-style');
        share_icon.classList.toggle('icon-style');
    }
);

