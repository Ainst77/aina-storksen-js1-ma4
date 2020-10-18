
//Question 3

const gameinfoContainer = document.querySelector(".containerInfo");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.rawg.io/api/games/" + id;
console.log(queryString);



setTimeout(function(){
async function linkGame() {
    try{
        const response = await fetch(url);
        const about = await response.json();
       
        console.log(about);
        gameDetails(about);
       
    } catch {
        gameinfoContainer.innerHTML = errorMessage( "Something went wrong! Trouble with the connection");
    }
    }

    linkGame(); 
},3000); 

function gameDetails(about){
    gameinfoContainer.innerHTML += `<img class="aboutImg" src="${about.background_image}"/>
                                    <div class="gameDetails">
                                    <h2 class="aboutName"> ${about.name}</h2> 
                                    <div class="description"> ${about.description}</div>
                                    <div class="release"> Released: ${about.released}</div>
                                    <div class="release"> Developers: ${about.developers[length].name}</div>
                                    </div>`
    }

 