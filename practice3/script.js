const button = document.querySelector("#button");
const cardsContainer = document.querySelector(".cards");
const remove = document.querySelector(".remove-button")
button.addEventListener("click", function () {
    fetch("https://randomuser.me/api/")
        .then(raw => raw.json())
        .then(result => {
            const { name, email, gender, picture } = result.results[0];
            
           
           

            // Add new card
            cardsContainer.innerHTML += `
                <div class="card">
                    <div id="img">
                        <img src="${picture.large}" alt="User Picture">
                    </div>
                    <h3 id="name">${name.first} ${name.last}</h3>
                    <h5 id="gender">${gender}</h5>
                    <h5 id="mail">${email}</h5>
                    <h5 id="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus modi consequatur id maiores
                        quos! Dolores corporis magni ipsa aliquid quidem? Voluptate libero doloremque corporis laudantium
                        distinctio cumque soluta cupiditate?</h5>
                </div>`;
        })
        
});

remove.addEventListener('click', function () {
    if((cardsContainer.children.length > 0)){
        cardsContainer.removeChild(cardsContainer.lastChild)
            }
            else{
                alert("no more cards left ")
            }
});