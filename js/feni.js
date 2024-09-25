
document.getElementById('sec-add-taka')
.addEventListener('click', function(){
    const donationInputTaka = getInputFieldValueById('feni-donate-taka');

    if(!isNaN(donationInputTaka) && donationInputTaka > 0){
        const myTaka = getTextFieldValueById('my-taka');
        const newMyTaka = myTaka - donationInputTaka;


        if(newMyTaka >= 0){
            const totalTaka = getTextFieldValueById('feni-total-taka');
            const newTotal = totalTaka + donationInputTaka;

            const totalTakaN = document.getElementById('feni-total-taka');
            totalTakaN.innerText = newTotal;

            const myTakaA = document.getElementById('my-taka');
            myTakaA.innerText = newMyTaka;
            document.getElementById('feni-donate-taka').value = '';

            alert('Thank you for your donation');

        }
        else{
            alert('You do not have so enough money to donate');
        }
    }
});


