import Head from "next/head"
import { Props } from '../../types/types';
import React, { useEffect } from 'react'
import { useDispatch} from "react-redux";
import { check_authenticated, load_user, refresh } from "../../hooks/auth";
import Alert from "../notifications/Alert";
import Navbar from "../navigation/navbar/Navbar";
import NavBartMain from "../navigation/navbar/NavBarMain";


const Layout: React.FC<Props> = ({ title, content ,children} ) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_authenticated());
    dispatch(load_user());
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Head>

      <main>
        <Navbar />
        <NavBartMain />
        {children}
      </main>
      <Alert />
    </>
  )
}


export default Layout