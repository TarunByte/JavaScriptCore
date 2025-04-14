let object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};

let object2 = {
  name: "Aditya",
};

//Never do this
object2.__proto__ = object;
