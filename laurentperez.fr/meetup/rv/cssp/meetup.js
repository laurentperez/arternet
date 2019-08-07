class MeetupPainter {

  // on récupère les properties
  static get inputProperties() { return ['--ranking','list-style-image']; }

  // la peinture
  paint(ctx, geom, properties) {
    const ranking = properties.get('--ranking');
    const image = properties.get('list-style-image');
    const spacing = 10;
    let size = 20;
    
    let color = 'red';
    if(ranking <= 3){color='green'}
    else if(ranking > 3 & ranking <= 6){color='orange'}

      for(let x = 0; x < ranking; x++) {
        let ratio = ranking / 10;
        let sc = 1 + ratio;
        ctx.drawImage(image, 0, 100, 120, 100 );
        ctx.fillStyle = color;
        // size = color === 'red' ? size * sc  : size;
        ctx.beginPath();
        ctx.rect(x*(size + spacing), 1*(size + spacing), size, size);
        ctx.fill();
        console.log('drawn ' + x*(size + spacing), 1*(size + spacing), size, size);

      }
    
  }
}

registerPaint('meetup', MeetupPainter);