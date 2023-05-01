import './sass/styles.scss';

let keyboardSettings;

if (localStorage.getItem('keyboardSettings')) {
  keyboardSettings = JSON.parse(localStorage.getItem('keyboardSettings'));
}
if (!localStorage.getItem('keyboardSettings')) {
  keyboardSettings = {
    capsMode: false,
  };
  localStorage.setItem('keyboardSettings', JSON.stringify(keyboardSettings));
}

const { body } = document;

const output = document.createElement('textarea');
output.classList.add('output');
body.append(output);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.append(keyboard);

/* First Row */

const keyboardFirstRow = document.createElement('div');
keyboardFirstRow.classList.add('keyboard-row');
keyboard.append(keyboardFirstRow);

const firstRowKeysCodes = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
];

const firstRowKeys = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
];

const copyedFirstRowKeys = [...firstRowKeys];

/* ============================================== */

/* Second Row */
const keyboardSecondRow = document.createElement('div');
keyboardSecondRow.classList.add('keyboard-row');
keyboard.append(keyboardSecondRow);

const secondRowKeysCodes = [
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
];

const secondRowKeys = [
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Delete',
];

const copyedSecondRowKeys = [...secondRowKeys];

/* ============================================== */

/* Third Row */
const keyboardThirdRow = document.createElement('div');
keyboardThirdRow.classList.add('keyboard-row');
keyboard.append(keyboardThirdRow);

const thirdRowKeysCodes = [
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
];

const thirdRowKeys = [
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
];

const copyedThirdRowKeys = [...thirdRowKeys];

/* ============================================== */

/* Fourth Row */
const keyboardFourthRow = document.createElement('div');
keyboardFourthRow.classList.add('keyboard-row');
keyboard.append(keyboardFourthRow);

const fourthRowKeysCodes = [
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
];

const fourthRowKeys = [
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'ArrowUp',
  'Shift',
];

const copyedFourthRowKeys = [...fourthRowKeys];

/* ============================================== */

/* Fifth Row */

const keyboardFifthRow = document.createElement('div');
keyboardFifthRow.classList.add('keyboard-row');
keyboard.append(keyboardFifthRow);

const fifthRowKeysCodes = [
  'ControlLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
];

const fifthRowKeys = [
  'Control',
  'Alt',
  ' ',
  'Alt',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'Control',
];

const copyedFifthRowKeys = [...fifthRowKeys];

/* ============================================== */

/* CapsMode Keys */

const capsModeKeys = [
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
];

/* ============================================== */

const renderKeyboardKey = (key, rowKeys, rowKeysCodes) => {
  const keyboardKey = document.createElement('button');
  keyboardKey.classList.add('keyboard-key');
  if (key === 'Backspace' || key === 'Tab' || key === 'CapsLock' || key === 'Enter' || key === 'Shift' || key === ' ') keyboardKey.classList.add('flex-grow');
  if (key === 'CapsLock' && keyboardSettings.capsMode) keyboardKey.classList.add('power-on');
  keyboardKey.dataset.key = rowKeysCodes[rowKeys.indexOf(key)];
  keyboardKey.textContent = key;
  if (key === 'ArrowUp') keyboardKey.textContent = '↑';
  if (key === 'ArrowLeft') keyboardKey.textContent = '←';
  if (key === 'ArrowDown') keyboardKey.textContent = '↓';
  if (key === 'ArrowRight') keyboardKey.textContent = '→';
  if (capsModeKeys.some((keyCode) => rowKeysCodes[rowKeys.indexOf(key)] === keyCode)
    && keyboardSettings.capsMode) keyboardKey.textContent = key.toUpperCase();
  rowKeys.splice(rowKeys.indexOf(key), 1, '');
  return keyboardKey;
};

firstRowKeys.forEach((key) => {
  keyboardFirstRow.append(renderKeyboardKey(key, copyedFirstRowKeys, firstRowKeysCodes));
});

secondRowKeys.forEach((key) => {
  keyboardSecondRow.append(renderKeyboardKey(key, copyedSecondRowKeys, secondRowKeysCodes));
});

thirdRowKeys.forEach((key) => {
  keyboardThirdRow.append(renderKeyboardKey(key, copyedThirdRowKeys, thirdRowKeysCodes));
});

fourthRowKeys.forEach((key) => {
  keyboardFourthRow.append(renderKeyboardKey(key, copyedFourthRowKeys, fourthRowKeysCodes));
});

fifthRowKeys.forEach((key) => {
  keyboardFifthRow.append(renderKeyboardKey(key, copyedFifthRowKeys, fifthRowKeysCodes));
});

document.addEventListener('keydown', (e) => {
  document.querySelector('.output').focus();

  if (e.code === 'CapsLock') {
    if (!e.repeat) {
      keyboardSettings.capsMode = !keyboardSettings.capsMode;
      localStorage.setItem('keyboardSettings', JSON.stringify(keyboardSettings));
      document.querySelector(`[data-key=${e.code}]`).classList.toggle('power-on');
      capsModeKeys.forEach((keyCode) => {
        const key = document.querySelector(`[data-key=${keyCode}]`);
        const currentText = key.textContent;
        if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
        if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
      });
    }
  }

  if (capsModeKeys.some((keyCode) => keyCode === e.code)) {
    e.preventDefault();
    const key = document.querySelector(`[data-key=${e.code}]`);
    output.setRangeText(`${key.textContent}`, output.selectionStart, output.selectionEnd, 'end');
  }

  if (e.code === 'Tab') {
    e.preventDefault();
    output.setRangeText('    ', output.selectionStart, output.selectionEnd, 'end');
  }

  if (e.code === 'AltLeft' || e.code === 'AltRight') {
    e.preventDefault();
  }

  const key = document.querySelector(`[data-key=${e.code}]`);
  if (key) key.classList.add('active');
});

window.addEventListener('keyup', (e) => {
  const key = document.querySelector(`[data-key=${e.code}]`);
  if (key) key.classList.remove('active');
});

// document.addEventListener('keydown', (e) => {
//   capsModeKeys.push(e.code);
//   console.log(capsModeKeys);
// });
