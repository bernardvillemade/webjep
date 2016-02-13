Template.importJEP.helpers({
tables: function() {
  return ([
    {name: 'Counters',nb: Session.get("nCounters")},
    {name: 'Benevoles',nb: Session.get("nBenevoles")},
    {name: 'Profils',nb: Session.get("nProfils")},
    {name: 'BenevolesProfils',nb: Session.get("nBenevolesProfils")},
    {name: 'Sites',nb: Session.get("nSites")},
    {name: 'Ouvertures',nb: Session.get("nOuvertures")},
    {name: 'OuverturesSites',nb: Session.get("nOuverturesSites")},
    {name: 'OuverturesSitesProfils',nb: Session.get("nOuverturesSitesProfils")},
    {name: 'Souhaits',nb: Session.get("nSouhaits")},
    {name: 'Affectations',nb: Session.get("nAffectations")},
    {name: 'Affectations_bts',nb: Session.get("nAffectations_bts")},
    {name: 'BenevolesProfils_b',nb: Session.get("nBenevolesProfils_b")},
    {name: 'OuverturesSitesProfils_o',nb: Session.get("nOuverturesSitesProfils_o")},
    {name: 'BenevolesOuverturesSites_b',nb: Session.get("nBenevolesOuverturesSites_b")},
    {name: 'OuverturesSitesBenevoles_o',nb: Session.get("nOuverturesSitesBenevoles_o")},
    {name: 'SitesOuvertures',nb: Session.get("nSitesOuvertures")}
  ])
}

});
Template.import.helpers({
  isadmin : function(){
    var user = Meteor.user();
    if (user.username === 'admin') {
      return true;
    }else{
      return false
    }
  }
});
Template.importJEP.onCreated(function () {
  Session.set("nCounters", 0);
  Session.set("nBenevoles", 0);
  Session.set("nProfils", 0);
  Session.set("nBenevolesProfils", 0);
  Session.set("nSites", 0);
  Session.set("nOuvertures", 0);
  Session.set("nOuverturesSites", 0);
  Session.set("nOuverturesSitesProfils", 0);
  Session.set("nAffectations", 0);
  Session.set("nAffectations_bts", 0);
  Session.set("nSouhaits", 0);

  Session.set("nBenevolesProfils_b", 0);
  Session.set("nOuverturesSitesProfils_o", 0);
  Session.set("nBenevolesOuverturesSites_b", 0);
  Session.set("nOuverturesSitesBenevoles_o", 0);
  Session.set("nSitesOuvertures", 0);
});
Template.importJEP.events({
  'click .importer': function(){
    if (counters.find().count() === 0) {
      Meteor.call('creerCounters');
      Session.set("nCounters", counters.find().count());
    }
    if (Benevoles.find().count() === 0) {
      Meteor.call('creerBenevoles');
      Session.set("nBenevoles", Benevoles.find().count());
    }
    if (Profils.find().count() === 0) {
      Meteor.call('creerProfils');
      Session.set("nProfils", Profils.find().count());
    }
    if (BenevolesProfils.find().count() === 0) {
      Meteor.call('creerBenevolesProfils');
      Session.set("nBenevolesProfils", BenevolesProfils.find().count());
    }
    if (Sites.find().count() === 0) {
      Meteor.call('creerSites');
      Session.set("nSites", Sites.find().count());
    }
    if (Ouvertures.find().count() === 0) {
      Meteor.call('creerOuvertures');
      Session.set("nOuvertures", Ouvertures.find().count());
    }
    if (OuverturesSites.find().count() === 0) {
      Meteor.call('creerOuverturesSites');
      Session.set("nOuverturesSites", OuverturesSites.find().count());
    }
    if (OuverturesSitesProfils.find().count() === 0) {
      Meteor.call('creerOuverturesSitesProfils');
      Session.set("nOuverturesSitesProfils", OuverturesSitesProfils.find().count());
    }
    if (Affectations.find().count() === 0) {
      Meteor.call('creerAffectations');
      Session.set("nAffectations", Affectations.find().count());
    }
    if (Affectations_bts.find().count() === 0) {
      Meteor.call('creerAffectations_bts');
      Session.set("nAffectations_bts", Affectations_bts.find().count());
    }
    if (Souhaits.find().count() === 0) {
      Meteor.call('creerSouhaits');
      Session.set("nSouhaits", Souhaits.find().count());
    }
    Meteor.call('creerBenevolesProfils_b');
    Session.set("nBenevolesProfils_b", BenevolesProfils_b.find().count());

    Meteor.call('creerOuverturesSitesProfils_o');
    Session.set("nOuverturesSitesProfils_o", OuverturesSitesProfils_o.find().count());

    Meteor.call('creerBenevolesOuverturesSites_b');
    Session.set("nBenevolesOuverturesSites_b", BenevolesOuverturesSites_b.find().count());

    Meteor.call('creerOuverturesSitesBenevoles_o');
    Session.set("nOuverturesSitesBenevoles_o", OuverturesSitesBenevoles_o.find().count());

    Meteor.call("creerSitesOuvertures");
    Session.set("nSitesOuvertures", SitesOuvertures.find().count());
  }
});
