const types = {
    flagship: 0,
    main: 1,
    service: 2
}

const projects = [
    {
        id: "thebeat",
        name: "theBeat",
        start: "docs/thebeat/intro",
        basePath: "docs/thebeat",
        description: "Audio Player",
        icon: "/img/com.vicr123.thebeat.svg",
        startId: "intro",
        type: types.flagship
    },
    {
        id: "thebranch",
        name: "theBranch",
        start: "docs/thebranch/intro",
        basePath: "docs/thebranch",
        description: "Git Client",
        icon: "/img/com.vicr123.thebranch.svg",
        startId: "intro",
        type: types.flagship
    },
    {
        id: "the24",
        name: "the24",
        start: "docs/the24/intro",
        basePath: "docs/the24",
        description: "Clock",
        icon: "/img/com.vicr123.the24.svg",
        startId: "intro",
        type: types.main
    },
    {
        id: "thefrisbee",
        name: "theFrisbee",
        start: "docs/thefrisbee/intro",
        basePath: "docs/thefrisbee",
        description: "Disk Management",
        icon: "/img/com.vicr123.thefrisbee.svg",
        startId: "intro",
        type: types.main
    },
    {
        id: "parlance",
        name: "Parlance",
        start: "docs/parlance/intro",
        basePath: "docs/parlance",
        description: "Localisation Platform",
        icon: "/img/com.vicr123.parlance.svg",
        startId: "intro",
        type: types.service
    }
];

module.exports = {
    projects,
    types
};