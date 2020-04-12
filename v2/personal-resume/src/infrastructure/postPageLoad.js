// Business
function changeImgToSvg() {
    const imgSvgs = document.querySelectorAll("img[src$=svg]")
    const domParser = new DOMParser()
    imgSvgs.forEach(x => {
        fetch(x.src)
            .then(response => {
                response.text()
                    .then(data => {
                        /**
                         * Accessing index zero is needed because the element
                         * is wrapped in a #document object.
                         */
                        const svgElement = domParser
                            .parseFromString(data, 'image/svg+xml')
                            .childNodes[0]
                        x.replaceWith(svgElement)
                    })
            })
    })
}

function addTargetBlankToAnchors() {
    const anchors = document.querySelectorAll("a[href]")
    anchors.forEach(x => {
        x.setAttribute("target", "blank")
    })
}

// On load
window.addEventListener('load', () => {
    changeImgToSvg()
    addTargetBlankToAnchors()
})