registerLayout('coincoin', class {

  async intrinsicSizes() { /* pas besoin ici pour demo */}
  
  /* la mise en page perso */
  async layout(children, edges, constraints, styleMap) {
    const childFragments = await Promise.all(
      /* spec : the engine may run the algorithm asynchronously with other work
      and/or on a different thread of execution */
      children.map((child) => child.layoutNextFragment({}))
    );
    console.log(constraints); /* mon cadre parent */
    console.log(edges); /* mes edges */
    for (let i = 0; i < children.length; i++) {
      console.log(childFragments[i]); /* mon fragment */
      /* les 2 1ers en bas à gauche et en haut à droite */
      /* la clef : l'offset inline (axe X) et block (axe Y) */
      if(i%2==0) {
        childFragments[i].inlineOffset = 0 + edges.inlineStart; /*ltr*/
        childFragments[i].blockOffset = constraints.fixedBlockSize 
                        - childFragments[i].blockSize /*updown*/
                        - edges.blockStart; 
      } else {
        childFragments[i].inlineOffset = constraints.fixedInlineSize
                        - childFragments[i].inlineSize /*ltr*/
                        - edges.inlineStart;
        childFragments[i].blockOffset = 0 + edges.blockStart; /*updown*/
      }
      /* le reste au milieu */
      if (i>=2) {
        childFragments[i].inlineOffset = constraints.fixedInlineSize / 2;
        childFragments[i].blockOffset = constraints.fixedBlockSize / 2;
      }
     
    }
    return {autoBlockSize: 0, childFragments};
  }
});
