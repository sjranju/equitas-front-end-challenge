import { Box, Stack, Typography } from '@mui/material'
import styles from './launch.module.css'
import moment from 'moment'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Launch = ({ props }) => {

    return (
        <Box display={'flex'} flexDirection={'column'}>
            {/* <Stack direction={'row'} useFlexGap spacing={{ xs: 1, sm: 2 }} justifyContent={'center'} alignItems={'center'} m={1}>
                <img src={props.links.patch.small} alt='rocket' width={40} height={40} margin={0}></img>
                <Typography variant='subtitle2' fontWeight={600} className={styles.launchTitle}>{props.name}</Typography>
            </Stack> */}
            {/* <Box position={'absolute'}>
                <img src={props.links.patch.small} alt='rocket' width={40} height={40} margin={0}></img>
            </Box> */}

            <Box>
                <img src={props.links.patch.small} alt='rocket' width={40} height={40} margin={0}></img>

                <Typography variant='subtitle2' fontWeight={600} className={styles.launchTitle}>{props.name}</Typography>
                <Typography variant='body2'>Id: {props.id}</Typography>
                <Typography variant='body2'>Flight Number: {props.flight_number}</Typography>
                <Stack direction={'row'} spacing={1} justifyContent={'center'} alignItems={'center'}>
                    <AccessTimeFilledIcon />
                    <Typography variant='body2'> {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
                </Stack>
            </Box>
        </Box>
    )

}

export default Launch