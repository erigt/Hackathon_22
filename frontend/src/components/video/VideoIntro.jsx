import React from 'react'


const VideoIntro = () => {
    return (
        <>
            <section className='videoContainer'>
                <video width="640" height="360" controls>
                    <source src="videoMascoticos.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    )
}

export default VideoIntro