// navbar home..
let womens = document.getElementById("womens");
let mens = document.getElementById("mens");
let trendings = document.getElementById("trendings");
let contacts = document.getElementById("contacts");
let trends = document.querySelectorAll(".trends");


let count = 0;

trends.forEach(function(slide, index){
    slide.style.left=`${index * 100}%`
})

setInterval(function(){
    count++;
    if(count == trends.length){
        count=0;
    }
    myFun()
}, 2000)
function myFun(){
    trends.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}






womens.addEventListener("click", ()=>{
    womens.style.color="rgb(248, 166, 128)";
    mens.style.color="white";
    trendings.style.color="white";
    contacts.style.color="white";

})

mens.addEventListener("click", ()=>{
    mens.style.color="rgb(248, 166, 128)";
    womens.style.color="white";
    trendings.style.color="white";
    contacts.style.color="white";
})

trendings.addEventListener("click", ()=>{
    trendings.style.color="rgb(248, 166, 128)";
    mens.style.color="white";
    womens.style.color="white";
    contacts.style.color="white";
})

contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(248, 166, 128)";
    womens.style.color="white";
    mens.style.color="white";
    trendings.style.color="white";
})







// navbar
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});




// item page

let card = document.querySelectorAll(".crd");
let pageImg = document.querySelector("#itemImg");
let container = document.querySelector(".container");

let nav = document.querySelector("nav");
let itemPage = document.querySelector(".itemPage");
itemPage.style.display = "none";

console.log(pageImg);
console.log(card);

card.forEach(function (curValue) {
  curValue.addEventListener("click", function () {
    itemPage.style.display = "block";
    itemPage.style.display = "flex";

    container.style.display = "none";
    let imgSrc = curValue.firstElementChild.src;
    pageImg.src = imgSrc;

     


    let contentPage = document.querySelector(".content");
    let buyPage = document.querySelector(".buyPage");

    document.getElementById("buyBtn").addEventListener("click", function () {
      buyPage.style.padding = "44px";
      buyPage.style.display = "block";

      contentPage.innerHTML = `
             
         
        <h3>Enter Detail : </h3>
        <input type="text" placeholder="Enter Your Name" id="name"> <br>
        <input type="text" placeholder="Enter Your Adress" id="adress"> <br>
        <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
        <h3>Payment Option :</h3>
        <select name="" id="">
            <option value="Card-Pay">Card-Payment</option>
            <option value="Cash on Delivery">Cash on Delivery - COD</option>


        </select><br>
        
         
            `;

      let submitBtn = document.createElement("button");
      submitBtn.innerText = "Submit";

      contentPage.appendChild(submitBtn);
      submitBtn.addEventListener("click", function () {
        let name = document.getElementById("name");
        let address = document.getElementById("adress");
        let num = document.getElementById("num");

        if (name.value == "" && address.value == "" && num.value == "") {
          alert("Please Enter Detail");
        } else {
          alert("Your Response Recorded");
          buyPage.style.display = "none";
        }
      });

      document.querySelector(".cross").addEventListener("click", function () {
        buyPage.style.display = "none";
      });
    });
  });
});




// connect


function connect(){
    let name = document.getElementById("name");
    let num = document.getElementById("number");
 

    if(name.value == "" && num.value == ""){
        alert("Fill Detail")
    }else{
        alert("Thanks For Connecting")
    }

}