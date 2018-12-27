// async & await
// javascript callback 지옥
function resolvePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!!');
    }, 2000);
  });
}

async function getPromise1() {
  const result = await resolvePromise();
  console.log(result);
  await resolvePromise();
  console.log(result);
  await resolvePromise();
  console.log(result);
  await resolvePromise();
  console.log(result);
  await resolvePromise();
  console.log(result);
  await resolvePromise();
  console.log(result);
  await resolvePromise();
  console.log(result);
}

getPromise1();
