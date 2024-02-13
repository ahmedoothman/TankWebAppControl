/******************************************************************************/
/* Control Functions */
/******************************************************************************/

// Tank On
const tankOnFunc = () => {
  sendDataToPort('#TO;');
};

// Tank Off
const tankOffFunc = () => {
  sendDataToPort('#TF;');
};

// Forward
const forwardFunc = () => {
  sendDataToPort('#CF;');
};

// Backward
const backwardFunc = () => {
  sendDataToPort('#CB;');
};

// Left
const leftFunc = () => {
  sendDataToPort('#CL;');
};

// Right
const rightFunc = () => {
  sendDataToPort('#CR;');
};

// Stop
const stopFunc = () => {
  sendDataToPort('#CS;');
};

// Rotate Left

const rotateLeftFunc = () => {
  sendDataToPort('#RL;');
};

// Rotate Right
const rotateRightFunc = () => {
  sendDataToPort('#RR;');
};

// Front Up
const frontUpFunc = () => {
  sendDataToPort('#FU;');
};

// Front Down
const frontDownFunc = () => {
  sendDataToPort('#FD;');
};

// Arm On
const armOnFunc = () => {
  sendDataToPort('#AO;');
};

// Arm Off
const armOffFunc = () => {
  sendDataToPort('#AF;');
};

// Upper Left
const upperLeftFunc = () => {
  sendDataToPort('#UL;');
};

// Upper Right
const upperRightFunc = () => {
  sendDataToPort('#UR;');
};

// Lower Left
const lowerLeftFunc = () => {
  sendDataToPort('#LL;');
};

// Lower Right
const lowerRightFunc = () => {
  sendDataToPort('#LR;');
};

// Reset Config
const resetConfigFunc = () => {
  sendDataToPort('#RC;');
};

// Mark Mine
const markMineFunc = () => {
  sendDataToPort('#MM;');
};
