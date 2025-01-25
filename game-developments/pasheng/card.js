class Card {
	constructor(width, height) {
		this.width = width;
		this.height = this.width + (this.width / 2);
	}

	add(container) {
		const element = document.createElement('div'); 
		element.classList = "card";
		element.style.width = this.width + "px";
		element.style.height = this.height + "px";
		element.style.background = "#f4f4f4";

		const content = document.createElement('div');

		const button = document.createElement('button'); 
		button.classList = "btn"; 
		button.style.width = this.width / 3 + "px";
		button.style.backgroundColor = "#2c2c2c";
		button.style.color = "#f4f4f4";
		button.textContent = "Buy";

		element.appendChild(button);
		container.append(element);
	}
}