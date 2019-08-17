
class MeetupPainter {

  // on récupère les properties dont on a besoin
  static get inputProperties() { 
    return ['--ranking','list-style-image','--sky','--rotate']; 
  }

  // la peinture sur un canvas
  // c'est le JS qui porte la logique de peinture
  // la CSS elle ne gère que le style
  paint(ctx, geom, properties) {
    const ranking = properties.get('--ranking');
    const rot = properties.get('--rotate');
    const sky = properties.get('--sky'); 
    const image = properties.get('list-style-image');
    const spacing = 40;
    const size = 30;

    let color = 'green';
    if(ranking <= 3){color='red'} // c'est déjà un number, pas de cast
    else if(ranking > 3 & ranking <= 5){color='orange'}

    //ctx.save();

    let rotation_degs = rot
    console.log('deg:' + rotation_degs)
    let rotation_rads = this.degs_to_rads(rotation_degs)
    let angle_sine = Math.sin(rotation_rads)
    let angle_cosine = Math.cos(rotation_rads)

    for(let x = 0.5; x < ranking; x++) {
      ctx.globalAlpha = 1/ranking;
      ctx.drawImage(image, 0, 100, 120, 100 );
      ctx.setTransform(angle_cosine, angle_sine, -angle_sine, angle_cosine, 10, 10);

      //ctx.restore();
      debugger;
      this.drawStar(ctx,color,x*(size-10 + spacing),1*(size-10 + spacing),5,30,15);
      //console.log('drawn:' + x*(size + spacing), 1*(size + spacing), size, size);
      console.log("geom:" + geom.width + "x" + geom.height);
      console.log("type de sky:" + sky);
    }
    
  }

   degs_to_rads (degs) { return degs / (180/Math.PI); }
   rads_to_degs (rads) { return rads * (180/Math.PI); }
//| scaleX, skewX,  posX |
//| skewY,  scaleY, posY |
//| 0,      0,      1    |


  drawStar(ctx,color,cx,cy,spikes,outerRadius,innerRadius) {
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(let i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      ctx.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      ctx.lineTo(x,y)
      rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=1;
    ctx.strokeStyle='black';
    ctx.stroke();
    ctx.fillStyle='' + color;
    ctx.fill();
  }
}

registerPaint('meetup', MeetupPainter);