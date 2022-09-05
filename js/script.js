//card- visa nav area
var closeNav = document.getElementById("close-fav");
closeNav.addEventListener('click', function(){
    var card = document.getElementById("card-zone");
    card.style.width = "0%";
    card.style.height = "0vh";
});
var visa = document.getElementById("visa");
visa.addEventListener("click", function(){
    var card = document.getElementById("card-zone");
    card.style.width = "100%";
    card.style.height = "100vh";
});
//referal navigation
var closeNav = document.getElementById("close-ref");
closeNav.addEventListener('click', function(){
    var card = document.getElementById("referal-zone");
    card.style.width = "0%";
    card.style.height = "0vh";
});
var referal = document.getElementById("referral");
referal.addEventListener("click", function(){
    var card = document.getElementById("referal-zone");
    card.style.width = "100%";
    card.style.height = "100vh";
});
//profile content area
function openMenu(){
    document.getElementById('content').style.width = '100%';
    document.getElementById('content').style.height = '100vh';
}
function closeMenu(){
    document.getElementById('content').style.width = '0%';
    document.getElementById('content').style.height = '0vh';
}
//to up area
function openMenu1(){
    document.getElementById('content-1').style.width = '100%';
    document.getElementById('content-1').style.height = '100vh';
}
function closeMenu1(){
    document.getElementById('content-1').style.width = '0%';
    document.getElementById('content-1').style.height = '0vh';
}