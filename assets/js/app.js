function juice_img(image){
    let main_img = document.querySelector('.main').src = image;
}
// function juice_img(image){
//     let main_img = document.querySelector('.main').src = image;
// }

// for showing catagoris in phone
let NavCaragoris = document.querySelector(".NavCaragoris");
    
function HideMiniNev(){
    NavCaragoris.style.display = "none";
}

function ShowMiniNev(){
    NavCaragoris.style.display = "block";
}

// for dropdown menu in phone
let DropDown = document.querySelector(".DeopDownMenuMobiel");
DropDown.style.display = "none";
let isTrue = true;

function showDropdown(){
    if(isTrue){
        DropDown.style.display = "block";
        isTrue = false;
    }else{
        DropDown.style.display = "none";
        isTrue = true;
    }

}

// For scrole efect
window.addEventListener('scroll', () => {
    let TopNev = document.querySelector('.TopNev');
    let MidNev = document.querySelector('.MidNev');
    let BottomNev = document.querySelector('.BottomNev');

    if (window.scrollY > 100) {
        TopNev.style.display = 'none';
        MidNev.style.display = 'none';
        BottomNev.style.background = "rgba(216,216,216,1)";
    } else {
        TopNev.style.display = 'block';
        MidNev.style.display = 'block';
        BottomNev.style.background = "white";
    }
})

// hdie and show ctagoris in scrole
let CatagorisIcinHide111 = document.querySelector(".CatagorisIcinHide");
CatagorisIcinHide111.addEventListener("click", function() {
    document.getElementById("NavClickAction").style.display = "block";
    document.getElementById("CatagorisIcinHide").style.display = "none";
    document.getElementById("CatagorisIcinHideCros").style.display = "block";
});

let CatagorisIcinHideCros2222 = document.querySelector(".CatagorisIcinHideCros");
CatagorisIcinHideCros2222.addEventListener("click", function() {
    document.getElementById("NavClickAction").style.display = "none";
    document.getElementById("CatagorisIcinHide").style.display = "block";
    document.getElementById("CatagorisIcinHideCros").style.display = "none";
});

// date function
const date = new Date()
const year = date.getFullYear()

const showYear = document.getElementById('date')
showYear.innerHTML = year


// Address addd show  AddAdressBtnO
    function FunAddAdressBtnO(){
        let addressInfoFrom = document.querySelector(".addressInfoFrom");
        let collectedAddressA = document.querySelector(".collectedAddress");
        collectedAddressA.style.display = "none";
        addressInfoFrom.style.display = "block";
    }
    
    function FunaddressInfoFrom(){
        let addressInfoFrom = document.querySelector(".addressInfoFrom");
        let collectedAddressA = document.querySelector(".collectedAddress");
        collectedAddressA.style.display = "block";
        addressInfoFrom.style.display = "none";
    }

    // add pyment function
    function AddPhyment(){
        let PaymentFromq = document.getElementById("PaymentFrom");
        PaymentFromq.style.display = "block";
    }

    function AddPhymenthide(){
        let PaymentFrom = document.getElementById("PaymentFrom");
        PaymentFrom.style.display = "none";
    }