export type CommonPropTypes = {
    calendar_date: moment.MomentInput;
    isPeriodDisabled: (date: moment.MomentInput, unit: moment.unitOfTime.StartOf) => boolean;
    selected_date: moment.MomentInput;
    updateSelected: (e: React.MouseEvent<HTMLSpanElement>, type: moment.unitOfTime.StartOf) => void;
};
