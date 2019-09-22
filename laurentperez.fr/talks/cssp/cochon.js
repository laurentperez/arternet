registerPaint('cochon', class {
    static get inputProperties() {
        return ['--background-pigs','list-style-image'];
    }
    paint(ctx, geom, properties) {
        eval(properties.get('--background-pigs').toString())(ctx, geom, properties);
    }
  })