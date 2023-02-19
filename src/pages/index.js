import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from '@/components/MainView'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainView/>

    
  )
}
