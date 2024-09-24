$(document).ready(()=>{
    $("#listIcon").click(()=>{
        $("#linksTab").toggleClass("links-tab-opened")
        $("#header").toggleClass("header-closed")
        $("#introSection").toggleClass("intro-section-closed")
        $("#worksSection").toggleClass("works-section-closed")
        $("#worksSectionMobile").toggleClass("works-section-mobile-closed")
        $("#presetsSection").toggleClass("presets-section-closed")
        $("#contactSection").toggleClass("contact-section-closed")
    })
    $("#closeIcon").click(()=>{
        $("#linksTab").toggleClass("links-tab-opened")
        $("#header").toggleClass("header-closed")
        $("#introSection").toggleClass("intro-section-closed")
        $("#worksSection").toggleClass("works-section-closed")
        $("#worksSectionMobile").toggleClass("works-section-mobile-closed")
        $("#presetsSection").toggleClass("presets-section-closed")
        $("#contactSection").toggleClass("contact-section-closed")
    })
    let currentPosition=0
    let frontArrowClicked=0
    let frontArrowMobileClicked=0
    $("#frontArrow").click(()=>{
        frontArrowClicked=1
        if(frontArrowMobileClicked==1) {
            currentPosition=0
            frontArrowMobileClicked=0
        }
        if(currentPosition>-1200) {
            currentPosition -= 240
            $("#beforeafter1").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter2").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter3").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter4").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter5").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter6").css('transform',`translateX(${currentPosition}px)`)
        }
    })
    $("#backArrow").click(()=>{
        if(currentPosition<0) {
            currentPosition += 240
            $("#beforeafter1").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter2").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter3").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter4").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter5").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeafter6").css('transform',`translateX(${currentPosition}px)`)
        }
    })
    $("#frontArrowMobile").click(()=>{
        frontArrowMobileClicked=1
        if(frontArrowClicked==1) {
            currentPosition=0
            frontArrowClicked=0
        }
        if(currentPosition>-1500) {
            currentPosition -= 300
            $("#beforeaftermobile1").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile2").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile3").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile4").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile5").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile6").css('transform',`translateX(${currentPosition}px)`)
        }
    })
    $("#backArrowMobile").click(()=>{
        if(currentPosition<0) {
            currentPosition += 300
            $("#beforeaftermobile1").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile2").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile3").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile4").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile5").css('transform',`translateX(${currentPosition}px)`)
            $("#beforeaftermobile6").css('transform',`translateX(${currentPosition}px)`)
        }
    })
    $("#introLink").click(()=>{
        $("#linksTab").toggleClass("links-tab-opened")
        $("#header").toggleClass("header-closed")
        $("#introSection").toggleClass("intro-section-closed")
        $("#worksSectionMobile").toggleClass("works-section-mobile-closed")
        $("#presetsSection").toggleClass("presets-section-closed")
        $("#contactSection").toggleClass("contact-section-closed")
    })
    $("#worksLink").click(()=>{
        $("#linksTab").toggleClass("links-tab-opened")
        $("#header").toggleClass("header-closed")
        $("#introSection").toggleClass("intro-section-closed")
        $("#worksSectionMobile").toggleClass("works-section-mobile-closed")
        $("#presetsSection").toggleClass("presets-section-closed")
        $("#contactSection").toggleClass("contact-section-closed")
    })
    $("#presetsLink").click(()=>{
        $("#linksTab").toggleClass("links-tab-opened")
        $("#header").toggleClass("header-closed")
        $("#introSection").toggleClass("intro-section-closed")
        $("#worksSectionMobile").toggleClass("works-section-mobile-closed")
        $("#presetsSection").toggleClass("presets-section-closed")
        $("#contactSection").toggleClass("contact-section-closed")
    })
    $("#contactLink").click(()=>{
        $("#linksTab").toggleClass("links-tab-opened")
        $("#header").toggleClass("header-closed")
        $("#introSection").toggleClass("intro-section-closed")
        $("#worksSectionMobile").toggleClass("works-section-mobile-closed")
        $("#presetsSection").toggleClass("presets-section-closed")
        $("#contactSection").toggleClass("contact-section-closed")
    })
})