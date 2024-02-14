const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

fetch("http://localhost:3000/profile/profile/address")

  .then(res => res.json())
  .then(data => {
    console.log(data)
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const body1 = card.querySelector("[data-body1]")
      const body2 = card.querySelector("[data-body2]")
      header.textContent = user.firstName
      body.textContent = user.lastName
      body1.textContent = user.emailAddress
      body2.textContent = user.country
      userCardContainer.append(card)
      return { fname: user.firstName, lname: user.lastName, email: user.emailAddress, country: user.country, element: card }
    })
  })



  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
      user.fname.toLowerCase().includes(value) ||
      user.lname.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.country.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    })
  })