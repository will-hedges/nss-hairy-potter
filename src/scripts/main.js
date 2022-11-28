// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 5, 4);
let bowl = makePottery("Bowl", 6, 3);
let vase = makePottery("Vase", 10, 10);
let cup = makePottery("Cup", 4, 5);
let plate = makePottery("Plate", 8, 0.75);

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2200);
bowl = firePottery(bowl, 1850);
vase = firePottery(vase, 1900);
cup = firePottery(cup, 2300);
plate = firePottery(plate, 2000);

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug);
bowl = toSellOrNotToSell(bowl);
vase = toSellOrNotToSell(vase);
cup = toSellOrNotToSell(cup);
plate = toSellOrNotToSell(plate);

// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector(".potteryList");
parentHTMLElement.innerHTML = PotteryList();
