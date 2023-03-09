import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const Image = styled('img')({
    width: '100%',
});

function SkeletonChildrenDemo(props) {
    const { loading = false } = props;

    return (
        <div className='modal-wrapper'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ margin: 1 }}>
                    {loading ? (
                        <Skeleton variant="circular">
                            <Avatar />
                        </Skeleton>
                    ) : (
                        null
                    )}
                </Box>
                <Box sx={{ width: '100%' }}>
                    {loading ? (
                        <Skeleton width="100%">
                            <Typography>.</Typography>
                        </Skeleton>
                    ) : (
                        <Typography>Ted</Typography>
                    )}
                </Box>
            </Box>
            {loading ? (
                <Skeleton variant="rectangular" width="100%">
                    <div style={{ paddingTop: '57%' }} />
                </Skeleton>
            ) : (
                null
            )}
        </div>
    );
}

SkeletonChildrenDemo.propTypes = {
    loading: PropTypes.bool,
};

export default function SkeletonAnimation() {
    return (
        <Grid container spacing={8}>
            <Grid item xs>
                <SkeletonChildrenDemo loading />
            </Grid>
            <Grid item xs>
                <SkeletonChildrenDemo loading />
            </Grid>
        </Grid>
    );
}