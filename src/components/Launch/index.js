import { Box, Stack, Typography, IconButton, Tooltip } from '@mui/material'
import styles from './launch.module.css'
import moment from 'moment'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import { TiSocialFlickr } from 'react-icons/ti'

const Launch = ({ props }) => {
    const openLink = (link) => {
        window.open(link, '_blank')
    }

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
                    <Tooltip title={`${moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}`} arrow>
                        <IconButton>
                            <AccessTimeFilledIcon style={{ color: 'black' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip>
                        <IconButton onClick={() => openLink(props.links.webcast)}>
                            <YouTubeIcon style={{ color: 'red' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip>
                        <IconButton onClick={() => props.links.reddit.launch && openLink(props.links.reddit.launch)}>
                            <RedditIcon style={{ color: 'red' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip>
                        <IconButton onClick={() => openLink(props.links.webcast)}>
                            <TiSocialFlickr style={{ color: 'blue' }} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box>
        </Box >
    )

}

export default Launch