fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((data) => renderCharacters(data));

const ul = document.querySelector('ul');

function renderCharacters(charArr){
    //console.log(charArr);
    
    charArr.forEach((charObj) => {
        //console.log(charObj) //forEach() takes in a function as an argument
        
        /*
        MINI INSTRUCTIONS:
            1. make a <li> tag for each character
            2. make a <p> tag for each character's name
            3. make an <img> tag for each character's image
            4. put <p> and <img> inside <li>
            5. put <li> inside <ul> 
        */

        const li = document.createElement('li');
        
        const p = document.createElement('p');
        let name = charObj.name;
        p.textContent = name;
        li.appendChild(p);

        const img = document.createElement('img');
        let pic = charObj.image;
        img.src = pic;
        li.appendChild(img);
        
        ul.appendChild(li);
    })
}       