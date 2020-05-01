import Route from '@ember/routing/route';

export default Ember.Route.extend({

  model() {
    //debugger
    let queryParams = {where: { profile_id: { value: 1, operator: '==' }}};
    let promises = {
      members: this.store.findAll('member'),
      profileSections: this.store.query('section', queryParams)

    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    //debugger
    this._super(controller, model);
    controller.set('membersList', model.members);
    controller.set('profileSections', model.profileSections);
  }

});
