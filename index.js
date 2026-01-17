document.addEventListener("DOMContentLoaded", () => {
    console.info("Website initialized");
});

const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

for (const card of cards) {
    card.addEventListener("dragstart",dragStart);
    card.addEventListener("dragend",dragEnd);
}

for (const list of lists) {
    card.addEventListener("dragover",dragOver);
    card.addEventListener("dragenter",dragEnter);
    card.addEventListener("dragleave",dragLeave);
    card.addEventListener("drop",dragDrop);
}

function dragStart(e) {
    e.data.transfer.setData("text/plain", this.id);
}

function dragEnd() {
    console.log("drag ended");
}