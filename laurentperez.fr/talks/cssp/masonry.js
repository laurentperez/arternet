registerLayout('coincoin', class {
  async intrinsicSizes() {}
  async layout(children, edges, constraints, styleMap) {
    const childFragments = await Promise.all(children.map((child) => child.layoutNextFragment({})));
    console.log(constraints); /* mon cadre parent */
    console.log(edges); /* mon cadre parent */
    for (let i = 0; i < children.length; i++) {
      console.log(childFragments[i]);
      /* les 2 1ers en bas à gauche et en haut à droite */
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
