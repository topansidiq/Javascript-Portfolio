const root = document.getElementById('root');

const container = document.createElement('div');
container.id = "container";

const rows = [];
const cols = [];

for (let row = 1; row <= 10; row++) {
    const containerRow = document.createElement('div');
    containerRow.id = `row-${row}`;
    containerRow.className = "row"; // Tambahkan class untuk row
    container.append(containerRow);
    for (let col = 1; col <= 10; col++) {
        const element = document.createElement('div');
        let textContent = `(${row}, ${col})`; // Perbaiki text content agar sesuai dengan baris dan kolom
        element.textContent = textContent;
        element.id = `row-${row}-col-${col}`; // Pastikan ID unik untuk setiap elemen
        element.className = "cell"; // Tambahkan class untuk kolom
        cols.push(element);
        containerRow.append(element);
    }
    rows.push(containerRow);
}

root.append(container);

function randomNumber() {
    return Math.floor((Math.random() + Math.random()) * 2);
}

const card = new Card(300);

card.add(root);