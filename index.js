import './sass/styles.scss';
import { createKeyboardRow, renderKeyboardKey } from './utils/utils';
import {
  firstRowKeys,
  firstRowKeysCodes,
  secondRowKeysCodes,
  secondRowKeys,
  thirdRowKeysCodes,
  thirdRowKeys,
  fourthRowKeysCodes,
  fourthRowKeys,
  fifthRowKeysCodes,
  fifthRowKeys,
  capsModeKeys,
  shiftModeKeys,
  shiftModeKeysActiveValues,
  shiftModeKeysInactiveValues,
} from './utils/constants';

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

const info = document.createElement('p');
info.classList.add('info');
info.textContent = `
  Клавиатура создана в операционной системе Windows.
  Переключение языка не реализовано
`;
body.append(info);

const shiftAndCapsMode = {};

const copyedFirstRowKeys = [...firstRowKeys];
const copyedSecondRowKeys = [...secondRowKeys];
const copyedThirdRowKeys = [...thirdRowKeys];
const copyedFourthRowKeys = [...fourthRowKeys];
const copyedFifthRowKeys = [...fifthRowKeys];

/* First Row */
const keyboardFirstRow = createKeyboardRow();
firstRowKeys.forEach((key) => {
  keyboardFirstRow.append(
    renderKeyboardKey(key, copyedFirstRowKeys, firstRowKeysCodes, keyboardSettings, capsModeKeys),
  );
});
/* ============================================== */

/* Second Row */
const keyboardSecondRow = createKeyboardRow();
secondRowKeys.forEach((key) => {
  keyboardSecondRow.append(
    renderKeyboardKey(key, copyedSecondRowKeys, secondRowKeysCodes, keyboardSettings, capsModeKeys),
  );
});
/* ============================================== */

/* Third Row */
const keyboardThirdRow = createKeyboardRow();
thirdRowKeys.forEach((key) => {
  keyboardThirdRow.append(
    renderKeyboardKey(key, copyedThirdRowKeys, thirdRowKeysCodes, keyboardSettings, capsModeKeys),
  );
});
/* ============================================== */

/* Fourth Row */
const keyboardFourthRow = createKeyboardRow();
fourthRowKeys.forEach((key) => {
  keyboardFourthRow.append(
    renderKeyboardKey(key, copyedFourthRowKeys, fourthRowKeysCodes, keyboardSettings, capsModeKeys),
  );
});
/* ============================================== */

/* Fifth Row */
const keyboardFifthRow = createKeyboardRow();
fifthRowKeys.forEach((key) => {
  keyboardFifthRow.append(
    renderKeyboardKey(key, copyedFifthRowKeys, fifthRowKeysCodes, keyboardSettings, capsModeKeys),
  );
});
/* ============================================== */

keyboard.append(keyboardFirstRow);
keyboard.append(keyboardSecondRow);
keyboard.append(keyboardThirdRow);
keyboard.append(keyboardFourthRow);
keyboard.append(keyboardFifthRow);

document.addEventListener('keydown', (e) => {
  document.querySelector('.output').focus();

  if (shiftModeKeys.some((keyCode) => keyCode === e.code)) {
    e.preventDefault();
    const key = document.querySelector(`[data-key=${e.code}]`);
    output.setRangeText(`${key.textContent}`, output.selectionStart, output.selectionEnd, 'end');
  }

  if (e.key === 'Shift') {
    shiftAndCapsMode[e.key] = true;
    shiftModeKeys.forEach((keyCode, index) => {
      const key = document.querySelector(`[data-key=${keyCode}]`);
      key.textContent = shiftModeKeysActiveValues[index];
    });
    capsModeKeys.forEach((keyCode) => {
      const key = document.querySelector(`[data-key=${keyCode}]`);
      const currentText = key.textContent;
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }

  if (e.code === 'CapsLock') {
    if (!e.repeat) {
      shiftAndCapsMode[e.key] = true;
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

  if (shiftAndCapsMode.Shift && shiftAndCapsMode.CapsLock) {
    capsModeKeys.forEach((keyCode) => {
      const key = document.querySelector(`[data-key=${keyCode}]`);
      const currentText = key.textContent;
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
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

document.addEventListener('keyup', (e) => {
  const keyboardKey = document.querySelector(`[data-key=${e.code}]`);
  if (keyboardKey) keyboardKey.classList.remove('active');

  if (e.key === 'CapsLock') {
    shiftAndCapsMode[e.key] = false;
  }

  if (e.key === 'Shift') {
    shiftAndCapsMode[e.key] = false;
    shiftModeKeys.forEach((keyCode, index) => {
      const key = document.querySelector(`[data-key=${keyCode}]`);
      key.textContent = shiftModeKeysInactiveValues[index];
    });
    capsModeKeys.forEach((keyCode) => {
      const key = document.querySelector(`[data-key=${keyCode}]`);
      const currentText = key.textContent;
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }

  if (shiftAndCapsMode.Shift) {
    capsModeKeys.forEach((keyCode) => {
      const key = document.querySelector(`[data-key=${keyCode}]`);
      const currentText = key.textContent;
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }

  if (!shiftAndCapsMode.Shift) {
    capsModeKeys.forEach((keyCode) => {
      const key = document.querySelector(`[data-key=${keyCode}]`);
      const currentText = key.textContent;
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }
});
