import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";


const Ancre = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 50) {
            setShowScroll(false)
        }
    };

    // const scrollToTop = () => {
    //     window.scrollToTop({top: 0, behavior: "smooth"});
    // }

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

    window.addEventListener("scroll", checkScrollTop)

    return (
        <div onClick={scrollToTop} style={{display: showScroll ? 'flex' : 'none'}}>
            <a href="" className="arrowUp"><FontAwesomeIcon icon={faArrowAltCircleUp} size = "2x"/></a>
        </div>
    )
}

export default Ancre
