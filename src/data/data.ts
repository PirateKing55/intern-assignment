import { User } from "./types";

export const users: User[] = [
    {
        userId: 1,
        name: "Bam",
        summary: {
            currentLesson: {
                lesson: "React Basics",
                lessonProgress: 75,
            },
            timeSpent: [
                { id: 1, label: "Speaking", value: 12 },
                { id: 2, label: "Writing", value: 15 },
                { id: 3, label: "Reading", value: 10 },
                { id: 4, label: "Listening", value: 8 },
            ],
        },
        detailedReport: {
            hoursSpent: {
                totalHours: 45,
                breakdown: [
                    { id: 1, label: "Week 1", value: 10 },
                    { id: 2, label: "Week 2", value: 12 },
                    { id: 3, label: "Week 3", value: 8 },
                    { id: 4, label: "Week 4", value: 9 },
                    { id: 5, label: "Week 5", value: 6 },
                ],
            },
            progress: {
                curriculumProgress: 60,
                completedModules: 3,
                totalModules: 5,
            },
            overallProficiency: "Intermediate",
            levelScores: [
                { level: "Level 1", score: 70 },
                { level: "Level 2", score: 75 },
                { level: "Level 3", score: 80 },
                { level: "Level 4", score: 85 },
            ],
            progressGraph: [
                { week: 0, progress: 0 },
                { week: 1, progress: 20 },
                { week: 2, progress: 30 },
                { week: 3, progress: 40 },
                { week: 4, progress: 50 },
                { week: 5, progress: 60 },
            ],
            analysis: {
                strengths: ["Good understanding of concepts", "Active participation"],
                weaknesses: ["Needs improvement in writing skills"],
                improvements: ["Practice more writing exercises"],
            },
        },
    },
    {
        userId: 2,
        name: "Khun",
        summary: {
            currentLesson: {
                lesson: "JavaScript ES6",
                lessonProgress: 50,
            },
            timeSpent: [
                { id: 1, label: "Speaking", value: 8 },
                { id: 2, label: "Writing", value: 12 },
                { id: 3, label: "Reading", value: 15 },
                { id: 4, label: "Listening", value: 10 },
            ],
        },
        detailedReport: {
            hoursSpent: {
                totalHours: 45,
                breakdown: [
                    { id: 1, label: "Week 1", value: 8 },
                    { id: 2, label: "Week 2", value: 10 },
                    { id: 3, label: "Week 3", value: 12 },
                    { id: 4, label: "Week 4", value: 7 },
                    { id: 5, label: "Week 5", value: 8 },
                ],
            },
            progress: {
                curriculumProgress: 50,
                completedModules: 2,
                totalModules: 4,
            },
            overallProficiency: "Beginner",
            levelScores: [
                { level: "Level 1", score: 60 },
                { level: "Level 2", score: 65 },
                { level: "Level 3", score: 70 },
                { level: "Level 4", score: 75 },
            ],
            progressGraph: [
                { week: 0, progress: 0 },
                { week: 1, progress: 10 },
                { week: 2, progress: 25 },
                { week: 3, progress: 35 },
                { week: 4, progress: 40 },
                { week: 5, progress: 50 },
            ],
            analysis: {
                strengths: ["Quick learner", "Good reading skills"],
                weaknesses: ["Needs improvement in speaking skills"],
                improvements: ["Participate in speaking exercises"],
            },
        },
    },
    {
        userId: 3,
        name: "Rak",
        summary: {
            currentLesson: {
                lesson: "Advanced CSS",
                lessonProgress: 90,
            },
            timeSpent: [
                { id: 1, label: "Speaking", value: 14 },
                { id: 2, label: "Writing", value: 10 },
                { id: 3, label: "Reading", value: 8 },
                { id: 4, label: "Listening", value: 12 },
            ],
        },
        detailedReport: {
            hoursSpent: {
                totalHours: 44,
                breakdown: [
                    { id: 1, label: "Week 1", value: 10 },
                    { id: 2, label: "Week 2", value: 12 },
                    { id: 3, label: "Week 3", value: 8 },
                    { id: 4, label: "Week 4", value: 7 },
                    { id: 5, label: "Week 5", value: 7 },
                ],
            },
            progress: {
                curriculumProgress: 85,
                completedModules: 4,
                totalModules: 5,
            },
            overallProficiency: "Advanced",
            levelScores: [
                { level: "Level 1", score: 85 },
                { level: "Level 2", score: 88 },
                { level: "Level 3", score: 90 },
                { level: "Level 4", score: 92 },
            ],
            progressGraph: [
                { week: 0, progress: 0 },
                { week: 1, progress: 30 },
                { week: 2, progress: 50 },
                { week: 3, progress: 70 },
                { week: 4, progress: 80 },
                { week: 5, progress: 85 },
            ],
            analysis: {
                strengths: ["Excellent grasp of advanced concepts", "Strong speaking skills"],
                weaknesses: ["Needs more reading practice"],
                improvements: ["Increase reading exercises"],
            },
        },
    },
];
