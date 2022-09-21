import Head from 'next/head';
import Navbar from '../components/Navbar'
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero>
        <Heading>CART</Heading>
      </Hero>
    </>
  );
}