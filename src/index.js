import './sass/styles.scss';

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

// document.addEventListener('keydown', (e) => {
//   thirdRowKeys.push(e.key);
//   console.log(thirdRowKeys);
// });

const renderKeyboardKey = (key, rowKeys, rowKeysCodes) => {
  const keyboardKey = document.createElement('button');
  keyboardKey.classList.add('keyboard-key');
  if (key === 'Backspace' || key === 'Tab' || key === 'CapsLock' || key === 'Enter') keyboardKey.classList.add('flex-grow');
  keyboardKey.dataset.key = rowKeysCodes[rowKeys.indexOf(key)];
  keyboardKey.textContent = key;
  return keyboardKey;
};

firstRowKeys.forEach((key) => {
  keyboardFirstRow.append(renderKeyboardKey(key, firstRowKeys, firstRowKeysCodes));
});

secondRowKeys.forEach((key) => {
  keyboardSecondRow.append(renderKeyboardKey(key, secondRowKeys, secondRowKeysCodes));
});

thirdRowKeys.forEach((key) => {
  keyboardThirdRow.append(renderKeyboardKey(key, thirdRowKeys, thirdRowKeysCodes));
});

document.addEventListener('keydown', (e) => {
  document.querySelector('.output').focus();
  if (e.code === 'Tab') {
    e.preventDefault();
    console.log(output.selectionStart);
    output.setRangeText('    ', output.selectionStart, output.selectionEnd, 'end');
  }
  const key = document.querySelector(`[data-key=${e.code}]`);
  if (key) key.classList.add('active');
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`[data-key=${e.code}]`);
  if (key) key.classList.remove('active');
});
