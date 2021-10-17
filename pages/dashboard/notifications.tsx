import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../../components/page-layout'

export default function Notifications() {

  return (
    <div>
      <Head>
        <title>Notifications -- About My Business</title>
        <meta name="description" content="Create a space on the web to tell customers about your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>

        <section className='text-secondary px-3 cursor-default'>

          <span>Notifications is coming soon!</span>

        </section>

      </PageLayout>

    </div>
  )
}
