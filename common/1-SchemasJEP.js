Schemas = {};
Meteor.isClient && Template.registerHelper("Schemas", Schemas);
Schemas.Benevoles = new SimpleSchema({
ID: {
type : Number,
label: "ID",
optional : true
},
nom: {
type : String,
label: "Nom",
optional : true
},
Prenom: {
type : String,
label: "Prénom",
optional : true
},
civilite: {
type : String,
label: "Civilité",
optional : true
},
adresse1: {
type : String,
label: "Adresse",
optional : true
},
adresse2: {
type : String,
label: "adresse2",
optional : true
},
CodePostal: {
type : String,
label: "CodePostal",
optional : true
},
ville: {
type : String,
label: "Ville",
optional : true
},
TelPortable: {
type : String,
label: "Tél. portable",
optional : true
},
TelBureau: {
type : String,
label: "Tél. autre",
optional : true
},
TelPersonnel: {
type : String,
label: "Tél. fixe",
optional : true
},
mail: {
type : String,
label: "Mail",
optional : true
},
motdepasse: {
  type : String,
  label: "Mot de passe",
  optional : true
},
adherent: {
type : Boolean,
label: "Adherent",
optional : true
},
Conferencier: {
type : Boolean,
label: "Conferencier",
optional : true
},
Administrateur: {
type : Boolean,
label: "Accueil",
optional : true
},
Commentaires: {
type : String,
label: "Commentaires",
optional : true
},
etudiant: {
type : Boolean,
label: "Etudiant",
optional : true
},
PasActifRepondu: {
type : Boolean,
label: "PasActifRepondu",
optional : true
},
IdAnnee: {
type : Number,
label: "IdAnnee",
optional : true
},
Inactif: {
type : Boolean,
label: "Inactif",
optional : true
},
BTS: {
type : Boolean,
label: "BTS",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
IdAbsolu: {
type : Number,
label: "IdAbsolu",
optional : true
},
MailingInscriptionEnvoye: {
type : Boolean,
label: "MailingInscriptionEnvoye",
optional : true
},
ReponseMailingInscription: {
type : Boolean,
label: "ReponseMailingInscription",
optional : true
},
RelanceEnvoyee: {
type : Boolean,
label: "RelanceEnvoyee",
optional : true
},
Supprime: {
type : Boolean,
label: "Supprime",
optional : true
},
DateDerniereRelance: {
type : Date,
label: "DateDerniereRelance",
optional : true
},
AffectationsDefinitivesAEnvoyerParMail: {
type : Boolean,
label: "AffectationsDefinitivesAEnvoyerParMail",
optional : true
},
AffectationsDefinitivesEnvoyerMailRectificatif: {
type : Boolean,
label: "AffectationsDefinitivesEnvoyerMailRectificatif",
optional : true
},
Diner: {
type : Boolean,
label: "Diner",
optional : true
},
AffectationsSupprimees: {
type : Boolean,
label: "AffectationsSupprimees",
optional : true
},
IdEtablissement: {
type : Number,
label: "IdEtablissement",
optional : true
},
NotDiner: {
type : Boolean,
label: "NotDiner",
optional : true
},
EnvoiPostal: {
type : Boolean,
label: "EnvoiPostal",
optional : true
},
MailingPremiereInformationAffectationsEnvoye: {
type : Boolean,
label: "MailingPremiereInformationAffectationsEnvoye",
optional : true
},
InformationAffectationsAEnvoyer: {
type : Boolean,
label: "InformationAffectationsAEnvoyer",
optional : true
}
});
Schemas.Profils = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
Designation: {
type : String,
label: "Designation",
optional : true
}
});
Schemas.BenevolesProfils = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
IdBenevole: {
type : Number,
label: "IdBenevole",
optional : true
},
IdProfil: {
type : Number,
label: "IdProfil",
optional : true
}
});
Schemas.Sites = new SimpleSchema({
ID: {
type : Number,
label: "ID",
optional : true
},
Designation: {
type : String,
label: "Designation",
optional : true
},
Adresse1: {
type : String,
label: "Adresse1",
optional : true
},
Adresse2: {
type : String,
label: "Adresse2",
optional : true
},
CodePostal: {
type : String,
label: "CodePostal",
optional : true
},
Ville: {
type : String,
label: "Ville",
optional : true
},
Metro: {
type : String,
label: "Metro",
optional : true
},
Ordre: {
type : Number,
label: "Ordre",
optional : true
},
Correspondant: {
type : String,
label: "Correspondant",
optional : true
},
Mail: {
type : String,
label: "Mail",
optional : true
},
Telephone: {
type : String,
label: "Telephone",
optional : true
},
IdAnnee: {
type : Number,
label: "IdAnnee",
optional : true
},
Ferme: {
type : Boolean,
label: "Ferme",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
IdFacilitateur: {
type : Number,
label: "IdFacilitateur",
optional : true
},
IdAbsolu: {
type : Number,
label: "IdAbsolu",
optional : true
},
Debriefing: {
type : String,
label: "Debriefing",
optional : true
},
PreRequis: {
type : String,
label: "PreRequis",
optional : true
},
OuvertureProvisoire: {
type : Boolean,
label: "OuvertureProvisoire",
optional : true
},
NbEntreesSorties: {
type : Number,
label: "NbEntreesSorties",
optional : true
},
MailingPremiereInformationFacilitateurEnvoye: {
type : Boolean,
label: "MailingPremiereInformationFacilitateurEnvoye",
optional : true
},
InformationFacilitateurAEnvoyer: {
type : Boolean,
label: "InformationFacilitateurAEnvoyer",
optional : true
}
});
Schemas.Ouvertures = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
Designation: {
type : String,
label: "Designation",
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
Ordre: {
type : Number,
label: "Ordre",
optional : true
},
IdAnnee: {
type : Number,
label: "IdAnnee",
optional : true
},
Ferme: {
type : Boolean,
label: "Ferme",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
IdAbsolu: {
type : Number,
label: "IdAbsolu",
optional : true
},
Designation_l: {
type : String,
label: "Designation_l",
optional : true
}
});
Schemas.OuverturesSites = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
IdSite: {
type : Number,
label: "IdSite",
optional : true
},
IdOuverture: {
type : Number,
label: "IdOuverture",
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
Ferme: {
type : Boolean,
label: "Ferme",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
AffectationsModifiees: {
type : Boolean,
label: "AffectationsModifiees",
optional : true
},
InformationResponsableCaisseEnvoye: {
type : Boolean,
label: "InformationResponsableCaisseEnvoye",
optional : true
},
InformationResponsableCaisseBTSEnvoye: {
type : Boolean,
label: "InformationResponsableCaisseBTSEnvoye",
optional : true
}
});
Schemas.OuverturesSitesProfils = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
IdOuvertureSite: {
type : Number,
label: "IdOuvertureSite",
optional : true
},
IdProfil: {
type : Number,
label: "IdProfil",
optional : true
},
NbPostes: {
type : Number,
label: "NbPostes",
optional : true
},
NbPostes_a: {
type : Number,
label: "NbPostes_a",
optional : true
},
NbPostes_r: {
type : Number,
label: "NbPostes_r",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
NbPostes_BTS: {
type : Number,
label: "NbPostes_BTS",
optional : true
}
});
Schemas.Affectations = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
IdOuvertureSiteProfil: {
type : Number,
label: "IdOuvertureSiteProfil",
optional : true
},
IdBenevoleProfil: {
type : Number,
label: "IdBenevoleProfil",
optional : true
},
Souhait: {
type : Boolean,
label: "Souhait",
optional : true
},
IdSouhait: {
type : Number,
label: "IdSouhait",
optional : true
},
Affecte: {
type : Boolean,
label: "Affecte",
optional : true
},
DateAffectation: {
type : Date,
label: "DateAffectation",
optional : true
},
Commentaires: {
type : String,
label: "Commentaires",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
NonExauce: {
type : Boolean,
label: "NonExauce",
optional : true
},
NonExauceInforme: {
type : Boolean,
label: "NonExauceInforme",
optional : true
},
Supprime: {
type : Boolean,
label: "Supprime",
optional : true
},
Caissier: {
type : Boolean,
label: "Caissier",
optional : true
}
});
Schemas.Affectations_bts = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
IdOuvertureSiteProfil: {
type : Number,
label: "IdOuvertureSiteProfil",
optional : true
},
IdBenevoleProfil: {
type : Number,
label: "IdBenevoleProfil",
optional : true
},
Souhait: {
type : Boolean,
label: "Souhait",
optional : true
},
IdSouhait: {
type : Number,
label: "IdSouhait",
optional : true
},
Affecte: {
type : Boolean,
label: "Affecte",
optional : true
},
DateAffectation: {
type : Date,
label: "DateAffectation",
optional : true
},
Commentaires: {
type : String,
label: "Commentaires",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
NonExauce: {
type : Boolean,
label: "NonExauce",
optional : true
},
NonExauceInforme: {
type : Boolean,
label: "NonExauceInforme",
optional : true
},
Supprime: {
type : Boolean,
label: "Supprime",
optional : true
},
Attestation: {
type : Boolean,
label: "Attestation",
optional : true
}
});
Schemas.Souhaits = new SimpleSchema({
Id: {
type : Number,
label: "Id",
optional : true
},
IdBenevole: {
type : Number,
label: "IdBenevole",
optional : true
},
IdSite: {
type : Number,
label: "IdSite",
optional : true
},
IdOuverture: {
type : Number,
label: "IdOuverture",
optional : true
},
IdProfil: {
type : Number,
label: "IdProfil",
optional : true
},
SiteNonPrecise: {
type : Boolean,
label: "SiteNonPrecise",
optional : true
},
OuvertureNonPrecisee: {
type : Boolean,
label: "OuvertureNonPrecisee",
optional : true
},
ProfilNonPrecise: {
type : Boolean,
label: "ProfilNonPrecise",
optional : true
},
DateReception: {
type : Date,
label: "DateReception",
optional : true
},
Supprime: {
type : Boolean,
label: "Supprime",
optional : true
},
DateCreation: {
type : Date,
label: "DateCreation",
optional : true
},
DateDerniereModification: {
type : Date,
label: "DateDerniereModification",
optional : true
},
MailingSouhaitSupprime: {
type : Boolean,
label: "MailingSouhaitSupprime",
optional : true
},
Commentaires: {
type : String,
label: "Commentaires",
optional : true
},
IdSouhaitGenerique: {
type : Number,
label: "IdSouhaitGenerique",
optional : true
},
OrigineSuppression: {
type : String,
label: "OrigineSuppression",
optional : true
}
});
