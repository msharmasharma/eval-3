document.getElementById("place").addEventListener("click",placeFun)

function placeFun(){
    
        alert("Your order is accepted ")

        function order(){
            alert(" Your order is being cooked")
        }
        setTimeout(order,3000)

        function order1(){
            alert(" Your order is ready")
        }
        setTimeout(order1,8000)

        function order2(){
            alert(" Order out for delivery ")
        }
        setTimeout(order2,10000)

        function order3(){
            alert(" Order delivered")
        }
        setTimeout(order3,12000)
    
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

// 0 seconds : Your order is accepted 3 seconds : Your order is being cooked 
// 8 seconds : Your order is ready 10 seconds : Order out for delivery 
// 12 seconds : Order delivered