
"use client";

import QRImage from "react-qr-image";

export const QRCodeExample = () => {
  return (
    <QRImage text="" color="" background="" transparent>
      hello
    </QRImage>
  );
};


import { toDataURL } from "qrcode";
import { FC, useEffect, useState } from "react";
type ResultType = {
  isError: boolean;
  result: string;
};

export const QRCodeExample2: FC = () => {
  const [result, setResult] = useState<ResultType>();

  const generateQrCode = (text: string) => {
    toDataURL(text, { margin: 0 })
      .then((result: string) => setResult({ isError: false, result }))
      .catch((error) => {
        const { message: result } = error as Error;
        setResult({ isError: true, result });
      });
  };

  useEffect(() => generateQrCode("test me"), []);

  return (
    <output>
        {result?.isError ? (
          <div>
            <p>{result?.result}</p>
          </div>
        ) : (
          <>
            <img src={result?.result} />
          </>
        )}
      </output>
  );
};

