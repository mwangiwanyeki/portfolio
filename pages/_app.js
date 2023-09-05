
import '../styles/globals.css';

import Head from "next/head";

// Importing component
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router component
import { useRouter } from 'next/router';

// import framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
  <>
    <Head>
        <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Layout>
      
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      
      </Layout>
      </>
  );

}

export default MyApp;
