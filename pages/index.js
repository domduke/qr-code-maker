import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import GenerateQRCode from "./components/generateQRCode";
import {downloadQRCode} from "./components/downloadQRCode";
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

  // const downloadQRCode = () => {
  //   const canvas = document.getElementById("qr-gen");
  //   const pngUrl = canvas
  //     .toDataURL("image/png")
  //     .replace("image/png", "image/octet-stream");
  //   let downloadLink = document.createElement("a");
  //   downloadLink.href = pngUrl;
  //   downloadLink.download = `QRCode - ${completeUrl.replace(
  //     /.+\/\/|www.|\..+/g,
  //     ""
  //   )}.png`;
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // };

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
      <main>
        <div className="flex flex-col align-center justify-center m-auto mb-4 md:max-w-5xl p-10 md:flex-row">
          <div className="w-full md:w-1/2 mr-24">
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
                  <GenerateQRCode
                    className="mb-4"
                    url={completeUrl}
                    bgColor={bgColor}
                    fgColor={fgColor}
                    onClick={(e) => console.log(e.target)}
                  />
                  <input
                    style={{ width: "30px", borderRadius: "20px" }}
                    type="color"
                    id="bgColorChooser"
                    name="bgColorChooser"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                  />
                  <label for="head">Background {bgColor}</label>
                  <input
                    type="color"
                    id="fgColorChooser"
                    name="fgColorChooser"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                  />
                  <label for="head">Foreground {fgColor}</label>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-3/4 m-auto my-5"
                    onClick={() => downloadQRCode(completeUrl)}
                  >
                    Download QR Code
                  </button>
                  <p>{completeUrl}</p>
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
