import React from 'react';

const App = () => {

    fetch('http://localhost:3000/api/products')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });

    return (
        <main>
            Listing page
        </main>
    );
};

export default App;