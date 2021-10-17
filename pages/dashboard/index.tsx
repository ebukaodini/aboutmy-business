import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../../components/page-layout'

export default function Dashboard() {

  return (
    <div>
      <Head>
        <title>Dashboard -- About My Business</title>
        <meta name="description" content="Create a space on the web to tell customers about your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>

        <section className='text-secondary px-3 cursor-default'>

          <h3 className='fw-normal h3'>Welcome to your dashboard!</h3>

          <span>Setup your profile to continue.</span>

        </section>

      </PageLayout>

    </div>
  )
}
