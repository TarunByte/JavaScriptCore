for (let i = 0; i <= 10; i++) {
  console.log(`\nOuter loop value : ${i}\n`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value : ${j}`)
    console.log(i + "*" + j + "=" + i * j);
  }
}
