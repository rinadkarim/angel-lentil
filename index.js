// const data = {
//   "lentil": [
//     {
//       "id": 1,
//       "age": "4 Months",
//       "image": "assets/lentil 1.jpg",
//       "quote": "I was 4 months old here!"
//     },
//     {
//       "id": 2,
//       "age": "1 year",
//       "image": "assets/lentil 2.jpg",
//       "quote": "Me at a whopping one whole year old!"
//     },
//     {
//       "id": 3,
//       "age": "2 years",
//       "image": "assets/lentil 3.jpg",
//       "quote": "I was 2 here. I think you can tell from the pic I'm not obsessed with bathtime."
//     },
//     {
//       "id": 4,
//       "age": "8 Months",
//       "image": "assets/lentil 4.jpg",
//       "quote": "I was 8 moths here. Laying in the sun after a nice walk is one of my favorite things to do!"
//     },
//     {
//       "id": 5,
//       "age": "3 Months",
//       "image": "assets/lentil 5.jpg",
//       "quote": "Little baby me was simply only 3 months old here. I IMMEDIATELY started chewing my mom's pillows."
//     },
//     {
//       "id": 6,
//       "age": "5 months",
//       "image": "assets/lentil 6.jpg",
//       "quote": "I was 5 months old here! I loved taking walks around the city as a little pup."
//     },
//     {
//       "id": 7,
//       "age": "3 years",
//       "image": "assets/lentil 7.jpg",
//       "quote": "This is my current age! I love being 3!"
//     }
//   ]
// };

function displayLentilImages(lentil) {
  // first load image
  const imageContainer = document.getElementById('image-container');
  const img = document.createElement('img');
  img.src = lentil.image;
  img.alt = lentil.age;
  imageContainer.appendChild(img);
  // then load solution buttons
  const button = document.getElementById(`button${lentil.id}`);
  button.addEventListener('click', function() {
    document.getElementById('quote').textContent = lentil.quote;
  });
}

//displayLentilImages(lentil);


fetch('http://localhost:3000/lentil')
  .then(response => response.json())
  .then(lentils => {
    lentils.forEach(Lentil => {
      displayLentilImages(Lentil)
    })
  })
    
 
  
  
  //fetchAndDisplayImages();

  document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('angel-4months').src = 'assets/lentil 1.jpg';
  });
  
  document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('angel-8months').src = 'assets/lentil 4.jpg';
  });
  
  document.getElementById('button3').addEventListener('click', function() {
    document.getElementById('angel-3year').src = 'assets/lentil 7.jpg';
  });
  
  document.getElementById('button4').addEventListener('click', function() {
    document.getElementById('angel-3months').src = 'assets/lentil 5.jpg';
  });
  
  document.getElementById('button5').addEventListener('click', function() {
    document.getElementById('angel-2years').src = 'assets/lentil 3.jpg';
  });
  
  document.getElementById('button6').addEventListener('click', function() {
    document.getElementById('angel-1year').src = 'assets/lentil 2.jpg';
  });
  
  document.getElementById('button7').addEventListener('click', function() {
    document.getElementById('angel-5month').src = 'assets/lentil 6.jpg';
  });

  

// data.lentils.forEach(item => {
//   const button = document.getElementById(`button${item.id}`);
//   button.addEventListener('click', function() {
//   document.getElementById('quote').textContent = item.quote;
//   });
// });




let buttons = document.querySelectorAll('button');


buttons.forEach(button => {
  button.addEventListener('click', function() {
   const buttonId = button.id;
    const imageContainer = document.getElementById('image-container');
    const imageId = buttonId.replace('button', 'angel');
    const image = document.getElementsByClassName(imageId)[0];
    const src = image.src;
    imageContainer.innerHTML = `<img src="${src}" alt="${button.textContent}" />`;
  });
});

//let buttons = document.querySelectorAll('button');

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
