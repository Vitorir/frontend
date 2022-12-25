// get filter element
const filterElement = document.querySelector('header input')
// get cards elements
let cards = document.querySelector('.cards li')

// add input event for the filter element
filterElement.addEventListener('input', filterCards)

// filter function
function filterCards() {
  // if the filter is not empty
  if (filterElement.value != '') {
    // for each card of cards
    cards.forEach(card => {
      // get card heading (title)
      let title = card.querySelector('h2')
      // tranform to lower case
      title = title.textContent.toLowerCase()
      // transform filter text to lower case
      let filterText = filterElement.value.toLowerCase();
      // if card title does not include the filter text
      if (!title.includes(filterText)) {
        card.style.display = 'none'
        // hide the card element
      } else {
      // else
        // unhide the card element
        card.style.display = 'block'
    }})
  } else {
    
    cards.forEach(card => {
        card.style.display = 'block'
    });
  }
}