import Navbar from "./navbar";
import "../styles/globals.css";
export default function Layout() {

    return (
      <>
        <div>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </div>
        
        <div className = "">
        <Navbar/>
        </div>
      </>
    )
  }