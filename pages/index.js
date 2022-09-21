import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
    font-size: 20px;
    padding: 0rem 2rem;
`;


export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar />
    <Link href='/' passHref>
      <StyledLink>Massage</StyledLink>
    </Link>
  </>
  )
}
