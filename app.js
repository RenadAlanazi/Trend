function upadateP2Number(product, price, isIncreasing){
    const P1Input = document.getElementById(product + '-number');
    let P1Number = P1Input.value;
            if(isIncreasing){
                P1Number = parseInt(P1Number) + 1;
            }
            
   else if(P1Number > 0){
          P1Number = parseInt(P1Number) - 1;
     }
        
        P1Input.value = P1Number;

        
    // update case total 
    const P1Total = document.getElementById(product + '-total');
    P1Total.innerText = P1Number * price;
    calculateTotal();
    
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    

    function calculateTotal(){
        const P1Total = getInputvalue('P1') * 150;
        const subTotal = P1Total;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        const CountValue = getInputvalue('P1');
    document.getElementById("count").innerText=CountValue;
       
    // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }

// phone prcie update using add event linstner 
document.getElementById('P1-plus').addEventListener('click',function(){
    upadateP2Number('P1',150, true);
});


document.getElementById('P1-minus').addEventListener('click',function(){
    upadateP2Number('P1',150 , false);
});

