import React ,{useState} from 'react'
import { useParams } from 'react-router-dom'

function EnrollmentClass() {
        const [buffering, setBuffering]=useState(true);
        const { classid } = useParams()
        
        // Define the deep link URL to open the app
        var appUrl = "intent://enrollclass#Intent;scheme=https;package=alamaan.ois;end";

        // Define the URL to open the Play Store
        var playStoreUrl = "https://play.google.com/store/apps/details?id=alamaan.ois";

        // Define the homepage of your website
        var websiteUrl = "https://www.alamaanois.com/";

        // Check if the user is on an Android device
        var isAndroid = /Android/i.test(navigator.userAgent);

        if (isAndroid) {
            // Try to open the app using the deep link
            window.location = appUrl;

            // If the app is not installed, after a delay, redirect to the Play Store
            var timeout = setTimeout(function() {
                // Try opening the Play Store
                window.location = playStoreUrl;
            }, 2000);
            // setBuffering(false)
        } else {
            // For non-Android devices (e.g., PC), redirect to the website
            window.location = websiteUrl;
            // setBuffering(false)
        }

        // Clear the timeout if the app is successfully opened
        window.onblur = function() {
            clearTimeout(timeout);
        };
    

  return (
    <div className='flex flex-col items-center justify-center min-w-screen min-h-screen  bg-gray-900 text-blue-950 text-4xl'>
      {buffering?<h1 className='text-blue-950 text-4xl'>Loading..</h1>:""}
    </div>
  )
}

export default EnrollmentClass
