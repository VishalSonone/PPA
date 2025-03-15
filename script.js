document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const seatNo = document.getElementById("seatNo").value;

    const results = JSON.parse(localStorage.getItem("studentResults") || "[]");

    const student = results.find(s => s.Email === email && s.SeatNo === seatNo);
    if (student) {
        document.getElementById("resultContainer").classList.remove("hidden");
        document.getElementById("totalScore").innerText = student.Score;
        drawChart(student);
    } else {
        alert("Invalid Credentials!");
    }
});

function drawChart(student) {
    const ctx = document.getElementById("resultChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Aptitude", "DSA", "SQL", "Python", "C++", "Java"],
            datasets: [{
                label: "Marks",
                data: [student.Aptitude, student.DSA, student.SQL, student.Python, student.CPP, student.Java],
                backgroundColor: ["red", "blue", "green", "yellow", "purple", "orange"]
            }]
        }
    });
}

function logout() {
    document.getElementById("resultContainer").classList.add("hidden");
}
