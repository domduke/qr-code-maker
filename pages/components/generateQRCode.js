import {QRCodeCanvas} from 'qrcode.react';

export default function GenerateQRCode({ url }) {
    return (
    <QRCodeCanvas
      id="qr-gen"
      value={url}
      size={290}
      level={"H"}
      includeMargin={true}
    />
    )
}