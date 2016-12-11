new Vue({
  el: '#app',

  data: {
    matchs: [{teams: 'Manchester United vs Chelsea', venue: 'Home', detail: 'BYOB', date: '12-12-2016', time: '11:00' },
              {teams: '', venue: '', deatil: '', date: '', time: ' ' }]
  },

  methods: {
    addMatch: function () {
      var newMatch = this.message
      this.matchs.push(newMatch)
      this.message=""
    }
  },

});
