// import React, { useEffect, useRef, useState } from "react";
// import './App.css';
// import QRCodeStyling from "qr-code-styling";

// export default function App() {
//     const [options, setOptions] = useState({
//         width: 300,
//         height: 300,
//         type: 'svg',
//         data: 'http://qr-code-styling.com',
//         image: '/favicon.ico',
//         margin: 10,
//         qrOptions: {
//             typeNumber: 0,
//             mode: 'Byte',
//             errorCorrectionLevel: 'Q'
//         },
//         imageOptions: {
//             hideBackgroundDots: true,
//             imageSize: 0.4,
//             margin: 20,
//             crossOrigin: 'anonymous',
//         },
//         dotsOptions: {
//             color: '#222222',
//             // gradient: {
//             //   type: 'linear', // 'radial'
//             //   rotation: 0,
//             //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
//             // },
//             type: 'square'
//         },
//         backgroundOptions: {
//             color: '#e3eef1',
//             // gradient: {
//             //   type: 'linear', // 'radial'
//             //   rotation: 0,
//             //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
//             // },
//         },
//         cornersSquareOptions: {
//             color: '#222222',
//             type: 'extra-rounded',
//             // gradient: {
//             //   type: 'linear', // 'radial'
//             //   rotation: 180,
//             //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
//             // },
//         },
//         cornersDotOptions: {
//             color: '#222222',
//             type: 'dot',
//             // gradient: {
//             //   type: 'linear', // 'radial'
//             //   rotation: 180,
//             //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
//             // },
//         }
//     });
//     const [fileExt, setFileExt] = useState("svg");
//     const [qrCode] = useState(new QRCodeStyling(options));
//     const ref = useRef(null);
    
//     useEffect(() => {
//         if (ref.current) {
//             qrCode.append(ref.current);
//         }
//     }, [qrCode, ref]);

//     useEffect(() => {
//         if (!qrCode)
//             return;
//         qrCode.update(options);
//     }, [qrCode, options]);
    
//     const onDataChange = (event) => {
//         setOptions(options => ({
//             ...options,
//             data: event.target.value
//         }));
//     };
//     const onExtensionChange = (event) => {
//         setFileExt(event.target.value);
//     };
//     const onDownloadClick = () => {
//         if (!qrCode)
//             return;
//         qrCode.download({
//             extension: fileExt
//         });
//     };
//     return (<div className="App">
//       <h2>QR code styling for React</h2>
//       <div ref={ref}/>
//       <div style={styles.inputWrapper}>
//         <input value={options.data} onChange={onDataChange} style={styles.inputBox}/>
//         <select onChange={onExtensionChange} value={fileExt}>
//           <option value="svg">SVG</option>
//           <option value="png">PNG</option>
//           <option value="jpeg">JPEG</option>
//           <option value="webp">WEBP</option>
//         </select>
//         <button onClick={onDownloadClick}>Download</button>
//       </div>
//     </div>);
// }
// const styles = {
//     inputWrapper: {
//         margin: "20px 0",
//         display: "flex",
//         justifyContent: "space-between",
//         width: "100%",
//         maxWidth: "300px"
//     },
//     inputBox: {
//         flexGrow: 1,
//         marginRight: 20
//     }
// };
