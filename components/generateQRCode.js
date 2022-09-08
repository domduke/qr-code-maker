import {QRCodeCanvas} from 'qrcode.react';

export default function GenerateQRCode({ url, bgColor, fgColor }) {
    return (
    <QRCodeCanvas
      id="qr-gen"
      value={url}
      size={400}
      level={"H"}
      includeMargin={true}
      bgColor={bgColor}
      fgColor={fgColor}
    />
    )
}