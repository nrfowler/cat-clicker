

var marker;
var map;
var infoWindow;
function initMap() {
   map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 33.448376, lng: -112.074036},
    zoom: 5
  });
  infoWindow =  new google.maps.InfoWindow({
    content:""
  });
}

  function Cat(name, url, id, clicks, coords, sound) {
    var self = this;
    self.name = ko.observable(name);
    self.url = ko.observable(url);
    self.id = ko.observable(id);
    self.clicks = ko.observable(clicks);
      self.coords = ko.observable(coords);
      self.sound = ko.observable(sound);

  }

  //Revealing Prototype Pattern
  Cat.prototype = (function() {
    function incrementByOne() {
    this.clicks(this.clicks() + 1);
  }
  function incrementByTen() {
    this.clicks(this.clicks() + 10);
  }
    return { clickOne: incrementByOne,
           clickTen: incrementByTen};
  })();

  var Dog= function(name, url, id, clicks, coords, sound) {
    var self = this;
    self.name = ko.observable(name);
    self.url = ko.observable(url);
    self.id = ko.observable(id);
    self.clicks = ko.observable(clicks);
    self.coords = ko.observable(coords);
    self.sound = ko.observable(sound);
  }

  // Prototype Pattern
  Dog.prototype = {

     clickOne: function () {
    this.clicks(this.clicks() + 1);
  },
           clickTen: function () {
    this.clicks(this.clicks() + 15);
  }
  };
  var ViewModel = function(listCats) {
    var self = this;
    self.powerMode = false;
    self.powerModeText = ko.observable("Power Mode: Off");
    self.powerModeButton = function() {
      self.powerMode = !self.powerMode;
      //extending the prototype
      if (self.powerMode) {
        self.powerModeText("Power Mode: On");

      } else {
        self.powerModeText("Power Mode: Off");
      }
    };

    this.listCats = ko.observableArray(listCats);
    this.click = function() {
      var element = this; //the Cat object

      var catDisplay = $("#cat-display");
      var catInfo = $("#cat-info-container");
      $("#cat-map-label").text(element.name()+"'s home:")
      map = new google.maps.Map(document.getElementById('map'),{
       center: element.coords(),
       zoom: 5
     });
     marker = new google.maps.Marker({
       position: element.coords(),
       map: map,
       title: element.name()
     });
      catDisplay.parent().css("display", "inline");
      catInfo.parent().css("display", "flex");
      catDisplay.html(
        "<h2>" +
          element.name() +
          "</h2><p class='cat-click-indicator'> Clicks: " +
          element.clicks() +
          "</p><img src=" +
          element.url() +
          " /> "
      );
      catDisplay.parent().off("click");
      catDisplay.parent().click(
        (function(el) {
          return function() {

            if(self.powerMode == true)
              el.clickTen();
            else
              el.clickOne();
            if(el.clicks() % 3 == 0){
              infoWindow = new google.maps.InfoWindow({
                content: el.sound()
              })
              infoWindow.open(map, marker);
            }
            else {
              infoWindow.close();
            }


            catDisplay.html(
              "<h2>" +
                el.name() +
                "</h2><p class='cat-click-indicator'> Clicks: " +
                el.clicks() +
                "</p><img src=" +
                el.url() +
                " /> "
            );
          };
        })(element)
      );
    };
  };
  var phoenix = {lat: 33.448376, lng: -112.074036};
  var dm =   {lat: 41.619549, lng:  -93.598022};
  var listCats = [
    new Cat(
      "Fluffy",
      "https://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
      0,
      0,
      phoenix,
      "meow"
    ),
    new Cat(
      "Bannister",
      "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
      1,
      0,
      phoenix,
      "meow"
    ),
    new Cat(
      "Nathan",
      "https://github.com/nrfowler/cat-clicker/raw/master/nf.png",
      2,
      0,
      dm,
      "help"
    ),
    new Cat(
      "Fatty",
      "https://fatcatart.com/wp-content/gallery/dutch-art/thumbs/thumbs_Helst-Portret-van-Gerard-Andriesz-Bicker-cat-w.jpg",
      3,
      0,
      phoenix,
      "burp"
    ),
    new Cat(
      "Biggie",
      "https://github.com/nrfowler/cat-clicker/raw/master/tiger.jpg",
      4,
      0,
      phoenix,
      "ROOAR"
    ),
    new Dog(
      "Lassie",
      "https://vignette2.wikia.nocookie.net/dreamworks/images/3/34/910171000.jpg/revision/latest?cb=20150806013011",
      5,
      0,
      dm,
      "woof"
    )
  ];
  ko.applyBindings(new ViewModel(listCats)); // This makes Knockout get to work
