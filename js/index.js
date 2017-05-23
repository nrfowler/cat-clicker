function loadCatClicker(){
  var cat1 = document.getElementById('cat1');
var clicks = 0;
var elemClicks = document.getElementById('click-display');
var listCats = [{name: "cat 1",
http:"//www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
id: 1,clicks: 0},
{name: "cat 2",
http: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
id: 2,clicks: 0},
{name: "cat 3",
http: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
id: 3},clicks: 0];
document.getElementById('cat1').addEventListener('click', function(){
  document.getElementById('cat-container').innerHTML  = ;
}, false);


  var cat2 = document.getElementById('cat2');
var clicks2 = 0;
var elemClicks2 = document.getElementById('click-display2');
cat2.addEventListener('click', function(){
  clicks2++;
  elemClicks2.innerHTML  = clicks2;
}, false);


}
