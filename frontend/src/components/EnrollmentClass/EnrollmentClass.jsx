import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function EnrollmentClass() {
    const [buffering, setBuffering] = useState(true);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const classId = queryParams.get('classid'); // Get classId from the query params

    // Define the deep link URLs
    const androidAppUrl = `intent://enrollclass?classid=${classId}/#Intent;scheme=https;package=alamaan.ois;end`;
    const playStoreUrl = "https://play.google.com/store/apps/details?id=alamaan.ois";
    const iOSAppUrl = `alamaan://enrollclass?classid=${classId}`; 
    const homepageUrl = "/";
    const appStoreUrl = "https://apps.apple.com/app/id123456789"; 

    // User-agent detection
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isDesktop = /Windows|Macintosh/i.test(navigator.userAgent);

    useEffect(() => {
        try {
            if (isAndroid) {
                window.location = androidAppUrl;

                const timeout = setTimeout(() => {
                    window.location = playStoreUrl;
                }, 2000);

                window.onblur = () => clearTimeout(timeout);
            } else if (isIOS) {
                window.location = iOSAppUrl;

                const timeout = setTimeout(() => {
                //     window.location = appStoreUrl;
                    window.location = homepageUrl; // no ios app so send to homepage for now
                }, 2000);

                window.onblur = () => clearTimeout(timeout);
            } else if (isDesktop) {
                window.location = homepageUrl; 
            } else {
                window.location = homepageUrl; 
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    }, [classId, androidAppUrl, appStoreUrl, iOSAppUrl, isAndroid, isDesktop, isIOS, playStoreUrl, homepageUrl]);

    return (
        <div className='flex flex-col items-center justify-center min-w-screen min-h-screen bg-gray-900 text-blue-950 text-4xl'>
            {buffering ? <h1>Loading...</h1> : <h1>Class ID: {classId}</h1>}
        </div>
    );
}

export default EnrollmentClass;
