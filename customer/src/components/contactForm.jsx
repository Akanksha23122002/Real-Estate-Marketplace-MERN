
import React,{ useState} from 'react'
import { useNavigate } from "react-router-dom";

export default  function ContactForm(){
   // const navigate = useNavigate();
   const [select,setSelect]=useState('');
    const [fullname,setFullname]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [houses,setHouses]=useState('');
    const [maxPrice,setMaxPrice]=useState('');
    const [minSize,setMinSize]=useState('');
    const [message,setMessage]=useState('');
    const [error,setError] = useState();
    const [success,setSuccess] = useState(false);

    
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
         if(fullname.length==0||phone.length==0||email.length==0){
            setError(true)
         }
         if(fullname&&phone&&email)
         {
        console.log("FullName:",fullname,"\nPhone:",phone,"\nEmail:",email)
         }
        console.log("Houses:",houses );
        console.log("MaxPrice:",maxPrice);
        console.log("MinSize:",minSize );
        console.log("Message:", message);

        const res = await fetch('api/contact/form', {method:"POST",
        headers:{
            "Content-type":"application/json"
        },
       
       });

       const { msg, success} = await res.json();
       setError(msg);
       console.log(error);
       setSuccess(success);

       if(success) 
       {
        setFullname("");
        set
        setEmail("");
        setMessage("");
       }
       
   }
    
    return (
        
        <div className='contact_form'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <div className='contact_form_container py-5'>
                            <div className='p-4 max-w-3xl mx-auto'>
                                <h1 className='text-3xl font-bold'>Contact Us</h1>
                                    <p>Please fill in the form below</p>

                                        <form onSubmit={handleSubmit}
                                            className='py-4 mt-4 border-t flex flex-col gap-7'> 
               
            <div className='flex flex-col gap-4'>
                 <label htmlFor='infomation'>Information</label>  
            
            <div className='flex flex-col gap-2'>
                {/* <h1>{select}</h1> */}
                <select 
                onChange={e=>setSelect(e.target.value)}
                value={select}
                className='shadow-md px-6 py-2 border border-slate-300 rounded-lg'
                type="text" 
                id="i'm a" 
                placeholder="I'm a">
                    <option></option>
                    <option>I'm a</option>
                    <option>I'm a rental seekers</option>
                    <option>I'm a property owner</option>
                </select>
                </div>
                <div className='flex items-center gap-8'>
                    <div>
                    <input 
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    className='shadow-md px-6 py-2 border border-slate-300 rounded-lg'
                    type="text" 
                    id="fullname" 
                    placeholder="Name"/>
                    {error &&fullname.length<=0?
                    <label className='flex flex-col text-red-700 font-normal'>Name can't be empty</label>:""}
                    </div> 

                    <div>
                    <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className='shadow-md px-6 py-2 border border-slate-300 rounded-lg'
                    type="text" 
                    id="phone" 
                    placeholder="Phone"/>
                    {error?
                    < label className='flex flex-col text-red-700 font-normal'>Phone can't be empty</label>:""}
                    </div>

                </div>
                <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='shadow-md px-12 py-2 border border-slate-300 rounded-lg'
                type="text" 
                id="email" 
                placeholder="Email"/>
                <div>
                
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor='Houses'>Property</label>

                <select
                onChange={(e) => setHouses(e.target.value)}
                value={houses}
                className='shadow-md px-6 py-2 border border-slate-300 rounded-lg' 
                id="houses" 
                placeholder="Houses">

                    <option></option>
                    <option>Apartments</option>
                    <option>Houses</option>
                    <option>Villas</option>
                    <option>Condominiums</option>
                    <option>Serviced Apartments</option>
                </select>

                
                <div className='flex items-center gap-12'>
                
                <input 
                type='number'
                id="maxPrice"
                onChange={(e) => setMaxPrice(e.target.value)}
                value={maxPrice}
                min='1500'
                placeholder="Max Price($)"
                className='shadow-md px-6 py-2 border border-slate-300 rounded-lg'/> 
                 
              <input
                type='number' 
                id="minSize"
                onChange={(e) => setMinSize(e.target.value)}
                value={minSize}
                className='shadow-md px-6 py-2 border border-slate-300 rounded-lg' 
                 
                placeholder="Minimum Size(Sq Ft)"/>

                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='message'>Message</label>
                <textarea 
                onChange={(e) => setMessage(e.target.value)} 
                value={message}
                className='shadow-md px-6 py-2 border border-slate-300 h-20 rounded-lg' 
                id="message" 
                placeholder="Type your message here...."></textarea>
            </div>

            <button 
            className='bg-green-700 p-3 text-white font-bold rounded-lg' 
            type="submit"
            onClick={handleSubmit}>Submit</button>
        </form>

        
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
        

               

            
       
}