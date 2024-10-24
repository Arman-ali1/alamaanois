import React ,{useState} from 'react'
import { useParams } from 'react-router-dom'

function EnrollmentClass() {
        const [buffering, setBuffering]=useState(true);
        const { classid } = useParams()
        
                // Define the deep link URL to open the app
                // Define URLs for app deep linking, Play Store, App Store, and website
        var androidAppUrl = "intent://enrollclass/#Intent;scheme=https;package=alamaan.ois;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dalamaan.ois;end";
        
        var playStoreUrl = "https://play.google.com/store/apps/details?id=alamaan.ois";
        var appStoreUrl = "https://apps.apple.com/app/id123456789"; // Replace with actual App Store URL
        var websiteUrl = "https://www.alamaanois.com/";

                // User-agent detection for Android, iOS, and desktop (Windows, macOS)
        var isAndroid = /Android/i.test(navigator.userAgent);
        var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        var isDesktop = /Windows|Macintosh/i.test(navigator.userAgent);

        if (!isAndroid) {
                // Android flow: try deep linking, fallback to Play Store
                 window.location = websiteUrl;

            }  else if(isAndroid) {
                // Fallback for other platforms (unknown or unsupported platforms)
                window.location = androidAppUrl;
                var timeout = setTimeout(function() {
                window.location = playStoreUrl;
            }, 8000);
            }
        else{
                window.location = websiteUrl;
        }

                // Clear timeout when app is opened (user navigates away from the page)
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
