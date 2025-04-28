document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('clicked');

    const inputBalance = document.getElementById('input-balance').value;
    const inputBalanceNum = parseFloat(inputBalance);
    const inputPin = document.getElementById('input-balance-pin').value;

    if(inputPin ==='1234'){
        const mainBalance = document.getElementById('main-balance').innerText;
        const balance = parseFloat(mainBalance);
        const newBalance = balance + inputBalanceNum;
        document.getElementById('main-balance').innerText = newBalance;
        
        
    }
    else{
        alert ('Failed, Try again')
    }
    
})