let blogPosts = [
    {
        id: "1",
        image: "https://i.postimg.cc/Wzcw4Pqg/PS5-Slim.png",
        title: "Sony Reveals Players' Favorite PS5 Game So Far",
        description: "A series of polls reveal how PS5 fans feel about its games, with Sony announcing the Best PS5 Game yet, according to players.",
        content: "",
        date: new Date()
    },
    {
        id: "2",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "3",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "4",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "5",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "6",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "7",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "8",
        title: "",
        imageUrl: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "9",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "10",
        image: "",
        title: "",
        description: "",
        content: "",
        date: new Date()
    },
];

let divblogpost = document.querySelector('.blogs');
blogPosts.forEach((data)=> {
    divblogpost.innerHTML += `
    <div class="card">
        <h4 class="display-8">${data.title}</h4>
        <img src=${data.image} class="card-img-left" alt="logo" loading:"lazy">
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.content}</span>
            </p>
        </div>
    </div>
    `
})