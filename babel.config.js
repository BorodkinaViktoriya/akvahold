const presets = [
  ['@babel/preset-env', { // какой пресет использовать
     targets:  "> 1%, not dead",

    // использовать полифиллы для браузеров из свойства target
    // по умолчанию babel использует поллифиллы библиотеки core-js
    useBuiltIns: "entry"
  }]
];

module.exports = { presets };