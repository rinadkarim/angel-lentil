function displayLentilImages(lentil) {
  // first load image
  const imageContainer = document.getElementById('image-container');
  //imageContainer.appendChild(img);
  // then load solution buttons
  const button = document.getElementById(`button${lentil.id}`);
  button.addEventListener('click', function() {
    document.getElementById('quote').textContent = lentil.quote;
    const img = document.getElementsByClassName(`angel${lentil.id}`)[0];
    img.src = lentil.image;
    img.alt = lentil.age;
  });
}




fetch('http://localhost:3000/lentil')
  .then(response => response.json())
  .then(lentils => {
    lentils.forEach(Lentil => {
      displayLentilImages(Lentil)
    })
  })
    
  let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
  });
});

document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  const commentItem = document.createElement('li');
  commentItem.textContent = `${name}: ${comment}`;

  document.getElementById('comments').appendChild(commentItem);


  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
});
