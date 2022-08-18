import { useQRCode } from 'next-qrcode';

export default function GenerateQRCode({url}) {
    const { Image } = useQRCode();

    return (
        <Image
          text={url}
          alt={'qr-code'}
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: '#010599FF',
              light: '#FFBF60FF',
            },
          }}
    />
    )

}