var app = new Vue({
  el: '#app',
  data: {
    firstName: 'King',
    lastName: 'David',
    email: "king@gmail.com",
    gender: "male",
    picture: "https://avatars.githubusercontent.com/u/29569594?v=4"
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json()
      let { results: user } = data;

      user ? user = user[0] : []


      console.log(user, "user")

      this.firstName = user?.name?.first
      this.lastName = user?.name?.last
      this.email = user?.email
      this.picture = user?.picture?.large
      this.gender = user?.gender
    }
  },


})
