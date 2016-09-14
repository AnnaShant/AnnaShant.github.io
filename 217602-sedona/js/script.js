var link=document.querySelector(".hotel");
var popup=document.querySelector(".form_date");
            
var date_number=popup.querySelector("[name=date_number]");
var date_number_1=popup.querySelector("[name=date_number_1]");
var date_number_2=popup.querySelector("[name=date_number_2]");
var date_number_3=popup.querySelector("[name=date_number_3]");
            
var date_number_2storage=localStorage.getItem("date_number_2");
var date_number_3storage=localStorage.getItem("date_number_3");
            
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("animation");
                
    date_number_2.value=date_number_2storage;
    date_number_3.value=date_number_3storage;
});
            
popup.addEventListener("submit", function(event) {
    if (!date_number.value || !date_number_1.value) {
    event.preventDefault();
    }
        else {
            localStorage.setItem("date_number_2", date_number_2.value);
            localStorage.setItem("date_number_3", date_number_3.value);
                }
        });

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
    if (popup.classList.contains("animation")) {
    popup.classList.remove("animation");
        }
    }
});