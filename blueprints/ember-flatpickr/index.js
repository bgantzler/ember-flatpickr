module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('flatpickr-calendar', '1.8.8');
  }
};
