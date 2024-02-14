

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []



fetch("http://localhost:3000/items/items")

  .then(res => res.json())
  .then(data => {
    console.log(data)
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const body1 = card.querySelector("[data-body1]")
      header.textContent = user.itemName
      body.textContent = user.price
      body1.textContent = user.qty      
      userCardContainer.append(card)
      return { iname: user.itemName, pItem: user.price, iQty: user.qty, element: card }
    })
  })



  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
      user.iname.toLowerCase().includes(value) 
     // || user.pItem.includes(value) ||
     // user.iQty.includes(value) 
   
     
      user.element.classList.toggle("hide", !isVisible)
    })
  })