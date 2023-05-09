const number = document.getElementById('number');
const range = document.getElementById('radio_range');
const list = document.getElementById('radio_list');
const minRange = document.getElementById('range-min');
const maxRange = document.getElementById('range-max');
const rangeBox = document.getElementById('range');
const listBox = document.getElementById('list');
const settings = document.getElementById('settings');
const btn = document.getElementById('btn');

settings.addEventListener('change', () => {
    if (list.checked) {
        listBox.style.opacity = '1';
        listBox.style.cursor = 'text';
    } else {
        listBox.style.opacity = '0';
        listBox.style.cursor = 'default';
    }
});

listBox.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^\s\d]/g, '');
});

btn.addEventListener('click', () => {
    if (range.checked) {
        number.innerHTML = Math.floor(Number(minRange.value) + Math.random() * (Number(maxRange.value) + 1 - Number(minRange.value)));

        if (+minRange.value > +maxRange.value) {
            let temp = maxRange.value;
            maxRange.value = minRange.value;
            minRange.value = temp;
        }
    }

    if (list.checked && listBox.value.length > 0) {
        let arrListNumbers = listBox.value.trim().split(/\s+/);

        number.innerHTML = arrListNumbers[Math.floor(Math.random() * arrListNumbers.length)]
    }

});