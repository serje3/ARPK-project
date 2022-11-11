export function useOverlay(ref) {
    const handleOpenOverlay = () => {
        ref.current.style.display = "block"
    }
    const handleCloseOverlay = () => {
        ref.current.style.display = "none"
    }

    return { handleOpenOverlay, handleCloseOverlay }
}