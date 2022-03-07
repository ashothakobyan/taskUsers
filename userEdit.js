const editAdd = document.getElementById("editAdd")
eidtCancel.addEventListener("click",function(){
  closeEditTable()
})
editAdd.addEventListener("click",function(){
    editUser()
})
function editUser(){
  const usersTr = document.querySelectorAll(".usersTr")
  if(editInputs[0].value && editInputs[1].value && editInputs[2].value && editInputs[3].value && editInputs[4].value && editInputs[5].value && editInputs[6].value){
    let myEditUser = allUsers.find(el=>el.id === editingUser.id)
    myEditUser.name = editInputs[0].value
    myEditUser.username = editInputs[1].value
    myEditUser.email = editInputs[2].value
    myEditUser.address.city = editInputs[4].value
    myEditUser.phone = editInputs[3].value
    myEditUser.website = editInputs[6].value
    myEditUser.company.name = editInputs[5].value

    if(myEditUser.id <=10){
      fetch(`https://jsonplaceholder.typicode.com/users/${myEditUser.id}`, {
        method: 'PUT',
        body: JSON.stringify(myEditUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((json) =>{
        for(el of usersTr){
          if(el.childNodes[0].innerHTML == myEditUser.id){
              renderEditingUser(el.childNodes,myEditUser)
              break
          }
        }
        closeEditTable()
      });
    }else{
      for(el of usersTr){
        if(el.childNodes[0].innerHTML == myEditUser.id){
            renderEditingUser(el.childNodes,myEditUser)
            break
        }
      }
      closeEditTable()
    }
 
  }
}
function renderEditingUser(nodes,myEditUser){
  nodes[1].innerHTML = myEditUser.name
  nodes[2].innerHTML = myEditUser.username
  nodes[3].innerHTML = myEditUser.email
  nodes[4].innerHTML = myEditUser.phone
  nodes[5].innerHTML = myEditUser.address.city
  nodes[6].innerHTML = myEditUser.company.name
  nodes[7].innerHTML = myEditUser.website
}
function closeEditTable(){
  editTable.style.display = "none"
  table.style.opacity = "1"
}
