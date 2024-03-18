const parentElement = document.querySelector(".main");

const URL = "https://movies-app.prakashsakari.repl.co/api/movies";

const getMovies = async (url) =>{
    try{
        const {data} = await axios.get(url);
        return data;
    } catch(err){
    }
};

let movies = await getMovies(URL);
console.log(movies);

const createElement = (element) => document.createElement(element);

// creating function to create movie cards

const createMovieCard = (movies) =>{
    for(let movie of movies){
        const cardContainer = createElement("div");
        cardContainer.classList.add("card","shadow");

        const imageContainer = createElement("div");
        imageContainer.classList.add("card-image-container");

        const imageEle = createElement("img");
        imageEle.classList.add("card-img");
        imageEle.setAttribute("src",movie.img_link);
        imageEle.setAttribute("alt",movie.name);
        imageContainer.appendChild(imageEle);

        cardContainer.appendChild(imageContainer);

        // details

        const cardDetails = createElement("div");
        cardDetails.classList.add("movie-details");
        
        const titleEle = createElement("p");
        titleEle.classList.add("title");
        titleEle.innerText = movie.name;
        cardDetails.appendChild(titleEle);

        const genreEle = createElement("p");
        genreEle.classList.add("genre");
        genreEle.innerText = `Genre: ${movie.genre}`;
        cardDetails.appendChild(genreEle);

        // ratings
        const movieRating = createElement("div");   
        movieRating.classList.add("ratings");

        const ratings = createElement("div");
        ratings.classList.add("star-rating");
        // star
        const starIcon = createElement("span");
        starIcon.classList.add("material-icons-outlined");
        starIcon.innerText = "star";

        ratings.appendChild(starIcon);

        const ratingValue = createElement("span");
        ratingValue.innerText = movie.imbdb_rating; 
        ratings.appendChild(ratingValue);

        const length = createElement("span");
        length.innerText = `${movie.duration} mins` 
        ratings.appendChild(length);

        movieRating.appendChild(ratings);
        cardDetails.appendChild(movieRating);
        cardContainer.appendChild(cardDetails);

        parentElement.appendChild(cardContainer);
    }
};

createMovieCard(movies);