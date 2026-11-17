/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Kitiguars",
  url: "https://kitiguars.com/",
  description: `An open feral species with forbidden traits created by Novawko from 2025. Do you like dragons and cats? Then, come visit us!`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1yLn0oOGvPCHTb_CQYw2Odd5fqTucl7t2hRhvs-I8ycI",

  pages: {
    registry:      "registry",
    registryLog:   "registry log",
    faq:           "faq",
  },

  options: {

    designTypes: ['All', 'Founder Design', 'Guest Design', 'MYO Design', 'Custom Design', 'Bred Design', 'Redesign'],
    statuses: ['All', 'Resell', 'Trade', 'Gift', 'Voided', 'For Sale', 'Purchased', 'Raffle', 'Offer', 'Free', 'Not For Trade'],
    
  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* FAQ
/* --------------------------------------------------------------- */
charadex.page.faq = {

  sheetPage: charadex.sheet.pages.faq,
  sitePage: 'faq',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}



/* Registry
/* --------------------------------------------------------------- */
charadex.page.registry = {

  sheetPage: charadex.sheet.pages.registry,
  sitePage: 'registry',
  dexSelector: 'charadex',
  profileProperty: 'design',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
      'Status': charadex.sheet.options.statuses,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Design', 'Owner', 'Designer', 'Artist']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.registryLog]: {

      sheetPage: charadex.sheet.pages.registryLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    }

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  designs: {
    ... charadex.page.registry,
    dexSelector: 'design',
    amount: 4,
  }

};


export { charadex };
