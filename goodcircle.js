class GoodCircle{
    constructor(x,y,r,color,tn,scalar=3)
    {
        this.x = x;
        this.y =y;
        this.myColor = color;
        this.r = r;
        this.tn=tn;
        this.counter = 0;
        this.scalar = scalar;


    }
    show(){
        fill(this.myColor);
        noStroke();
        if (this.tn==3){
            stroke(0);
        }
        circle(this.x,this.y,this.r)
        this.counter++;
    }

    move(){
        if (this.tn == 0)
        {
            if (this.counter>200 && this.counter<300)
            {

                this.x = this.x + map(noise(.01*this.counter+this.y*1000),0,1,-this.scalar,this.scalar);
                this.y = this.y + map(noise(.01*this.counter+this.x*1000),0,1,0,this.scalar);
            }
            else if (this.counter>350){
                this.y= this.y + 3* (this.counter-350);
                this.r = this.r*.98;

            }
            
            
        }
        else if (this.tn == 1){
            if (this.counter>100)
            {
                this.y= this.y + 2* (this.counter-200);
            }
        }
        else if( this.tn==2){
            if (this.counter>150)
            {
                this.y= this.y + 2* (this.counter-200);
            }
        }
        else if (this.tn == 3)
        {
            // this.r = this.r*.99;
            // if (this.r < 15){
                this.r=0;
            // } 


            
        }
        else if(this.tn==4){
            if (this.counter>50)
            {
                this.y= this.y + 2* (this.counter-200);
            }
        }


        if(this.x < 0){
            this.scalar=0;
        }
        if(this.y < 0){
            this.scalar=0;
        }
        if (this.y>height){
            this.y = this.y-height;
            this.scalar = this.scalar/2;
        }
    }
    

}