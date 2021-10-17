import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { Bell, Briefcase, Home, LogIn, LogOut, Settings, User, UserCheck, UserX } from "react-feather"

export default function PageNavigator() {

  const router = useRouter()

  return (

    <nav className='rounded-18 p-3 bg-white shadow'>

      <ul className="list-unstyled">

        <li>
          <Link href='/dashboard' prefetch passHref>
            <span className={`list-group-item list-group-item-action cursor-pointer rounded-pill border-0 mb-2 ${router.route === '/dashboard' ? 'active shadow-sm' : ''} d-flex align-items-center`}>
              <Home /> <span className="ms-3">Dashboard</span>
            </span>
          </Link>
        </li>

        <li>
          <Link href='/dashboard/profile' prefetch passHref>
            <span className={`list-group-item list-group-item-action cursor-pointer rounded-pill border-0 mb-2 ${router.route.startsWith('/dashboard/profile') ? 'active shadow-sm' : ''} d-flex align-items-center`}>
              <User /> <span className="ms-3">Your Profile</span>
            </span>
          </Link>
        </li>

        <li>
          <Link href='/dashboard/business' prefetch passHref>
            <span className={`list-group-item list-group-item-action cursor-pointer rounded-pill border-0 mb-2 ${router.route.startsWith('/dashboard/business') ? 'active shadow-sm' : ''}`}>
              <Briefcase /> <span className="ms-3">Your Business</span>
            </span>
          </Link>
        </li>

        <li>
          <Link href='/dashboard/notifications' prefetch passHref>
            <span className={`list-group-item list-group-item-action cursor-pointer rounded-pill border-0 mb-2 ${router.route.startsWith('/dashboard/notifications') ? 'active shadow-sm' : ''} d-flex align-items-center`}>
              <Bell /> <span className="ms-3">Notifications</span>
            </span>
          </Link>
        </li>

        <li>
          <Link href='/dashboard/settings' prefetch passHref>
            <span className={`list-group-item list-group-item-action cursor-pointer rounded-pill border-0 mb-2 ${router.route.startsWith('/dashboard/settings') ? 'active shadow-sm' : ''} d-flex align-items-center`}>
              <Settings /> <span className="ms-3">Settings</span>
            </span>
          </Link>
        </li>

        <li>
          <Link href='/login' prefetch passHref>
            <span className={`list-group-item list-group-item-action cursor-pointer rounded-pill border-0 mb-2 d-flex align-items-center`}>
              <LogOut style={{ transform: 'rotate(180deg)' }} /> <span className="ms-3">Log Out</span>
            </span>
          </Link>
        </li>

      </ul>

    </nav>

  )
}