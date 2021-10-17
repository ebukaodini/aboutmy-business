import Head from 'next/head'
import Link from 'next/link'

export default function ResetPassword() {

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
              <h2 className='text-primary'>Reset Password</h2>
              <span>Enter a new password to regain access to your account.</span>
            </div>

            <form action="">

              <div className='mb-3'>

                <label htmlFor="password" className='form-label'>Password</label>

                <input type="password" id='password' className='form-control' />

              </div>

              <div className='mb-3'>

                <label htmlFor="cpassword" className='form-label'>Confirm Password</label>

                <input type="password" id='cpassword' className='form-control' />

              </div>

              <div className='mt-5 mb-3'>
                <button className='btn btn-primary w-100'>Reset Password</button>
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
