import ClassSchedule from "./classSchedule.model";

const getAllSchedulesFromDB = async (query: Record<string, unknown>) => {
    const result = await ClassSchedule.find(query); 
    return { result };
};

export const ScheduleServices = {
    getAllSchedulesFromDB,
};
