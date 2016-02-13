BenevolesProfils_b = Collections.BenevolesProfils_b = new Mongo.Collection("BenevolesProfils_b");
BenevolesProfils_b.attachSchema(Schemas.BenevolesProfils_b);

BenevolesOuverturesSites_b = Collections.BenevolesOuverturesSites_b = new Mongo.Collection("BenevolesOuverturesSites_b");
BenevolesOuverturesSites_b.attachSchema(Schemas.BenevolesOuverturesSites_b);

OuverturesSitesProfils_o = Collections.OuverturesSitesProfils_o = new Mongo.Collection("OuverturesSitesProfils_o");
OuverturesSitesProfils_o.attachSchema(Schemas.OuverturesSitesProfils_o);

OuverturesSitesBenevoles_o = Collections.OuverturesSitesBenevoles_o = new Mongo.Collection("OuverturesSitesBenevoles_o");
OuverturesSitesBenevoles_o.attachSchema(Schemas.OuverturesSitesBenevoles_o);

SitesOuvertures = Collections.SitesOuvertures = new Mongo.Collection("SitesOuvertures");
SitesOuvertures.attachSchema(Schemas.SitesOuvertures);

counters = Collections.counters = new Mongo.Collection("counters");
counters.attachSchema(Schemas.counters);
/*
if (counters.find({_id:"chronoBenevoles"}).count() === 0) {
  counters.insert(
    {
      _id: "chronoBenevoles",
      seq: 5000
    }
  )
}
if (counters.find({_id:"chronoBenevolesProfils"}).count() === 0) {
  counters.insert(
    {
      _id: "chronoBenevolesProfils",
      seq: 5000
    }
  )
}
*/

