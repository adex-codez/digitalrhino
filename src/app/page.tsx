import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'

const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description: 'Get your assets delivered to your email in seconds and download them right away'
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description: 'Every asset on our platform is verified by our team to ensure our highest quality standard. Not happy? We offer a 30-day refund guarantee.'
  },
  {
    name: 'For the planet',
    Icon: Leaf,
    description: "We've pledged 1% of the sales to the preservation and restoration of the natural environment."
  },


]

export default function Home() {
  return (
  <>
   <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
          Your marketplace for high-quality {' '}
          <span className='text-teal-600'>digital assets</span>.
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to DigitalHippo. Every assets is verified by our team to ensure ourhigh quality standard</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>
      { /* Todo: add product lists*/ }
    </MaxWidthWrapper> 
    <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm: gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map(perk => (
             <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'> 
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-900'>
                    {<perk.Icon className='w-1/3 h-1/3'/>}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:mt-6 lg:ml-0'>
                  <h3 className='font-medium text-base text-gray-900'>{perk.name}</h3>
                  <p className='mt-3 text-sm text-muted-foreground'>{perk.description}</p>
                </div>
              </div> 
            ))}
          </div>
        </MaxWidthWrapper>
    </section>
   </>
  )
}

