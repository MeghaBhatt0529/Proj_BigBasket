
// Coupon //

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity='0.7'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity='1'
}

// Light/Dark //

function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}

