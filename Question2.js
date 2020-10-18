//Question 2

//Add the following to a page called question2.html:

//Make a call to https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating.

//For each game object in the results, create HTML that displays at least 3 properties from the objects. You can include an image property or leave it out.

//Link from each game to question3.html and pass the id of each game in the querystring.



const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const gameinfoContainer = document.querySelector(".container");

setTimeout(function(){
async function callApi() {
 try{
    const response = await fetch(url);
    const json = await response.json();
    const rating = json.results;

    console.log(json);
    gameinfoContainer.innerHTML = "";

    rating.forEach(function(games) {
        
    
            
        gameinfoContainer.innerHTML += `<a href="Question3.html?id=${games.id}" class="gameInfo">
                                        <h2>Name: ${games.name}</h2>
                                        <img src="${games.background_image}"/>
                                        <div class="reviews">Reviews: ${games.reviews_count} </div>
                                        </a>`;
    });

    } catch {
        gameinfoContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
    }
 }
callApi();
},3000);

