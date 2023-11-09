'use client'
import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function travelPlan() {
    const [travelDetails, setTravelDetails] = React.useState({
        identity: '',
        duration: '',
        budget: '',
        currentLocation:'',  
    })
    // const [travelPlan, setTravelPlan] = React.useState({})

    function handleChooseIdentity(name: string){
        console.log('handle choose')
        setTravelDetails(prevDetails => {
            return {
                ...prevDetails,
                identity: name
            }
        })
        console.log(travelDetails.identity)
    }

    function handleChangeForm(event: React.ChangeEvent<HTMLInputElement>){
        setTravelDetails(prevDetails => {
            return {
                ...prevDetails,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        const response = await fetch('https://gotravelapp.netlify.app/.netlify/functions/travelPlan', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(travelDetails)
        })
        const data = await response.json()
        console.log(data)
        // if (data){
        //     setTravelPlan(data)
        // }
        console.log(travelPlan)
    }

return (

    <section className='hero-travelplan'>
    
        
        {/* LEFT SIDE OF HERO */}
        <div className='max-container padding-container py-10 2xl:py-20 gap-20 flex flex-col  md:flex-row '>
        <div className='relative z-20 bg-white flex flex-1 flex-col shadow-2xl rounded-3xl p-5 md:w-1/2'>
            <Image 
                src="/plane.svg"
                alt='plane icon'
                width={50}
                height={50}
                className='absolute left-[15px] top-[-15px] w-10 lg:w-[50px]'
            />
             <h1 className='bold-32 lg:bold-52'>Let's Craft Your Journey! </h1>
             <p className='regular-16 text-gray-30 mt-2'> Share your travel details, and we'll shape a one-of-a-kind journey tailored to your interests. Get started now and embark on a unique exploration. </p>

             
            <div className='my-3'>
                <h3 className='mb-2'>Choose your personality</h3>
                <div className='flex flex-row overflow-y-hidden overflow-x-auto gap-1 '>
                    <div onClick={() => handleChooseIdentity('Culture and City Explorer')} className={`${travelDetails.identity === 'Culture and City Explorer' ? ' border-black' : ''} border flex flex-col items-center flex-shrink-0 rounded-2xl shadow-xl`}>
                        <Image className='' src='/cultural.png' width={180} height={150} alt={'star'} />
                        <p className='regular-14 -mt-10'>Culture and City Explorer</p>
                    </div>
                    <div onClick={() => handleChooseIdentity('Adventure Seeker')} className={`${travelDetails.identity === 'Adventure Seeker' ? ' border-black' : ''} border flex flex-col items-center flex-shrink-0 rounded-2xl shadow-xl`}>
                        <Image className='' src='/Adventure.png' width={180} height={200} alt={'star'} />
                        <p className='regular-14 -mt-10'>Adventure Seeker</p>
                    </div>
                    <div onClick={() => handleChooseIdentity('Luxury Enthusiast')} className={`${travelDetails.identity === 'Luxury Enthusiast' ? ' border-black' : ''} border flex flex-col items-center flex-shrink-0 rounded-2xl shadow-xl`}>
                        <Image className='' src='/Luxe.png' width={180} height={200} alt={'star'} />
                        <p className='regular-14 -mt-10'>Luxury Enthusiast</p>
                    </div>
                    <div onClick={() => handleChooseIdentity('Nature Lover')} className={`${travelDetails.identity === 'Nature Lover' ? ' border-black' : ''} border flex flex-col items-center flex-shrink-0 rounded-2xl shadow-xl`}>
                        <Image className='' src='/relax.png' width={180} height={200} alt={'star'} />
                        <p className='regular-14 -mt-10'>Nature Lover</p>
                    </div>
                    <div onClick={() => handleChooseIdentity('Budget Traveler')} className={`${travelDetails.identity === 'Budget Traveler' ? ' border-black' : ''} border flex flex-col items-center flex-shrink-0 rounded-2xl shadow-xl`}>
                        <Image className='' src='/Budget.png' width={180} height={200} alt={'star'} />
                        <p className='regular-14 -mt-10 mb-3'>Budget Traveler</p>
                    </div>
                </div>
            </div>
            <div className='max-w-lg'>
                <form onSubmit={handleSubmit}>
                <div className='mt-5'>
                    <h3 className='regular-16 mb-2'>Your Vacation's Duration</h3>
                    <div>
                        <input className="border w-full px-2 py-1" value={travelDetails.duration} onChange={handleChangeForm} name="duration" type='text' placeholder='2 Weeks'/>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='regular-16 mb-2'>Your Maximum Budget</h3>
                    <div>
                        <input className="border w-full px-2 py-1" value={travelDetails.budget} onChange={handleChangeForm} name="budget" type='text' placeholder='500 euro'/>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='regular-16 mb-2'>Your Current Location</h3>
                    <div>
                        <input className="border w-full px-2 py-1"  value={travelDetails.currentLocation} onChange={handleChangeForm}  name="currentLocation" type='text' placeholder='Netherlands'/>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-3 mt-5 xl:flex-row'>
                <Button theme='btn_green' title="Create Travel Plan" type="button" />
                <Button theme="btn_white_text" title="Finish Travel Identity test first" icon="/play.svg" />
             </div>
             </form>
            </div>
           
        </div>
        <div className='relative z-20  flex flex-1 flex-col  justify-center items-start md:w-1/2'>

            <div className='hidden absolute top-0 md:flex bg-green-90 rounded-3xl px-5 py-5'>
                
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col mr-10'>
                        <p className='text-gray-20 medium-14'>Your Travel Plan</p>
                        <p className='text-white bold-16'>Adventure Odyssey in Italy</p>
                    </div>
                </div>

                {/* <div className='flex flex-row mt-5'>
                    <div className='flex flex-col'>
                        <p className='text-gray-20 text-sm'>Suggested Location</p>
                        <p className='text-white bold-16 '>Camping De Paris</p>
                    </div>
                    <div className='flex flex-col ml-10'>
                        <p className='text-gray-20 text-sm'>Days</p>
                        <p className='text-white bold-16 '>7</p>
                    </div>
                    
                </div> */}
               
                
                <Image className='absolute top-5 right-5' src='/white-close.png' width={20} height={5} alt={'star'} />
               
            </div>
            <Image className='hidden md:flex' src='/travelHeroIcon1.png' width={2500} height={1500} alt={'star'} />
        </div>
        </div>
       
    </section>
  );
}
