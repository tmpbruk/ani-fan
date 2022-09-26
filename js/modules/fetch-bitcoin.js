// FETCH BITCOIN ***************************

export default function fetchBitcoin(url, target) {
  function doarBitcoin(precoBitcoin) {
    const span = document.querySelector(target);
    const btcReal = precoBitcoin / 10000;
    span.innerText = `${1 / 10000} BTC = ${btcReal.toFixed(4)} reais.`;
  }

  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      doarBitcoin(bitcoinJson.BRL.buy);
    } catch (error) {
      console.log(`Um erro ocorreu: ${error}`);
    }
  }

  fetchBitcoin(url);
}
