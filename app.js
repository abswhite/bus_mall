'use strict';

//Global var
var imgUsed = [];
var totalClicks = 0;
var maxClicks = 25;

//Object for product in Bus Mall
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.amtUsed = 0;
  this.amtClicks = 0;
  imgUsed.push(this);
};

//Create Instances
var imgBag = new Product('Bag', 'img/bag.jpg');
console.log(imgBag);
var imgBanana = new Product('Banana', 'img/Banana.jpg');
var imgBathroom = new Product('Bathroom', 'img/bathroom.jpg');
var imgBoots = new Product('Boots', 'img/boots.jpg');
var imgBreakfast = new Product('Breakfast', 'img/breakfast.jpg');
var imgBubblegum = new Product('Bubblegum', 'img/bubblegum.jpg');
console.log(imgBubblegum);
var imgChair = new Product('Chair', 'img/chair.jpg');
var imgCthulhu = new Product('Cthulhu', 'img/cthulhu.jpg');
var imgDogDuck = new Product('Dog-Duck', 'img/dog-duck.jpg');
var imgDragon = new Product('Dragon', 'img/dragon.jpg');
var imgPen = new Product('Bag', 'img/pen.jpg');
var imgPetSweep = new Product('PetSweep', 'img/pet-sweep.jpg');
var imgScissors = new Product('Scissors', 'img/scissors.jpg');
var imgShark = new Product('Shark', 'img/shark.jpg');
var imgSweep = new Product('Sweep', 'img/sweep.png');
var imgTauntaun = new Product('Scissors', 'img/tauntaun.jpg');
var imgUnicorn = new Product('Shark', 'img/unicorn.jpg');
var imgUsb = new Product('Sweep', 'img/usb.gif');
var imgWaterCan = new Product('Water Can', 'img/water-can.jpg');
var imgWineglass = new Product('Wine Glass', 'img/wine-glass.jpg');

var one;
var two;
var three;

//Random-generated
function random() {
  return Math.round(Math.random() * (imgUsed.length - 1));
};

var previouslyShown;

function producedImage() {
  var currentDisplay = [];
  //while previous images
  //var productHistory

  //text.content --> img?
  var one = random();
  picOne.src = imgUsed[one].path;
  picOne.alt = imgUsed[one].name;
  imgUsed[one].amtUsed ++;

//no duplicates for three images shown
  var two = random();
  while (two === one) {
    two = random();
  }

  picTwo.src = imgUsed[two].path;
  picTwo.alt = imgUsed[two].name;
  imgUsed[one].amtUsed ++;

  //no duplicates for theee images shown
  var three = random();
  while (three === one || three === two) {
    three = random();
  }

  picThree.src = imgUsed[three].path;
  picThree.alt = imgUsed[three].name;
  imgUsed[three].amtUsed ++;

  previouslyShown = [one, two, three];
};

producedImage();

function click() {
  if (totalClicks < maxClicks) {
    totalClicks += 1;
    imgUsed.amtClicks += 1;
    console.log('Clicks: ' + imgUsed.amtClicks);
    console.log('Used: ' + imgUsed.amtUsed);
    producedImage();
  } else if (totalClicks == maxClicks) {
    picOne.removeEventListener('click', click);
    picTwo.removeEventListener('click', click);
    picThree.removeEventListener('click', click);
    console.log('Done!');
    renderTotals();
  }
};

function renderTotals() {
  var renderTotals = document.getElementById('renderTotals');

  var totalsElement = document.createElement('ul');

  for (var i = 0; i < imgUsed.length; i++) {
    var productElement = document.createElement('li');
    productElement.textContent = imgUsed[i].name + ' has ' + imgUsed[i].amtUsed + ' views and ' + imgUsed[i].amtClicks + ' clicks.';
    console.log(imgUsed[i].name);
    totalsElement.appendChild(productElement);
  }
  renderTotals.appendChild(totalsElement);
  console.log('I\'m in renderTotals');
}

picOne.addEventListener('click', click);
picTwo.addEventListener('click', click);
picThree.addEventListener('click', click);

// // function chooseProduct () {
// var product;
// for (var i = 0; i <3, i ++) {
//   do product = random();
// } while (imgUsed){
//
// }
// }
