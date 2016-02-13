function fmtDate(d) {
  return moment.utc(d).format("DD-MM-YYYY");;
}
function fmtBoolean (val) {
  return val?"☑":"☐";
}
function showIt(elID) {
  var el = document.getElementById(elID);
  if (el) {
    el.scrollIntoView(true);
    return true;
  }else{
    return false;
  }
}

Template.filtreBenevoles.events({
  'keyup .Nom': function (event, template) {
    event.preventDefault();
    if (event.target.value === "") {
      Session.set("isFiltreNom_1", false);
      Session.set("FiltreNom_1","");
    } else {
      Session.set("isFiltreNom_1", true);
      Session.set("FiltreNom_1", "/" + event.target.value + "/i");
    }
  },
  'keyup .Prenom': function (event, template) {
    event.preventDefault();
    if (event.target.value === "") {
      Session.set("isFiltrePrenom_1", false);
      Session.set("FiltrePrenom_1","");
    } else {
      Session.set("isFiltrePrenom_1", true);
      Session.set("FiltrePrenom_1", "/" + event.target.value + "/i");
    }
  },
  'keyup .Profil': function (event, template) {
    event.preventDefault();
    if (event.target.value === "") {
      Session.set("isFiltreProfilBenevole", false);
      Session.set("FiltreProfilBenevole","");
    } else {
      Session.set("isFiltreProfilBenevole", true);
      Session.set("FiltreProfilBenevole", "/" + event.target.value + "/i");
    }
  }
});

Template.listeBenevoles.helpers({
  BenevolesProfils_b: function () {
    var YaCritere = false;
    var sql = "({";
    if (Session.get('isFiltreNom_1') === true) {
      sql = sql + "Nom: " + Session.get('FiltreNom_1');
      YaCritere = true;
    }
    if (Session.get('isFiltrePrenom_1') === true) {
      if (YaCritere === true) {
        sql = sql + ",";
      }
      sql = sql + "Prenom: " + eval(Session.get('FiltrePrenom_1'));
      YaCritere = true;
    }
    if (Session.get('isFiltreProfilBenevole') === true) {
      if (YaCritere === true) {
        sql = sql + ",";
      }
      sql = sql + "Profil:" + eval(Session.get('FiltreProfilBenevole'));
      YaCritere = true;
    }
    sql = sql + "}, {sort: {Nom: 1}})";
    var evalsql=eval("BenevolesProfils_b.findOne" + sql);

    Session.set("selectedBenevoleProfilId", evalsql.IdBenevoleProfil);
    evalsql=eval("BenevolesProfils_b.find" + sql);
    return evalsql;
  },
  isSelectedBenevoleProfil: function () {
    return Session.equals("selectedBenevoleProfilId", this.IdBenevoleProfil);
  },
  selectedBenevoleProfil: function () {
    return Benevoles.findOne(Session.get("selectedBenevoleProfilId"));
  },
  fmtEtudiant : function () {
    return fmtBoolean(this.Etudiant);
  },
  fmtBTS : function () {
    return fmtBoolean(this.BTS);
  }
});

Template.listeBenevoles.events({
  'click .BenevolesProfils_b-row': function () {
    Session.set("selectedBenevoleProfilId", this.IdBenevoleProfil);
  }
});

Template.filtreSites.events({
  'keyup .Site': function (event, template) {
    event.preventDefault();
    if (event.target.value === "") {
      Session.set("isFiltreSite", false);
      Session.set("FiltreSite","");
    } else {
      Session.set("isFiltreSite", true);
      Session.set("FiltreSite", "/" + event.target.value + "/i");
    }
  },
  'keyup .Ouverture': function (event, template) {
    event.preventDefault();
    if (event.target.value === "") {
      Session.set("isFiltreOuverture", false);
      Session.set("FiltreOuverture","");
    } else {
      Session.set("isFiltreOuverture", true);
      Session.set("FiltreOuverture", "/" + event.target.value + "/i");
    }
  },
  'keyup .Profil': function (event, template) {
    event.preventDefault();
    if (event.target.value === "") {
      Session.set("isFiltreProfilSite", false);
      Session.set("FiltreProfilSite","");
    } else {
      Session.set("isFiltreProfilSite", true);
      Session.set("FiltreProfilSite", "/" + event.target.value + "/i");
    }
  }
});

Template.listeSites.helpers({
  OuverturesSitesProfils_o: function () {
    var YaCritere = false;
    var sql = "({";
    if (Session.get('isFiltreSite') === true) {
      sql = sql + "Site: " + eval(Session.get('FiltreSite'));
      YaCritere = true;
    }
    if (Session.get('isFiltreOuverture') === true) {
      if (YaCritere === true) {
        sql = sql + ",";
      }
      sql = sql + "Ouverture: " + eval(Session.get('FiltreOuverture'));
      YaCritere = true;
    }
    if (Session.get('isFiltreProfilSite') === true) {
      if (YaCritere === true) {
        sql = sql + ",";
      }
      sql = sql + "Profil: " + eval(Session.get('FiltreProfilSite'));
      YaCritere = true;
    }
    sql = sql + "}, {sort: {Site: 1, Ordre: 1,Profil:1}})";
    var evalsql = eval("OuverturesSitesProfils_o.findOne" + sql);
    Session.set("selectedOuvertureSiteProfilId", evalsql.IdOuvertureSiteProfil);
    evalsql = eval("OuverturesSitesProfils_o.find" + sql);
    return evalsql;
  },
  isSelectedOuvertureSiteProfil: function () {
    return Session.equals("selectedOuvertureSiteProfilId", this.IdOuvertureSiteProfil);
  }
});

