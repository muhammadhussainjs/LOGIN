import React from 'react'
import Bronze from '../assets/Bronze.png'
import Gold from '../assets/Gold.png'
import Silver from '../assets/Silver.png'
import Group from '../assets/Group.png'
import '../App.css'

const Home = () => {
  return (

    <>
<div className=" flex  justify-start sm:justify-center " id='ahmed'>

    <div className='mb-4 pl-2 w-[100%]  md:w-auto'>
        <h1 className='text-4xl mt-6 ml-3 font-semibold'>See where you are</h1>
        <p className='ml-3 mt-3 text-gray-400'>Here is your Leaderboard</p>
        <div className='mt-5 ml-3 flex gap-6'>
            <div>
            <p>Showing :</p>

            </div>
            <div className='pl-auto'>
            <p className='bg-slate-100 rounded-lg px-6'>Overall <span></span></p>

            </div>
        
        </div>



        <div className='flex flex-col sm:flex-row sm:items-center  gap-2 mt-4 w-[90%]'>
            <div className=' px-4 sm:px-12 rounded-2xl bg-slate-200 flex gap-2 items-center'>
 
            <img src={Silver} alt="" className='pt-2' />
            <p className='text-xl'>ghr678</p>
            </div>
            <div className=' p-2 sm:px-12 rounded-2xl bg-slate-200 flex gap-6 items-center'>

            <img src={Gold} alt="" />
            <p className='text-xl'>snehal 1809</p>
            </div>
            <div className=' px-4 sm:px-12 rounded-2xl bg-slate-200 flex gap-4 items-center'>

            <img src={Bronze} alt=""  className='pt-2'/>
            <p className='text-xl'>br7609</p>
            </div>
            
        </div>
        <div className='flex justify-around mr-auto text-xl font-semibold mt-6 w-[90%]'>
            <p className='mr-auto sm:pl-8'>Username</p>
            <p className='sm:pr-8'> Rank</p>
            <p className='ml-auto sm:pr-8'>Score</p>
        </div>
        <div  className='flex justify-around mr-auto text-xl font-semibold mt-6 bg-slate-200 rounded-2xl px-2 py-2 w-[90%]'>
            <p className='mr-auto sm:pl-8'>@sr1809</p>
            <p className='sm:pr-8'>4</p>
            <p className='ml-auto sm:pr-8'>400</p>
        </div>
        <div  className='flex justify-around mr-auto text-xl font-semibold mt-6 bg-slate-200 rounded-2xl px-2 py-2 w-[90%]'>
            <p className='mr-auto sm:pl-8'>@ayush123</p>
            <p className='sm:pr-12 pr-6'>5</p>
            <p className='ml-auto sm:pr-8'>367</p>
        </div>
        <div  className='flex justify-around mr-auto text-xl font-semibold mt-6 bg-slate-200 rounded-2xl px-2 py-2 w-[90%]'>
            <p className='mr-auto sm:pl-8'>@rushi4567</p>
            <p className='sm:pr-14 pr-6'>6</p>
            <p className='ml-auto sm:pr-8'>340</p>
        </div>
        <div  className='flex justify-around mr-auto text-xl font-semibold mt-6 bg-slate-200 rounded-2xl px-2 py-2 w-[90%]'>
            <p className='mr-auto sm:pl-8'>@frenny56789</p>
            <p className='sm:pr-20 pr-12'>7</p>
            <p className='ml-auto sm:pr-8'>320</p>
        </div>
        <div  className='flex justify-around mr-auto text-xl font-semibold mt-6 bg-slate-200 rounded-2xl px-2 py-2 w-[90%]'>
            <p className='mr-auto sm:pl-8'>@vijay678</p>
            <p className='sm:pr-12 pr-6'>8</p>
            <p className='ml-auto sm:pr-8'>318</p>
        </div>
        <div  className='flex justify-around mr-auto text-xl font-semibold mt-6 bg-slate-200 rounded-2xl px-2 py-2 w-[90%]'>
            <p className='mr-auto sm:pl-8'>@brinda670</p>
            <p className='pr-16'>9</p>
            <p className='ml-auto sm:pr-8'>310</p>
        </div>
        <div className='flex justify-end mt-4 mr-6  '>
            <img src={Group} alt="" width={60} />
        </div>
        







    </div>
</div>
    </>
  )
}

export default Home