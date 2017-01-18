'use strict';

//Global var
var imgUsed = [];

//Object for product in Bus Mall
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.text = this.amtClicks + ' votes for ' + this.name;
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
var random = function() {
  return Math.round(Math.random() * (imgUsed.length - 1));
};

var producedImage = function() {
  var picOne = document.getElementById('picOne');
  var picTwo = document.getElementById('picTwo');
  var picThree = document.getElementById('picThree');

  //text.content --> img?

  one = random();
  picOne.src = imgUsed[one].path;
  imgUsed[one].amtUsed ++;

//no duplicates for three images shown
  two = random();
  picTwo.src = imgUsed[two].path;
  imgUsed[one].amtUsed ++;
  while (one === two) {
    two = random();
  };

  //no duplicates for theee images shown
  three = random();
  picThree.src = imgUsed[three].path;
  imgUsed[three].amtUsed ++;
  while (one === two || three === two || one === three) {
    three = random();
  };
};

producedImage();

//declare global variables to keep track of selections
var selectOne = 0;
var selectTwo = 0;
var selectThree = 0;

var totalClicks = 0;

//product images/ functionality on html
var picOne = document.getElementById('picOne');
var picTwo = document.getElementById('picTwo');
var picThree = document.getElementById('picThree');

function clickOne() {
  selectOne += 1;
  imgUsed[one].amtClicks += 1;
  totalClicks += 1;
  producedImage();
}

function clickTwo() {
  selectTwo += 1;
  imgUsed[two].amtClicks += 1;
  totalClicks += 1;
  producedImage();
}

function clickThree() {
  selectThree += 1;
  imgUsed[three].amtClicks += 1;
  totalClicks += 1;
  producedImage();
}

picOne.addEventListener('click', clickOne);
picTwo.addEventListener('click', clickTwo);
picThree.addEventListener('click', clickThree);
