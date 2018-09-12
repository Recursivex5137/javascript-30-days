import './index.css';

// bar
// measure 16 total 
// 
// drums 1-hat 2-snare 3-toms 4-hihat 
// bpm 


//                              80 BPM
// drums  | |
// hat    | |
// snare  | |
// tom    | |
//hihat   |x| | | |x| | | |x| | | |X| | | |
//         ^^ measure

const appData = {
  bpm: 80,
  drums: [{
      id: 'hat',
      img: '',
      sound: '',
    },
    {
      id: 'snare',
      img: '',
      sound: '',
    },
    {
      id: 'toms',
      img: '',
      sound: '',
    },
    {
      id: 'hihat',
      img: '',
      sound: '',
    },
  ],
  measure: [
    {
      placeInMeasure: 1,
      drum: 'hat'
    }, 
    {
      placeInMeasure: 5,
      drum: 'snare'
    }, 
    {
      placeInMeasure: 13,
      drum: 'snare'
    }, 
    {
      placeInMeasure: 15,
      drum: 'tom'
    }, 
  ]
}




const htmlTag = {
  div: 'div',
  input: 'input',
  a: 'a',
  p: 'p',
  h1: 'h1',
  h2: 'h2',
}

function changeText(htmlElement, text) {
  return htmlElement.text(text)
}

function changeInnerHTML(htmlElement, insideHtml) {
  return htmlElement.innerHTML = insideHtml;
}

function modifyElement(htmlElement, fn) {
  return fn(htmlElement)
}

const createHtmlElement = (type) => {
  return document.createElement(type)
}

let hi = createHtmlElement(htmlTag.h1);
changeInnerHTML(hi, 'Hi there!');


document.body.appendChild(hi);