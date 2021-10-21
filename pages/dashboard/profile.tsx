import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Edit2, Edit3 } from 'react-feather';
import PageLayout from '../../components/page-layout'
import getGravatarURL from '../../utils/get-gravatar-image';


export default function Profile() {

  const [isEditing, setEditing] = useState(false);

  const getUploadedImage = () => { }

  const [oldUser, setOldUser] = useState<any>({});

  const [user, setUser] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    telephone: string;
    bio: string;
    avatar: string;
  }>({
    firstname: 'Ebuka',
    lastname: 'Odini',
    email: 'ebukaodini@gmail.com',
    telephone: '090935909559',
    bio: 'I am an innovative software engineer that enjoys learning new technologies to improve product quality. And I also love collaboration.',
    avatar: getGravatarURL('ebukaodini@gmail.com')
  });

  const handleProfileReset = () => {
    setEditing(false)
  }

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // let firstname: HTMLInputElement = (document.getElementById('firstname') as HTMLInputElement).value;
    let firstname = document.getElementById('firstname') as HTMLInputElement;
    let lastname = document.getElementById('lastname') as HTMLInputElement;
    let telephone = document.getElementById('telephone') as HTMLInputElement;
    let bio = document.getElementById('bio') as HTMLInputElement;

    setUser({ firstname: firstname.value, lastname: lastname.value, email: user.email, telephone: telephone.value, bio: bio.value, avatar: user.avatar });
    setEditing(false)
  }

  return (
    <div>
      <Head>
        <title>Profile -- About My Business</title>
        <meta name="description" content="Create a space on the web to tell customers about your business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>

        <section className='text-secondary px-lg-3 cursor-default'>

          <form action='' onReset={handleProfileReset} onSubmit={handleProfileUpdate}>

            <div className='mb-lg-4 mb-3 d-flex align-items-center justify-content-between'>

              <div>

                <label className='form-label d-block'>Profile Picture</label>

                <div
                  onMouseEnter={() => {
                    document.querySelectorAll('.__edit_avatar')[0].classList.replace('d-none', 'd-block');
                  }}
                  onMouseLeave={() => {
                    document.querySelectorAll('.__edit_avatar')[0].classList.replace('d-block', 'd-none');
                  }}
                  className='position-relative cursor-pointer overflow-hidden border rounded-10' style={{ width: '100px', height: '100px' }}>

                  <Image
                    className='img rounded-10'
                    src={user.avatar}
                    alt={`${user.firstname} ${user.lastname}`}
                    title={`${user.firstname} ${user.lastname}`}
                    height={100} width={100} />

                  <label htmlFor="avatar" className='__edit_avatar cursor-pointer d-none position-absolute bottom-0 bg-white p-1 w-100 d-flex justify-content-center align-items-center'>
                    <Edit2 size={14} />
                    <small className='ms-1'>Change</small>
                  </label>

                  <input type="file" accept="image/*" id="avatar" className='d-none' />

                </div>

              </div>

              {
                !isEditing &&
                <button
                  onClick={() => { console.log(oldUser); setOldUser(user); console.log(oldUser); setEditing(true) }}
                  type='button' title='Edit Profile' className='btn btn-sm btn-muted text-secondary'>
                  <Edit3 />
                </button>
              }

            </div>

            <div className='mb-lg-4 mb-3 row'>

              <div className='col-md-6 col-12 mb-md-0 mb-3'>

                <label htmlFor="firstname" className='form-label'>First Name</label>

                <input
                  type="text" id='firstname'
                  className={`form-control text-secondary ${!isEditing ? 'bg-white' : ''}`}
                  readOnly={!isEditing}
                  defaultValue={user.firstname} />

              </div>

              <div className='col-md-6 col-12'>

                <label htmlFor="lastname" className='form-label'>Last Name</label>

                <input
                  type="text" id='lastname'
                  className={`form-control text-secondary ${!isEditing ? 'bg-white' : ''}`}
                  readOnly={!isEditing}
                  defaultValue={user.lastname} />

              </div>

            </div>

            <div className='mb-lg-4 mb-3 row'>

              <div className='col-md-6 col-12 mb-md-0 mb-3'>

                <label htmlFor="email" className='form-label'>Email Address</label>

                <input
                  type="email" id='email'
                  className={`form-control text-secondary bg-white`}
                  readOnly
                  defaultValue={user.email} />

              </div>

              <div className='col-md-6 col-12'>

                <label htmlFor="telephone" className='form-label'>Telephone</label>

                <input
                  type="tel" id='telephone'
                  className={`form-control text-secondary ${!isEditing ? 'bg-white' : ''}`}
                  readOnly={!isEditing}
                  defaultValue={user.telephone} />

              </div>

            </div>

            <div className='mb-lg-4 mb-3'>

              <label htmlFor="bio" className='form-label'>Bio</label>

              <textarea
                id="bio"
                cols={30} rows={5}
                className={`form-control text-secondary ${!isEditing ? 'bg-white' : ''}`}
                readOnly={!isEditing}
                defaultValue={user.bio}></textarea>

            </div>

            {
              isEditing &&
              <div className='mt-5 mb-3'>

                <button
                  type='reset' className='btn btn-muted text-danger px-5'>Cancel</button>

                <button
                  type='submit' className='ms-3 btn btn-primary px-5'>Update</button>

              </div>
            }

          </form>

        </section>

      </PageLayout>

    </div>
  )
}
