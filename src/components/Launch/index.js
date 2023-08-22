import { Box, Stack, Typography, IconButton, Tooltip } from '@mui/material'
import styles from './launch.module.css'
import moment from 'moment'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import { TiSocialFlickr } from 'react-icons/ti';
import { TbRulerMeasure } from 'react-icons/tb';

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
                {
                    props.links.patch.small ?
                        <img src={props.links.patch.small} alt='rocket' width={40} height={40} margin={0}></img>
                        : ''
                }
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={0.2}>
                    <Typography variant='subtitle2' fontWeight={200} className={styles.launchTitle}>Launch Name: </Typography>
                    <Typography variant='subtitle2' className={styles.launchName} >{props.name}</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={0.2}>
                    <Typography variant='body1' fontWeight={200} className={styles.launchTitle}>Rocket Name: </Typography>
                    <Typography variant='body1' fontWeight={100}>{props.rocket.name}</Typography>
                </Stack>
                {/* <Typography variant='body2'>Id: {props.id}</Typography>
                <Typography variant='body2'>Flight Number: {props.flight_number}</Typography> */}
                <Stack direction={'row'} spacing={1} justifyContent={'center'} alignItems={'center'}>
                    <Tooltip
                        title={<Typography sx={{ fontSize: '13px', width: '400px', border: 'none', boxShadow: 'none', margin: 'none' }}>Height:${props.rocket.height.meters} mt, Diameter:${props.rocket.diameter.meters} ft, Mass: ${props.rocket.mass.kg} lb</Typography>}
                        arrow
                    >
                        <IconButton>
                            <TbRulerMeasure color='white' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<Typography sx={{ fontSize: '13px' }}>${moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</Typography>} >
                        <IconButton>
                            <AccessTimeFilledIcon style={{ color: 'white' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip>
                        <IconButton onClick={() => openLink(props.links.webcast)}>
                            <YouTubeIcon style={{ color: 'red' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip >
                        <IconButton onClick={() => props.links.reddit.launch && openLink(props.links.reddit.launch)} sx={{ ':hover': `${styles.iconHoverEffect}` }} >
                            <RedditIcon style={{
                                color: 'red',
                            }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip>
                        <IconButton onClick={() => openLink(props.links.flickr.original[0])}>
                            <TiSocialFlickr style={{ color: 'white' }} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box >
        </Box >
    )

}

export default Launch