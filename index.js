window.onload = () => {
  const eminemRow = document.getElementById("eminem-row")

  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "727e34e77cmsh746a91ecb9acf23p19fa3djsn87030c669d94",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      console.log(body)
      for (let i = 0; i < 12; i++) {
        eminemRow.appendChild(createCard(body, i))
      }
    })
    .catch((err) => {
      console.error(err)
    })

  const metallicaRow = document.getElementById("metallica-row")

  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=Metallica", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "727e34e77cmsh746a91ecb9acf23p19fa3djsn87030c669d94",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      console.log(body)
      for (let i = 0; i < 12; i++) {
        metallicaRow.appendChild(createCard(body, i))
      }
    })
    .catch((err) => {
      console.error(err)
    })

  const behemothRow = document.getElementById("behemoth-row")

  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=Behemoth", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "727e34e77cmsh746a91ecb9acf23p19fa3djsn87030c669d94",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      console.log(body)
      for (let i = 0; i < 12; i++) {
        behemothRow.appendChild(createCard(body, i))
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

// create card
const createCard = (body, i) => {
  const songCard = document.createElement("div")
  songCard.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "p-3")
  songCard.innerHTML = `<div class="card">
      <img src="${body.data[i].album.cover_big}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${body.data[i].title_short}</h5>
        <p class="card-text">
            <b>Album:</b> ${body.data[i].album.title}
        </p>
        <p class="card-text">
            <b>Duration:</b> ${body.data[i].duration}sec 
        </p>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
  return songCard
}
