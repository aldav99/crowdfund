import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { Table } from './Table';
import { MobileTable } from './MobileTable';

export const GenerateTable = ({ rows, columns }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 541px)'
    })

    return isDesktopOrLaptop ? <Table rows={rows} columns={columns}  /> : <MobileTable rows={rows} columns={columns}  />
}
