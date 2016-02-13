Meteor.publish(null, function () {
  return [
    Benevoles.find()
  ];
});
Meteor.publish("Benevoles", function () {
  return Benevoles.find();
});

Meteor.publish(null, function () {
  return [
    Profils.find()
  ];
});
Meteor.publish("Profils", function () {
  return Profils.find();
});

Meteor.publish(null, function () {
  return [
    BenevolesProfils.find()
  ];
});
Meteor.publish("BenevolesProfils", function () {
  return BenevolesProfils.find();
});

Meteor.publish(null, function () {
  return [
    Sites.find()
  ];
});
Meteor.publish("Sites", function () {
  return Sites.find();

});
Meteor.publish(null, function () {
  return [
    Ouvertures.find()
  ];
});
Meteor.publish("Ouvertures", function () {
  return Ouvertures.find();
});

Meteor.publish(null, function () {
  return [
    OuverturesSites.find()
  ];
});
Meteor.publish("OuverturesSites", function () {
  return OuverturesSites.find();
});

Meteor.publish(null, function () {
  return [
    OuverturesSitesProfils.find()
  ];
});
Meteor.publish("OuverturesSitesProfils", function () {
  return OuverturesSitesProfils.find();
});

Meteor.publish(null, function () {
  return [
    Affectations.find()
  ];
});
Meteor.publish("Affectations", function () {
  return Affectations.find();
});

Meteor.publish(null, function () {
  return [
    Affectations_bts.find()
  ];
});
Meteor.publish("Affectations_bts", function () {
  return Affectations_bts.find();
});

Meteor.publish(null, function () {
  return [
    Souhaits.find()
  ];
});
Meteor.publish("Souhaits", function () {
  return Souhaits.find();
});

Meteor.publish(null, function () {
  return [
    BenevolesProfils_b.find()
  ];
});
Meteor.publish("BenevolesProfils_b", function () {
  return BenevolesProfils_b.find();
});

Meteor.publish(null, function () {
  return [
    OuverturesSitesProfils_o.find()
  ];
});
Meteor.publish("OuverturesSitesProfils_o", function () {
  return OuverturesSitesProfils_o.find();
});

Meteor.publish(null, function () {
  return [
    BenevolesOuverturesSites_b.find()
  ];
});
Meteor.publish("BenevolesOuverturesSites_b", function () {
  return BenevolesOuverturesSites_b.find();
});

Meteor.publish(null, function () {
  return [
    OuverturesSitesBenevoles_o.find()
  ];
});
Meteor.publish("OuverturesSitesBenevoles_o", function () {
  return OuverturesSitesBenevoles_o.find();
});

Meteor.publish(null, function () {
  return [
    SitesOuvertures.find()
  ];
});
Meteor.publish("SitesOuvertures", function () {
  return SitesOuvertures.find();
});

Meteor.publish(null, function () {
  return [
    counters.find()
  ];
});
Meteor.publish("counters", function () {
  return counters.find();
});
