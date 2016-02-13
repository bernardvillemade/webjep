Meteor.methods({
  creerBenevolesProfils_b : function(){
    BenevolesProfils_b.remove({});
    var c1 = BenevolesProfils.find({});
    c1.forEach(function(row) {
      var b = Benevoles.findOne({"ID": row.IdBenevole});
      var p = Profils.findOne({"Id": row.IdProfil});
      if (b && p) {
        BenevolesProfils_b.insert({
          IdBenevoleProfil : row.Id,
          IdBenevole : b.ID,
          IdProfil : row.IdProfil,
          Nom : b.nom,
          Prenom : b.Prenom,
          Profil : p.Designation,
          Telephone : b.TelPortable,
          Etudiant : b.etudiant,
          BTS : b.BTS
        });
      }
    });
  },
  creerOuverturesSitesProfils_o : function(){
    OuverturesSitesProfils_o.remove({});
    var c2 = OuverturesSitesProfils.find({});
    c2.forEach(function(row) {
      var os = OuverturesSites.findOne({"Id": row.IdOuvertureSite});
      var s = Sites.findOne({ID: os.IdSite});
      var o = Ouvertures.findOne({Id: os.IdOuverture});
      var p = Profils.findOne({"Id": row.IdProfil});
      if(s && o && p){
        OuverturesSitesProfils_o.insert({
          IdOuvertureSiteProfil : row.Id,
          IdOuvertureSite : os.Id,
          IdSite : os.IdSite,
          IdOuverture : os.IdOuverture,
          IdProfil : row.IdProfil,
          Site : s.Designation,
          Ordre: o.Ordre,
          Ouverture : o.Designation,
          Profil : p.Designation,
          NbPostes : row.NbPostes,
          NbAffectes: row.NbPostes_a,
          NbBTS: row.NbPostes_BTS
        });
      }
    });

  },
  creerBenevolesOuverturesSites_b : function(){
    BenevolesOuverturesSites_b.remove({});
    var c3 =Affectations.find({},{field:{"Supprime":false}});

    c3.forEach(function(row) {
      var bp = BenevolesProfils.findOne({"Id": row.IdBenevoleProfil});
      var b = Benevoles.findOne({"ID": bp.IdBenevole});
      var osp = OuverturesSitesProfils.findOne({"Id": row.IdOuvertureSiteProfil});
      var os = OuverturesSites.findOne({"Id": osp.IdOuvertureSite});
      var s = Sites.findOne({ID: os.IdSite});
      var o = Ouvertures.findOne({Id: os.IdOuverture});
      var p = Profils.findOne({"Id": bp.IdProfil});
      var sh = Souhaits.findOne({"Id": row.IdSouhait});
      if (bp && b && osp && os && s && o && p && sh) {
        BenevolesOuverturesSites_b.insert({
          IdBenevoleProfil : row.IdBenevoleProfil,
          IdBenevole : b.ID,
          IdProfil : p.Id,
          IdOuvertureSite: os.Id,
          IdOuvertureSiteProfil: osp.Id,
          IdSite: s.ID,
          IdOuverture : o.Id,
          Site : s.Designation,
          Ouverture : o.Designation,
          SiteNP : sh.SiteNonPrecise,
          OuvNp : sh.OuvertureNonPrecisee,
          NonSat: row.NonExauce,
          DateSouhait: sh.DateReception,
          DateAffectation: row.DateAffectation
        });
      }
    });

  },
  creerOuverturesSitesBenevoles_o : function(){
    OuverturesSitesBenevoles_o.remove({});
    var c4 = Affectations.find({},{field:{"Supprime":false}});
    c4.forEach(function(row) {
      var bp = BenevolesProfils.findOne({"Id": row.IdBenevoleProfil});
      var b = Benevoles.findOne({"ID": bp.IdBenevole});
      var osp = OuverturesSitesProfils.findOne({"Id": row.IdOuvertureSiteProfil});
      var os = OuverturesSites.findOne({"Id": osp.IdOuvertureSite});
      var p = Profils.findOne({"Id": bp.IdProfil});
      var sh = Souhaits.findOne({"Id": row.IdSouhait});
      if (bp && b && osp && os && p && sh) {
        OuverturesSitesBenevoles_o.insert({
          IdOuvertureSiteProfil : row.IdOuvertureSiteProfil,
          IdOuvertureSite : os.Id,
          IdSite : os.IdSite,
          IdOuverture : os.IdOuverture,
          IdBenevole : b.ID,
          IdProfil : p.Id,
          IdBenevoleProfil : bp.Id,
          Nom : b.nom,
          Prenom : b.Prenom,
          SiteNP : sh.SiteNonPrecise,
          OuvNp : sh.OuvertureNonPrecisee,
          NonSat: row.NonExauce,
          DateSouhait: sh.DateReception,
          DateAffectation: row.DateAffectation,
          BTS : false
        });
      }
    });
  },
  creerSitesOuvertures : function() {
    SitesOuvertures.remove({});
    var c5 = OuverturesSites.find({});

    c5.forEach(function(row) {
      var osp_a = OuverturesSitesProfils.findOne({"IdOuvertureSite": row.Id,"IdProfil":1});
      var osp_c = OuverturesSitesProfils.findOne({"IdOuvertureSite": row.Id,"IdProfil":2});
      var s = Sites.findOne({ID: row.IdSite});
      var o = Ouvertures.findOne({Id: row.IdOuverture});
      if(s && o && osp_a && osp_c){
        SitesOuvertures.insert({
          IdOuvertureSite : row.Id,
          IdSite : row.IdSite,
          IdOuverture : row.IdOuverture,
          Site : s.Designation,
          Ordre : o.Ordre,
          Ouverture : o.Designation,
          DateOuverture : row.DateOuverture,
          HeureDebut : row.HeureDebut,
          HeureFin : row.HeureFin,
          NbPostes_a : osp_a.NbPostes,
          NbPostes_c : osp_c.NbPostes,
         });
      }
    });
  },
  creerCounters: function () {
    counters.insert({
      key: "chronoBenevoles",
      seq: 5000
    });
    counters.insert({
      key: "chronoBenevolesProfils",
      seq: 5000
    });
    counters.insert({
      key: "chronoSites",
      seq: 5000
    });
    counters.insert({
      key: "chronoOuvertures",
      seq: 5000
    });
    counters.insert({
      key: "chronoOuverturesSites",
      seq: 5000
    });
    counters.insert({
      key: "chronoOuverturesSitesProfils",
      seq: 5000
    });
    counters.insert({
      key: "chronoSouhaits",
      seq: 5000
    });
    counters.insert({
      key: "chronoAffectations",
      seq: 5000
    });
    counters.insert({
      key: "chronoAffectationsBTS",
      seq: 5000
    });
  }
});


