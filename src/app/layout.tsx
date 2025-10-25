import NavBar from "./components/nav/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="">
        <NavBar />
        <main >{children}</main>
      </body>
    </html>
  );
}
