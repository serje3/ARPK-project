import {InvisibleSmartCaptcha} from "@yandex/smart-captcha";


const BetterInvisibleSmartCaptcha = ({
                                         sitekey,
                                         onSuccess,
                                         onChallengeVisible,
                                         onChallengeHidden,
                                         onNetworkError,
                                         visible,
                                         hideShield
                                     }) => {
    // const containerClass = "smart-captcha"
    // const containerId = "smart-captcha-container-id"
    // const callback = useCallback((token) => onSuccess(token), [onSuccess])
    // const [widgetId, setWidgetId] = useState(null)


    // useEffect(() => {
    //     if (!window.smartCaptcha)
    //         return
    //     if (visible && widgetId !== null) {
    //         window.smartCaptcha.execute(widgetId)
    //         onChallengeHidden()
    //     }
    //
    //     return () => {
    //     };
    // }, [onChallengeHidden, visible, widgetId])
    //
    // useEffect(() => {
    //     if (!window.smartCaptcha || !sitekey)
    //         return;
    //     const widget = window.smartCaptcha.render(containerId, {
    //         sitekey: sitekey,
    //         invisible: true,
    //         callback: callback,
    //         hideShield: hideShield
    //     })
    //     setWidgetId(widget)
    //
    //
    //     return () => {
    //         window.smartCaptcha.destroy(widget)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <InvisibleSmartCaptcha
            sitekey={sitekey}
            onSuccess={onSuccess}
            onChallengeVisible={onChallengeVisible}
            onChallengeHidden={onChallengeHidden}
            onNetworkError={onNetworkError}
            visible={visible}
            hideShield={hideShield}/>
    )
}

export default BetterInvisibleSmartCaptcha
