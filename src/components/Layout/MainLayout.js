import React from "react"

// Components
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )
}

export default MainLayout;