/*
 *	Búðu til Pizza object. Pizzan þarf að hafa, verð, stærð (l,m,s),
 *	og álegg (ostur, skinka, nautahakk,	pepperoni, ananas osfrv. )
 */

 function Bake(name, size, toppings){
 		this.name = name;
 		this.size = size;
 		this.topping = toppings;
 };

 // Pizzu array
 Pizzas = [];
 Pizzas.push(new Bake("Pepperoni", "l", ["Cheese", "Pepperoni"]));
 Pizzas.push(new Bake("Margarita", "s", ["Cheese"]));
 Pizzas.push(new Bake("Mexico", "l", ["Nacho Cheese", "Nachos", "Chili", "Fajitas Chicken"]));
 Pizzas.push(new Bake("Bananananas", "l", ["Cheese", "Ananas", "Banana", "Black Pepper"]));
 Pizzas.push(new Bake("PeppHamm", "l", ["Cheese", "Pepperoni", "Ham"]));
 Pizzas.push(new Bake("Que?cumber", "m", ["Cucumber", "Cheese", "Cabbage"]));
 Pizzas.push(new Bake("Gnarly", "s", ["Cheese", "Garlic", "Garlic", "Garlic"]));
 Pizzas.push(new Bake("Ranger", "l", ["Cheese", "BBQ Sauce", "Onion", "Bacon", "Ground Beef"]));
 Pizzas.push(new Bake("Amigo", "l", ["Salsa", "Fajitas Chicken", "Jalapeno"]));
 Pizzas.push(new Bake("Cheesie", "s", ["Cheese", "Mozarella", "Ham"]));

 //Undirbý texta fyrir html
 var pizzaList = "";
 for(x in Pizzas){
 	pizzaList += "<table style='width: 25%; min-width: 300px; float: left; border: 1px solid black; height: 100px;'>"
 	pizzaList += "<tr><th colspan='" + Pizzas[x].topping.length + 1 + "'>" + Pizzas[x].name + "</th></tr>";
 	pizzaList += "<tr><th>Size:</th><td align='center' colspan='" + Pizzas[x].topping.length + "'>" + Pizzas[x].size + "</td></tr>";
 	pizzaList += "<tr><th>Topping:</th>";

 	for(y in Pizzas[x].topping){
 		width = 100 / Pizzas[x].topping.length;
 		pizzaList += "<td style='width:" + width + "%' align='center'>" + Pizzas[x].topping[y] + "</td>";
 	};
 	pizzaList += "</tr></table>";
 };

 var LePizza = document.getElementById("pizzur");
 LePizza.innerHTML = pizzaList;