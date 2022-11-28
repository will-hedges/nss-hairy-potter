// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 4);
let bowl = makePottery("bowl", 6, 3);
let vase = makePottery("vase", 10, 10);
let cup = makePottery("cup", 4, 5);
let plate = makePottery("plate", 8, 0.75);

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
plate = toSellOrNotToSell(plate);

// Invoke the component function that renders the HTML list
