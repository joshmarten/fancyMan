function setup() {
  createCanvas(640, 480);
  background(243,248,254)
}

function draw() {
	//body
	fill(55);
  rect(280,150,80,150,0,0,40,40);
  
  //legs
  fill(255,201,0);
  rect(280,305,30,140,0,15,5,5);
  rect(330,305,30,140,15,0,5,5);
  
  //arms
  fill(253,216,194);
  rect(245,150,25,130,25,0,0,0);
  rect(370,150,25,130,0,25,0,0);
  
  //sleeves
  fill(55);
  rect(245,150,25,50,25,0,0,0);
  rect(370,150,25,50,0,25,0,0);
  
  //head
  fill(253,216,194);
  ellipse(320,105,65,70);
  
  //hat
  line(270,90,370,90);
  fill('black');
  rect(290,50,60,40);
  
  //glasses
  fill('black');
  rect(310,97,20,3);
  
  fill(250,70,190);
  ellipse(305,100,27,27);
  ellipse(335,100,27,27);
  
  fill(125,40,200);
  ellipse(305,100,22,22);
  ellipse(335,100,22,22);
  
  
}