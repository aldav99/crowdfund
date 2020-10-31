import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { Table } from './Table';

export const GenerateTable = ({ rows, mobileColumns, columns }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 541px)'
    })

    return <Table rows={rows} columns={ isDesktopOrLaptop ? columns : mobileColumns }  />
}
