'use client'
import React, { use } from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function Questions() {
    // Input used to link personality
    const [userInformation, setUserInformation] = React.useState({
        type: '',
        location: '',
        activity: '',
        food: '',
        evening: '',
    })

    const [travelPersonality, setTravelPersonality] = React.useState("")
    const [travelIdentity, setTravelIdentity] = React.useState('')
    const [showIdentity, setShowIdentity] = React.useState(false)
    const [travelImage, setTravelImage] = React.useState('')
    const [isSurveyDisplayed, setIsSurveyDisplayed] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState()

    function toggleSurvey(){
        setIsSurveyDisplayed(prevStatus => !prevStatus)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        console.log('handle change')
        setUserInformation(prevUser => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        try {
            setLoading(true)
    
            const url = 'https://gotravelapp.netlify.app/.netlify/functions/travelIdentity'
                
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                    body: JSON.stringify(userInformation),
            })
            const data = await response.json()
            setShowIdentity(prevShow => !prevShow)
            // Retrieve the travel personality
            setTravelPersonality(data.value)
            if (data.value)
            {
                setTravelIdentity(data.value.split(".")[0].split(" ").slice(-2).join(' '))
            }
        }
        catch (error: any) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        if (travelIdentity.toLowerCase() === 'adventurous explorer')
        {
                setTravelImage('Adventure.png')
        }
        else if (travelIdentity.toLowerCase() === 'culture and city explorer')
        {
                setTravelImage('Cultural.png')
        }
        else if (travelIdentity.toLowerCase() === 'luxury enthusiast')
        {
            setTravelImage('Luxe.png')
        }
        else if (travelIdentity.toLowerCase() === 'relaxation and nature lover' && travelIdentity.toLowerCase() === 'nature lover')
        {
            setTravelImage('relax.png')
        }
        else if (travelIdentity.toLowerCase() === 'budget traveler')
        {
            setTravelImage('Budget.png')
        }
    }, [travelIdentity])
    
    return (
             
    <section className='question-hero'>
        
        <div className='container max-container padding-container flex flex-col py-10 2xl:py-20 md:flex-row'>
        {!showIdentity && 
        
        <div className='relative z-20 bg-white flex flex-1 flex-col shadow-2xl rounded-xl p-10 md:w-1/2'>
            <Image 
                src="/plane.svg"
                alt='plane icon'
                width={50}
                height={50}
                className='absolute left-[35px] top-[6px] w-10 lg:w-[50px]'
            />
            
            <h2 className='bold-32 lg:bold-52'>Discover your Travel Identity</h2>
            
            {loading ? <div className='flex w-full h-full items-center justify-center'><Image 
                        src="/loadingTravel.svg"
                        alt='loading icon'
                        width={300}
                        height={300}
                        className=''
                        />
            </div> 
            : <div>
            <p className='regular-16 text-gray-30 mt-5 mb-10 '>Are you a true wanderer at heart, always seeking new adventures and exploring new horizons? Or do you prefer the comforts of home and the familiarity of your surroundings? Find out where you stand on the travel spectrum with our Travel Identity Survey. Travel identity is a unique and personal way to understand how you connect with the world through your travel experiences. It's about recognizing your travel preferences, exploring your comfort zones, and discovering the destinations and experiences that truly resonate with you.</p>

                {!isSurveyDisplayed ? 
            
                <div onClick={toggleSurvey}><Button type="button" title='Start the survey' theme='btn_green' icon="/user.svg"/></div> 
                
                :
                
                <form  onSubmit={handleSubmit} className='slide-in-fwd-center overflow-y-auto max-h-96 mb-5'>

                    <fieldset>
                        <legend className='mb-2 bold-16'>1. What type of vacation experience do you prefer the most?</legend>
                        
                        <div className='flex flex-col'>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="adventureActivity"
                                    name="type"
                                    value="Adventure and adreline-packed activities"
                                    checked={userInformation.type === "Adventure and adreline-packed activities"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="adventureActivity">Adventure and adreline-packed activities</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="exploreActivity"
                                    name="type"
                                    value="Exploring new cities, their culture, and history"
                                    checked={userInformation.type === "Exploring new cities, their culture, and history"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="exploreActivity">Exploring new cities, their culture, and history</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="luxeActivity"
                                    name="type"
                                    value="Luxurious and comfortable getaways"
                                    checked={userInformation.type === "Luxurious and comfortable getaways"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="luxeActivity">Luxurious and comfortable getaways</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="relaxActivity"
                                    name="type"
                                    value="Relaxing on a beach or in natural surroundings"
                                    checked={userInformation.type === "Relaxing on a beach or in natural surroundings"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="relaxActivity">Relaxing on a beach or in natural surroundings</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="budgetActivity"
                                    name="type"
                                    value="Traveling on a budget and making the most of your money"
                                    checked={userInformation.type === "Traveling on a budget and making the most of your money"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="budgetActivity">Traveling on a budget and making the most of your money</label>
                            </div>
                        </div>
                        <br />
                    </fieldset>
                    
                    <fieldset>
                        <legend className='mb-2 bold-16'>2. Choose your ideal accommodation:</legend>
                        
                        <div className='flex flex-col'>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="natureAccomodation"
                                    name="location"
                                    value="Rustic lodges or camping sites close to nature"
                                    checked={userInformation.location === "Rustic lodges or camping sites close to nature"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="natureAccomodation">Rustic lodges or camping sites close to nature</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="boutiqueHotel"
                                    name="location"
                                    value="Boutique hotels in the heart of a bustling city"
                                    checked={userInformation.location === "Boutique hotels in the heart of a bustling city"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="boutiqueHotel">Boutique hotels in the heart of a bustling city</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="lavishHotel"
                                    name="location"
                                    value="Lavish five-star resorts with all amenities"
                                    checked={userInformation.location === "Lavish five-star resorts with all amenities"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="lavishHotel">Lavish five-star resorts with all amenities</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="beachHotel"
                                    name="location"
                                    value="Beachfront resorts or cozy cabins in serene locations"
                                    checked={userInformation.location === "Beachfront resorts or cozy cabins in serene locations"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="beachHotel">Beachfront resorts or cozy cabins in serene locations</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="budgetHotel"
                                    name="location"
                                    value="Budget-friendly hostels or guesthouses"
                                    checked={userInformation.location === "Budget-friendly hostels or guesthouses"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="budgetHotel">Budget-friendly hostels or guesthouses</label>
                            </div>
                        </div>
                        <br />

                    </fieldset>

                    <fieldset>
                        <legend className='mb-2 bold-16'>3. Your preferred travel activity:</legend>
                        
                        <div className='flex flex-col'>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="thrilling"
                                    name="activity"
                                    value="Thrilling adventures like zip-lining and scuba diving"
                                    checked={userInformation.activity === "Thrilling adventures like zip-lining and scuba diving"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="thrilling">Thrilling adventures like zip-lining and scuba diving</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="museum"
                                    name="activity"
                                    value="Museum visits, historical tours, and local food tasting"
                                    checked={userInformation.activity === "Museum visits, historical tours, and local food tasting"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="museum">Museum visits, historical tours, and local food tasting</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="spa"
                                    name="activity"
                                    value="Spa treatments, fine dining, and upscale shopping"
                                    checked={userInformation.activity === "Spa treatments, fine dining, and upscale shopping"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="spa">Spa treatments, fine dining, and upscale shopping</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="natureWalks"
                                    name="activity"
                                    value="Beachcombing, nature walks, and spa treatments"
                                    checked={userInformation.activity === "Beachcombing, nature walks, and spa treatments"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="natureWalks">Beachcombing, nature walks, and spa treatments </label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="localMarkets"
                                    name="activity"
                                    value="Exploring local markets, street food, and affordable excursions"
                                    checked={userInformation.activity === "Exploring local markets, street food, and affordable excursions"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="localMarkets">Exploring local markets, street food, and affordable excursions</label>
                            </div>
                        </div>
                        <br />

                    </fieldset>

                    <fieldset>
                        <legend className='mb-2 bold-16'>4. What's your preferred dining experience:</legend>
                        
                        <div className='flex flex-col'>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="streetfood"
                                    name="food"
                                    value="Trying street food and local delicacies"
                                    checked={userInformation.food === "Trying street food and local delicacies"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="unemployed">Trying street food and local delicacies</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="localrestaurants"
                                    name="food"
                                    value="Dining at local restaurants and savoring regional cuisine"
                                    checked={userInformation.food === "Dining at local restaurants and savoring regional cuisine"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="localrestaurants">Dining at local restaurants and savoring regional cuisine</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="michelin"
                                    name="food"
                                    value="Fine dining at Michelin-starred restaurants"
                                    checked={userInformation.food === "Fine dining at Michelin-starred restaurants"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="unemployed">Fine dining at Michelin-starred restaurants</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="casualbeachfront"
                                    name="food"
                                    value="Casual beachfront dining with fresh seafood"
                                    checked={userInformation.food === "Casual beachfront dining with fresh seafood"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="casualbeachfront">Casual beachfront dining with fresh seafood</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="localBudget"
                                    name="food"
                                    value="Eating at budget-friendly local eateries"
                                    checked={userInformation.food === "Eating at budget-friendly local eateries"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="localBudget">Eating at budget-friendly local eateries</label>
                            </div>
                        </div>
                        <br />

                    </fieldset>


                    <fieldset>
                        <legend className='mb-2 bold-16'>5. How do you like to spend your evenings while traveling:</legend>
                        
                        <div className='flex flex-col'>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="campfire"
                                    name="evening"
                                    value="Sharing adventure stories by the campfire"
                                    checked={userInformation.evening === "Sharing adventure stories by the campfire"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="campfire">Sharing adventure stories by the campfire</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="events"
                                    name="evening"
                                    value="Attending local cultural events and festivals"
                                    checked={userInformation.evening === "Attending local cultural events and festivals"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="events">Attending local cultural events and festivals</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="cocktails"
                                    name="evening"
                                    value="Enjoying cocktails at upscale bars and lounges"
                                    checked={userInformation.evening === "Enjoying cocktails at upscale bars and lounges"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="cocktails">Enjoying cocktails at upscale bars and lounges</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="sunset"
                                    name="evening"
                                    value="Watching the sunset on the beach or stargazing"
                                    checked={userInformation.evening === "Watching the sunset on the beach or stargazing"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="sunset">Watching the sunset on the beach or stargazing</label>
                            </div>
                            <div className='mb-2'>
                                <input
                                    type="radio"
                                    id="entertainment"
                                    name="evening"
                                    value="Exploring budget-friendly entertainment options"
                                    checked={userInformation.evening === "Exploring budget-friendly entertainment options"}
                                    onChange={handleChange}
                                />
                                <label className='ml-3' htmlFor="entertainment">Exploring budget-friendly entertainment options</label>
                            </div>
                        </div>
                        <br />
            
                        
                    </fieldset>


                    {error && <p className='mt-5 text-green-700'>{error}</p>}
                    <Button type="button" title='Show my identity' theme='btn_dark_green' icon="/user.svg"/>
                </form>
                }
            </div>}
        </div>
        }

        {showIdentity &&
            <div className='relative z-20 bg-white flex flex-1 flex-col shadow-2xl rounded-xl p-10 md:w-1/2'>
                 <div className='flex flex-col md:flex-row '>
                    <div className='flex flex-col justify-center'>
                        <h2 className='bold-32 lg:bold-40'>Great News!</h2>
                        <div className='slide-in-fwd-center'>
                                <Image className='' src={travelImage} width={280} height={250} alt={'personality'} />
                            </div>
                        <h3 className='regular-42 lg:regular-32 mt-2 lg:mt-4 text-green-950'>{travelIdentity ? travelIdentity : 'A real Traveler'}</h3>
                        <p className='regular-16 text-gray-30 mt-5 lg:w-max-md'>Our AI machines have delved deep into your travel preferences, and the verdict is in. Get ready to uncover your extraordinary travel personality! {travelPersonality && travelPersonality}.

Here are a few tailored recommendations for your next adventure: </p>
                    </div>
                </div>
               
            
            <div className='flex flex-col w-full gap-3 mt-10 sm:flex-row'>
                <Link href="/personality"><Button theme='btn_green' title="Generate plan" type="button" /></Link>
                <Button theme="btn_white_text" title="Share with friends" icon="/play.svg" />
             </div>
            </div>
        }
        
    
            <div className='lg:w-1/2 hidden lg:flex items-center justify-center'>
                <Image 
                    src={"/identity.png"}
                    alt='image personality'
                    width={700}
                    height={400}
                    className='slide-in-fwd-center w-full'
                />
            </div>
        </div>

    </section>
  )
}
