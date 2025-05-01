// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log(e.target.id);

//   if ((e.target.tagName = "LI")) {
//     window.location.href = "/" + e.target.id;
//   }
// });

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

/*
Benefits of event delegation:
1) improves memory space
2) mitigates risk of performance bottle neck
3) Dom manipulation
4) when elements get added dynamically, the process of adding events is slow

Limitations:
1) All the events are not bubbled up, some events like blur, focus are not bubbled up
2) if e.stopPropogation is used in child, then events are not bubbled up
*/
