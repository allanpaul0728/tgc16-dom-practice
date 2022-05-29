// PLACE YOUR CODE HERE
let walletBalance = 0
let accountBalance = 0;
let insufficientNotice = "";
refreshWalletBalance();
refreshAccountBalance();

function refreshWalletBalance() {
    document.querySelector("#other-wallet").innerHTML = "$" + walletBalance;
}

function refreshAccountBalance() {
    document.querySelector("#account").innerHTML = "$" + accountBalance;
}

function refreshInsufficientNotice() {
    // console.log("refreshInsufficientNotice()")
    let insufficientDiv = document.querySelector("#insufficient");
    if (insufficientNotice != "") {    
        // console.log("Displaying error message")  ;
        insufficientDiv.style.display = 'block';
        insufficientDiv.innerHTML = insufficientNotice;
    } else {
        insufficientDiv.style.display = 'none';
        insufficientDiv.style.innerHTML = "";
    }
}

document.querySelector("#deposit10").addEventListener('click', function(){
    walletBalance += 10;
    refreshWalletBalance();
})

document.querySelector("#transfer10ToAccount").addEventListener('click', function(){
    if (walletBalance > 0) {
        walletBalance -= 10;
        accountBalance += 10;
        refreshAccountBalance();
        refreshWalletBalance();
    }
})

document.querySelector("#transfer10ToWallet").addEventListener('click', function(){
    if (accountBalance > 0) {
        walletBalance += 10;
        accountBalance -= 10;
        refreshAccountBalance();
        refreshWalletBalance();
    }

})

    document.querySelector('#spendBtn').addEventListener('click', function(){
        let spendAmount = Number(document.querySelector('#spend').value);
    
    
        if (spendAmount) {
            if (walletBalance >= spendAmount) {
                walletBalance -= spendAmount; 
                refreshWalletBalance();
                insufficientNotice = "";
                refreshInsufficientNotice();
            } else {
                insufficientNotice = "You have insufficient balance";
                refreshInsufficientNotice();
            }
         } 

})