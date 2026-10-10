const movies =[
    {name : "Tommrow", img: "images (4).jfif" , links: "new.link" , year : "2016"},
    {name:"In moon", img: "images (4).jfif" , links: "new.link", year : "2018"},
    {name : "me and you", img: "images (4).jfif" , links: "new.link", year : "2026"},
    {name : "after you", img: "images (4).jfif" , links: "new.link", year : "2015"},
    {name : "alone", img: "images (4).jfif" , links: "new.link", year : "2026"},
    {name : "13 reasons", img: "images (4).jfif" , links: "new.link", year : "1990"},
    {name : "my smile", img: "images (4).jfif" , links: "new.link", year : "2005"},
    {name : "you", img: "images (4).jfif" , links: "new.link", year : "2006"},
    {name : "Fury", img: "images (4).jfif" , links: "new.link", year : "2002"},
    {name : "supernatural", img: "images (4).jfif" , links: "new.link", year : "2019"}
]




const searchInput = document.querySelector("#searhcInput");
const cards = document.querySelector(".cards");
const msg = document.querySelector(".message");

searchInput.addEventListener("input",()=>{
    const searchValue = searchInput.value.toLowerCase();

    const moviesFilter =movies.filter(function(movie){
        return movie.name.toLowerCase().includes(searchValue);
    }) 
    showeMovie(moviesFilter)
})

function showeMovie(MovieList){
    cards.innerHTML = "";

    MovieList.forEach(function(movie){
        const card = document.createElement("div");
    card.classList.add("card");


    const image = document.createElement("img")
    image.classList.add("image");
    image.src = movie.img;
    image.alt = "movie picture";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = movie.name;


    const year = document.createElement("h6");
    year.classList.add("year");
    year.textContent = movie.year;

    const btn = document.createElement("a");
    btn.classList.add("button");
    btn.href = movie.links;
    btn.textContent = "Watch";
    
    card.append(image , title, year , btn);
    cards.append(card);
    })

    if(MovieList.length === 0){
        msg.textContent ="No results found";
    }else{
        msg.textContent = "";
    }
}
showeMovie(movies);