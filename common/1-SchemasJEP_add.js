Schemas.BenevolesProfils_b = new SimpleSchema({
  IdBenevoleProfil: {
    type : Number,
    optional : true
  },
  IdBenevole: {
    type : Number,
    optional : true
  },
  IdProfil: {
    type : Number,
    optional : true
  },
  Nom: {
    type : String,
    label: "Nom",
    optional : true
  },
  Prenom: {
    type : String,
    label: "Prénom",
    optional : true
  },
  Profil: {
    type : String,
    label: "Profil",
    optional : true
  },
  Telephone: {
    type : String,
    label: "Téléphone",
    optional : true
  },
  Etudiant: {
    type : Boolean,
    label: "Etudiant",
//    autoform: {render: function (val) {return val?"☑":"☐";}},
    optional : true
  },
  BTS: {
    type : Boolean,
    label: "BTS",
    optional : true
  }
});
Schemas.OuverturesSitesProfils_o = new SimpleSchema({
  IdOuvertureSiteProfil: {
    type : Number,
    optional : true
  },
  IdOuvertureSite: {
    type : Number,
    optional : true
  },
  IdSite: {
    type : Number,
    optional : true
  },
  IdOuverture: {
    type : Number,
    optional : true
  },
  IdProfil: {
    type : Number,
    optional : true
  },
  Site: {
    type : String,
    label: "Site",
    optional : true
  },
  Ouverture: {
    type : String,
    label: "Ouverture",
    optional : true
  },
  Ordre: {
    type : String,
    label: "Ordre",
    optional : true
  },
  Profil: {
    type : String,
    label: "Profil",
    optional : true
  },
  NbPostes: {
    type : Number,
    label: "Nb postes",
    optional : true
  },
  NbAffectes: {
    type : String,
    label: "Nb affectés",
    optional : true
  },
  NbBTS: {
    type : String,
    label: "Nb BTS",
    optional : true
  }
});

Schemas.BenevolesOuverturesSites_b = new SimpleSchema({
  IdBenevoleProfil: {
    type : Number,
    optional : true
  },
  IdBenevole: {
    type : Number,
    optional : true
  },
  IdProfil: {
    type : Number,
    optional : true
  },
  IdOuvertureSite: {
    type : Number,
    optional : true
  },
  IdOuvertureSiteProfil: {
    type : Number,
    optional : true
  },
  IdSite: {
    type : Number,
    optional : true
  },
  IdOuverture: {
    type : Number,
    optional : true
  },
  Site: {
    type : String,
    label: "Site",
    optional : true
  },
  Ouverture: {
    type : String,
    label: "Ouverture",
    optional : true
  },
  SiteNp: {
    type : Boolean,
    label: "Site Np",
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox"
      }
    },
    optional : true
  },
  OuvNp: {
    type : Boolean,
    label: "Ouv. Np",
    optional : true
  },
  NonSat: {
    type : Boolean,
    label: "Non sat.",
    optional : true
  },
  DateSouhait: {
    type : Date,
    label: "Dt souhait",
    optional : true
  },
  DateAffectation: {
    type : Date,
    label: "Dt affect.",
    optional : true
  }
});
Schemas.OuverturesSitesBenevoles_o = new SimpleSchema({
  IdOuvertureSiteProfil: {
    type : Number,
    optional : true
  },
  IdOuvertureSite: {
    type : Number,
    optional : true
  },
  IdSite: {
    type : Number,
    optional : true
  },
  IdOuverture: {
    type : Number
  },
  IdBenevole: {
    type : Number,
    optional : true
  },
  IdProfil: {
    type : Number,
    optional : true
  },
  IdBenevoleProfil: {
    type : Number,
    optional : true
  },
  Nom: {
    type : String,
    label: "Nom",
    optional : true
  },
  Prenom: {
    type : String,
    label: "Prénom",
    optional : true
  },
  SiteNp: {
    type : Boolean,
    label: "Site Np",
    optional : true
  },
  OuvNp: {
    type : Boolean,
    label: "Ouv. Np",
    optional : true
  },
  NonSat: {
    type : Boolean,
    label: "Non sat.",
    optional : true
  },
  DateSouhait: {
    type : Date,
    label: "Dt souhait",
    optional : true
  },
  DateAffectation: {
    type : Date,
    label: "Dt affect.",
    optional : true
  },
  BTS: {
    type : Boolean,
    label: "BTS",
    optional : true
  }
});
Schemas.SitesOuvertures = new SimpleSchema({
  IdOuvertureSite: {
    type : Number,
    optional : true
  },
  IdSite: {
    type : Number,
    optional : true
  },
  IdOuverture: {
    type : Number,
    optional : true
  },
  Site: {
    type : String,
    label: "Site",
    optional : true
  },
  Ordre: {
    type : Number,
    label: "Ordre",
    optional : true
  },
  Ouverture: {
    type : String,
    label: "Ouverture",
    optional : true
  },
  DateOuverture: {
    type : Date,
    label: "DateOuverture",
    optional : true
  },
  HeureDebut: {
    type : String,
    label: "HeureDebut",
    optional : true
  },
  HeureFin: {
    type : String,
    label: "HeureFin",
    optional : true
  },
  NbPostes_a: {
    type : Number,
    label: "Nb postes accueil",
    optional : true
  },
  NbPostes_c: {
    type : Number,
    label: "Nb postes conf.",
    optional : true
  },
  Ferme: {
    type : Boolean,
    label: "Ferme",
    optional : true
  },
});

Schemas.counters = new SimpleSchema({
  key: {
    type : String,
    optional : true
  },
  seq: {
    type : Number,
    optional : true
  }
});
