import Head from 'next/head'
import Link from 'next/link'

export default function Login() {

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
              <h2 className='text-primary'>Login</h2>
              <span>Login to gain access to your business profiles.</span>
            </div>

            <form action="/dashboard">

              <div className='mb-3'>

                <label htmlFor="email" className='form-label'>Email Address</label>

                <input type="email" id='email' className='form-control' />

              </div>

              <div className='mb-3'>

                <label htmlFor="password" className='form-label'>Password</label>

                <input type="password" id='password' className='form-control' />

              </div>

              <div className='mt-5 mb-3'>
                <button className='btn btn-primary w-100'>Log In</button>
              </div>

              <div className='text-center'>
                <span>
                  Don&apos;t have an account?{' '}
                  <Link href='/register'>Register</Link>
                </span>
              </div>

              <div className='text-center'>
                <span>
                  <Link href='/forgot-password'>Forgot&nbsp;Password</Link>
                </span>
              </div>

            </form>

          </div>

        </div>

      </main>

    </div>
  )
}
