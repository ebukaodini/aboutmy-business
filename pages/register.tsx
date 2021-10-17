import Head from 'next/head'
import Link from 'next/link'

export default function Register() {

  return (
    <div>
      <Head>
        <title>About My Business</title>
        <meta name="description" content="Create a space on the web to tell customers about your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='py-5 bg-white'>

        {/* <div className='h-25 bg-light d-flex flex-column justify-content-center align-items-center text-primary'>

          <h1 className='display-4' style={{ fontWeight: 500 }}>About My Business</h1>
          <p className='lead fw-normal text-center'>Create a space on the web to tell customers about your business.</p>

        </div> */}


        <div className='pt-md-5 d-flex align-items-center container text-dark'>

          <div className='col-lg-4 col-md-5 col-12 mx-auto'>

            <div className='mb-5 text-start'>
              <h2 className='text-primary'>Register</h2>
              <span>Create your profile to get started.</span>
            </div>

            <form action="">

              <div className='mb-3'>

                <label htmlFor="email" className='form-label'>Email Address</label>

                <input type="email" id='email' className='form-control' />

              </div>

              <div className='mb-3'>

                <label htmlFor="password" className='form-label'>Password</label>

                <input type="password" id='password' className='form-control' />

              </div>

              <div className='mb-3'>

                <label htmlFor="cpassword" className='form-label'>Confirm Password</label>

                <input type="password" id='cpassword' className='form-control' />

              </div>

              <div className='mt-5 mb-3'>
                <button className='btn btn-primary w-100'>Register</button>
              </div>

              <div className='text-center'>
                <span>
                  already have an account?{' '}
                  <Link href='/login'>Login</Link>
                </span>
              </div>

            </form>

          </div>

        </div>

      </main>

    </div>
  )
}
