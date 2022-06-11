import Head from "next/head"
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Alert from "../notifications/Alert";
import Navbar from "../navigation/navbar/Navbar";
import NavBartMain from "../navigation/navbar/NavBarMain";
import { motion } from 'framer-motion';
import SidebarOpen from "../navigation/sidebar/sidebar";
import SidebarUser from '../navigation/user/SidebarUser';
import { Props } from "../../utils/types/types";
import { check_authenticated, load_user, refresh } from "../../redux/api/auth";
import { get_items } from "../../redux/api/cart";
import { Footer } from "../navigation/footer/Footer";
import { AppDispatch, RootState } from "../../redux/store";
import NavbarMovile from "../navigation/navbar/NavbarMovile";
import NavBartMainMovile from "../navigation/navbar/NavBartMainMovile";
import SidebarCart from "../cart/SidebarCart";
import { getWishlist } from "../../redux/api/wishlist";

const Layout: React.FC<Props> = ({ title, content, children }) => {
  const dispatch: AppDispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const [userOpen, setUserOpen] = useState<boolean>(false)

  useEffect(() => {
    dispatch(check_authenticated());
    dispatch(load_user());
    dispatch(refresh());
    dispatch(get_items());
    dispatch(getWishlist())
  }, [dispatch]);

  function closeModal() {
    setSidebarOpen(false)
  }

  function openModal() {
    setSidebarOpen(true)
  }

  function closeUser() {
    setUserOpen(false)
  }

  function openUser() {
    setUserOpen(!userOpen)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Head>
      <main className="  bg-white min-h-screen">
        <NavBartMain />
        <NavBartMainMovile openUser={openUser} />
        <NavbarMovile openModal={openModal} />
        <Navbar openUser={openUser} />
        <div className="pb-6">
          {children}
        </div>
        <div className="relative bottom-0 lg:mt-28 md:mt-16 mt-10">
          <Footer />
        </div>

      </main>
      {
        sidebarOpen && (<motion.div ><SidebarOpen closeModal={closeModal} /></motion.div>)
      }
      <SidebarCart />
      {
        userOpen && (<motion.div ><SidebarUser closeUser={closeUser} /></motion.div>)
      }
      <Alert />
    </>
  )
}


export default Layout