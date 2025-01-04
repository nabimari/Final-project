


export default class ClassroomCSP {
    constructor(rows, seatsPerRow, students) {
        this.rows = rows; // Number of rows in the classroom
        this.seatsPerRow = seatsPerRow; // Number of seats per row
        this.students = students; // List of student objects
        this.seating = Array.from({ length: rows }, () => Array(seatsPerRow).fill(null)); // Seating arrangement
    }

    resetSeating() {
        this.seating = Array.from({ length: this.rows }, () => Array(this.seatsPerRow).fill(null));
    }

    assignRows() {
        const specialNeedsStudents = this.students.filter(student => student.specialNeeds);
        const otherStudents = this.students.filter(student => !student.specialNeeds);

        const sortedStudents = [
            ...specialNeedsStudents.sort((a, b) => b.score - a.score),
            ...otherStudents.sort((a, b) => b.score - a.score),
        ];

        const unseatedStudents = [];
        for (let student of sortedStudents) {
            if (student.specialNeeds) {
                if (!this.placeStudentInRow(student, [0, 1])) {
                    unseatedStudents.push(student);
                }
            } else if (student.score >= 4.2) {
                if (!this.placeStudentInRow(student, [0])) unseatedStudents.push(student);
            } else if (student.score >= 3.4) {
                if (!this.placeStudentInRow(student, [1])) unseatedStudents.push(student);
            } else if (student.score >= 2.6) {
                if (!this.placeStudentInRow(student, [2])) unseatedStudents.push(student);
            } else if (student.score >= 1.8) {
                if (!this.placeStudentInRow(student, [3])) unseatedStudents.push(student);
            } else {
                if (!this.placeStudentInRow(student, [4])) unseatedStudents.push(student);
            }
        }

        for (let student of unseatedStudents) {
            if (!this.placeStudentAnywhere(student)) {
                console.warn(`Could not seat student with ID ${student.id}`);
            }
        }
    }

    placeStudentInRow(student, rows) {
        for (let row of rows) {
            for (let seat = 0; seat < this.seatsPerRow; seat++) {
                if (this.seating[row][seat] === null && this.isValidPlacement(student, row, seat)) {
                    this.seating[row][seat] = student;
                    return true;
                }
            }
        }
        return false;
    }

    placeStudentAnywhere(student) {
        for (let row = 0; row < this.rows; row++) {
            for (let seat = 0; seat < this.seatsPerRow; seat++) {
                if (this.seating[row][seat] === null && this.isValidPlacement(student, row, seat)) {
                    this.seating[row][seat] = student;
                    return true;
                }
            }
        }
        return false;
    }

    isValidPlacement(student, row, seat) {
        const directions = [
            [0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1],
        ];

        for (let [dx, dy] of directions) {
            const newRow = row + dx;
            const newSeat = seat + dy;

            if (
                newRow >= 0 &&
                newRow < this.rows &&
                newSeat >= 0 &&
                newSeat < this.seatsPerRow &&
                this.seating[newRow][newSeat]
            ) {
                const neighbor = this.seating[newRow][newSeat];
                if (student.avoid.includes(neighbor.id) || neighbor.avoid.includes(student.id)) {
                    return false;
                }
            }
        }
        return true;
    }

    fillGaps() {
        const specialNeeds = [];
        const others = [];

        for (let row = 0; row < this.rows; row++) {
            for (let seat = 0; seat < this.seatsPerRow; seat++) {
                if (this.seating[row][seat]) {
                    const student = this.seating[row][seat];
                    if (student.specialNeeds) {
                        specialNeeds.push(student);
                    } else {
                        others.push(student);
                    }
                    this.seating[row][seat] = null;
                }
            }
        }

        specialNeeds.sort((a, b) => b.score - a.score);
        others.sort((a, b) => b.score - a.score);

        for (let student of specialNeeds) {
            this.placeStudentInRow(student, [0, 1]);
        }

        for (let student of others) {
            this.placeStudentAnywhere(student);
        }
    }

    solve() {
        this.resetSeating();
        this.assignRows();
        this.fillGaps();
        return this.seating;
    }
}

// Example usage
const students = [
    { id: 1, score: 4.5, specialNeeds: true, avoid: [2, 3] },
    { id: 2, score: 3.9, specialNeeds: false, avoid: [1] },
    { id: 3, score: 4.8, specialNeeds: true, avoid: [] },
    { id: 4, score: 2.5, specialNeeds: false, avoid: [] },
    { id: 5, score: 1.5, specialNeeds: false, avoid: [] },
    { id: 6, score: 3.2, specialNeeds: false, avoid: [] },
    { id: 7, score: 4.1, specialNeeds: false, avoid: [] },
    { id: 8, score: 2.7, specialNeeds: false, avoid: [] },
    { id: 9, score: 2.0, specialNeeds: false, avoid: [] },
    { id: 10, score: 3.0, specialNeeds: false, avoid: [] },
    { id: 11, score: 3.6, specialNeeds: true, avoid: [] },
];

const classroom = new ClassroomCSP(5, 8, students);
const seating = classroom.solve();
console.log("Seating Arrangement:", seating);

