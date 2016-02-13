function fmtDate(d) {
  return moment.utc(d).format("DD-MM-YYYY");
}
function fmtBoolean (val) {
  return val?"☑":"☐";
}
Template.reactiveSites.helpers({
  settings: function () {
    return {
      showFilter: true,
      rowsPerPage: 17,
      showNavigationRowsPerPage:false,
      showNavigation : 'auto',
      rowClass: function(item) {
        var Id = item._id;
        //
        if (Id === Session.get("siteId")) {
          return 'success';
        } else{
          return '';
        }
      },
      fields: [
        { key: 'Designation', label: 'Designation', sortOrder: 0 },
        { key: 'Adresse1', label: 'Adresse' },
        { key: 'CodePostal', label: 'Code postal' },
        { key: 'Ville', label: 'Ville' },
        { key: 'Metro', label: 'Métro' },
        { key: 'Correspondant', label: 'Nom correspondant' },
        { key: 'Mail', label: 'Mail corresp.' },
        { key: 'Telephone', label: 'Tél. corresp.'},
        { key: 'Ferme', label: 'Fermé',fn: function(Ferme){  return fmtBoolean(Ferme);}}
      ]
    };
  },
  sites: function () {
    return Sites.find({});
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

Template.majSite.helpers({
  siteId: function () {
    return Session.get("siteId");
  }
});
Template.reactiveSites.events({
  'click #reactivelstSites tbody tr ': function () {
    Session.set("siteId", this._id);
  }
});
