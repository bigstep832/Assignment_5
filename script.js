console.log("JavaScript is work!");

const userProfile = {
  name: "Zhadiger",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["reading", "gaming"]
};
console.log(userProfile);

const currentYear = new Date().getFullYear();
const age = currentYear - userProfile.birthYear;
const hobbiesCount = userProfile.hobbies.length;
console.log("Age:", age);
console.log("Hobbies count:", hobbiesCount);

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
  event.preventDefault();

  userProfile.name = document.getElementById("username").value;

  userProfile.birthYear = Number(
    document.getElementById("birthYear").value
  );

  const updatedAge = currentYear - userProfile.birthYear;

  document.getElementById("profileResult").textContent =
    "Name: " + userProfile.name + " | Age: " + updatedAge;

  console.log(userProfile);
});

const hobbiesList = document.getElementById("hobbiesList");
const hobbyInput = document.getElementById("hobbyInput");

function renderHobbies() {
  hobbiesList.textContent = "";

  for (const hobby of userProfile.hobbies) {
    const item = document.createElement("li");
    item.textContent = hobby;
    hobbiesList.appendChild(item);
  }

  document.getElementById("hobbyCounter").textContent =
    "Hobbies count: " + userProfile.hobbies.length;
}

renderHobbies();

document.getElementById("addHobby").addEventListener("click", function() {
  const newHobby = hobbyInput.value.trim();

  if (newHobby === "") {
    return;
  }

  userProfile.hobbies.push(newHobby);
  hobbyInput.value = "";
  renderHobbies();
});

document.getElementById("removeHobby").addEventListener("click", function() {
  userProfile.hobbies.pop();
  renderHobbies();
});
