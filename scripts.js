// const button = document.querySelector('button').addEventListener('click')

// const siteSelect = chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     alert(url)
//     console.log(url)
// });

//creates an object store of indexes with cohort names
const cohortGenerator = () => {
  const cohortNames = ['Emil M.', 'Murad A.', 'Emily B.', 'Eli M.', 'Hui M.', 'Dzidupe E.', 'Irvin I.', 'David J.', 'Jackie M.', 'Crystal A,', 'Jason C', 'Mander M.', 'Jeff W.', 'Chris J.', 'Johnny T.', 'Chase W.', 'Eden E.', 'Nick K.', 'Katie A.', 'Ben R.', 'Kevin L.', 'Alyssa C.', 'Mimi L.', 'Will M.', 'Richard Z.', 'Tyler W.', 'Rosendo D.L.', 'Andrew J.', 'Samee V.', 'Samson L.'];
  let cohortObjStore = {};
  for (let i = 0; i < cohortNames.length; i++){
    cohortObjStore[i+1] = cohortNames[i];
  }
  return cohortObjStore;
}

//Re-assigns name in YogaInstructor element randomly
function generateName () {
    //obj store of indexes to cohort names 
    const ftri10 = cohortGenerator();
    //change inner Text of YogaInstructor
    document.querySelector('#YogaInstructer').InnerText = `Name: ${ftri[Math.floor(Math.random() * Object.keys(ftri10).length)]}`
    const yoga = document.querySelector('#YogaInstructer');
    text='test';
    yoga.InnerText = test;
}


//EventHandler that will invoke generateName and randomizeColors //setInterval and clearInterval to make shuffling effect
const buttonEvent = document.querySelector('#stretchGetButton').addEventListener(
    'onClick', () => {
        console.log('button works')
        for (let i = 0; i < 30; i++){
        const generateNameInterval = setInterval(()=>{generateName()}, 10);
        const randomizeColorsInterval = setInterval(()=>{randomizeColors()}, 10);
        }
        clearInterval(generateNameInterval, 3000);
        clearInterval(randomizeColorsInterval, 3000);
    })




