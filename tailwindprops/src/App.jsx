import { useState } from 'react'
import './App.css'
function App() {
    // const [count, setCount] = useState(0)

    const [color, setColor] = useState('linear-gradient(135deg, rgba(224, 247, 250, 0.7), rgba(178, 235, 242, 0.75), rgba(128, 222, 234, 0.8))')

    return (
        // <>
        //   {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

        //   <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        //     <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29087220/pexels-photo-29087220/free-photo-of-brown-pelicans-at-la-jolla-cove-san-diego.jpeg" alt="" width="384" height="512" />
        //     <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        //       <blockquote>
        //         <p class="text-lg font-medium">
        //           “Tailwind CSS is the only framework that I've seen scale
        //           on large teams. It’s easy to customize, adapts to any design,
        //           and the build size is tiny.”
        //         </p>
        //       </blockquote>
        //       <figcaption class="font-medium">
        //         <div class="text-sky-500 dark:text-sky-400">
        //           Sarah Dayan
        //         </div>
        //         <div class="text-slate-700 dark:text-slate-500">
        //           Staff Engineer, Algolia
        //         </div>
        //       </figcaption>
        //     </div>
        //   </figure> */}
        // </>

        <>
            <div className="w-full h-screen duration-200"
                style={{ background: color }}>
                <div className="button-container" style={{ background: color }}>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #FF9A8B 0%, #FF6B6B 50%, #FF3E3E 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #FF9A8B 0%, #FF6B6B 50%, #FF3E3E 100%)')}
                    >CORAL</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #A1FFCE 0%, #6BFFB8 50%, #2AFFA1 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #A1FFCE 0%, #6BFFB8 50%, #2AFFA1 100%)')}
                    >MINT</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #89C4FF 0%, #4D9EFF 50%, #1A78FF 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #89C4FF 0%, #4D9EFF 50%, #1A78FF 100%)')}
                    >SKY</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #C79EFF 0%, #A370FF 50%, #8842FF 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #C79EFF 0%, #A370FF 50%, #8842FF 100%)')}
                    >LAVENDER</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #FFB8E6 0%, #FF8AD9 50%, #FF5CCD 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #FFB8E6 0%, #FF8AD9 50%, #FF5CCD 100%)')}
                    >BLUISH</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #A5F2F3 0%, #6EEBEB 50%, #37E4E6 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #A5F2F3 0%, #6EEBEB 50%, #37E4E6 100%)')}
                    >ICE</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #FFE08B 0%, #FFD04D 50%, #FFC000 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #FFE08B 0%, #FFD04D 50%, #FFC000 100%)')}
                    >SUN</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #B388FF 0%, #8C5AFF 50%, #6633FF 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #B388FF 0%, #8C5AFF 50%, #6633FF 100%)')}
                    >TWILIGHT</button>
                    <button
                        className="color-button"
                        style={{ background: 'linear-gradient(135deg, #8CFFC1 0%, #5AFFA8 50%, #28FF8E 100%)' }}
                        onClick={() => setColor('linear-gradient(135deg, #8CFFC1 0%, #5AFFA8 50%, #28FF8E 100%)')}
                    >JADE</button>
                </div>
            </div>

        </>
    )
}

export default App
