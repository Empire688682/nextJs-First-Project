
import Navbar from "@/Component/navbar/navbar";
import Footer from "@/Component/footer/footer";
import "./globals.css";
import ServerSideProvider from "@/Component/testingSersideProvider/page";

export const metadata = {
  title: "Empire Next App",
  description: "This app was created by JayEmpire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     {/* <ServerSideProvider> */}
     <div className="main-container">
      <Navbar/>
      {children}
      <Footer/>
      </div>
     {/* </ServerSideProvider> */}
      </body>
    </html>
  );
}
