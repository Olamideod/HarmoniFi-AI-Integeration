
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import FeaturedPlaylists from './FeaturedPlaylists';
import SearchResults from './SearchResults';

const HomePage = ({ setView, setGlobalPlaylistId, setGlobalCurrentSongId, setGlobalIsTrackPlaying, setGlobalArtistId }) => {
    const { data: session } = useSession()
    const [searchData, setSearchData] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    async function updateSearchResults(query) {
        const response = await fetch("https://api.spotify.com/v1/search?" + new URLSearchParams({
            q: query,
            type: ["artist", "playlist", "track"]
        }), {
            headers: {
                Authorization: `Bearer ${session.accessToken}`
            }
        })
        const data = await response.json()
        setSearchData(data)
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    return (
        
        <div className=' flex-grow h-screen'>
            <head>
                <meta charset="utf-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="X-UA-Compatible"></meta>
                <title>HomePage</title>
                <meta name="viewpoint" content="https://github.com/idibia11"></meta>
                <link rel="stylesheet" href="home.css"></link>
            </head>
            <header className='text-white sticky top-0 h-20 z-10 text-4xl flex items-center px-8'>
                <MagnifyingGlassIcon className='absolute top-7 left-10 h-6 w-6 text-neutral-800' />
                <input value={inputValue} onChange={async (e) => {
                    setInputValue(e.target.value)
                    await updateSearchResults(e.target.value)
                }} ref={inputRef} className='rounded-full bg-white w-100 pl-12 text-neutral-900 text-base py-2 font-normal outline-0' />
            </header>
            <div onClick={() => signOut()} className='absolute z-20 top-5 right-8 flex items-center bg-white bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
                <img className='rounded-full w-0 h-7' src={session?.user.image} alt="profile pic" />
                <p className='text-sm'>Logout</p>
                <ChevronDownIcon className='h-5 w-5' />
            </div>
            
            
            <div class="hero primary-header group">
                <div>
                    <h1 class="logo">
                        <a href="index.html">Artists Conference</a>
                    </h1>
                </div>
                <h3  class="tagline">August 24&ndash;26th &mdash; Chicago, IL</h3>
                <nav  class=" nav primary-nav">
                    <h5>
                        <a href="index.html">Home</a>
                        <a href="speakers.html">Speakers</a>
                        <a href="schedule.html">Schedule</a>
                        <a href="venue.html">Venue</a>
                        <a href="register.html">Register</a>
                        <a href="view.html">View</a>
                    </h5>
                </nav>
            </div>

            <section class="row-alt">
                <div class="container">
            
                <h1>Speakers</h1>
            
                <p>We&#8217;re happy to welcome over twenty speakers to present on the industry&#8217;s latest technologies. Prepare for an inspiration extravaganza.</p>
                
                </div>
            </section>
            <section id="wrapper">

                <div class="content_wrapper">
                    <h1>Chika Igbokwe</h1>
                    <h4>Going to Library</h4>
                    <p>
                        With the height and vertical alignment in place, let’s apply vertical margins 
                        to the images. Using a negative 66-pixel margin on the top of the images, 
                        we’ll pull them slightly out of the  element and make them vertically 
                        centered with the top border of the element with a class attribute value 
                        of speaker-info. Then, applying a 22-pixel margin on the bottom of the image 
                        provides space between the image and the  element below it.
                    </p>
                    <h5>About Library</h5>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username"></input>
                    <p>
                        With the height and vertical alignment in place, let’s apply vertical margins 
                        to the images. Using a negative 66-pixel margin on the top of the images, 
                        we’ll pull them slightly out of the  element and make them vertically 
                        centered with the top border of the element with a class attribute value 
                        of speaker-info. Then, applying a 22-pixel margin on the bottom of the image 
                        provides space between the image and the  element below it.
                    </p>
                    <h5>About Library</h5>
                    <p>
                        With the height and vertical alignment in place, let’s apply vertical margins 
                        to the images. Using a negative 66-pixel margin on the top of the images, 
                        we’ll pull them slightly out of the  element and make them vertically 
                        centered with the top border of the element with a class attribute value 
                        of speaker-info. Then, applying a 22-pixel margin on the bottom of the image 
                        provides space between the image and the  element below it.
                    </p>
                
                </div>
                <div class="sisde_wrapper">
                   <aside class="col-1-3">
                        <div class="speaker-info">
                    
                            <img src="image.jpg" alt="Camera Man"></img>
                        
                            <ul>
                                <li><a href="https://twitter.com/ogbonnaukah">@UkaOgbonna</a></li>
                                <li><a href="http://learn.shayhowe.com/">learn.shayhowe.com</a></li>
                            </ul>
                        </div>
                        <audio src="https://s3.yesstreaming.net:19000" controls>
                            <source src="jazz.ogg" type="audio/ogg"></source>
                            <source src="jazz.mp3" type="audio/mpeg"></source>
                            <source src="jazz.wav" type="audio/wav"></source>
                            Please <a href="jazz.mp3"download>download</a> the audio file.
                        </audio>
                    </aside>
                </div>
                <section class="section_wrapper hero">
                    <div class="content_wrapper">
                        <h1>Chika Igbokwe</h1>
                       
                        <h4>Going to Library</h4>
                        <p>
                            With the height and vertical alignment in place, let’s apply vertical margins 
                            to the images. Using a negative 66-pixel margin on the top of the images, 
                            we’ll pull them slightly out of the  element and make them vertically 
                            centered with the top border of the element with a class attribute value 
                            of speaker-info. Then, applying a 22-pixel margin on the bottom of the image 
                            provides space between the image and the  element below it.
                        </p>
                        <h5>About Library</h5>
                        
                        <p>
                            With the height and vertical alignment in place, let’s apply vertical margins 
                            to the images. Using a negative 66-pixel margin on the top of the images, 
                            we’ll pull them slightly out of the  element and make them vertically 
                            centered with the top border of the element with a class attribute value 
                            of speaker-info. Then, applying a 22-pixel margin on the bottom of the image 
                            provides space between the image and the  element below it.
                        </p>
                        <table>
                            <thead>
                            <tr>
                                <th scope="col" colspan="2">Item</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Don&#8217;t Make Me Think by Steve Krug</td>
                                <td>In Stock</td>
                                <td>1</td>
                                <td>$30.02</td>
                            </tr>
                            <tr>
                                <td>A Project Guide to UX Design by Russ Unger &#38; Carolyn Chandler</td>
                                <td>In Stock</td>
                                <td>2</td>
                                <td>$52.94 ($26.47 &#215; 2)</td>
                            </tr>
                            <tr>
                                <td>Introducing HTML5 by Bruce Lawson &#38; Remy Sharp</td>
                                <td>Out of Stock</td>
                                <td>1</td>
                                <td>$22.23</td>
                            </tr>
                            <tr>
                                <td>Bulletproof Web Design by Dan Cederholm</td>
                                <td>In Stock</td>
                                <td>1</td>
                                <td>$30.17</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="3">Subtotal</td>
                                <td>$135.36</td>
                            </tr>
                            <tr>
                                <td colspan="3">Tax</td>
                                <td>$13.54</td>
                            </tr>
                            <tr>
                                <td colspan="3">Total</td>
                                <td>$148.90</td>
                            </tr>
                            </tfoot>
                        </table>
                        <input type="date" name="birthday"></input>
                        <input type="time" name="game-time"></input>
                        <input type="email" name="email-address"></input>
                        <input type="url" name="website"></input>
                        <input type="number" name="cost"></input>
                        <input type="tel" name="phone-number"></input>
                        <h5>About Library</h5>
                        <section class="venue-theatre">

                            <div class="col-1-3">
                            <h2>Chicago Theatre</h2>
                            <p>175 N State St <br></br> Chicago, IL 60601</p>
                            <p><a href="http://www.nigeria.com/">thechicagotheatre.com</a> <br></br> (312) 462-6300</p>
                            </div>----<iframe class="venue-map col-2-3" src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcbfad6!2schicago+theatre!5e0!3m2!1sen!2sus!4v1388701393606"></iframe>
                        
                        </section>
                        <textarea name="comments" id="1" cols="30" rows="10">ejejje</textarea>
                        <p>
                            With the height and vertical alignment in place, let’s apply vertical margins 
                            to the images. Using a negative 66-pixel margin on the top of the images, 
                            we’ll pull them slightly out of the  element and make them vertically 
                            centered with the top border of the element with a class attribute value 
                            of speaker-info. Then, applying a 22-pixel margin on the bottom of the image 
                            provides space between the image and the  element below it.
                        </p>
                    
                    </div>
                
                    <div class="sisde_wrapper">
                        <aside class="col-1-3">
                            <div class="speaker-info">
                        
                            <img src="image.jpg" alt="Camera Man"></img>
                            
                            <ul>
                                <li><a href="https://twitter.com/ogbonnaukah">@UkaOgbonna</a></li>
                                <li><a href="http://learn.shayhowe.com/">learn.shayhowe.com</a></li>
                            </ul>
                        
                            </div>
                            <audio src="https://s3.yesstreaming.net:19000" controls></audio>
                            
                        </aside>
                    </div>
              
                
            </section>
            <input type="date" name="birthday"></input>
            <input type="time" name="game-time"></input>
            <input type="email" name="email-address"></input>
            <input type="url" name="website"></input>
            <input type="number" name="cost"></input>
            <input type="tel" name="phone-number"></input>
          
            </section>
            <footer class="hero primary-footer group">
                <small>&copy;Styles Conference</small>
                <nav  class=" nav primary-nav">
                    <a href="index.html">Home</a>
                    <a href="speakers.html">Speakers</a>
                    <a href="schedule.html">Schedule</a>
                    <a href="venue.html">Venue</a>
                    <a href="register.html">Register</a>
                    <a href="view.html">View</a>
                </nav>
            </footer>
            
        </div>
        
    );
}

export default HomePage;