// export default class ClassroomCSP {
//   constructor(rows, seatsPerRow, students) {
//     this.rows = rows; // Number of rows in the classroom
//     this.seatsPerRow = seatsPerRow; // Number of seats per row
//     this.students = students; // List of student objects
//     this.seating = Array.from({ length: rows }, () => Array(seatsPerRow).fill(null)); // Seating matrix
//   }

//   // Reset seating matrix
//   resetSeating() {
//     this.seating = Array.from({ length: this.rows }, () => Array(this.seatsPerRow).fill(null));
//   }

//   // Parse "Other Notes" using an API (e.g., OpenAI)
//   async parseOtherNotes(notes) {
//     try {
//       const response = await axios.post("https://api.openai.com/v1/completions", {
//         prompt: `Extract actionable seating preferences from the following note: "${notes}". Return structured JSON.`,
//         model: "text-davinci-003",
//         max_tokens: 150,
//       }, {
//         headers: {
//           Authorization: `Bearer YOUR_API_KEY`, // Replace with your API key
//         },
//       });
//       return JSON.parse(response.data.choices[0].text.trim());
//     } catch (error) {
//       console.error("Error parsing notes:", error.message);
//       return {}; // Default to empty object on failure
//     }
//   }

//   // Preprocess students to calculate priority scores and parse notes
//   async preprocessStudents() {
//     for (let student of this.students) {
//       // Calculate academic level score
//       const academicLevelScore = {
//         "Exceptional": 5,
//         "Above average": 4,
//         "Average": 3,
//         "Below average": 2,
//         "Needs significant support": 1,
//       }[student.responses?.academicPerformance || "Average"];

//       // Calculate behavior score
//       const behaviorScore = {
//         "Exemplary behavior": 1,
//         "Positive influence": 2,
//         "Neutral": 3,
//         "Occasionally disruptive": 4,
//         "Disruptive": 5,
//       }[student.responses?.behavior || "Neutral"];

//       // Assistance flag score
//       const assistanceScore = student.responses?.requiresAssistance ? 2 : 0;

//       // Parse "Other Notes" field
//       const parsedNotes = student.responses?.otherNotes
//         ? await this.parseOtherNotes(student.responses.otherNotes)
//         : {};

//       student.priorityScore = academicLevelScore + behaviorScore + assistanceScore;
//       student.parsedNotes = parsedNotes;
//     }

//     // Sort students based on priority
//     this.students.sort((a, b) => b.priorityScore - a.priorityScore);
//   }

//   // Assign students to front rows based on special needs and supervision
//   assignFrontRows() {
//     for (let student of this.students) {
//       if (student.responses?.specialNeeds || student.parsedNotes?.needsSupervision) {
//         this.placeStudentInRow(student, [0, 1]); // Front rows
//       }
//     }
//   }

//   // Place a student in the specified rows
//   placeStudentInRow(student, rows) {
//     for (let row of rows) {
//       for (let seat = 0; seat < this.seatsPerRow; seat++) {
//         if (this.seating[row][seat] === null && this.isValidPlacement(student, row, seat)) {
//           this.seating[row][seat] = student;
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   // Place student anywhere if no specific constraints
//   placeStudentAnywhere(student) {
//     for (let row = 0; row < this.rows; row++) {
//       for (let seat = 0; seat < this.seatsPerRow; seat++) {
//         if (this.seating[row][seat] === null && this.isValidPlacement(student, row, seat)) {
//           this.seating[row][seat] = student;
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   // Validate student placement considering "Avoid" constraints
//   isValidPlacement(student, row, seat) {
//     const directions = [
//       [0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1],
//     ];

//     for (let [dx, dy] of directions) {
//       const newRow = row + dx;
//       const newSeat = seat + dy;

//       if (
//         newRow >= 0 &&
//         newRow < this.rows &&
//         newSeat >= 0 &&
//         newSeat < this.seatsPerRow &&
//         this.seating[newRow][newSeat]
//       ) {
//         const neighbor = this.seating[newRow][newSeat];
//         if (student.avoid.includes(neighbor.id) || neighbor.avoid.includes(student.id)) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }

//   // Distribute remaining students evenly
//   distributeRemainingStudents() {
//     for (let student of this.students) {
//       if (!this.placeStudentAnywhere(student)) {
//         console.warn(`Could not place student ${student.id}`);
//       }
//     }
//   }

//   // Main solve method
//   async solve() {
//     this.resetSeating();
//     await this.preprocessStudents();
//     this.assignFrontRows();
//     this.distributeRemainingStudents();
//     return this.seating;
//   }
// }

// // Example usage
// const students = [
//   {
//     id: 1,
//     responses: {
//       academicPerformance: "Above average",
//       behavior: "Positive influence",
//       specialNeeds: true,
//       requiresAssistance: true,
//       otherNotes: "Needs frequent supervision and prefers sitting close to the teacher.",
//     },
//     avoid: [2],
//   },
//   {
//     id: 2,
//     responses: {
//       academicPerformance: "Average",
//       behavior: "Occasionally disruptive",
//       specialNeeds: false,
//       requiresAssistance: false,
//       otherNotes: "Needs a quiet seat far from distractions.",
//     },
//     avoid: [1],
//   },
// ];

// (async () => {
//   const classroom = new ClassroomCSP(5, 8, students);
//   const seatingArrangement = await classroom.solve();
//   console.log("Seating Arrangement:", seatingArrangement);
// })();
