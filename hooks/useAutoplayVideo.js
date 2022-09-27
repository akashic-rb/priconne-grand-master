import { useEffect } from "react"

/**
 * @params ref - video using react ref
 * @params playBtn - play button using react ref
 * @return an object contains hideVideo fn using for on ended video event and playVideo fn for the play button
 * 
 * This hook is used to auto play a video first ref is the video itself, 
 * second ref is play button that will be hidden if video is being played
 */
const useAutoplayVideo = (ref, playBtn) => {

    const hideVideo = () => {
        if(playBtn)
            playBtn.current.classList.remove("hidden")
        ref.current.parentElement.classList.remove("visible")
    }

    const playVideo = () => {
        if(playBtn)
            playBtn.current.classList.add("hidden")
        ref.current.parentElement.classList.add("visible")
        ref.current.play()
    }

    useEffect(() => {
        playVideo()
    }, [])

    return { hideVideo, playVideo }
}

export default useAutoplayVideo