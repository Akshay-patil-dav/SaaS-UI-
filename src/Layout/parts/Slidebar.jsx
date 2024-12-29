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
            <li className='fx mt-3' style={{ position: 'relative', right: '5px', color: 'blue' }} >
              <b>App  </b>
            </li>

            <li className=' text-bl mt-2 fx' >
              <div>
                <div href='' className='fx Ecommerce a' id="" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                  <b className='mx-3 '>E-commerce</b>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-chevron-right icons-Ecommerce" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>

                <ul className="mt-1 submenuul-commerce"  >
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Add product</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Products</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Customers</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Customer details</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Orders</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Order details</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Refund</a>
                  </li>
                </ul>
              </div>
            </li>


            <li className=' text-bl mt-2 fx' >
              <div>
                <div href='' className='fx CRM a' id="" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <b className='mx-3 '>CRM</b>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-chevron-right icons-CRM" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>

                <ul className="mt-1 submenuul-CRM"  >
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Analytics</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Deals</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Deal details</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Leads</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Lead details</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Reports</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Report details</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Add contact</a>
                  </li>
                </ul>
              </div>
            </li>


            <li className=' text-bl mt-2 fx' >
              <div>
                <div href='' className='fx project a' id="" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z" />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                  </svg>
                  <b className='mx-3 ' style={{ fontSize: '13px' }}>Project management</b>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-chevron-right icons-project" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>

                <ul className="mt-1 submenuul-project"  >
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Create new</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project list view</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project card view</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project board view</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Todo list</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project details</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Report details</a>
                  </li>

                </ul>
              </div>
            </li>

            <li className=' text-bl mt-2 fx' >
              <div>
                <div href='' className='fx Customer a' id="" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi mt- bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                  <b className='mx-3 ' >Customer</b>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mt-1 bi-chevron-right icons-Customer" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>

                <ul className="mt-1 submenuul-Customer"  >
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Create new</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project list view</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project card view</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project board view</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Todo list</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Project details</a>
                  </li>
                  <li className='fx submen'  >
                    <a href='' style={{ textDecoration: 'none' }} >Report details</a>
                  </li>

                </ul>
              </div>
            </li>


          </ul>
        </nav>
      </section>
    </>
  )
}
