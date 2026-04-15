const foodData = {
  apple: { calories: 95 },
  pizza: { calories: 285 },
  burger: { calories: 354 },
  salad: { calories: 152 }
};

document.getElementById("foodForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const food = document.getElementById("food").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  const calories = foodData[food].calories * quantity;

  document.getElementById("resultBox").innerHTML = `
    <h3>Hello ${name}</h3>
    <p>Food: ${food}</p>
    <p>Total Calories: ${calories}</p>
  `;
});
