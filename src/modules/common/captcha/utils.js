export function subscribeToAll(widgetId, {
    onChallengeVisible,
    onChallengeHidden,
    onSuccess,
    onNetworkError
}) {

    const unsubscribe1 = window.smartCaptcha.subscribe(
        widgetId,
        'challenge-visible',
        onChallengeVisible
    )

    const unsubscribe2 = window.smartCaptcha.subscribe(
        widgetId,
        'challenge-hidden',
        onChallengeHidden
    )

    const unsubscribe3 = window.smartCaptcha.subscribe(
        widgetId,
        'success',
        onSuccess
    )

    const unsubscribe4 = window.smartCaptcha.subscribe(
        widgetId,
        'network-error',
        onNetworkError
    )
    return () => {
        unsubscribe1()
        unsubscribe2()
        unsubscribe3()
        unsubscribe4()
    };
}
