var rcolors =["#17c3b2","#ffcb77","#fef9ef","#fe6d73","#3f7cac"];
var inc = 30;
var circleList = [];

function setup() {
  createCanvas(1000,500);
  for (let x=0;x<width;x+=inc)
  {
    for (let y=0;y<height;y+=inc){
      var cType = random([0,1,2,3,4]);
      circleList.push(new GoodCircle(x,y,45,rcolors[cType],cType,10));
    }
  }

}

function draw() {
  // background(0,5);

  for (let i=0;i<circleList.length;i++){
    circleList[i].show();
    circleList[i].move();
  }


}
