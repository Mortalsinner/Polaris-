import React, { useState } from "react";
import { useEffect } from "react";
// import polaris from 



export default function NasaPhoto(){

    const [photoData, setPhotoData ] = useState(null);

    useEffect(() => {
    
    fetchPhoto();

    async function fetchPhoto(){

        const res = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=e2a4lrPPKkWNYVIU29M5sB0otUod70RiFDlsXYNn'
        );

        const data = await res.json();
        setPhotoData(data);
        console.log(data);
    }
    }, []);


    if(!photoData) return <div/>
    
    return(

        
<div>
    <div>


    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
           
       

            <img src={photoData.url} alt={photoData.title} class="max-w-sm rounded-lg shadow-2xl" />

            <div>
            <h1 class="text-5xl font-bold">Daily information</h1><br/>


            <div class="mockup-code bg-">
            <pre data-prefix="$"><code>Today's info: [{photoData.title}]<br/>
            </code></pre>
            </div>  
            {/* <h1 class="text-5xl font-bold">{photoData.title}</h1>      */}
            <p class="py-6">{photoData.explanation}</p>
            <p class="py-5">Copyright: [{photoData.copyright}];</p>
            {/* <p class="py-6">{photoData.date}</p> */}
            {/* <button class="btn btn-primary">Get Started</button> */}
            
            </div>
        </div>
    </div>


    </div>
</div>


    )

}
