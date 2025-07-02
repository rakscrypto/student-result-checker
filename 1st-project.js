const students = [
    {
        id: "FSC/CSC/2200399",
        name: "Rakin Momodu Oshioke",
        results: [
            { course: "CSC 310", score: 88 },
            { course: "CSC 311", score: 70 },
            { course: "CSC 312", score: 65 },
            { course: "CSC 313", score: 81 },
            { course: "CSC 314", score: 50 },
            { course: "CSC 315", score: 74 },
            { course: "CSC 316", score: 98 },
        ]
    },
    {
    id: "FSC/CSC/2200400",
    name: "Grace Ezechi",
    results: [
        { course: "CSC 310", score: 76 },
        { course: "CSC 311", score: 64 },
        { course: "CSC 312", score: 71 },
        { course: "CSC 313", score: 85 },
        { course: "CSC 314", score: 58 },
        { course: "CSC 315", score: 69 },
        { course: "CSC 316", score: 90 }
    ]
},
{
    id: "FSC/CSC/2200401",
    name: "Emeka Okafor",
    results: [
        { course: "CSC 310", score: 67 },
        { course: "CSC 311", score: 72 },
        { course: "CSC 312", score: 60 },
        { course: "CSC 313", score: 55 },
        { course: "CSC 314", score: 49 },
        { course: "CSC 315", score: 78 },
        { course: "CSC 316", score: 84 }
    ]
},
{
    id: "FSC/CSC/2200402",
    name: "Fatima Yusuf",
    results: [
        { course: "CSC 310", score: 92 },
        { course: "CSC 311", score: 80 },
        { course: "CSC 312", score: 74 },
        { course: "CSC 313", score: 88 },
        { course: "CSC 314", score: 67 },
        { course: "CSC 315", score: 95 },
        { course: "CSC 316", score: 89 }
    ]
},
{
    id: "FSC/CSC/2200403",
    name: "Tunde Adebayo",
    results: [
        { course: "CSC 310", score: 59 },
        { course: "CSC 311", score: 47 },
        { course: "CSC 312", score: 50 },
        { course: "CSC 313", score: 42 },
        { course: "CSC 314", score: 53 },
        { course: "CSC 315", score: 60 },
        { course: "CSC 316", score: 66 }
    ]
},
{
    id: "FSC/CSC/2200404",
    name: "Amaka Umeh",
    results: [
        { course: "CSC 310", score: 85 },
        { course: "CSC 311", score: 90 },
        { course: "CSC 312", score: 78 },
        { course: "CSC 313", score: 82 },
        { course: "CSC 314", score: 76 },
        { course: "CSC 315", score: 80 },
        { course: "CSC 316", score: 88 }
    ]
},
{
    id: "FSC/CSC/2200405",
    name: "Ibrahim Danjuma",
    results: [
        { course: "CSC 310", score: 62 },
        { course: "CSC 311", score: 57 },
        { course: "CSC 312", score: 60 },
        { course: "CSC 313", score: 51 },
        { course: "CSC 314", score: 48 },
        { course: "CSC 315", score: 63 },
        { course: "CSC 316", score: 70 }
    ]
},
{
    id: "FSC/CSC/2200406",
    name: "Chidinma Nwosu",
    results: [
        { course: "CSC 310", score: 93 },
        { course: "CSC 311", score: 87 },
        { course: "CSC 312", score: 82 },
        { course: "CSC 313", score: 90 },
        { course: "CSC 314", score: 85 },
        { course: "CSC 315", score: 88 },
        { course: "CSC 316", score: 95 }
    ]
}

    // ...other student records same as before
];

function getGrade(score) {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 40) return "D";
    if (score >= 30) return "E";
    return "F";
}
function printResult() {
    const printContents = document.getElementById("resultBox").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload(); 
}

function clearResult() {
    
    document.getElementById("studentMATNO").value = "";

    
    document.getElementById("resultBox").classList.add("hidden");

 
    document.getElementById("studentName").textContent = "";
    document.querySelector("#resultTable tbody").innerHTML = "";
    document.getElementById("gpa").textContent = "";
}

function checkResult() {
    const id = document.getElementById("studentMATNO").value.trim();
    const student = students.find(s => s.id === id);

    const resultBox = document.getElementById("resultBox");
    const nameField = document.getElementById("studentName");
    const tableBody = document.querySelector("#resultTable tbody");
    const gpaField = document.getElementById("gpa");

    if (!student) {
        alert("Student not found!");
        resultBox.classList.add("hidden");
        return;
    }

    nameField.textContent = student.name;
    tableBody.innerHTML = "";

    let totalPoints = 0;

    student.results.forEach(result => {
        const grade = getGrade(result.score);
        const points = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 }[grade];
        totalPoints += points;

        const row = `
            <tr>
                <td>${result.course}</td>
                <td>${result.score}</td>
                <td>${grade}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    const gpa = (totalPoints / student.results.length).toFixed(2);
    gpaField.textContent = gpa;
    resultBox.classList.remove("hidden");
}
