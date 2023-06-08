let blogPosts = [
    {
        id: "1",
        image: "https://i.postimg.cc/Wzcw4Pqg/PS5-Slim.png",
        title: "Sony Reveals Players' Favorite PS5 Game So Far",
        author: "By  Sarah Fields",
        description: "A series of polls reveal how PS5 fans feel about its games, with Sony announcing the Best PS5 Game yet, according to players.",
        date: new Date("Mar 1, 2023"),
        link: "https://gamerant.com/players-choice-best-ps5-game/"
    },
    {
        id: "2",
        image: "https://i.postimg.cc/3JxKnv0P/god-pof-war.jpg",
        title: "Confusing God of War Ragnarok Glitch Brings [SPOILER] Back to Life",
        author: "By  Aneesh Shukla",
        description: "An interesting glitch in God of War Ragnarok brings a certain character back to life and renders in their visual model where it shouldn't be.",
        date: new Date("Mar 5, 2023")
    },
    {
        id: "3",
        image: "https://i.postimg.cc/NjwvZ2Ks/Diablo-IV-Logo.jpg",
        title: "Diablo 4 Player Creates Compact Skill Tree Concept",
        author: "By  Christian Miller",
        description: "Although the literal skill tree in Diablo 4 has its charm, one player offers a much more compact concept for the game's skill assignment menu.",
        date: new Date("Jun 8, 2023")
    },
    {
        id: "4",
        image: "https://i.postimg.cc/hGLLMwH4/cyberpubk-2077.jpg",
        title: "Cyberpunk 2077: Phantom Liberty Pre-Orders Go Live Prematurely",
        author: "By  Dominik Bošnjak",
        description: "Cyberpunk 2077: Phantom Liberty pre-orders go live prematurely just ahead of the expansion's highly anticipated showing at Summer Game Fest 2023.        ",
        date: new Date("Jun 2, 2023")
    },
    {
        id: "5",
        image: "",
        title: "",
        author: "",
        description: "",
        date: new Date()
    },
    {
        id: "6",
        image: "",
        title: "",
        author: "",
        description: "",
        date: new Date()
    },
    {
        id: "7",
        image: "",
        title: "",
        author: "",
        description: "",
        date: new Date()
    },
    {
        id: "8",
        image: "",
        title: "",
        author: "",
        description: "",
        date: new Date()
    },
    {
        id: "9",
        image: "",
        title: "",
        author: "",
        description: "",
        date: new Date()
    },
    {
        id: "10",
        image: "",
        title: "",
        author: "",
        description: "",
        date: new Date(),
    },
];

let divblogpost = document.querySelector('.blogs');
let button = document.querySelector('.blogs')
blogPosts.forEach((data)=> {
    divblogpost.innerHTML += `
    <div class="card">
        <h4 class="display-8">${data.title}</h4>
        <img src=${data.image} class="card-img-top" alt="logo" loading:"lazy">
        <div class="card-body">
            <p class="text-black">
                ${data.description}
            </p>
            <p class="text-black">
            ${data.author}
            </p>
            <button id="display">Show More</button>
        </div>
    </div>
    `
})