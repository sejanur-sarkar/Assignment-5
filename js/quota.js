
document.getElementById('th-add-taka')
    .addEventListener('click', function(){
        const donationInputTaka = getInputFieldValueById('quota-donate-taka');

        if(!isNaN(donationInputTaka) && donationInputTaka > 0){
            const myTaka = getTextFieldValueById('my-taka');
            const newMyTaka = myTaka - donationInputTaka;


            if(newMyTaka >= 0){
                const totalTaka = getTextFieldValueById('quota-total-taka');
                const newTotal = totalTaka + donationInputTaka;

                document.getElementById('quota-total-taka').innerText = newTotal;
                

                const myTakaA = document.getElementById('my-taka');
                myTakaA.innerText = newMyTaka;
                document.getElementById('quota-donate-taka').value = '';

                alert('Thank you for your donation');

            }
            else{
                alert('You do not have so enough money to donate');
            }
        }
    });




