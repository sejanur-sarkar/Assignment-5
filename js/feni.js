
document.getElementById('sec-add-taka')
.addEventListener('click', function(){
    const donationInputTaka = getInputFieldValueById('feni-donate-taka');

    if(!isNaN(donationInputTaka) && donationInputTaka > 0){
        const myTaka = getTextFieldValueById('my-taka');
        const newMyTaka = myTaka - donationInputTaka;
        document.getElementById('my-taka').innerText = newMyTaka;

        if(newMyTaka >= 0){
            const totalTaka = getTextFieldValueById('feni-total-taka');
            const newTotal = totalTaka + donationInputTaka;

            document.getElementById('feni-total-taka').innerText = newTotal;
            
            document.getElementById('feni-donate-taka').value = '';
            alert('Thank you for your donation');

            const div = document.createElement('div');
                div.classList.add('border', 'p-8', 'rounded-lg');
                div.innerText = `${donationInputTaka} Taka is Donated for Flood Relief in Feni,Bangladesh `
                document.getElementById('history').appendChild(div);

        }
        else{
            alert('You do not have so enough money to donate');
        }
    }
});


