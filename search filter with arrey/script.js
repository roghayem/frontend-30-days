const authors =[
    {name : "William Shakespeare", img: "images (4).jfif" , buy: "new.link"},
    {name:"George Orwell", img: "images (4).jfif" , buy: "new.link"},
    {name : "Jane Austen", img: "images (4).jfif" , buy: "new.link"},
    {name : "Ernest Hemingway", img: "images (4).jfif" , buy: "new.link"},
    {name : "J.K. Rowling", img: "images (4).jfif" , buy: "new.link"},
    {name : "Leo Tolstoy", img: "images (4).jfif" , buy: "new.link"},
    {name : "Fyodor Dostoevsky", img: "images (4).jfif" , buy: "new.link"},
    {name : "Charles Dickens", img: "images (4).jfif" , buy: "new.link"},
    {name : "Fyodor Dostoevsky", img: "images (4).jfif" , buy: "new.link"},
    {name : "Charles Dickens", img: "images (4).jfif" , buy: "new.link"}
]

const searchInput = document.querySelector("#searchInput");
const cards = document.querySelector(".cards");
const mesg = document.querySelector(".message");

searchInput.addEventListener("input",()=>{
    const inputValue = searchInput.value.toLowerCase();

    const filterAuthors = authors.filter(function(author){
         return author.name.toLowerCase().includes(inputValue)
    });

    showeAuthors(filterAuthors)
})

function showeAuthors(authorsList){
    cards.innerHTML="";


    authorsList.forEach(function(author){
const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = author.img;

    const title = document.createElement("h2");
    title.classList.add("titile");
    title.textContent= author.name;

    const btn = document.createElement("a");
    btn.classList.add("buy");
    btn.href= author.buy
    btn.textContent="buy";


    card.append(image , title , btn);
    cards.append(card);

    })
     if(authorsList.length===0){
        mesg.textContent = "not found the result";
    }else{
        mesg.textContent = "";
    }
}

showeAuthors(authors);