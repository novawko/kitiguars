/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {


/* Designs
  ===================================================================== */
let designs = await charadex.initialize.page(null, charadex.page.index.designs, (arr) => {
  // Force sliceAmount to 4
  let sliceAmount = 4;

  // Get the last 4 (or fewer if less than 4 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);
});


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});
