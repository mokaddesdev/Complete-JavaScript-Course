/* let response = fetch( url );

fetch( url )
.then( response => {
    // handle the response
} )
.catch( error => {
    // handle error
});

fetch( 'readme.txt' )
    .then( response => {
        response.text()
    })
    .then( data => {
        console.log( data )
    })
    .catch( error => {
        console.log( error.message )
    })

    //? In practice
    async function fetchText( ) {
        let response = await fetch( 'url' );
        let data = await response.text()
        console.log( data );
    }

    async function fetchTexts() {
        let response = await fetch('readme.txt');
        console.log( response.status)
        console.log( response.statusText);
        if ( response === 200 ) {
            let data = await response.text();
            // handle data
        }
    }

    fetchTexts();
    */

    async function getUsers() {
        let url = 'users.json';
        try{
            let res = await fetch( url );
            return await res.json();
        } catch( error ) {
            console.log( error );
        }
    }

    async function renderUsers() {
        let users = await getUsers();
        let html = '';
        users.forEach( user => {
            let htmlSegment = `<div class="user">
            <img src="${user.userprofile}">
            <h2> ${user.username}</h2>
            </div>`;
            html += htmlSegment;
        });
        let container = document.querySelector(".container");
    container.innerHTML = html;
    }
    renderUsers();