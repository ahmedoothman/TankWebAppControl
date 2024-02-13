const tankOn = document.getElementById('tankOn');
const tankOff = document.getElementById('tankOff');

const forwardBtn = document.getElementById('forwardBtn');
const backwardBtn = document.getElementById('backwardBtn');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const stopBtn = document.getElementById('stopBtn');

const rotateLeftBtn = document.getElementById('rotateLeftBtn');
const rotateRightBtn = document.getElementById('rotateRightBtn');

const frontUpBtn = document.getElementById('frontUpBtn');
const frontDownBtn = document.getElementById('frontDownBtn');

const armOnBtn = document.getElementById('armOnBtn');
const armOffBtn = document.getElementById('armOffBtn');
const upperLeftBtn = document.getElementById('upperLeftBtn');
const upperRightBtn = document.getElementById('upperRightBtn');
const lowerLeftBtn = document.getElementById('lowerLeftBtn');
const lowerRightBtn = document.getElementById('lowerRightBtn');
const armStopBtn = document.getElementById('armStopBtn');

const resetConfigBtn = document.getElementById('resetConfig');
const markMineBtn = document.getElementById('markMine');

tankOn.addEventListener('click', () => {
  tankOnFunc();
});

tankOff.addEventListener('click', () => {
  tankOffFunc();
});

forwardBtn.addEventListener('click', () => {
  forwardFunc();
});

backwardBtn.addEventListener('click', () => {
  backwardFunc();
});

leftBtn.addEventListener('click', () => {
  leftFunc();
});

rightBtn.addEventListener('click', () => {
  rightFunc();
});

stopBtn.addEventListener('click', () => {
  stopFunc();
});

rotateLeftBtn.addEventListener('click', () => {
  rotateLeftFunc();
});

rotateRightBtn.addEventListener('click', () => {
  rotateRightFunc();
});

frontUpBtn.addEventListener('click', () => {
  frontUpFunc();
});

frontDownBtn.addEventListener('click', () => {
  frontDownFunc();
});

armOnBtn.addEventListener('click', () => {
  armOnFunc();
});

armOffBtn.addEventListener('click', () => {
  armOffFunc();
});

upperLeftBtn.addEventListener('click', () => {
  upperLeftFunc();
});

upperRightBtn.addEventListener('click', () => {
  upperRightFunc();
});

lowerLeftBtn.addEventListener('click', () => {
  lowerLeftFunc();
});

lowerRightBtn.addEventListener('click', () => {
  lowerRightFunc();
});

resetConfigBtn.addEventListener('click', () => {
  resetConfigFunc();
});

markMineBtn.addEventListener('click', () => {
  markMineFunc();
});
