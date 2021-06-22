window.onload = () => {
  createEminemList()
  createMetallicaList()
  createBehemothList()

  const eminemButton = document.getElementById("eminem-button")
  eminemButton.addEventListener("click", createEminemList)
  const metallicaButton = document.getElementById("metallica-button")
  metallicaButton.addEventListener("click", createMetallicaList)
  const behemothButton = document.getElementById("behemoth-button")
  behemothButton.addEventListener("click", createBehemothList)
}

let eminemCounter = 0
let metallicaCounter = 0
let behemothCounter = 0

// function to create cards
const createCard = (body, i) => {
  const songCard = document.createElement("div")
  songCard.classList.add("col-12", "col-sm-12", "col-md-4", "col-lg-3", "p-3")
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
      </div>
    </div>`
  return songCard
}

function createEminemList() {
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
      const cap = eminemCounter + 6
      for (eminemCounter; eminemCounter < cap; eminemCounter++) {
        eminemRow.appendChild(createCard(body, eminemCounter))
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

//function to generate

function createMetallicaList() {
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
      const cap = metallicaCounter + 6
      console.log(body)
      for (metallicaCounter; metallicaCounter < cap; metallicaCounter++) {
        metallicaRow.appendChild(createCard(body, metallicaCounter))
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

function createBehemothList() {
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
      const cap = behemothCounter + 6
      console.log(body)
      for (behemothCounter; behemothCounter < cap; behemothCounter++) {
        behemothRow.appendChild(createCard(body, behemothCounter))
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
