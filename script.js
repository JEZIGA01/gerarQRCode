function GerarQrCode(){
  let inputSala = document.querySelector('#salaCriada').value;
  let apiGoogleChart = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=`;
  let contentQRCode = apiGoogleChart + inputSala
  document.querySelector('#QRCodeImg').src = contentQRCode;
}
