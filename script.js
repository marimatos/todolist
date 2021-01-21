const input = document.querySelector('#item')

function addToDo() {
  const li = document.createElement('li')
  const inputValue = input.value 
  const textValue = document.createTextNode(inputValue)
  li.appendChild(textValue)
  document.querySelector('ul').appendChild(li)

  //add button delete and apends it to li element
  const btnDelete = document.createElement('button')
  btnDelete.className = 'btn-delete'
  btnDelete.innerText = 'Delete'
  li.appendChild(btnDelete)


  //hide item of the list
  const buttons = document.querySelectorAll('.btn-delete')
  for (btn of buttons) {
    btn.onclick = function() {
      const div = this.parentElement;
      div.style.display = "none"
    }
  }
  
  input.value = ""
}