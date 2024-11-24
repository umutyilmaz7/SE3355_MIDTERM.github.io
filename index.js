function closeAd() {
    document.querySelector('.ad').style.display = 'none';
}

function termsAccept() {
    const message = "If you continue, you will accept Terms and Conditions.";
    return confirm(message); 
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^5\d{9}$/; 
    return phonePattern.test(phone);
}

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://run.mocky.io/v3/027d8865-610e-444e-915b-3bbba16b4f2d"; 

    const form = document.querySelector(".form");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityDropdown = document.getElementById("city");
            data.cities.forEach(city => {
                const option = document.createElement("option");
                option.value = city.toLowerCase();
                option.textContent = city;
                cityDropdown.appendChild(option);
            });

            const courseDropdown = document.getElementById("course-type");
            data.courseTypes.forEach(course => {
                const option = document.createElement("option");
                option.value = course.toLowerCase();
                option.textContent = course;
                courseDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Veri alınırken hata oluştu:", error);
        });

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid Turkish phone number.");
            return;
        }

        window.location.href = "form-submitted.html";
    });
});
