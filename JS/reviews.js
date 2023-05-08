const reviewContainer = document.querySelector('.reviews-container')
const review = document.querySelector('.review')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const reviews = [
    {
        name: 'Miya',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 
        "I went away on vacation and used this service. Came back seeing my dog looking very handsome with his new cut! Thank you groomers.",
    },
    {
        name: 'Lisa',
        position: 'Nursing Assistant',
        photo: 'https://Images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 
        "I've been very busy at my job lately and I just can't find the time to take care of my pet. I used the premium package and boy am I happy I did. I'm well taken cared of and so is my pet!"
    },
    {
        name: 'Jon',
        position: 'Librarian',
        photo: 'https://Images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        text: 
        "I've been feeling sick for the last few days. Hired a walker to take my dog for a jog and she's never been happier."
    },
    {
        name: 'Gabi',
        position: 'Brand Manager',
        photo: 'https://Images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        text: 
        "My friend recommended this service to me! The workers are so nice and treated my husky with care."
    },
    {
        name: 'Connor',
        position: 'Media Relations Coordinator',
        photo: 'https://Images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        text: 
        "Amazing! I love this service so much. When I am feeling lazy on a Sunday I know I can still make sure my dog gets walked."
    },
]

let idx = 1

function updateReviews() {
    const {name, position, photo, text} = reviews[idx]

    username.innerHTML = name 
    role.innerHTML = position
    userImage.src = photo
    review.innerHTML = text

    idx++

    if(idx > reviews.length-1 ) idx=0
}

setInterval(updateReviews, 10000)