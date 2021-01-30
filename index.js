let increment = 1;
let decrement = -1;
let totalPriceOf1stClass = 0;
let totalPriceOfEconomyClass = 0;
let subTotalPrice = 0;
let vat = 0;
let totalPrice = 0;

function handleTicketCounter(id, price, caseCounter){
    let ticketQuantity = document.getElementById(id).value;
    ticketQuantity = parseInt(ticketQuantity) + caseCounter ;
    if(ticketQuantity < 0) {
        ticketQuantity = 0;
    }
    document.getElementById(id).value = ticketQuantity;

    if(price == 150){
        totalPriceOf1stClass = price*ticketQuantity ;
    }else{
        totalPriceOfEconomyClass = price*ticketQuantity ;
    }
    subTotalPrice = totalPriceOf1stClass + totalPriceOfEconomyClass;
    vat = (subTotalPrice*10)/100;
    totalPrice = subTotalPrice + vat;
    document.getElementById("subtotal").innerText = subTotalPrice;
    document.getElementById("vat").innerText = vat;
    document.getElementById("total").innerText = totalPrice;
}

document.getElementById("1st-class-plus-button").addEventListener("click", function(){
    handleTicketCounter("1st-class-ticket-quantity", 150, increment)
})

document.getElementById("1st-class-minus-button").addEventListener("click", function(){
    handleTicketCounter("1st-class-ticket-quantity", 150, decrement)
})

document.getElementById("economy-plus-button").addEventListener("click", function(){
    handleTicketCounter("economy-ticket-quantity", 100, increment)
})

document.getElementById("economy-minus-button").addEventListener("click", function(){
    handleTicketCounter("economy-ticket-quantity", 100, decrement)
})


//  After pressing Book Now button
document.getElementById("book-now").addEventListener("click", function(){
    let messageBox = document.getElementById("message-box");
    let message = document.getElementById("message");

    if(totalPrice != 0){
        message.innerText = "You have successfully purchase the ticket";
        messageBox.style.color = " #52AF3A";
        messageBox.style.display = "block";
    }else{
        message.innerText = "You do not select any ticket";
        messageBox.style.color = "red";
        messageBox.style.display = "block";
    }

    // resetting the ticket and price values
    document.getElementById("close-button").addEventListener("click", function(){
        document.getElementById("message-box").style.display = "none";
        document.getElementById("1st-class-ticket-quantity").value = 0;
        document.getElementById("economy-ticket-quantity").value = 0;
        document.getElementById("subtotal").innerText = "0";
        document.getElementById("vat").innerText = "0";
        document.getElementById("total").innerText = "0";
        totalPriceOf1stClass = 0;
        totalPriceOfEconomyClass = 0;
        subTotalPrice = 0;
        vat = 0;
        totalPrice = 0;
    })

})

