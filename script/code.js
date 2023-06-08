let featuredPosts = [
    {
        id: "1",
        title: "FIFA 23",
        imageUrl: "https://i.postimg.cc/PrRCqvhd/fifa-23-mbappe-playing.jpg",
        description: " FIFA 23 is a football video game published by Electronic Arts (or simply EA). It is the 30th installment in the FIFA series that is developed by EA Sports, and the final installment under the FIFA banner, and released worldwide on 30 September 2022 for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S.[2] Kylian Mbappé is the cover athlete for the standard and legacy editions. Mbappé shares the cover of the ultimate edition with Sam Kerr. Listed in Guinness World Records as the best-selling sports video game franchise in the world, the game is the final under the 29-year partnership between EA and FIFA. Future football games by EA are set to be named under the banner of EA Sports FC.[3]",
        content: "-WIKIPEDIA",
        date: new Date()
    },
    {
        id: "2",
        title: "CALL OF DUTY MODERN WARFARE 2",
        imageUrl: "https://i.postimg.cc/50Q3PQJg/modern-warfare-2-g.webp",
        description: "Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and the modern day. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare II, was released on October 28, 2022. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and Modern Warfare 3 (2011), were made. The sub-series received a reboot with Modern Warfare in 2019, with a sequel released in 2022. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008), before releasing Black Ops (2010) and subsequently creating the Black Ops sub-series. Four other entries, Black Ops II (2012), III (2015), 4 (2018), and Cold War (2020) were made, the latter in conjunction with Raven Software. Sledgehammer Games, who were co-developers for Modern Warfare 3, have also developed three titles, Advanced Warfare (2014), WWII (2017), and Vanguard (2021).  ",
        content: "-WIKIPEDIA",
        date: new Date()
    },
    {
        id: "3",
        title: "FORZA HORIZON 5",
        imageUrl: "https://i.postimg.cc/MTzdsFnZ/5newstunning-3564143b.jpg",
        description: "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico. It was released on 9 November 2021 for Windows, Xbox One, and Xbox Series X/S.The game received critical acclaim and became a commercial success upon release; it launched to over ten million players in the first week, the biggest-ever launch for an Xbox Game Studios game. The game won three jury-voted awards at The Game Awards 2021, tying with Hazelight's It Takes Two for most wins.[4]",
        content: "-WIKIPEDIA",
        date: new Date()
    },
    {
        id: "4",
        title: "MINECRAFT",
        imageUrl: "https://i.postimg.cc/Y06cDfmf/4a71c-16288344104381-800.jpg",
        description: "Minecraft is a 2011 sandbox game developed by Mojang Studios. The game was created by Markus 'Notch' Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before being fully released in November 2011, with Notch stepping down and Jens 'Jeb' Bergensten taking over development. Minecraft is the best-selling video game in history, with over 238 million copies sold and nearly 140 million monthly active players as of 2021 and has been ported to several platforms.",
        content: "-WIKIPEDIA",
        date: new Date()
    },
    // {
    //     id: "5",
    //     title: "",
    //     imageUrl: "",
    //     description: "",
    //     content: "",
    //     date: new Date()
    // },
];

let divfeatured = document.querySelector('.featured');
featuredPosts.forEach((data)=> {
    divfeatured.innerHTML += `
    <div class="card">
        <h4 class="display-8">${data.title}</h4>
        <img src=${data.imageUrl} class="card-img-top" alt="logo" loading:"lazy">
        <div class="card-body">
            <p class="text-black">
                ${data.description} @ <span>${data.content}</span>
            </p>
        </div>
    </div>
    `
})
