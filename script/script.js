import { obj } from "../script/expo.js";

const container = document.getElementById("container");
const list = JSON.parse(obj);

list.forEach((c) => {
  container.innerHTML += `<div class="card">
        <div class="card-header">
          <div class="logo"><i class="${c.logo}"></i></div>
          <div class="cname">${c.name}</div>
        </div>
        <div class="price">$ ${c.price}/hr</div>
        <div class="card-btn">
          <button class="apply">Apply</button>
          <button class="info">More Info</button>
        </div>
      </div>`;
});

console.log(list);
