interface ILesson {
    id: string;
    link: string;
    order: number;
    previewImageLink: string;
    status: string;
    title: string;
}

// interface ILesson {
//     id: string;
//     title: string;
//     tags: String[];
//     launchDate: string;
//     status: string;
//     description: string;
//     duration: string;
//     lessonsCount: number;
//     containsLockedLessons: boolean;
//     previewImageLink: string;
//     rating: number;
//     meta: {
//         slug: string;
//         skills: [];
//         courseVideoPreview: {
//             link: string;
//             duration: number;
//             previewImageLink: string;
//         };
//     };
// }

interface ILessonComponentProps {
    lesson: ILesson
}

export type { ILessonComponentProps, ILesson };
