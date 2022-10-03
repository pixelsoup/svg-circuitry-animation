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
    // slow down animation by reducing value --> .7
    currentFrame += 1
    // Increase the strokeDashoffset values (from 0 to pathLength) to animate the <path>
    for (let j = 0; j < pathArray.length; j += 1) {
      pathArray[j].style.strokeDashoffset = Math.floor(pathLength[j] * (1 - progress))
    }

    handle = window.requestAnimationFrame(animateSvg)
  }
}

drawSvgStroke()
animateSvg()


let currentFrame2
let totalFrames2
let handle2
const pathArray2 = []
const pathLength2 = []

// target each svg <path>
const svgPath2s2 = document.querySelectorAll('.svgHeadingPath')
// Get a total count of the svg <path>s
const totalCount2 = document.querySelectorAll('.svgHeadingPath').length
// loop through the svg <path>s
;[...svgPath2s2].forEach((svgPath2, index) => {
  const totalSvgLength2 = svgPath2.getTotalLength()
  // assign the total length of each <path> to a custom property to control with css e.g. --totalSvgLength2: 3.456
  svgPath2.style.setProperty('--totalSvgLength2', `${totalSvgLength2}`);
  // add dynamic ids using the index values for animating with drawSvgStroke2 function (better than hardcoding ids)
  svgPath2.setAttribute('id', `js-${index}`);
})

const drawSvgStroke2 = () => {
  currentFrame2 = 0
  // use totalCount2 to dynamically assign a value to totalFrames2
  totalFrames2 = totalCount2
  // loop through the frames
  for (let i = 0; i < totalFrames2; i += 1) {
    // target each <path> by id
    pathArray2[i] = document.getElementById(`js-${i}`)
    // get the length of each <path> and assign to totalSvgLength2
    const totalSvgLength2 = pathArray2[i].getTotalLength()
    // assign the totalSvgLength2 to each pathLength2
    pathLength2[i] = totalSvgLength2
  }

  handle2 = 0
}

const animateSvg2 = () => {
  // determine progress2 with a decimal counter e.g 0.2 = 20%
  const progress2 = currentFrame2 / totalFrames2
  // stop the function when progress2 reaches 100%
  if (progress2 > 1) {
    window.cancelAnimationFrame(handle2)
  } else {
    // step through the frames until progress2 reaches 100%
    // slow down animation by reducing value --> .7
    currentFrame2 += .2
    // Increase the strokeDashoffset values (from 0 to pathLength2) to animate the <path>
    for (let j = 0; j < pathArray2.length; j += 1) {
      pathArray2[j].style.strokeDashoffset = Math.floor(pathLength2[j] * (1 - progress2))
    }

    handle2 = window.requestAnimationFrame(animateSvg2)
  }
}

drawSvgStroke2()
animateSvg2()
