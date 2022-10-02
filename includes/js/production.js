let currentFrame
let totalFrames
let handle
const pathArray = []
const pathLength = []
// target each svg <path>
const svgPaths = document.querySelectorAll('.circuitryPath')
// Get a total count of the svg <path>s
const totalCount = document.querySelectorAll('.circuitryPath').length
// loop through the svg <path>s
;[...svgPaths].forEach((svgPath, index) => {
  const totalSvgLength = svgPath.getTotalLength()
  // assign the total length of each <path> to a custom property to control with css e.g. --totalSvgLength: 3.456
  svgPath.style.setProperty('--totalSvgLength', `${totalSvgLength}`);
  // add dynamic ids using the index values for animating with drawSvgStroke function (better than hardcoding ids)
  svgPath.setAttribute('id', `js-${index}`);
})

const drawSvgStroke = () => {
  currentFrame = 0
  // use totalCount to dynamically assign a value to totalFrames
  totalFrames = totalCount
  // loop through the frames
  for (let i = 0; i < totalFrames; i += 1) {
    // target each <path> by id
    pathArray[i] = document.getElementById(`js-${i}`)
    // get the length of each <path> and assign to totalSvgLength
    const totalSvgLength = pathArray[i].getTotalLength()
    // assign the totalSvgLength to each pathLength
    pathLength[i] = totalSvgLength
  }

  handle = 0
}

const animateSvg = () => {
  // determine progress with a decimal counter e.g 0.2 = 20%
  const progress = currentFrame / totalFrames
  // stop the function when progress reaches 100%
  if (progress > 1) {
    window.cancelAnimationFrame(handle)
  } else {
    // step through the frames until progress reaches 100%
    currentFrame += 1
    // Increase the strokeDashoffset values (from 0 to pathLength) to animate the <path>
    for (let j = 0; j < pathArray.length; j += 1) {
      pathArray[j].style.strokeDashoffset = Math.floor(pathLength[j] * (1 - progress))
    }

    handle = window.requestAnimationFrame(animateSvg)
  }
}

// call both functions
drawSvgStroke()
animateSvg()
