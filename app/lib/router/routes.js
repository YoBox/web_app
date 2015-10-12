Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.plugin('dataNotFound', {
  notFoundTemplate: 'notFound'
});

// HOMEPAGE
Router.route('/', {
  name: 'homePage',
  action: function(){
    this.render();
  },
  fastRender: true
});
