import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <div className="w-full h-screen min-w-[240px] max-w-[1200px] m-auto shadow-md flex flex-col gap-5">
        {children}
        </div>
      </body>
    </html>
  );
}
