// v3
// template literals
let pencilPrice=3;
let eraserPrice=4;
let total="total is="+ (pencilPrice + eraserPrice)+ "rupees";
let t=`total is= ${pencilPrice+eraserPrice}rupees`;//template literals
console.log("USING CONTCATENATION", total);
console.log("USING TEMPLATE LITERALS", t);