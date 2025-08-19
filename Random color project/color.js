let box_color1 = Math.ceil(Math.random()*10000)
let box_color2 = Math.ceil(Math.random()*10000)
let box_color3 = Math.ceil(Math.random()*10000)
let box_color4 = Math.ceil(Math.random()*10000)
let box_color5 = Math.ceil(Math.random()*10000)

let box_parent = document.body.firstElementChild.children

box_parent[0].style.backgroundColor = `#${box_color1}`
box_parent[1].style.backgroundColor = `#${box_color2}`
box_parent[2].style.backgroundColor = `#${box_color3}`
box_parent[3].style.backgroundColor = `#${box_color4}`
box_parent[4].style.backgroundColor = `#${box_color5}`