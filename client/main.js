// Customize the spinner shown during page loads
Meteor.Spinner.options = {
  lines: 16, // The number of lines to draw
  length: 20, // The length of each line
  width: 2, // The line thickness
  corners: 0.9, // Corner roundness (0..1)
  color: '#000000', // #rgb or #rrggbb
  speed: 2.5, // Rounds per second
  trail: 10 // Afterglow percentage
};

/* Put client javascript here */

Session.setDefault("isFiltreNom_1", false);
Session.setDefault("FiltreNom_1", "");

Session.setDefault("isFiltrePrenom_1", false);
Session.setDefault("FiltrePrenom_1", "");

Session.setDefault("isFiltreProfilBenevole", false);
Session.setDefault("FiltreProfilBenevole", "");

Session.setDefault("isFiltreSite", false);
Session.setDefault("FiltreSite", "");

Session.setDefault("isFiltreOuverture", false);
Session.setDefault("FiltreOuverture", "");

Session.setDefault("isFiltreProfilSite", false);
Session.setDefault("FiltreProfilSite", "");

Session.setDefault("selectedBenevoleProfilId", "");
Session.setDefault("selectedOuvertureSiteProfilId", "");

Session.setDefault("selectedBenevoleOuvertureSiteId", "");
Session.setDefault("selectedOuvertureSiteBenevoleId", "");

Session.setDefault("benevoleId", "");
Session.setDefault("siteId", "");
Session.setDefault("ouvertureId", "");
Session.set("BenevoleCourant", "");

Session.set("userCourant", "");
i18n.setLanguage('fr'); // pour package Autoform-modals

accountsUIBootstrap3.setLanguage('fr'); // pour package ian:Accounts-ui-bootstrap-3
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});
/*
Accounts.config({
  forbidClientAccountCreation: false
});
*/
