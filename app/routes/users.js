import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ({
      users: this.get('store').findAll('user'),
    });
  },
  actions: {
    createUser(name,password) {
      const user = this.get('store').create('user', { name }, { password });
      user.save();
    }
  }
});
