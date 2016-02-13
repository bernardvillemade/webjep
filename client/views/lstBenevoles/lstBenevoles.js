function fmtDate(d) {
  return moment.utc(d).format("DD-MM-YYYY");
}
function fmtBoolean (val) {
  return val?"☑":"☐";
}


Template.reactiveBenevoles.helpers({
  settings: function () {
    return {
      showFilter: true,
      rowsPerPage: 17,
      showNavigationRowsPerPage:false,
      showNavigation : 'auto',
      rowClass: function(item) {
        var Id = item._id;
        //
        if (Id === Session.get("benevoleId")) {
          return 'success';
        } else{
          return '';
        }
      },
      fields: [
        { key: 'nom', label: 'Nom', sortOrder: 0},
        { key: 'Prenom', label:"Prénom"},
        { key: 'civilite', label: 'Civilité' },
        { key: 'mail', label: 'Mail' },
        { key: 'adresse1', label: 'Adresse' },
        { key: 'CodePostal', label: 'Code postal' },
        { key: 'ville', label: 'Ville' },
        { key: 'TelPortable', label: 'Tél. portable' },
        { key: 'TelBureau', label: 'Tél. bureau'},
        { key: 'TelPersonnel', label: 'Tél. autre'},
        { key: 'Administrateur', label: 'Accueil',fn: function(Administrateur){  return fmtBoolean(Administrateur);}},
        { key: 'Conferencier', label: 'Conférencier',fn: function(Conferencier){  return fmtBoolean(Conferencier);}},
        { key: 'etudiant', label: 'Etudiant',fn: function(etudiant){  return fmtBoolean(etudiant);} },
        { key: 'Inactif', label: 'Inactif',fn: function(Inactif){  return fmtBoolean(Inactif);} }
      ]
    };
  },
  benevoles: function () {
    return Benevoles.find({});
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

Template.majBenevole.helpers({
  benevoleId: function () {
    return Session.get("benevoleId");
  }
});

Template.reactiveBenevoles.events({
  'click #reactivelstBenevoles tbody tr ': function () {
    Session.set("benevoleId", this._id);
  }
});
function CreerBenevoleProfil(IdProfil) {
  BenevolesProfils.insert({
    Id: newChrono('chronoBenevolesProfils'),
    IdBenevole: ID_Benevole,
    IdProfil: IdProfil
  });
}


function newChrono (key) {
  var obj = counters.findOne({key: key});
  var c = (obj.seq).valueOf();
  c = c + 1;
  counters.update(
    {_id: obj._id},
    {$set: {seq: c}}
  );
  return c;
}
var ID_Benevole ;
var operation;
var hooksObject = {
  before: {
    // Replace `formType` with the form `type` attribute to which this hook applies
    insert: function(doc) {
      // Potentially alter the doc
      //doc.foo = 'bar';
      operation="insert";
      // Then return it or pass it to this.result()
      return doc; (synchronous)
      //return false; (synchronous, cancel)
      //this.result(doc); (asynchronous)
      //this.result(false); (asynchronous, cancel)
    },
    update: function(doc) {
      // Potentially alter the doc
      //doc.foo = 'bar';
      operation="update";

      // Then return it or pass it to this.result()
      return doc; (synchronous)
      //return false; (synchronous, cancel)
      //this.result(doc); (asynchronous)
      //this.result(false); (asynchronous, cancel)
    }
  },


  // The same as the callbacks you would normally provide when calling
  // collection.insert, collection.update, or Meteor.call
  after: {
    // Replace `formType` with the form `type` attribute to which this hook applies
    insert: function(error, result) {
      return result;
    },
    update: function(error, result) {
      return result;
    }
  },

  // Called when form does not have a `type` attribute
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
    // You must call this.done()!
    //this.done(); // submitted successfully, call onSuccess
    //this.done(new Error('foo')); // failed to submit, call onError with the provided error
    //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
  },

  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    return result;

  },

  // Called when any submit operation fails
  onError: function(formType, error) {
  },

  // Called every time an insert or typeless form
  // is revalidated, which can be often if keyup
  // validation is used.
  formToDoc: function(doc) {
    // alter doc
    ID_Benevole = newChrono('chronoBenevoles');
    doc.ID = ID_Benevole;
    return doc;
  },

  // Called every time an update or typeless form
  // is revalidated, which can be often if keyup
  // validation is used.
  formToModifier: function(modifier) {
    // alter modifier

    return modifier;
  },

  // Called whenever `doc` attribute reactively changes, before values
  // are set in the form fields.
  docToForm: function(doc, ss) {
    ID_Benevole = doc.ID;
    return doc;
  },

  // Called at the beginning and end of submission, respectively.
  // This is the place to disable/enable buttons or the form,
  // show/hide a "Please wait" message, etc. If these hooks are
  // not defined, then by default the submit button is disabled
  // during submission.
  beginSubmit: function() {
  },
  endSubmit: function() {
    var b = Benevoles.findOne({ID: ID_Benevole});
    if (b) {
      switch (operation) {
        case 'insert':
            if (b.Inactif === false) {
              if (b.Administrateur === true) {
                CreerBenevoleProfil(1);
              }
              if (b.Conferencier === true) {
                CreerBenevoleProfil(2);
              }
              Meteor.call('creerBenevolesProfils_b');
            }
          break;
        case 'update':
            if (b.Inactif === false) {
                if (b.Administrateur === true) {
                  var bp = BenevolesProfils.findOne({IdBenevole: ID_Benevole, IdProfil: 1});
                  if (!bp) {
                    CreerBenevoleProfil(1);
                    Meteor.call('creerBenevolesProfils_b');
                  }
                } else {
                  var bp = BenevolesProfils.findOne({IdBenevole: ID_Benevole, IdProfil: 1});
                  if (bp) {
                    BenevolesProfils.remove({_id: bp._id});
                    Meteor.call('creerBenevolesProfils_b');
                  }else {
                    console.log("Le document du bénévole courant  pour le profil 'Accueil' n'a pas été trouvé - IdBenevole = " & ID_Benevole);

                  }
                }
                if (b.Conferencier === true) {
                  var bp = BenevolesProfils.findOne({IdBenevole: ID_Benevole, IdProfil: 2});
                  if (!bp) {
                    CreerBenevoleProfil(2);
                    Meteor.call('creerBenevolesProfils_b');
                  }
                }else{
                  var bp = BenevolesProfils.findOne({IdBenevole: ID_Benevole,IdProfil: 2});
                  if (bp) {
                    BenevolesProfils.remove({_id: bp._id});
                    Meteor.call('creerBenevolesProfils_b');
                  }else{
                    console.log("Le document du bénévole courant  pour le profil 'Conférencier' n'a pas été trouvé - IdBenevole = " & ID_Benevole);
                  }
                }
            } else {
              var n = 0;
              var bp = BenevolesProfils.findOne({IdBenevole: ID_Benevole,IdProfil: 1});
              if (bp) {
                BenevolesProfils.remove({_id: bp._id});
                n+=1;
              }else{
                console.log("Le document du bénévole courant  pour le profil 'Accueil' n'a pas été trouvé - IdBenevole = " & ID_Benevole);
              }
              bp = BenevolesProfils.findOne({IdBenevole: ID_Benevole,IdProfil: 2});
              if (bp) {
                BenevolesProfils.remove({_id: bp._id});
                n+=1
              }else{
                console.log("Le document du bénévole courant  pour le profil 'Conférencier' n'a pas été trouvé - IdBenevole = " & ID_Benevole);

              }
              if (n > 0) {
                Meteor.call('creerBenevolesProfils_b');
              }
            }
          break;
        default:
      }
    } else{
      console.log("Le document du bénévole courant n'a pas été trouve - IdBenevole = " & ID_Benevole);
    }
  }
};
AutoForm.hooks({
  frmBenevole: hooksObject
});

