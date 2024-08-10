export interface User {
    userId: number;
    name: string;
    summary: {
        currentLesson: {
            lesson: string;
            lessonProgress: number;
        };
        timeSpent: {
            id: number;
            label: string;
            value: number; //hours
        }[];
    };
    detailedReport: {
        hoursSpent: {
            totalHours: number; //hours
            breakdown:{
                id: number;
                label: string;
                value: number; //hours
            }[];
        };
        progress: {
            curriculumProgress: number; // percentage
            completedModules: number;
            totalModules: number;
        };
        overallProficiency: "Beginner" | "Intermediate" | "Advanced" ;
        levelScores: {
            level: string;
            score: number;
        }[];
        progressGraph: {
            week: number;
            progress: number;
        }[];
        analysis: {
            strengths: string[];
            weaknesses: string[];
            improvements: string[];
        };
    };
}
