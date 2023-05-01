const renderKeyboardKey = (key, rowKeys, rowKeysCodes, keyboardSettings, capsModeKeys) => {
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

const createKeyboardRow = () => {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  return row;
};

export {
  renderKeyboardKey,
  createKeyboardRow,
};
