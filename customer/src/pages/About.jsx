
import backgroundImage from "./images/a.jpg";

export default function About() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    > 
     
     {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
     <source src={videoback} type="video/mp4" />
      </video> */}
         <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Sahand Estate</h1>
     
     
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>
    </div>
  );

}