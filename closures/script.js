const showToast = document.querySelector("#showToast");
const parent = document.querySelector(".parent");

function createToaster(config) {

    parent.className = `fixed ${config.positionY === "top" ? "top-5" : "bottom-5"} ${config.positionX === "right" ? "right-5" : "left-5"} flex flex-col gap-3 z-50
    `;

    return function (text) {

        const toast = document.createElement("div");

        toast.className = `${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} px-5 py-3 rounded-lg shadow-xl border border-gray-700 min-w-[250px]
        `;

        toast.textContent = text;
        parent.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, config.duration * 1000);
    };
}

const toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

toaster("Welcome here!")

setTimeout(()=>{
    toaster("this is dummy notification.")
}, 2000);

showToast.addEventListener("click", () => {
    toaster("✅ Success!");
});