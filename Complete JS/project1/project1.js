
const users = [ 
    { name: "Aryan rathore",
      pic: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
      bio: "silent chaos in a loud world ⚫️🟢 | not for everyone", },
      
    { name: "Sarthak Rathore",
      pic: "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww",
      bio: "main character energy 🟧🟨 | coffee > everything 🔆🔅", },
      
    { name: "Devansh Rathore",
      pic: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww",
      bio: "walking through dreams in doc martens❤️💛 | late night thinker", },
      
    { name: "Robin Rathore",
      pic: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "too glam to give a damn ❤️‍🔥💝 | filter free soul", },
      
    { name: "Priyansh Rathore",
      pic: "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "this is a software enginner at ai chirp🪯💘 | this is very good work", },
      
    { name: "Nigam Rathore",
      pic: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "This is a app devloper before college 🌀✅ | That is doing good", },
      
    { name: "Unnati Rathore",
      pic: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "This is my sister is very inteligent 🛜🆗 | this is very hungery", },
      
    { name: "Niharika Rathore",
      pic: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "This is my sister is very super🆓🆒 | This is doing great" },
    
    ];


const cardsContainer = document.querySelector(".cards");
const input = document.querySelector("input");
const statusHeading = document.querySelector(".heading");

/* 🔹 Reusable function to create one card */
function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${user.pic}" class="bg-img" alt="">
    <div class="blurred-layer" style="background-image:url(${user.pic})"></div>
    <div class="content">
      <h3>${user.name}</h3>
      <p>${user.bio}</p>
    </div>
  `;

  return card;
}

/* 🔹 Show users */
function showUsers(arr) {
  cardsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  arr.forEach(user => {
    fragment.appendChild(createUserCard(user));
  });

  cardsContainer.appendChild(fragment);
}

/* 🔹 Initial render */
showUsers(users);

/* 🔹 Search logic */
input.addEventListener("input", () => {
  const value = input.value.toLowerCase().trim();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(value)
  );

  if (filteredUsers.length === 0 && value !== "") {
    statusHeading.textContent = "User not found";
  } else {
    statusHeading.textContent = "";
  }

  showUsers(filteredUsers);
});