Student Grade Generator, Speed Detector, and Net Salary Calculator

Overview

This repository contains three JavaScript-based coding challenges designed to enhance programming skills and problem-solving abilities. The challenges include:

Student Grade Generator - A function that assigns grades based on student marks.

Speed Detector - A program that checks a vehicle's speed and issues demerit points for overspeeding.

Net Salary Calculator - A salary computation tool that calculates deductions such as PAYE, NHIF, and NSSF to determine net salary.

Challenge 1: Student Grade Generator

Description

This program prompts the user to input student marks (between 0 and 100) and returns the corresponding grade:

A: Above 79

B: 60 - 79

C: 50 - 59

D: 40 - 49

E: Below 40

Usage

let marks = prompt("Enter student marks (0 - 100):");
console.log(`Grade: ${getGrade(parseInt(marks))}`);

Challenge 2: Speed Detector

Description

This program checks the speed of a car and issues demerit points:

Speed below 70 km/h: "Ok"

Every 5 km/h above 70 km/h: 1 demerit point

More than 12 points: "License suspended"

Usage

let speed = prompt("Enter car speed:");
checkSpeed(parseInt(speed));

Challenge 3: Net Salary Calculator

Description

This program calculates net salary after considering:

PAYE (Income Tax)

NHIF Deduction

NSSF Deduction

Gross Salary & Net Salary

Usage

let basicSalary = parseFloat(prompt("Enter basic salary:"));
let benefits = parseFloat(prompt("Enter benefits amount:"));
let result = calculateNetSalary(basicSalary, benefits);
console.log(`Net Salary: ${result.netSalary}`);

Setup & Installation

Clone the repository:

git clone https://github.com/shawn254ke/repository-name.git

Open the project in a code editor (e.g., VS Code).

Run the JavaScript files in a browser console or Node.js.

Technologies Used

JavaScript - Core programming language

HTML & Browser Console - To run scripts interactively

Author

Shawn Otieno, GitHub: shawn254ke
