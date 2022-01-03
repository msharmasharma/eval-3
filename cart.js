var cartData = JSON.parse(localStorage.getItem("cartData")) || []

getCart(cartData)

function getCart(crData){
    crData.forEach(function(ele){
        var img = document.createElement("img")
        img.src = ele.img
        img.setAttribute("id","imgs")

        var h1 = document.createElement("h1")
        h1.textContent = `Dish:- ${ele.name}`

        var h2 = document.createElement("h1")
        h2.textContent=`Price:- ${ele.price}`

        var btns = document.createElement("button")
        btns.textContent="Remove Item"
        btns.setAttribute("id","btns") 
        btns.addEventListener("click",function(){
            remFun(ele)
        })

        document.getElementById("inCart").append(img,h1,h2,btns)
    })

    document.getElementById("crCount").append(`Total Items:- ${crData.length}`)
}
function remFun(ele){
    cartData.splice(cartData.indexOf(ele),1)
    localStorage.setItem("cartData",JSON.stringify(cartData))
    window.location.reload(true)
}

var totalBalance = cartData.reduce(function(a,c){
    return a + Number(c.price)
},0)
document.getElementById("amount").textContent=`Total Amount:- ${totalBalance} rs.`

document.getElementById("checks").addEventListener("click",checkFun)

function checkFun(){
    window.location.href="checkout.html"
}

function cartFun() {
    window.location.href = "cart.html";
  }
  document.getElementById("div1").addEventListener("click", logFun);

  function logFun() {
    window.location.href = "index.html";
  }

  document.getElementById("div2").addEventListener("click", signFun);

  function signFun() {
    window.location.href = "index.html";
  }

  document.getElementById("div3").addEventListener("click", menuFun);

  function menuFun() {
    window.location.href = "menu.html";
  }