import Head from "next/head"
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import Alert from "../notifications/Alert";
import Navbar from "../navigation/navbar/Navbar";
import NavBartMain from "../navigation/navbar/NavBarMain";
import NavBartOfert from "../navigation/navbar/NavBartOfert";

import { motion } from 'framer-motion';
import SidebarOpen from "../navigation/sidebar/sidebar";
import SidebarUser from '../navigation/user/SidebarUser';
import { Props } from "../../utils/types/types";
import { check_authenticated, load_user, refresh } from "../../redux/api/auth";
import { get_items } from "../../redux/api/cart";
import { get_total_order } from "../../redux/api/order";
import { Footer } from "../navigation/footer/Footer";

const Layout: React.FC<Props> = ({ title, content, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_authenticated());
    dispatch(load_user());
    dispatch(refresh());
    dispatch(get_items());

  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
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
      <main className="  bg-gray-50">
        <NavBartMain />

        <Navbar openModal={openModal} openUser={openUser} />
        <NavBartOfert />

        <div className="pb-6">
          {children}
        </div>
      </main>
      {
        sidebarOpen ? (<motion.div ><SidebarOpen closeModal={closeModal} /></motion.div>) : (<></>)
      }
      {
        userOpen ? (<motion.div ><SidebarUser closeUser={closeUser} /></motion.div>) : (<></>)
      }
      <Alert />
      <Footer />


    </>
  )
}


export default Layout