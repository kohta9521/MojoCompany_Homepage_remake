import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "合同会社mojo | コーポレートサイト",
  description:
    "こちらのサイトは合同会社mojoのコーポレートサイトです。私たちのやりたいこと、やっていることをご覧いただけます。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
