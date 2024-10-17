import React ,{useState} from 'react'
import { useParams } from 'react-router-dom'

function EnrollmentClass() {
        const [buffering, setBuffering]=useState(true);
        const { classid } = useParams()
        
        // Define the deep link URL to open the app
        // Define URLs for app deep linking, Play Store, App Store, and website
var androidAppUrl = "intent://enrollclass#Intent;scheme=https;package=alamaan.ois;end";
var iOSAppUrl = "alamaan://enrollclass"; // Hypothetical iOS deep link (replace with your actual scheme)
var playStoreUrl = "https://play.google.com/store/apps/details?id=alamaan.ois";
var appStoreUrl = "https://apps.apple.com/app/id123456789"; // Replace with actual App Store URL
var websiteUrl = "https://www.alamaanois.com/";

// User-agent detection for Android, iOS, and desktop (Windows, macOS)
var isAndroid = /Android/i.test(navigator.userAgent);
var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
var isDesktop = /Windows|Macintosh/i.test(navigator.userAgent);

if (isAndroid) {
    // Android flow: try deep linking, fallback to Play Store
    window.location = androidAppUrl;
    var timeout = setTimeout(function() {
        window.location = playStoreUrl;
    }, 2000);

} else if (isIOS) {
    // iOS flow: try deep linking, fallback to App Store
    window.location = iOSAppUrl;
    var timeout = setTimeout(function() {
        window.location = appStoreUrl;
    }, 2000);

} else if (isDesktop) {
    // Desktop flow: redirect to website (or provide desktop-specific instructions)
    window.location = websiteUrl;

} else {
    // Fallback for other platforms (unknown or unsupported platforms)
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
