const addUser = document.getElementById("addNewUser")
const popupAddUser = document.getElementById("popupAdd")
const popupCancel = document.getElementById("popupCancel")
class CreateUser{
  constructor(name,userName,email,phone,addres,company,website){
    this.name = name
    this.username = userName
    this.email = email
    this.phone = phone
    this.address = {
      city:addres
    }
    this.company = {
      name:company
    }
    this.website = website
  }
}
addUser.addEventListener("click",function(){
    if(editTable.style.display !== "block" && popupDelete.style.display !== "block"){
        if(popupAddNewUser.style.display !== "block"){
            popupAddNewUser.style.display = "block"
            table.style.opacity = "0.5"
        }else{
            popupAddNewUser.style.display = "none"
            table.style.opacity = "1"
        }
    }
})
popupCancel.addEventListener("click",function(){
    popupAddNewUser.style.display = "none"
    table.style.opacity = "1"
})
popupAddUser.addEventListener("click",addUserInfo)
function addUserInfo(){
    const inputInfo = document.querySelectorAll(".popupInput")
    const userInfo = new CreateUser(inputInfo[0].value,inputInfo[1].value,inputInfo[2].value,inputInfo[3].value,inputInfo[4].value,inputInfo[5].value,inputInfo[6].value)
    if(userInfo.name && userInfo.username && userInfo.email && userInfo.phone && userInfo.address.city && userInfo.company.name && userInfo.website){
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          allUsers.push(json)
          json.id = allUsers.length
          renderNodes(json)
          for(let i = 0;i<=inputInfo.length -1;i++){
            inputInfo[i].value = ""
          }
          popupAddNewUser.style.display = "none"
          table.style.opacity = "1"
        })
    }
   
    
}