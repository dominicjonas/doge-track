let ws = new WebSocket(`wss://stream.binance.com:9443/ws/dogegbp@trade`);
let stockPriceEl = document.querySelector("#display");
let lastPrice = null;

ws.onmessage = (e) => {
  let stockObj = JSON.parse(e.data);

  console.log(stockObj.p);

  let price = parseFloat(stockObj.p).toFixed(4);
  stockPriceEl.innerHTML = price;

  stockPriceEl.style.color =
    !lastPrice || lastPrice === price
      ? "black"
      : price > lastPrice
      ? "limegreen"
      : "red";

  lastPrice = price;
};
