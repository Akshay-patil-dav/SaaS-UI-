import React from 'react'

export default function Navigationbar() {
  return (
    <>
      <section >
        <nav className='navigationbar'>
          <button id='Menu_Slider' className='mx-3 mt-2 none' >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <linearGradient id="C9TYDZarys49lHDy~k4THa_eofQ1g5BaAx6_gr1" x1="12.373" x2="34.611" y1="-154.373" y2="-176.611" gradientTransform="matrix(1 0 0 -1 0 -154)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0077d2"></stop><stop offset="1" stop-color="#0b59a2"></stop></linearGradient><path fill="url(#C9TYDZarys49lHDy~k4THa_eofQ1g5BaAx6_gr1)" d="M42,15H6c-1.65,0-3-1.35-3-3v0c0-1.65,1.35-3,3-3h36c1.65,0,3,1.35,3,3v0	C45,13.65,43.65,15,42,15z"></path><linearGradient id="C9TYDZarys49lHDy~k4THb_eofQ1g5BaAx6_gr2" x1="12.373" x2="34.611" y1="-166.373" y2="-188.611" gradientTransform="matrix(1 0 0 -1 0 -154)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0077d2"></stop><stop offset="1" stop-color="#0b59a2"></stop></linearGradient><path fill="url(#C9TYDZarys49lHDy~k4THb_eofQ1g5BaAx6_gr2)" d="M42,27H6c-1.65,0-3-1.35-3-3v0c0-1.65,1.35-3,3-3h36c1.65,0,3,1.35,3,3v0	C45,25.65,43.65,27,42,27z"></path><linearGradient id="C9TYDZarys49lHDy~k4THc_eofQ1g5BaAx6_gr3" x1="12.373" x2="34.611" y1="-178.373" y2="-200.611" gradientTransform="matrix(1 0 0 -1 0 -154)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0077d2"></stop><stop offset="1" stop-color="#0b59a2"></stop></linearGradient><path fill="url(#C9TYDZarys49lHDy~k4THc_eofQ1g5BaAx6_gr3)" d="M42,39H6c-1.65,0-3-1.35-3-3v0c0-1.65,1.35-3,3-3h36c1.65,0,3,1.35,3,3v0	C45,37.65,43.65,39,42,39z"></path>
            </svg>
          </button>
          <div className='account-user' >
            <div className="dropdown">
              <button className="btn border-0  bg-dark bg-gradient" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ display: 'flex' }} >
                <img src='https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg' className='loguser' />
                <b className='mx-2 text-white'>Akshata</b>
              </button>
              <ul className="dropdown-menu shadow p-3 mb-5 bg-body rounded "  >
                <li><a className="dropdown-item " href="#" style={{ display: 'flex' }}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" mt-1 bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>
                  <div className='mx-2'>profile</div>
                </a></li>
                <li><a className="dropdown-item " href="#" style={{ display: 'flex' }}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" mt-1 bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                  </svg>
                  <div className='mx-2'>Setting</div>
                </a></li>

                <li><a className="dropdown-item " href="#" style={{ display: 'flex' }}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" mt-1 bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                  <div className='mx-2'>Help</div>
                </a></li>


                <li><a className="dropdown-item bg-danger text-white rounded-3 " href="#" style={{ display: 'flex' }}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" mt-1 bi bi-gear" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                  </svg>
                  <div className='mx-2'>LogOut</div>
                </a></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}
