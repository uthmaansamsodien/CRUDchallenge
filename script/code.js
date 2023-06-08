let featuredPosts = [
    {
        id: "1",
        // title: "FIFA 24 News: New Feeatures, Gameplay and Graphics",
        // imageUrl: "https://i.postimg.cc/x1cf43wW/fifia.jpg",
        // description: "FIFA has released news about FIFA 24 releasing September 2023",
        content: "",
        date: new Date()
    },
    {
        id: "2",
        title: "",
        imageUrl: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "3",
        title: "",
        imageUrl: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "4",
        title: "",
        imageUrl: "",
        description: "",
        content: "",
        date: new Date()
    },
    {
        id: "5",
        title: "",
        imageUrl: "",
        description: "",
        content: "",
        date: new Date()
    },
];

let divfeatured = document.querySelector('.featured');
featuredPosts.forEach((data)=> {
    divfeatured.innerHTML += `
    <div class="card">
        <h4 class="display-8">${data.title}</h4>
        <img src=${data.imageUrl} class="card-img-left" alt="logo" loading:"lazy">
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.content}</span>
            </p>
        </div>
    </div>
    `
})