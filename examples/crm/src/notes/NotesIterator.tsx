import * as React from 'react';
import { Box } from '@mui/material';
import { useListContext } from 'react-admin';

import { Note } from './Note';
import { NewNote } from './NewNote';

export const NotesIterator = ({
    showStatus,
    reference,
}: {
    showStatus?: boolean;
    reference: 'contacts' | 'deals';
}) => {
    const { data, error, isPending } = useListContext();
    if (isPending || error) return null;
    return (
        <>
            <NewNote showStatus={showStatus} reference={reference} />
            <Box mt="0.5em">
                {data.map((note, index) => (
                    <Note
                        note={note}
                        isLast={index === data.length - 1}
                        showStatus={showStatus}
                        key={index}
                    />
                ))}
            </Box>
        </>
    );
};
