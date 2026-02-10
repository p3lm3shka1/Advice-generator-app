const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const adviceBtn = document.getElementById("adviceBtn");
const url = "https://api.adviceslip.com/advice";

function getAdvice() {
  adviceBtn.disabled = true;
  adviceText.textContent = "Loading advice...";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      adviceText.textContent = `"${data.slip.advice}"`;
      adviceId.textContent = `ADVICE #${data.slip.id}`;
      adviceBtn.disabled = false;
    })
    .catch((error) => {
      adviceText.textContent = "Something went wrong";
      adviceBtn.disabled = false;
      console.error("Error:", error);
    });
}

window.addEventListener("load", getAdvice);

adviceBtn.addEventListener("click", getAdvice);
