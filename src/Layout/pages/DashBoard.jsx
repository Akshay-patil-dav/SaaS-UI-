import 'react'
import Slidebar from '../parts/Slidebar';
import NavigationBar from '../parts/Navigationbar';
import Rightndextop from '../parts/Rightndextop';

export default function DashBoard() {
  return (
    <>
      <NavigationBar />
      <Slidebar />
      <section >
          <div className='dashboard fx ' >
                <Rightndextop  />
          </div>
      </section>
    </>
  )
}
