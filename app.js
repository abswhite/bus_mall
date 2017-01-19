'use strict';

//Global var
var imgUsed = [];
var imgProduced = [];
var totalClicks = 0;
var maxClicks = 5;

//Object for product in Bus Mall
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.amtClicks = 0;
  this.amtUsed = 0;
  imgUsed.push(this);
};

//Create Instances
var imgBag = new Product('Bag', 'img/bag.jpg');
console.log(imgBag);
var imgBanana = new Product('Banana', 'img/banana.jpg');
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
var imgTauntaun = new Product('Tauntaun', 'img/tauntaun.jpg');
var imgUnicorn = new Product('Unicorn', 'img/unicorn.jpg');
var imgUsb = new Product('Usb', 'img/usb.gif');
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
var imgSet = [];

var one = random();
var two = random();
var three = random();

function producedImage() {

  var indexOne = imgUsed[one];
  console.log(indexOne);
  console.log(imgUsed);
  picOne.src = indexOne.path;
  picOne.alt = indexOne.name;
  imgProduced.push(indexOne);
  indexOne.amtUsed += 1;

//no duplicates for three images shown
  while (two === one) {
    two = random();
  }

  var indexTwo = imgUsed[two];
  picTwo.src = imgUsed[two].path;
  picTwo.alt = imgUsed[two].name;
  imgProduced.push(imgUsed[two]);
  indexTwo.amtUsed += 1;

  //no duplicates for theee images shown
  while (three === one || three === two) {
    three = random();
  }
  var indexThree = imgUsed[three];
  picThree.src = imgUsed[three].path;
  picThree.alt = imgUsed[three].name;
  imgProduced.push(imgUsed[three]);
  indexThree.amtUsed += 1;

  previouslyShown = [one, two, three];
  console.log(imgUsed[one]);
  console.log(imgUsed[two]);
  console.log(imgUsed[three]);

};
producedImage();
console.log(one);

function clickOne() {
  if (totalClicks < maxClicks - 1) {
    totalClicks += 1;
    console.log(imgUsed);
    imgUsed[one].amtClicks += 1;
    console.log('fsdfskd: ' + imgUsed.amtClicks);
    console.log('Used: ' + imgUsed.amtUsed);
    producedImage();
  } else if (totalClicks == maxClicks - 1) {
    totalClicks += 1;
    picOne.removeEventListener('click', clickOne);
    picTwo.removeEventListener('click', clickTwo);
    picThree.removeEventListener('click', clickThree);
    console.log('Done!');
    renderTotals();
  }
};

function clickTwo() {
  if (totalClicks < maxClicks - 1) {
    totalClicks += 1;
    imgUsed[two].amtClicks += 1;
    console.log('Clicks: ' + imgUsed.amtClicks);
    console.log('Used: ' + imgUsed.amtUsed);
    producedImage();
  } else if (totalClicks == maxClicks - 1) {
    totalClicks += 1;
    picOne.removeEventListener('click', clickOne);
    picTwo.removeEventListener('click', clickTwo);
    picThree.removeEventListener('click', clickThree);
    console.log('Done!');
    renderTotals();
  }
};

function clickThree() {
  if (totalClicks < maxClicks - 1) {
    totalClicks += 1;
    imgUsed.amtClicks += 1;
    console.log('Clicks: ' + imgProduced.amtClicks);
    console.log('Used: ' + imgUsed.amtUsed);
    producedImage();
  } else if (totalClicks == maxClicks - 1) {
    totalClicks += 1;
    picOne.removeEventListener('click', clickOne);
    picTwo.removeEventListener('click', clickTwo);
    picThree.removeEventListener('click', clickThree);
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

picOne.addEventListener('click', clickOne);
picTwo.addEventListener('click', clickTwo);
picThree.addEventListener('click', clickThree);

// // function chooseProduct () {
// var product;
// for (var i = 0; i <3, i ++) {
//   do product = random();
// } while (imgUsed){
//
// }
// }
