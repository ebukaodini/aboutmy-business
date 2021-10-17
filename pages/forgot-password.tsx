import Head from 'next/head'
import Link from 'next/link'

export default function ForgotPassword() {

  return (
    <div>
      <Head>
        <title>About My Business</title>
        <meta name="description" content="Create a space on the web to tell customers about your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='py-5 bg-white'>

        <div className='pt-md-5 d-flex align-items-center container text-dark'>

          <div className='col-lg-4 col-md-5 col-12 mx-auto'>

            <div className='mb-5 text-start'>
              <h2 className='text-primary'>Forgot Password</h2>
              <span>Enter your registered email to reset your password.</span>
            </div>

            <form action="">

              <div className='mb-3'>

                <label htmlFor="email" className='form-label'>Email Address</label>

                <input type="email" id='email' className='form-control' />

              </div>

              <div className='mt-4 mb-3'>
                <button className='btn btn-primary w-100'>Submit</button>
              </div>

              <div className='text-center'>
                <span>
                  Return to{' '}
                  <Link href='/register'>Login</Link>
                </span>
              </div>

            </form>

          </div>

        </div>

      </main>

    </div>
  )
}
