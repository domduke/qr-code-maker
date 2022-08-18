import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import QRCode from "qrcode";
import styles from '../styles/Home.module.css'
import { useQRCode } from 'next-qrcode';
import GenerateQRCode from './components/generateQRCode';
export default function Home() {

  const [url, setUrl] = useState('');
  const [completeUrl, setCompleteUrl] = useState('');
  const { Image } = useQRCode();



  const createQRCode = (e) => {
    e.preventDefault();
    setCompleteUrl(url);
    setUrl('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>QR Code Maker</title>
        <meta name="description" content="Create Your Own QR Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 mb-10 bg-blue-500">
      <div className="max-w-5xl m-auto">
        <div className="text-xl font-bold text-white">QR Code Generator</div>
      </div>
    </header>
    <img src="img/spinner.svg" alt="" />
    <main>
      <div
        className="flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl p-10 md:flex-row"
      >
        <div className="w-full md:w-2/3 mr-24">
          <h1 className="text-3xl font-bold mb-5 md:text-4xl">QR Code Maker</h1>
          <p className="mb-4">
            QR Codes allow smartphone users to access your website simply and
            quickly.
          </p>
          <p>
            Enter your URL below to generate a QR Code and download the image.
          </p>

          <form id="generate-form" className="mt-4">
            <input
              id="url"
              type="url"
              placeholder="Enter a URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none mb-5"
            />

            <button
              className="bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black"
              type="submit"
              onClick={createQRCode}
            >
              Make QR Code
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3 self-center">
          <img
            className="w-1/2 m-auto mb-10 md:w-full"
            src={"img/qr-code.svg"}
            alt=""
          />
          {completeUrl && <GenerateQRCode url={completeUrl} />}
          <p>{completeUrl}</p>
        </div>
      </div>

      <div
        id="generated"
        className="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-20"
      >
        {/* Spinner */}
        <div id="spinner" role="status">
          <svg
            className="inline mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>

        <div id="qrcode" className="m-auto"></div>
      </div>
    </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
