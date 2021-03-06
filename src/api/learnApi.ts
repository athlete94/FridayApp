import {instance} from "./instance";

type UpdateGradeResponseDataType = {
    updatedGrade: UpdatedGradeType
    token: string
    tokenDeathTime: number
};

export type UpdateGradeDataType = {
    card_id: string
    grade: number
};

export type UpdatedGradeType = {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
    more_id: string
    created: string
    updated: string
    __v: number
};

export const learnApi = {
    gradeCard(data: UpdateGradeDataType) {
        return instance.put<UpdateGradeResponseDataType>('cards/grade', data)
            .then(response => response.data)
    },
};