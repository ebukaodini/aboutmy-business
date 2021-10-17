import RouteHeader from "./route-header"

export default function PageHeader() {

  return (

    <header className='bg-light py-5 border-bottom'>

      <div className='container pb-lg-5 d-flex flex-column justify-content-center align-items-start'>

        <h1 className='display-4 text-primary' style={{ fontWeight: 500 }}>
          <RouteHeader />
        </h1>
        <p className='lead text-start m-0 text-muted'>Create a space on the web to tell customers about your business.</p>

      </div>

    </header>

  )
}