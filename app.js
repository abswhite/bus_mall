'use strict';

//Global var
var imgUsed = [];
var picOne = document.getElementById('pic-one');
var picTwo = document.getElementById('pic-two');
var picThree = document.getElementById('pic-three');

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

//Random-generated
var random = function() {
  var result = imgUsed[Math.round(Math.random() * (imgUsed.length - 1))];
  return result;
};
console.log(random());
