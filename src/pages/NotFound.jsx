import {Stack, Box} from "@mui/material"
const NotFound = () => {
    return (
        <Box>
            <Stack direction={'column'}>
                <div>There's nothing here...</div>
                <div>..maybe the page that you are looking for is not found or never existed.</div>
            </Stack>
        </Box>
    )
}

export default NotFound
