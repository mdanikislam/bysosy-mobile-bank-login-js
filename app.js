document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('input-phone').value;
    const pinNumber = document.getElementById('input-pin').value;
    if(phoneNumber === '1234' && pinNumber==='1234') {
        window.location.href = './home.html'
    }
    else{
        alert ('Wrong Input,Try Again')
    }
})