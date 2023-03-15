interface ICoursesItem {
    id: string;
    title: string;
    tags: String[];
    launchDate: string;
    status: string;
    description: string;
    duration: string;
    lessonsCount: number;
    containsLockedLessons: boolean;
    previewImageLink: string;
    rating: number;
    meta: {
        slug: string;
        skills: [];
        courseVideoPreview: {
            link: string;
            duration: number;
            previewImageLink: string;
        };
    };
}

interface ICoursesItemComponentProps {
    course: ICoursesItem
}

export type { ICoursesItemComponentProps, ICoursesItem };
