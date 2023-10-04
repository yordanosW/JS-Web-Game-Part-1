function newimage(url,left,bottom){

    let newImg = document.createElement('img')
    newImg.src = url
    newImg.style.position ='fixed'
   newImg.style.left = left
    newImg.style.bottom =bottom
    document.body.append(newImg)
}

newimage('assets/pine-tree.png','450px','200px')
newimage('assets/green-character.gif','100px','100px')
newimage('assets/pillar.png','350px', '100px')
newimage('assets/crate.png','150px','200px')
newimage('assets/well.png','500px','425px')

function newItem(url,left,bottom){
    let item = document.createElement('img')
    item.src = url
    item.position = 'fixed'
    item.left = left
    item.bottom = bottom
    document.body.append(item)
    
    item.addEventListener('dblclick', function(){
        item.remove()
    })  



}
newItem('assets/sword.png','500px','405px')
newItem('assets/shield.png','165px','185px')
newItem('assets/staff.png','600px','100px')
