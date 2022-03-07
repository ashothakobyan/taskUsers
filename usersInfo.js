let table = document.getElementById("table")
const popupAddNewUser = document.getElementById("popupAddNewUser")
const editTable = document.getElementById("editUserTable")
const editInputs = document.querySelectorAll(".editInput")
const eidtCancel = document.getElementById("editCancel")
const popupDelete = document.getElementById("popupDelete")
let editingUser = {}
let allUsers = []
function renderNodes(user){
    let tr = document.createElement("tr")
    tr.className = "usersTr"
    for(let i = 0;i<=8;i++){
        tr.appendChild(document.createElement("td")) 
    }
    tr.childNodes[0].innerHTML = user.id
    tr.childNodes[2].innerHTML = user.username
    tr.childNodes[1].innerHTML = user.name
    tr.childNodes[3].innerHTML = user.email
    tr.childNodes[4].innerHTML = user.phone
    tr.childNodes[5].innerHTML = user.address.city
    tr.childNodes[6].innerHTML = user.company.name
    tr.childNodes[7].innerHTML = user.website
    tr.childNodes[8].appendChild(creatButton("https://toppng.com/uploads/preview/user-edit-icon-edit-icon-white-11553486095hpvoxaoebd.png","edit",user))
    tr.childNodes[8].appendChild(creatButton("https://icon-library.com/images/delete-icon/delete-icon-14.jpg","delete",user))
    table.appendChild(tr)
}
function creatButton(src,cllasNmae,user){
    let img = document.createElement("img")
    img.src = src
    img.className="userButtons"
    let button = document.createElement("button")
    button.className = cllasNmae
    button.appendChild(img)
    if(button.className == "edit"){
        button.addEventListener("click",()=>{
            if(popupAddNewUser.style.display !== "block" && popupDelete.style.display !== "block"){
                if(editTable.style.display !== "block" ){
                    editTable.style.display = "block"
                    table.style.opacity = "0.5"
                    editingUser = user
                    editInputs[0].value = user.name
                    editInputs[1].value = user.username
                    editInputs[2].value = user.email
                    editInputs[3].value = user.phone
                    editInputs[4].value = user.address.city
                    editInputs[5].value = user.company.name
                    editInputs[6].value = user.website
                    
                }else{
                    editTable.style.display = "none"
                    table.style.opacity = "1"
                }
            }
        })
    }else if(button.className == "delete"){
        button.addEventListener("click",()=>{
            if(popupAddNewUser.style.display !== "block" && editTable.style.display !== "block"){
                popupDelete.style.display = "block"
                table.style.opacity = "0.2"
                editingUser = user
           }
        })
    }
    return button
}
function renderTable(json){
    json.map(user =>{
        renderNodes(user)
    })
}
 async function fetchUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await response.json()
    renderTable(json)
    allUsers = json
    return json
}
fetchUsers()

function deleteTable(){
    table.innerHTML = "<tr><th>#</th><th>Name</th>  <th>UserName</th> <th>Email</th> <th>Phone</th> <th>Address</th>  <th>Company</th>   <th>website</th> <th>Actions</th></tr>"
}

