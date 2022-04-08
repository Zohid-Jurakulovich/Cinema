const elList = document.querySelector(".list");
const elBookmarkList = document.querySelector(".bookmark-list");

// const elModal = document.querySelector(".modal");
// const elModalBox = document.querySelector(".modal-list")
// const modalArr = [];
// console.log(modalArr);
const elForm = document.querySelector(".form")


// let localStorage = JSON.parse(window.localStorage.getItem("list"));
// let newbookMark = [];
// renderFilms(newbookMark, elBookmarkList)
// renderBookmarks(newbookMark, elList)


function renderGenre(arr, element) {
  
  let renderGenres = [];
  
  arr.forEach((film) =>{
    
    film.genres.forEach(genre =>{
      if(!renderGenres.includes(genre)){
        renderGenres.push(genre)
      }
    })
  })
  
  console.log(renderGenre);
  
  renderGenres.forEach(genre =>{
    const newOption = document.createElement("option");
    newOption.value = genre;
    newOption.textContent = genre;
    element.appendChild(newOption)
  })
} 


function renderFilms(arr, element) {
  
  element.innerHTML ="";
  
  arr.forEach(film =>{
    let newItem = document.createElement("li");
    let newHeading = document.createElement("h3");
    let newImg = document.createElement("img");
    let newText = document.createElement("p");
    // let newSubList = document.createElement("ul");
    let newBookmarkBtn = document.createElement("button");
    // let modalBtn = document.createElement("button");
    
    newHeading.textContent = film.title;
    newText.textContent = film.overview.split(" ").slice(0,20).join(" ") + " ...";
    
    
    
    for(let genre of film.genres){
      let newSubItem = document.createElement("li");
      newSubItem.textContent = genre;
      
      
      // newSubList.appendChild(newSubItem);
      
    }
    
    newBookmarkBtn.textContent = "BookMark"
    newHeading.setAttribute("class", "list__title")
    newItem.setAttribute("class", "list__item");
    newImg.setAttribute("src", film.poster);
    newImg.setAttribute("class", "list__img");
    newText.setAttribute("class", "list__text")
    
    
    newBookmarkBtn.setAttribute("class", "bookmark-button")
    newBookmarkBtn.dataset.filmId = film.id;
    // modalBtn.setAttribute("class", "modal-btn");
    // modalBtn.textContent = "More" ;  
    
    // modalBtn.addEventListener("click", () =>{
    //   if (!modalArr.includes(film.title)) {
    //     modalArr.splice(0,1, film);
    //   }
      
    //   elModal.classList.add("modal-active");
    //   modalList(modalArr , elModalBox);

    //   const closeBtn = document.createElement("button");
    //   closeBtn.textContent = "Close";
    //   closeBtn.setAttribute("class", "modal-close");
    //   elModal.appendChild(closeBtn);

    //   closeBtn.addEventListener("submit", ()=>{
    //     elModal.classList.remove("modal-active")
    //   })
      
    // })
    
    
    
    
    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText);
    newItem.appendChild(newBookmarkBtn)
    // newItem.appendChild(modalBtn)
    // newItem.appendChild(newSubList);
    elList.appendChild(newItem);
    
    
  })
}

elForm.addEventListener("submit", evt =>{
  evt.preventDefault();
  
  const selectVal = select.value;
  console.log(selectVal);
  
  const filterFilms = films.filter(item =>{
    return item.genres.includes(selectVal);
  })
  
  renderFilms(filterFilms, elList)
  
})


// for(let film of films){
// console.log(newBookmarkBtn);
// let newTime = document.createElement("time");
//;
// newTime.textContent = formatDate(film.release_date);
// newItem.appendChild(newTime);
// 
// }

renderFilms(films, elList);
renderGenre(films, select);








const localBookmarks = JSON.parse(window.localStorage.getItem("list"))
let bookMarks = localBookmarks || [];

renderBookmarks(bookMarks, elBookmarkList)

elList.addEventListener("click", evt =>{
  
  if(evt.target.matches(".bookmark-button")){
    const bookmarkBtnid = evt.target.dataset.filmId;
    // console.log(bookmarkBtnid);
    
    const findFilms = films.find(e => e.id === bookmarkBtnid);
    
    console.log(findFilms);
    
    
    if(!bookMarks.includes(findFilms)){
      bookMarks.push(findFilms)
    }
    window.localStorage.setItem("list", JSON.stringify(bookMarks))
    
    
  };
  
  
  renderBookmarks(bookMarks, elBookmarkList)  
  window.localStorage.setItem("list", JSON.stringify(bookMarks))
  
  // console.log(bookMarks);
  
  
  
})

elBookmarkList.addEventListener("click", evt =>{
  if(evt.target.matches(".bookmark-remove-btn")){
    let btnRemoveId = evt.target.dataset.dataRemoveId;
    let findArray = bookMarks.findIndex(films => films.id == btnRemoveId);
    
    bookMarks.splice(findArray, 1);
    
    renderBookmarks(bookMarks, elBookmarkList);
    window.localStorage.setItem("list", JSON.stringify(bookMarks));
  }
})


// function modalList(arr, element) {
//   element.innerHTML = "";
  
//   arr.forEach(film =>{
//     const modalImg = document.createElement("img");
//     const modalTitle = document.createElement("h4");
//     const modalText = document.createElement("p");
    
//     modalImg.setAttribute("class", "modal-img");
//     modalImg.setAttribute("src", film.poster);
//     modalTitle.setAttribute("class", "modal-title");
//     modalTitle.textContent = film.title;
//     modalText.setAttribute("class", "modal-text");
//     modalText.textContent = film.overview
//   })

//   element.appendChild(modalImg);
//   element.appendChild(modalTitle);
//   element.appendChild(modalText);
// }


function renderBookmarks(arr, element) {
  element.innerHTML = ""  ;
  arr.forEach(e => {
    
    let bookmarkItem = document.createElement("li"); 
    let bookmarkTitle =document.createElement("p");
    let bookmarkRemoveBtn = document.createElement("button");
    
    
    bookmarkTitle.textContent = e.title;
    bookmarkRemoveBtn.textContent = "Remove";
    bookmarkRemoveBtn.dataset.dataRemoveId = e.id;
    
    
    bookmarkItem.classList.add("bookmark-item");
    bookmarkTitle.classList.add("bookmark-title")
    bookmarkRemoveBtn.setAttribute("class", "bookmark-remove-btn");
    
    
    // bookmarkItem.appendChild(bookmarkHeading);
    bookmarkItem.appendChild(bookmarkTitle)
    bookmarkItem.appendChild(bookmarkRemoveBtn);
    element.appendChild(bookmarkItem);
    // element.appendChild(bookmarkRemoveBtn);
  });
}

// console.log(renderBookmarks);