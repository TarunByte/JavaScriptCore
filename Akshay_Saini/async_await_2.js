API_URL = "https://api.github.com/users/akshaymarch7";

async function handlePromise() {
  /* fetch() => fetch fun is a Promise when this promise is resolved its give us
  response object, And this response object has a body which is a readable stream, to convert readable stream into json we will have to .json(), And this resposne .json() 
  is again a promise and when this promise resolved its give us jsonValue */
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.error(err);
  }
}

handlePromise();
