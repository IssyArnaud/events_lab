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