Template.listeSites.events({
  'click .OuverturesSitesProfils_o-row': function () {
    Session.set("selectedOuvertureSiteProfilId", this.IdOuvertureSiteProfil);
  }
});

Template.listeBenevolesSites.helpers({
  BenevolesOuverturesSites_b: function () {

    var sql = "({";
    sql = sql + "IdBenevoleProfil: " + eval(Session.get('selectedBenevoleProfilId'));
    sql = sql + "}, {sort: {Site: 1}})";
    var evalsql = eval("BenevolesOuverturesSites_b.findOne" + sql);
    Session.set("selectedBenevoleOuvertureSiteId", evalsql.IdOuvertureSite);
    evalsql = eval("BenevolesOuverturesSites_b.find" + sql);
    return evalsql;
  },
  isSelectedBenevoleOuvertureSiteProfil: function () {
    return Session.equals("selectedBenevoleOuvertureSiteId", this.IdOuvertureSite);
  },
  fmtDateSouhait : function () {
    return fmtDate(this.DateSouhait);
  },
  fmtDateAffectation : function () {
    return fmtDate(this.DateAffectation);
  },
  fmtSiteNp : function () {
    return fmtBoolean(this.SiteNp);
  },
  fmtOuvNp : function () {
    return fmtBoolean(this.OuvNp);
  },
  fmtNonSat : function () {
    return fmtBoolean(this.NonSat);
  }
});

Template.listeBenevolesSites.events({
  'click .BenevolesOuverturesSites_b-row': function () {
    Session.set("selectedBenevoleOuvertureSiteId", this.IdOuvertureSite);
    Session.set("selectedOuvertureSiteProfilId", this.IdOuvertureSiteProfil);
    if (eval(Session.get("isFiltreSite")) != "" || eval(Session.get("isFiltreOuverture")) != "" || eval(Session.get("isFiltreProfilSite")) != "") {
      document.filtreSites.Site.value = "";
      document.filtreSites.Ouverture.value = "";
      document.filtreSites.Profil.value = "";

      Session.set("isFiltreSite", false);
      Session.set("FiltreSite", "");
      Session.set("isFiltreOuverture", false);
      Session.set("FiltreOuverture", "");
      Session.set("isFiltreProfilSite", false);
      Session.set("FiltreProfilSite", "");
    } else {
    }
    showIt("osp_" + eval(Session.get("selectedOuvertureSiteProfilId")));
  }
});


Template.listeSitesBenevoles.helpers({
  OuverturesSitesBenevoles_o: function () {
    var sql = "({";
    sql = sql + "IdOuvertureSiteProfil: " + eval(Session.get('selectedOuvertureSiteProfilId'));
    sql = sql + "}, {sort: {Nom: 1}})";
    var evalsql = eval("OuverturesSitesBenevoles_o.findOne" + sql);
    Session.set("selectedOuvertureSiteBenevoleId", evalsql.IdBenevole);
    evalsql = eval("OuverturesSitesBenevoles_o.find" + sql);
    return evalsql;
  },
  isSelectedOuvertureSiteProfilBenevole: function () {
    return Session.equals("selectedOuvertureSiteBenevoleId", this.IdBenevole);
  },
  fmtDateSouhait : function () {
    return fmtDate(this.DateSouhait);
  },
  fmtDateAffectation : function () {
    return fmtDate(this.DateAffectation);
  },
  fmtSiteNp : function () {
    return fmtBoolean(this.SiteNp);
  },
  fmtOuvNp : function () {
    return fmtBoolean(this.OuvNp);
  },
  fmtNonSat : function () {
    return fmtBoolean(this.NonSat);
  },
  fmtBTS : function () {
    return fmtBoolean(this.BTS);
  }
});

Template.listeSitesBenevoles.events({
  'click .OuverturesSitesBenevoles_o-row': function () {
    Session.set("selectedOuvertureSiteBenevoleId", this.IdBenevole);
    Session.set("selectedBenevoleProfilId", this.IdBenevoleProfil);
    if (eval(Session.get("isFiltreNom_1")) != "" || eval(Session.get("isFiltrePrenom_1")) != "" || eval(Session.get("isFiltreProfilBenevole")) != "") {
      document.filtreBenevoles.Nom.value = "";
      document.filtreBenevoles.Prenom.value = "";
      document.filtreBenevoles.Profil.value = "";

      Session.set("isFiltreNom_1", false);
      Session.set("FiltreNom_1", "");
      Session.set("isFiltrePrenom_1", false);
      Session.set("FiltrePrenom_1", "");
      Session.set("isFiltreProfilBenevole", false);
      Session.set("FiltreProfilBenevole", "");
    } else {
    }
    showIt("bp_" + eval(Session.get("selectedBenevoleProfilId")));
    }
});
