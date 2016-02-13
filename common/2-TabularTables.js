

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

BenevolesList=TabularTables.BenevolesList = new Tabular.Table({
  name: "BenevolesList",
  collection: Benevoles,

  columns: [
    {data: "nom", title: "Nom"},
    {data: "Prenom", title: "Prénom"},
    {data: "mail", title: "Email"},
    {data: "TelPortable", title: "Tél. portable"},
    {data: "TelBureau", title: "Tél. bureau"},
    {data: "etudiant", title: "Etudiant",
      render: function (val) {
        return val?"☑":"☐";
      }},
    {data: "DateDerniereModification", title : "Date dernière modif."}
  ],
  order: [[ 0, "asc" ]],

  searching: true,
  scrollCollapse: true,
  paging: true,
  autoWidth: false
});
