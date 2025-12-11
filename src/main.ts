import p5 from 'p5';

const sketch = (p:p5) =>{
  p.setup = () => {
    p.createCanvas(800,800);
  }

  p.draw = () => {
    const t = p.millis();
    //console.log(t);
    const a = 100*Math.cos(0.001*t);
    const b = 100*Math.sin(0.001*t);
    p.background("black");
    p.stroke("red");
    for (let j=-3; j<3; j++){
      for (let i=-3; i<3; i++){
        p.fill("white");
        p.rect(j*(-b)+i*a+0+400,j*a+i*b+0+400,a,a);
        p.fill("gray");
        p.rect(j*(-b)+i*a+a+400,j*a+i*b+0+400,b,b);
      }
    }

  }
}

new p5(sketch)