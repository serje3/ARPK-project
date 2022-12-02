export const deleteUnusedOverlays = () => {
    // delete all old overlays and leaving only one
    setTimeout(()=>{
        const overlays = document.querySelectorAll('.SmartCaptcha-Overlay')
        console.log('works?', overlays)
        const overlaysOnlyOneOrZero = overlays.length <= 1
        if (!overlaysOnlyOneOrZero) {
            for (let i = 1; i < overlays.length; i++) {
                overlays[i].remove()
            }
        }
        console.log('finish him', overlays)
    }, 500)
}