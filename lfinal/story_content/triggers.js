function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OYqY7RDRn8":
        Script1();
        break;
      case "5ceJTT1D46m":
        Script2();
        break;
      case "6UuXiBcBYft":
        Script3();
        break;
      case "6KcughOwFbi":
        Script4();
        break;
      case "5euZlORaR4p":
        Script5();
        break;
      case "6WORzWuHcSO":
        Script6();
        break;
      case "6qmQmA07Liq":
        Script7();
        break;
      case "5denCxYkBeZ":
        Script8();
        break;
      case "5W6dImgw46F":
        Script9();
        break;
      case "6h3cGdM7T2G":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6rfDuFQlM11');
const duration = 750;
const easing = 'ease-out';
const id = '6IUAFTBsDNw';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5jrZ116m00a');
const duration = 750;
const easing = 'ease-out';
const id = '5zMSqO55zbM';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5w4TrcVDV75');
const duration = 750;
const easing = 'ease-out';
const id = '5p543EiWp5P';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5w4TrcVDV75');
const duration = 750;
const easing = 'ease-out';
const id = '5p543EiWp5P_reverse';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6FQrL8ITM3Z');
const duration = 750;
const easing = 'ease-out';
const id = '5p543EiWp5P';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('6LVNouK8UAE');
const duration = 750;
const easing = 'ease-out';
const id = '65mleKk3AUV';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6Lild542yrs');
const duration = 750;
const easing = 'ease-out';
const id = '65mleKk3AUV';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6cSL1XxjTrI');
const duration = 750;
const easing = 'ease-out';
const id = '65mleKk3AUV';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6YXcdou1xQU');
const duration = 750;
const easing = 'ease-out';
const id = '6hl7WRPyG4X';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6nkvxcCLxkS');
const duration = 750;
const easing = 'ease-out';
const id = '5qIpFFhQb8i';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
