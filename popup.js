const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const popup = document.getElementById("popup");
const inquiryForm = document.getElementById("inquiryForm");

openPopupBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const message = document.getElementById("message").value;
  
  // You can now process the form data, for example, send it to a server or perform any necessary actions.
  
  // After processing, you might want to close the popup:
  popup.style.display = "none";
});
