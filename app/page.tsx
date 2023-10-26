import Features from '@/components/Features'
import GetApp from '@/components/GetApp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import Travel from '@/components/Travel'
import Image from 'next/image'

export default function Home() {
  return (
   <>
      <Hero />
      <Travel />
      <Guide />
      <Features />
      <GetApp />
   </>
  )
}
 