class SunnyPainter {
  // inputProperties returns a list of CSS properties that this paint function gets access to
  static get inputProperties() { return ['--ranking','list-style-image']; }

 
  paint(ctx, geom, properties) {
    // Paint worklet uses CSS Typed OM to model the input values.
    // As of now, they are mostly wrappers around strings,
    // but will be augmented to hold more accessible data over time.
    const ranking = parseInt(properties.get('--ranking').toString());
    const spacing = 20;
//debugger;

    const size = 20;
    let image = properties.get('list-style-image');
    let color;
      for(let x = 0; x < ranking; x++) {
          if(ranking <= 3){color='green'}
          else if(ranking > 3 & ranking <= 6){color='orange'}
          else{color='red'}
       
        let ratio = ranking / 100;

        ctx.drawImage(image, 0, 0, 120, 100 )

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.rect(x*(size + spacing), 1*(size + spacing), size, size);
        ctx.fill();
      }
    
  }
}

registerPaint('sunnytech', SunnyPainter);