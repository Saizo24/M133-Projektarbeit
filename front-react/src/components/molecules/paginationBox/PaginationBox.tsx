import Box from '@mui/material/Box'
import React, { ChangeEvent, ReactNode } from 'react'
import { Pagination, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PaginationBoxStyle from './PaginationBoxStyle';

type Props = {
    maxEntries: number
    pageLimit: number
    pageNumber: number
    handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void
    handleChangePageLimit: (event: SelectChangeEvent<string>, child: ReactNode) => void
}

const PaginationBox = ({ maxEntries, pageLimit, pageNumber, handleChangePage, handleChangePageLimit }: Props) => {
    return (
        <Box sx={{ ...PaginationBoxStyle.box }}>
            <Pagination
                count={Math.ceil(maxEntries / pageLimit)}
                page={pageNumber}
                defaultPage={1}
                siblingCount={0}
                boundaryCount={2}
                onChange={handleChangePage}
                showFirstButton showLastButton
            />
            <Typography>Images per Page:</Typography>
            <Select
                value={pageLimit.toString()}
                onChange={handleChangePageLimit}
                size="small"
            >
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </Box>
    )
}

export default PaginationBox