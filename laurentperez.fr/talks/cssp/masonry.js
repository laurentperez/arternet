registerLayout('parent', class {
  async intrinsicSizes() {}
  async layout(children, edges, constraints, styleMap) {
    const childFragments = await Promise.all(children.map((child) => child.layoutNextFragment({})));
    console.log(constraints); /* mon cadre parent */
    for (let i = 0; i < children.length; i++) {
      console.log(childFragments[i]);
      /* les pairs en bas à gauche, impairs en haut à droite */
      if(i%2==0) {
        childFragments[i].inlineOffset = 0; /*ltr*/
        childFragments[i].blockOffset = constraints.fixedBlockSize - childFragments[i].blockSize; /*updown*/
      } else {
        childFragments[i].inlineOffset = constraints.fixedInlineSize - childFragments[i].inlineSize; /*ltr*/
        childFragments[i].blockOffset = 0; /*updown*/
      }
     
    }
    return {autoBlockSize: 0, childFragments};
  }
});
