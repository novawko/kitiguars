/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.registry,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

  // Create the image gallery
  if (charadex.tools.checkArray(listData.profileArray[0].imagegallery)) {
    let gallery = await charadex.initialize.page(
      listData.profileArray[0].imagegallery,
      charadex.page.registry.relatedData['image gallery']
    );
  }

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].registrylog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].registrylog,
            charadex.page.registry.relatedData['registry log']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
