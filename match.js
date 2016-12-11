new Vue({
  el: '#app',

  data: {
    matchs: [{ teams: 'SSLA vs SLS', venue: 'Sports Complex', detail: '5 on 5', date: '12-12-2016', time: '11:00' },
              { teams: '', venue: '', deatil: '', date: '', time: ' ' }]
  },

  methods: {
    addMatch: function () {
      var newMatch = this.message.
      this.matchs.push(newMatch)
      this.message=""
    }
  },

});
