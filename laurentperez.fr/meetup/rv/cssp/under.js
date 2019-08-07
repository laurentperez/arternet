class UnderlinePainter {

  paint(ctx, geom, properties) {
    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      const numUnderlines = 3
      const spread = 20
      ctx.lineWidth = 3
      for (let i = 0; i < numUnderlines; i++) {
        let rnd = getRandom(0, spread);
        if(rnd % 2 === 0 ? ctx.strokeStyle = 'red' : ctx.strokeStyle = 'blue')
        ctx.beginPath()
        ctx.moveTo(0, getRandom(0, spread) + geom.height/1.4)
        ctx.lineTo(geom.width, getRandom(0, spread) + geom.height/1.4)
        ctx.stroke()
        console.log(geom.width, rnd)
      }
  }
}

registerPaint('underline', UnderlinePainter);