import React from 'react'
import './jquery/Main';


export default function Slidebar() {

  return (
    <>
      <section className='slidebar '>
        <nav className='mt-3'>
          <ul>
            <li className=' text-bl fx' >
              <div>
                <div href='' className='fx Home a' id="active" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-grid-1x2-fill" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" />
                  </svg>
                  <b className='mx-3 '>Home</b>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-chevron-right icons" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>
                <ul className="mt-1 submenuul"  >
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >E commerce</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project management</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >CRM</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Travel agency</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Social feed</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className=' text-bl mt-2 fx' >
              <div>
                <div href='' className='fx Ecommerce a' id="" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-grid-1x2-fill" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" />
                  </svg>
                  <b className='mx-3 '>E commerce</b>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-chevron-right icons" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}
