// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/gallery`)

.then(function(response) {
  
  return response.json(); 
})

.then(function(arts) {
 // data Javascript object 
  console.log(arts);

  let output = '';

  arts.forEach(function(arts) {
    output += `<figure class="card">

                  <img src=${arts.path} alt="${arts.title}">

                  <figcaption>
                    <h2>${arts.description}</h2>
                  </figcaption>

                </figure>
              `;
  });

  document.querySelector('.gallery').innerHTML = output;
})

// Error message
.catch(function(error) {
  if (error) {
    console.log('Error: Something went wrong!');
  }
});