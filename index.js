const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/Vincent van Gogh.png",
        post: "images/Vincent-post.png",
        comment: "i feel how i look rn ngl",
        likes: 21,
        likeButton: "1",
        comments: 5,
        datePosted: 134
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.png",
        post: "images/post-courbet.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        likeButton: "2",
        comments: 2,
        datePosted: 146
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.png",
        post: "images/post-ducreux.png",
        comment: "gm friends! which coin are YOU stacking up today??",
        likes: 152,
        likeButton: "3",
        comments: 24,
        datePosted: 222
    }
]

const postsArea = document.getElementById("posts-area")


for (let i = 0; i < posts.length; i++) {

    postsArea.innerHTML += `

    <div class="post">

          <div class="post-head">
            <img src="${posts[i].avatar}">
            <div class="user-location">
              <h3>${posts[i].name}</h3>
              <p>${posts[i].location}</p>
            </div>
            <img class="menu" src="images/menu.png">
          </div>

          <img id="image${posts[i].likeButton}" class="post-image" src="${posts[i].post}" alt="post-image">

          <div class="description">
            <div class="buttons">
              <img id="like${posts[i].likeButton}" src="images/like.png">
              <img class="smaller" src="images/comment.png">
              <img src="images/share.png">
            </div>
            <h3><span id="like-amount${posts[i].likeButton}">${posts[i].likes}</span> likes</h3>
            <h3>Vincey1853 <span>${posts[i].comment} </span></h3>
            <h2>View all <span>${posts[i].comments} </span> comments</h2>
            <p><span>${posts[i].datePosted}</span> years ago</p>

          </div> 

        </div>
        `
}

const likeBtn1 = document.getElementById("like1")
const imageBtn1 = document.getElementById("image1")
const likeAmount1 = document.getElementById("like-amount1")
let like1 = true

  likeBtn1.addEventListener("click", function() {

    if (like1 === false) {
      like1 = true
      likeBtn1.src = "images/like.png"
      likeAmount1.innerHTML = Number(likeAmount1.innerHTML) - 1
      
    }
    
    else if (like1 === true) {
      like1 = false
      likeBtn1.src = "images/heart.jpg"
      likeAmount1.innerHTML = Number(likeAmount1.innerHTML) + 1
    }
  })

  imageBtn1.addEventListener("click", function() {

    if (like1 === false) {
      like1 = true
      likeBtn1.src = "images/like.png"
      likeAmount1.innerHTML = Number(likeAmount1.innerHTML) - 1
    }
    
    else if (like1 === true) {
      like1 = false
      likeBtn1.src = "images/heart.jpg"
      likeAmount1.innerHTML = Number(likeAmount1.innerHTML) + 1
    }
  })

  const likeBtn2 = document.getElementById("like2")
  const imageBtn2 = document.getElementById("image2")
  const likeAmount2 = document.getElementById("like-amount2")
  let like2 = true
  
    likeBtn2.addEventListener("click", function() {
  
      if (like2 === false) {
        like2 = true
        likeBtn2.src = "images/like.png"
        likeAmount2.innerHTML = Number(likeAmount2.innerHTML) - 1
      }
      
      else if (like2 === true) {
        like2 = false
        likeBtn2.src = "images/heart.jpg"
        likeAmount2.innerHTML = Number(likeAmount2.innerHTML) + 1
      }
    })
  
    imageBtn2.addEventListener("click", function() {
  
      if (like2 === false) {
        like2 = true
        likeBtn2.src = "images/like.png"
        likeAmount2.innerHTML = Number(likeAmount2.innerHTML) - 1
      }
      
      else if (like2 === true) {
        like2 = false
        likeBtn2.src = "images/heart.jpg"
        likeAmount2.innerHTML = Number(likeAmount2.innerHTML) + 1
      }
    })

    const likeBtn3 = document.getElementById("like3")
    const imageBtn3 = document.getElementById("image3")
    const likeAmount3 = document.getElementById("like-amount3")
    let like3 = true
  
    likeBtn3.addEventListener("click", function() {
  
      if (like3 === false) {
        like3 = true
        likeBtn3.src = "images/like.png"
        likeAmount3.innerHTML = Number(likeAmount3.innerHTML) - 1
      }
      
      else if (like3 === true) {
        like3 = false
        likeBtn3.src = "images/heart.jpg"
        likeAmount3.innerHTML = Number(likeAmount3.innerHTML) + 1
      }
    })
  
    imageBtn3.addEventListener("click", function() {
  
      if (like3 === false) {
        like3 = true
        likeBtn3.src = "images/like.png"
        likeAmount3.innerHTML = Number(likeAmount3.innerHTML) - 1
      }
      
      else if (like3 === true) {
        like3 = false
        likeBtn3.src = "images/heart.jpg"
        likeAmount3.innerHTML = Number(likeAmount3.innerHTML) + 1
      }
    })


    
  
  


