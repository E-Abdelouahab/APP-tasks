export default interface Task {
    _id : string;
    userId?: string;
    name: string;
    detail?: string;
    finished: boolean;
    createdAt: Date;
}