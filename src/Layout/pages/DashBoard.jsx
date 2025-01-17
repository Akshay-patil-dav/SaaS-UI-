import React from 'react'
import Slidebar from '../parts/Slidebar';
import NavigationBar from '../parts/Navigationbar';
import Leftindextop from '../parts/leftindextop';
import Rightndextop from '../parts/Rightndextop';

export default function DashBoard() {
  return (
    <>
      <NavigationBar />
      <Slidebar />
      <section >
          <div className='dashboard fx none' >
                <Leftindextop  />
                <Rightndextop  />
          </div>
      </section>
    </>
  )
}
