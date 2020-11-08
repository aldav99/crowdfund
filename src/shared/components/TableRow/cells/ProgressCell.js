import React from 'react';

import { percentOfProgress } from '../helpers/percentOfProgress';

export const ProgressCell = ({ column, row }) => {
    return (
        percentOfProgress(row.fundedSum, row.neededSum)
    );
};