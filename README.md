
## This is a [Next.js] Qr-Code Generator it's a simple and easy-to-use 

Getting Started


The Qr-Code Generator Components Shows 2 implmentations 

## 1. react-qr-image 

### Usage

```js
import QRImage from "react-qr-image";
export const QRCodeExample = () => {
  return (
    <QRImage text="" color="" background="" transparent>
      hello
    </QRImage>
  );
};

```

## 2. qrcode 

### Usage

```js
"use client";
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



```
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
