export const downloadQRCode = (url) => {
  const canvas = document.getElementById("qr-gen");
  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  let downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = `QRCode - ${url.replace(
    /.+\/\/|www.|\..+/g,
    ""
  )}.png`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
