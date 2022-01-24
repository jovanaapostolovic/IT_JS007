// import {generateList, generateItem as generateListItem} from "./modules/list.js";
// import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

// let list = generateList(document.body);
// generateListItem(list, "images/rose.png");
// generateListItem(list, "images/lily.png");
// generateListItem(list, "images/gerbera.png");

// let table = generateTable(document.body);
// let redTabele = generateTableRow(table);
// generateTableItem(redTabele, "images/rose.png");
// generateTableItem(redTabele, "images/lily.png");
// generateTableItem(redTabele, "images/gerbera.png");


import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";
import * as Div from "./modules/div.js";

console.log(List);

let list = List.generateList(document.body);
List.generateItem(list,"images/rose.png" );
List.generateItem(list,"images/lily.png" );
List.generateItem(list,"images/gerbera.png" );

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr,"images/rose.png" );
Table.generateItem(tr,"images/lily.png" );
Table.generateItem(tr,"images/gerbera.png" );

let div = Div.generateDiv(document.body);
Div.generateItem(div, "images/rose.png");
Div.generateItem(div, "images/lily.png");
Div.generateItem(div, "images/gerbera.png");