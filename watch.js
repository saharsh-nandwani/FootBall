new Vue({
  el: '#app',

  data: {
    match : {teams: 'Man vs Chl', venue: 'F-202', deatil: 'BYOB', date: '12-12-2016', time: '11:00' },
    matchs: []
  },

  methods: {
    addmatch: function () {
      var newMatch = this.message
      this.matchs.push(newMatch)
      this.message=""
    }
  },

});
