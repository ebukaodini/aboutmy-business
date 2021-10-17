import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <Head>
        <title>About My Business</title>
        <meta name="description" content="Create a space on the web to tell customers about your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='vh-100 bg-light'>

        <div className='h-60 d-flex flex-column justify-content-center align-items-center text-primary'>

          <h1 className='display-4' style={{ fontWeight: 500 }}>About My Business</h1>
          <p className='lead text-center mb-5 text-muted'>Create a space on the web to tell customers about your business.</p>

          <Link href='/register' passHref={true}>
            <span className='btn btn-primary btn-lg px-5'>Get Started!</span>
          </Link>

        </div>

      </main>

    </div>
  )
}
