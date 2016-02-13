function fmtDate(d) {
  return moment.utc(d).format("DD-MM-YYYY");
}
function fmtBoolean (val) {
  return val?"☑":"☐";
}
Template.reactiveOuvertures.helpers({
  settings: function () {
    return {
      showFilter: true,
      rowsPerPage: 17,
      showNavigationRowsPerPage:false,
      showNavigation : 'auto',
      rowClass: function(item) {
        var Id = item._id;
        if (Id === Session.get("OuvertureId")) {
          return 'success';
        } else{
          return '';
        }
      },
      fields: [
        { key: 'Site', label: 'Site' , sortOrder: 0, sortable : false},
        { key: 'Ordre', label: 'Ordre', hidden: true, sortOrder: 1, sortable : false },
        { key: 'Ouverture', label: 'Ouverture', sortable : false },
        { key: 'DateOuverture', label: 'Date ouverture', sortable : false,fn: function(DateOuverture){return fmtDate(DateOuverture); }},
        { key: 'HeureDebut', label: 'Heure début', sortable : false },
        { key: 'HeureFin', label: 'Heure fin', sortable : false },
        { key: 'NbPostes_a', label: 'Nb postes accueil', sortable : false },
        { key: 'NbPostes_c', label: 'Nb postes conf.', sortable : false },
        { key: 'Ferme', label: 'fermé', sortable : false, fn: function(Ferme){  return fmtBoolean(Ferme);}}
      ]
    };
  },
  ouvertures: function () {
    return SitesOuvertures.find({});
  },
  isadmin : function(){
    var user = Meteor.user();
    if (user) {
      if (user.username === 'admin') {
        return true;
      }else{
        return false
      }
    }else{
      return false
    }
  }

});

Template.majOuverture.helpers({
  ouvertureId: function () {
    return Session.get("OuvertureId");
  }
});
Template.reactiveOuvertures.events({
  'click #reactivelstOuvertures tbody tr ': function () {
    Session.set("OuvertureId", this._id);
  }
});
