import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <header>
        <div className="logo">
          <Image 
          src="/Nairarefill_logo.webp" 
          alt='log'
          width={100}
          height={20}
          priority
          />
        </div>

        <div className="rightsection">
          <div className="innerright">
            <a href="/register" className='registerbtn'>Register</a>
            <a href="/login" className='registerbtn'>Login</a>
          </div>
        </div>
      </header>

      <div className="mainform">
        <div className="formLeft">
          <h2>We've Missed You</h2>

          <p>
            Kindly signin and get first access to the very best, community and unlock more opportunities.
          </p>
          <form action="">
            <div className="inputwrapper">
              <label htmlFor="email">email</label>
            <input type="text" className="email" />
            </div>
          </form>
        </div>
        <div className="formRight">hdjk</div>

      </div>

    </main>
  )
}
