
class EtoilesPainter {

  // on récupère les properties dont on a besoin
  // elles sont readonly à l'intérieur de ce Painter
  static get inputProperties() { 
    return ['--ranking','--sky','--rotate']; 
  }

  // la peinture sur un canvas
  // c'est le JS qui porte la logique de peinture
  // la CSS elle ne gère que le style
  paint(ctx, geom, properties) {
    // rien à caster : elles sont déjà typées
    const ranking = properties.get('--ranking');
    const rot = properties.get('--rotate');
    const sky = properties.get('--sky'); 
    const spacing = 40;
    const size = 30;

    // --rotate en type <angle> de degres vers radians
    const rotation_rads = this.degs_to_rads(rot.value)
    let angle_sine = Math.sin(rotation_rads)
    let angle_cosine = Math.cos(rotation_rads)

    // gradient sur axe X de rouge à vert
    var gradient=ctx.createLinearGradient(0,0,geom.width,0);
    gradient.addColorStop(0,"red");
    gradient.addColorStop(0.5,"orange");
    gradient.addColorStop(1.0,"green");

    for(let x = 0.5; x < ranking; x++) {
      // rotation
      ctx.setTransform(angle_cosine, angle_sine, -angle_sine, angle_cosine, 10, 10);
      //debugger; /* pour voir les threads */
      // dessin !
      this.drawStar(ctx,gradient,x*(size-10 + spacing),1*(size-10 + spacing),5,30,15);
      //console.log('drawn:' + x*(size + spacing), 1*(size + spacing), size, size);
      console.log("geom du canvas:" + geom.width + "x" + geom.height + ", ratio:" + (geom.width/geom.height));
    }
    console.log("type de sky, une vraie Color:" + sky);

    
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
    ctx.fillStyle=color;
    ctx.fill();
  }
}

registerPaint('etoiles', EtoilesPainter);