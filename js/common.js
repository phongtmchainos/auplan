let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let isPortrait = viewportHeight > viewportWidth;

function onResize() {
    let newViewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let newViewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let hasOrientationChanged = (newViewportHeight > newViewportWidth) != isPortrait;
    let addressbarHeight = 130;

    if (!hasOrientationChanged && (newViewportHeight != viewportHeight)) {
        addressbarHeight = Math.abs(newViewportHeight - viewportHeight);
        if (newViewportHeight < viewportHeight) {
            // Android Chrome address bar has appeared
        } else {
            // Android Chrome address bar has disappeared
        }
    } else if (hasOrientationChanged) {
        // Orientation change
    }

    viewportHeight = newViewportHeight;
    viewportWidth = newViewportWidth;
    isPortrait = viewportHeight > viewportWidth;
}

function hiddenEle(nameEle) {
    $(nameEle).css('display', 'none')
}

function showEle(nameEle) {
    $(nameEle).css('display', 'flex')
}