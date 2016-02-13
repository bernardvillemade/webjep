Router.configure({
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
  layoutTemplate: 'layout',
  yieldTemplates: {
    menu: {to: 'menuPrincipal'}
  }
});
Router.route('/', {name: 'home'});
Router.route('/import', {name: 'import'});
Router.route('/lstBenevoles', {name: 'lstBenevoles'});
Router.route('/lstSites', {name: 'lstSites'});
Router.route('/lstOuvertures', {name: 'lstOuvertures'});
Router.route('/affectations', {name: 'affectations'});
Router.route('/saisieAffectations', {name: 'saisieAffectations'});

