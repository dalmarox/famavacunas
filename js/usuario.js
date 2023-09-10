export let dBusuarios = [
    {
        id:1,
        user:"Dalma",
        pass:"123456",
        admin: true,
    },
];


JSON.parse(localStorage.getItem(dBusuarios.user))|| localStorage.setItem("user",JSON.stringify(dBusuarios));