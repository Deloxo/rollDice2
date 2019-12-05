function rollD20(dicePosX, dicePosY, diceSizeMod) {

  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.moveTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, 4 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  var value = Math.floor(Math.random()*20)+1;
  ctx.fillText(value, dicePosX, dicePosY + 6);

  return value;
}

function rollD12(dicePosX, dicePosY, diceSizeMod) {

  ctx.fillStyle = "#FFF935";
  ctx.beginPath();
  ctx.moveTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, 4 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.fill();

  ctx.fillStyle = "#FFFfff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  var value = Math.floor(Math.random()*12)+1;
  ctx.fillText(value, dicePosX, dicePosY + 6);

  return value;
}

function rollD10(dicePosX, dicePosY, diceSizeMod) {
  ctx.fillStyle = "#FF9900";
  ctx.beginPath();
  ctx.moveTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, 4 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.fill();

  ctx.fillStyle = "#FFffff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  var value = Math.floor(Math.random()*10)+1;
  ctx.fillText(value, dicePosX, dicePosY + 6);

  return value;
}

function rollD8(dicePosX, dicePosY, diceSizeMod) {

  ctx.fillStyle = "#F11AFF";
  ctx.beginPath();
  ctx.moveTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, 4 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.fill();

  ctx.fillStyle = "#Ffffff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  var value = Math.floor(Math.random()*8)+1;
  ctx.fillText(value, dicePosX, dicePosY + 6);

  return value;
}

function rollD6(dicePosX, dicePosY, diceSizeMod) {

  ctx.fillStyle = "#929292";
  ctx.beginPath();
  ctx.moveTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, 4 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  var value = Math.floor(Math.random()*6)+1;
  ctx.fillText(value, dicePosX, dicePosY + 6);

  return value;
}

function rollD4(dicePosX, dicePosY, diceSizeMod) {

  ctx.fillStyle = "#68AF16";
  ctx.beginPath();
  ctx.moveTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(-4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, 4 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, 2 * diceSizeMod + dicePosY);
  ctx.lineTo(4 * diceSizeMod + dicePosX, -2 * diceSizeMod + dicePosY);
  ctx.lineTo(0 * diceSizeMod + dicePosX, -4 * diceSizeMod + dicePosY);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  var value = Math.floor(Math.random()*4)+1;
  ctx.fillText(value, dicePosX, dicePosY + 6);

  return value;
}
