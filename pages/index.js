import { useState } from "react";
import Head from "next/head";
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import logo from './logo.png';
import GenerateQRCode from "../components/generateQRCode";
import { downloadQRCode } from "../components/downloadQRCode";

export default function Home() {
  const [url, setUrl] = useState("");
  const [completeUrl, setCompleteUrl] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");

  const createQRCode = (e) => {
    e.preventDefault();
    setCompleteUrl(url);
    setUrl("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Create Your Own QR Code" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <div className="flex flex-col align-center justify-center m-auto mb-4 md:max-w-5xl p-10 md:flex-row">
          <div className="w-full md:w-1/2 mr-24 mb-12">
            {/* <div className="flex"> */}
            <Image src={logo} width={50} height={50} />
            <h1 className="text-3xl font-bold mb-5 md:text-4xl">
              QR Code Generator
            </h1>
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
          <div className="w-full md:w-1/2 self-center">
            <div id="qrcode" className="m-auto">
              {completeUrl && (
                <>
                  <div className="url-display m-auto mb-4 text-center">
                  <span className="bg-gray-200 p-1 m-1 rounded-md border font-semibold text-lg">{completeUrl.toLowerCase()}</span>
                  </div>
                  <GenerateQRCode
                    className="m-auto pb-4"
                    
                    url={completeUrl}
                    bgColor={bgColor}
                    fgColor={fgColor}
                    onClick={(e) => console.log(e.target)}
                  />
                  <div className="mt-4 m-auto text-center">
                  <input
                    style={{ width: "30px", borderRadius: "20px" }}
                    type="color"
                    id="bgColorChooser"
                    name="bgColorChooser"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                  />
                  <label htmlFor="bgColorChooser">Background {bgColor}</label>
                  <input
                    style={{ marginLeft: "5px", width: "30px", borderRadius: "20px" }}     
                    type="color"
                    id="fgColorChooser"
                    name="fgColorChooser"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                  />
                  <label htmlFor="fgColorChooser">Foreground {fgColor}</label>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-11/12 m-auto my-5"
                    onClick={() => downloadQRCode(completeUrl)}
                  >
                    Download QR Code
                  </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          id="generated"
          className="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-20"
        ></div>
      </main>
    </div>
  );
}
