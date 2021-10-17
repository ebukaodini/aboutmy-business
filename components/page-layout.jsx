import PageHeader from './page-header'
import PageNavigator from './page-navigator'

export default function PageLayout({ children }) {

  return (
    <div>

      <main className='bg-white'>

        <PageHeader />

        <section className='py-5'>

          <div className='container'>

            <div className='row'>

              <div className='col-lg-4'>

                <PageNavigator />

              </div>

              <div className='col-lg-8'>

                {children}

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}
