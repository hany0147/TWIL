/**
 * Generic in Promise
 */

const afterTwoSeconds = function(){
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('done');
    }, 2000)
  })
}

const runner = async function(){
  const res = await afterTwoSeconds();
  console.log(res);
}

runner();

const afterOneSeconds = function(): Promise<string>{
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('done');
    }, 1000)
  })
}

const runner2 = async function(){
  const res = await afterOneSeconds();
  console.log(res);
}

runner2();

const runner3 = async function(){
  return 'string return';
}