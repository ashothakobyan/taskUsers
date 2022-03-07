const userDeleteButton = document.getElementById("itemDelateButtonYes")
const deleteButtonNo = document.getElementById("itemDelateButtonNo")

userDeleteButton.addEventListener("click",()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
    .then(()=>{

        renderAfterDeleting()
        // deleteTable()
        // renderTable(allUsers)
        closeDeletePopUp()  
    })
})
function renderAfterDeleting(){
    let usersTr = Array.from(document.querySelectorAll(".usersTr"))
    usersTrDelete = usersTr.find(el=>el.childNodes[0].innerHTML == editingUser.id)
    usersTrDelete.remove()
    usersTr = usersTr.filter(el=>el.childNodes[0].innerHTML > editingUser.id)
    usersTr.forEach(el=>{
        el.childNodes[0].innerHTML = el.childNodes[0].innerHTML - 1
    })
    // for(let i = 0;i<=usersTr.length-1;i++){
    //     const userTrChild = Array.from(usersTr[i].childNodes)

        // .forEach((td,j)=> {
            // console.log(td.innerHTML,usersTr[i+1].childNodes[j].innerHTML )
            // // if(j<8 && j > 0 ){
            // //     td.innerHTML = usersTr[i+1].childNodes[j].innerHTML
            // // }
            // // if(j === 8){
            // //     // console.log(td.childNodes,usersTr[i+1].childNodes[j].childNodes)
            // //     td.childNodes = usersTr[i+1].childNodes[j].childNodes
            // //     console.log(td.childNodes)
            // //     // td.innerHTML = ""
            // //     // td.appendChild(usersTr[i+1].childNodes[j])
            // // }
        // })
    // }
    allUsers.splice(editingUser.id-1,1)
    allUsers.forEach(el=>{
        if(el.id > editingUser.id){
            el.id--
        }
    })
}

deleteButtonNo.addEventListener("click",function(){
    closeDeletePopUp()
})
function closeDeletePopUp(){
    popupDelete.style.display = "none"
    table.style.opacity = "1"
}