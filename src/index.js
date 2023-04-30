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

document.addEventListener('keydown', (e) => {
  firstRowKeysCodes.push(e.code);
  console.log(firstRowKeysCodes);
});

const renderKeyboardKey = (key) => {
  const keyboardKey = document.createElement('button');
  keyboardKey.classList.add('keyboard-key');
  if (key === 'Backspace') keyboardKey.classList.add('flex-grow');
  keyboardKey.dataset.key = firstRowKeysCodes[firstRowKeys.indexOf(key)];
  keyboardKey.textContent = key;
  return keyboardKey;
};

firstRowKeys.forEach((key) => {
  keyboardFirstRow.append(renderKeyboardKey(key));
});

document.addEventListener('keydown', (e) => {
  document.querySelector('.output').focus();
  const key = document.querySelector(`[data-key=${e.code}]`);
  if (key) key.classList.add('active');
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`[data-key=${e.code}]`);
  if (key) key.classList.remove('active');
});
