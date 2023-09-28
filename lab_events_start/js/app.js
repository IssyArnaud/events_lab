document.addEventListener('DOMContentLoaded', () => {

  const deleteAllForm = document.createElement('form')

  console.log('JavaScript loaded');

  let firstTime = true

  const formElement = document.querySelector('#new-item-form')
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const newListItem = document.createElement('reading-list-item')
    newListItem.textContent = `${evt.target.title.value}, by ${evt.target.author.value}: ${evt.target.category.value}`
    const list = document.querySelector("#reading-list")
    list.appendChild(newListItem)
    formElement.reset()

    if (firstTime === true){
      // deleteAllForm.setAttribute('id', 'delete-form')
      const input = document.createElement('input')
      input.type = 'submit'
      input.value = 'delete all'
      input.name = 'deleteButton'
      deleteAllForm.appendChild(input)
      formElement.appendChild(deleteAllForm)
      firstTime = false
    }
  })
  deleteAllForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const list = document.querySelector("#reading-list")
    function deleteAllReadingListItems(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
      }
    }
    deleteAllReadingListItems(list)
})
})