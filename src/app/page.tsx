import { QRCodeExample, QRCodeExample2 } from "@/lib/react-qrcode";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <QRCodeExample />
      <QRCodeExample2 />
    </main>
  );
}
