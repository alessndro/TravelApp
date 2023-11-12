'use client'
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link'
export default function travelPlan() {
    const [travelDetails, setTravelDetails] = React.useState({
        identity: '',
        duration: '',
        persons: '',
        budget: '',
        currentLocation:'',  
    })
    const [generatedPlan, setGeneratedPlan] = React.useState({
        title: '',
        destination_city: '',
        destination_country: '',
        transport_method: '',
        transport_time: '',
        budget: '',
        activities: [],
        residence: "",
        short_summary: ""
    });

    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

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
        try {
            setLoading(true)
            const response = await fetch('https://gotravelapp.netlify.app/.netlify/functions/travelPlan', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(travelDetails)
            })
            if (!response.ok){
                throw  new Error('Provide proper input please')
            }
            const data = await response.json()

            console.log('10 nov - JSON string to Javascript object')
            let travelData = JSON.parse(data.value);
            
            console.log('traveldata')
            console.log(travelData)
            console.log(typeof travelData)
            setGeneratedPlan(travelData)
        }
        catch (error: any) {
            setError(error.message)
            console.log(error.message)
        }
        finally {
            setLoading(false)
            console.log(generatedPlan)
        }
    }

return (

    <section className='hero-travelplan'>
    
        
        {/* LEFT SIDE OF HERO */}
       <div className=' max-container padding-container py-10 2xl:py-20 gap-20 flex flex-col  md:flex-row '>
    
        {!generatedPlan.title ? <div className='relative z-20 bg-white flex flex-1 flex-col shadow-2xl rounded-xl p-10 md:w-1/2'>
            <Image 
                src="/plane.svg"
                alt='plane icon'
                width={50}
                height={50}
                className='absolute left-[35px] top-[0px] w-10 lg:w-[50px]'
            />
             <h2 className='bold-32 lg:bold-52'>Let's Craft Your Journey! </h2>
             <p className='regular-16 text-gray-30 mt-2'> Share your travel details, and we'll shape a one-of-a-kind journey tailored to your interests. Get started now and embark on a unique exploration. </p>
            {loading ?  <div className='flex w-full h-full items-center justify-center'><Image 
                        src="/loadingTravel.svg"
                        alt='loading icon'
                        width={300}
                        height={300}
                        className=''
                        /></div> 
            :
            <div>
                <div className='my-5'>
                        <>
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
                        </>
                </div>

                <div className='max-w-lg'>
                    <form onSubmit={handleSubmit}>
                    <div className='mt-5'>
                        <h3 className='regular-16 mb-2'>Your Vacation's Duration</h3>
                        <div>
                            <input className="border w-full px-2 py-1" required value={travelDetails.duration} onChange={handleChangeForm} name="duration" type='text' placeholder='2 Weeks'/>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h3 className='regular-16 mb-2'>Amount of persons</h3>
                        <div>
                            <input className="border w-full px-2 py-1"  required value={travelDetails.persons} onChange={handleChangeForm}  name="persons" type='text' placeholder='2 persons'/>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h3 className='regular-16 mb-2'>Your Maximum Budget in Euros</h3>
                        <div>
                            <input className="border w-full px-2 py-1" required value={travelDetails.budget} onChange={handleChangeForm} name="budget" type='text' placeholder='500 euro'/>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h3 className='regular-16 mb-2'>Your Current Country</h3>
                        <div>
                            <input className="border w-full px-2 py-1" required value={travelDetails.currentLocation} onChange={handleChangeForm}  name="currentLocation" type='text' placeholder='Netherlands'/>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-3 my-5 mt-10 xl:flex-row'>
                        <Button theme='btn_green' title="Create Travel Plan" type="button" />
                        <Button theme="btn_white_text" title="Finish Travel Identity test first" icon="/play.svg" />
                    </div>
                    </form>
                </div> 
           </div>}
        </div> 
        : 
        <div className='flex flex-col gap-10 md:w-1/2'>
            <div className='relative z-20 bg-white flex flex-1 flex-col shadow-2xl rounded-xl p-10'>
                <Image 
                    src="/plane.svg"
                    alt='plane icon'
                    width={50}
                    height={50}
                    className='absolute left-[15px] top-[-15px] w-10 lg:w-[50px]'
                />
                <h2 className='bold-32 lg:bold-52'>Your Personal Travel Plan</h2>
                <p className='regular-16 text-gray-30 my-2'> Share your travel details, and we'll shape a one-of-a-kind journey tailored to your interests. Get started now and embark on a unique exploration. Don't forget to leave a review! </p>
                <div className='flex items-center justify-start mt-5'>
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <p className='ml-5 medium-14'>50k<span className='ml-1 text-gray-30'>Verified Reviews</span></p>
             </div>
                <div className='flex flex-col w-full gap-3 mt-10 sm:flex-row'>
                    <Button theme='btn_green' title="Share your plan" type="button" />
                    <Link href="/"> <Button theme="btn_white_text" title="Write an review" icon="/play.svg" /></Link>
                </div>
            </div>
            <div className='relative z-20 bg-white flex flex-1 flex-col shadow-2xl rounded-xl p-10'>
                <div>
                    <h3 className='bold-20 lg:bold-32 my-2 lg:my-4'>{generatedPlan.title}</h3>
                    <div className='flex flex-row my-2 lg:my-4'>
                        <p className='w-1/2'><span className='bold-16'>Location:</span> {generatedPlan.destination_city} in {generatedPlan.destination_country}</p>
                        <p className='w-1/2'><span className='bold-16'>Budget:</span> {generatedPlan.budget}</p>
                    </div>
                    <div className='flex flex-row my-2 lg:my-4'>
                        <p className='w-1/2'><span className='bold-16'>Transport:</span> {generatedPlan.transport_method}</p>
                        <p className='w-1/2'><span className='bold-16'>Duration:</span> {generatedPlan.transport_time}</p>
                    </div>
                    <p className='bold-16'>Activities:</p>
                    <ol>{generatedPlan.activities.map((activity) => {
                        return <li><p className='mb-3'>- {activity}</p></li>
                    })}</ol>
                    <p className='my-2 lg:my-4'><span className='bold-16'>Residence:</span><br></br> {generatedPlan.residence}</p>
                    <p className='my-2 lg:my-4'><span className='bold-16'>Short summary:</span><br></br> {generatedPlan.short_summary}</p>
                </div>
            </div>
        </div>
        }

        
        <div className='relative z-20  flex flex-1 flex-col  justify-center items-start md:w-1/2'>

            <div className='hidden absolute top-0 md:flex bg-green-90 rounded-xl px-5 py-5'>
                {!generatedPlan.title ?
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col mr-10'>
                        <p className='text-gray-20 medium-14'>Your Travel Plan</p>
                        <p className='text-white bold-16'>Adventure Odyssey in Italy</p>
                    </div>
                </div>

            
                : <div className='flex flex-row justify-between'>
                    <div className='flex flex-col mr-10'>
                    <p className='text-gray-20 medium-14'>Your Travel Plan</p>
                    <p className='text-white bold-16'>{generatedPlan.title}</p>
                    </div>
                </div>}
                <Image className='absolute top-5 right-5' src='/white-close.png' width={20} height={5} alt={'star'} />
    
            </div>
            {generatedPlan.title ? <Image className='hidden md:flex' src='/gotravel.svg' width={3500} height={2500} alt={'star'} /> : <Image className='hidden md:flex' src='/travelHeroIcon1.png' width={3500} height={2500} alt={'star'} />}
            
        </div>
        </div>
       
    </section>
  );
}
