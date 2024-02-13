// key binds

document.addEventListener('keydown', function (event) {
  if (event.repeat) return;
  switch (event.key) {
    case 'z':
      tankOnFunc();
      simulateHover(tankOn);
      break;
    case 'c':
      tankOffFunc();
      simulateHover(tankOff);
      break;
    case 'w':
      forwardFunc();
      simulateHover(forwardBtn);
      break;
    case 's':
      backwardFunc();
      simulateHover(backwardBtn);
      break;
    case 'x':
      stopFunc();
      simulateHover(stopBtn);
      break;
    case 'a':
      leftFunc();
      simulateHover(leftBtn);
      break;
    case 'd':
      rightFunc();
      simulateHover(rightBtn);
      break;
    case 'q':
      rotateLeftFunc();
      simulateHover(rotateLeftBtn);
      break;
    case 'e':
      rotateRightFunc();
      simulateHover(rotateRightBtn);
      break;
    case 'r':
      frontUpFunc();
      simulateHover(frontUpBtn);
      break;
    case 'f':
      frontDownFunc();
      simulateHover(frontDownBtn);
      break;
    case 'u':
      armOnFunc();
      simulateHover(armOnBtn);
      break;
    case 'j':
      armOffFunc();
      simulateHover(armOffBtn);
      break;
    case 'i':
      upperLeftFunc();
      simulateHover(upperLeftBtn);
      break;
    case 'o':
      upperRightFunc();
      simulateHover(upperRightBtn);
      break;
    case 'k':
      lowerLeftFunc();
      simulateHover(lowerLeftBtn);
      break;
    case 'l':
      lowerRightFunc();
      simulateHover(lowerRightBtn);
      break;
    case 'n':
      resetConfigFunc();
      simulateHover(resetConfigBtn);
      break;
    case 'm':
      markMineFunc();
      simulateHover(markMineBtn);
      break;
  }
});

function simulateHover(tagElement) {
  tagElement.style.backgroundColor = '#9e9a75';
  setTimeout(() => {
    resetButtonStyles();
  }, 300);
}
function resetButtonStyles() {
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = '#ffffff';
  }
}
