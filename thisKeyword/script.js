let form = document.querySelector("form");
let card = document.querySelector(".show-users");


function renderUser(users) {
    card.innerHTML = users.map((user) => {
        return (
            `<div data-id="${user.id}" class="user-card bg-gray-700 p-4 rounded-[1rem] shadow-xl w-[15rem] flex flex-col items-center text-center mx-auto">
                <img class="w-24 h-24 object-cover rounded-full mb-4" src="${user.pic}" alt="${user.name}">
                <h2 class="text-xl font-bold mt-2">${user.name}</h2>
                <p class="text-gray-400">${user.role}</p>
                <p class="mt-2">${user.bio}</p>
            </div>`
        )
    }).join('') // join is used to convert array into string
};

const userManager = {
    users: [{
        id: 1,
        name: "John Doe",
        role: "Developer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        pic: "https://i.pinimg.com/vwebp/1200x/91/e7/79/91e779a2fbf5d31e06994c53a28bbc95.webp"
    },
    {
        id: 2,
        name: "Ava Max",
        role: "SDE",
        bio: "m deeply sorry to hear about the loss of your mother",
        pic: "https://i.pinimg.com/vwebp/736x/84/63/f9/8463f9e625b91cf754f694cc09f18e1b.webp"
    },
    {
        id: 3,
        name: "Alein yee",
        role: "business analyst",
        bio: "LNo words can truly easeing this difficult time. May her",
        pic: "https://i.pinimg.com/vwebp/736x/fc/58/f6/fc58f67f1a08d72aac200002f2fdd3f1.webp"
    },],
    init: function () {
        renderUser(this.users);

        // yeh isliye kiya bcoz function ke andar 'this' form la point krty bocz form vr eventListener lgly
        form.addEventListener("submit", this.submitForm.bind(this));   
        this.removerUser();
    },
    addUser: function () {
        this.users.push({
            id: this.users.length + 1,
            name: form.name.value,
            role: form.role.value,
            bio: form.bio.value,
            pic: form.photo.value,
        });
        renderUser(this.users);

    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },
    removerUser: function (e) {

        // yaha 'this' point krega object ko coz arrow function use kiya and normal function hota toh card ko point krta coz event listener card pe lgya hoga
        card.addEventListener("click", (e) => {
            if ((parseInt(e.target.dataset.id))) {
                console.log(this);
                let user = this.users.find((user) => user.id === parseInt(e.target.dataset.id));
                this.users.splice(this.users.indexOf(user), 1);
                renderUser(this.users);
            }
            else {
                alert("Please click on the user card to remove the user");
            }

        });
    },
}

userManager.init();