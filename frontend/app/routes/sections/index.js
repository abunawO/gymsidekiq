import Route from '@ember/routing/route';

export default Ember.Route.extend({

  model() {
    let promises = {
      sections: this.store.findAll('section')
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    //debugger
    this._super(controller, model);
    controller.set('sectionsList', model.sections);
  }

});
