var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    prefix: '',
    owl: {},
    owlform: '',
    values: false,
    owlValues: false,
    owls: [],
    owlTitle: '',
  },
  
  methods: {
    owlREST() {
      this.owlTitle='';
      this.owls=[];
      this.owlValues = true;
      for(let i = 0; i < this.owlform.length; i++){
        this.owlTitle += this.owlform[i];
      }
      console.log("O title: " + this.owlTitle);
      console.log("In Fetch " + this.owlform);
      var url = "owl?q=" + this.owlform;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((owlstuff) => {
          console.log("owl");
          console.log(owlstuff);
          for(let i = 0; i < owlstuff.length; i++){
             this.owl = owlstuff[i];
             this.owls.push(this.owl);
             
          }
         
          
        });

    },
    fetchREST() {
      this.values = true;
      console.log("In Fetch " + this.prefix);
      var url = "cities?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((cityStuff) => {
          console.log("cities");
          console.log(cityStuff);
          this.cities = [];
          for (let i = 0; i < cityStuff.length; i++) {
            console.log(cityStuff[i].city);
            this.cities.push({ name: cityStuff[i].city });
          };
          for(let i = 0; i < this.cities.length; i++){
            console.log(this.cities[i].name);
          }
          
        });
    },
  },
});