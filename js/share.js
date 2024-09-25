function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;

    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}
function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).textContent;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

document.getElementById('donate-btn')
    .addEventListener('click', function () {

        document.getElementById('donate-btn').classList.add('bg-[#B4F461]');
        document.getElementById('donate-btn').classList.remove('bg-white', 'text-[#111111B3]');
        document.getElementById('history-btn').classList.remove('bg-[#B4F461]', 'text-black');
        document.getElementById('history-btn').classList.add('bg-white', 'border');
        document.getElementById('donate').classList.remove('hidden')
        document.getElementById('history').classList.add('hidden')
    })
document.getElementById('history-btn')
    .addEventListener('click', function () {
        document.getElementById('history-btn').classList.add('bg-[#B4F461]', 'text-black');
        document.getElementById('history-btn').classList.remove('bg-white', 'border');
        document.getElementById('donate-btn').classList.add('bg-white', 'text-[#111111B3]', 'border');
        document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
        document.getElementById('history').classList.remove('hidden')
        document.getElementById('donate').classList.add('hidden')
    })


