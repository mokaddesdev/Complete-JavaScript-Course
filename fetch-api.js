// let response = fetch(url)
// .than( response => {

// })
// .than()
// .catch(error=>{
    
// })

fetch('/read.text')
.then( response => {
    response.text()
})
.then( data => {
    console.log(data)
})