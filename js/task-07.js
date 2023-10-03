const fontSizeControl = document.getElementById('font-size-control');

const textValue = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value;

    textValue.style.fontSize = fontSize + 'px';
});