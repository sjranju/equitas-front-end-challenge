import '../App.css';
import { useState, useEffect } from "react";
import Launches from "../components/Launches";
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function MainPage() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const apiUrl = 'https://api.spacexdata.com/v4/launches/query';
    console.log(data)
    function getQueryBody(pageNumber) {
        return {
            query: {
                upcoming: false,
                success: true
            },
            options: {
                page: pageNumber,
                select: {
                    id: 1,
                    name: 2,
                    links: 3,
                    date_utc: 4,
                    flight_number: 5,
                },
                populate: [
                    {
                        path: 'rocket',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            description: 4,
                            height: 5,
                            diameter: 6,
                            mass: 7,
                            flickr_images: 8,
                        },
                    },
                    {
                        path: 'crew',
                        select: {
                            id: 1,
                            name: 2,
                            agency: 3,
                            image: 4,
                        },
                    },
                    {
                        path: 'payloads',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            orbit: 4,
                            reference_system: 5,
                            regime: 6
                        }
                    },
                    {
                        path: 'capsules',
                        select: {
                            id: 1,
                            type: 2,
                            status: 3,
                            serial: 4
                        }
                    },
                    {
                        path: 'launchpad',
                        select: {
                            id: 1,
                            name: 2,
                            full_name: 3,
                            locality: 4,
                            region: 5,
                            latitude: 6,
                            longitude: 7,
                            details: 8
                        }
                    }
                ],
                sort: {
                    flight_number: 'desc',
                },
            },
        };

    }

    const fetchData = async (pageNumber) => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(getQueryBody(pageNumber)),
            });

            if (!response.ok) {
                console.log('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData)
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        fetchData(currentPage + 1)
    }
    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        fetchData(currentPage - 1)
    }

    return (
        <Box style={{ backgroundImage: `url('./images/spacex6.jpg')`, backgroundSize:'cover' , opacity:0.88, color:'white'}} padding={2}>

            <Container >
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} marginBottom={2} spacing={1} >
                    <Typography variant='h5' style={{ fontWeight: 'bolder', color:'white'}}>Total {data["totalDocs"]} </Typography>
                    <RocketLaunchIcon style={{ fontWeight: "bold", color:'white'}}/>
                </Stack>
                {data["docs"] ? (
                    <div>
                        <Launches launches={data["docs"]} />
                        <Typography variant='body2' marginTop={3}>Page {data["page"]} / {data["totalPages"]} </Typography>
                        <Button variant='contained' onClick={prevPage} disabled={currentPage === 1} color='warning'>Prev Page</Button>
                        <Button variant="contained" onClick={nextPage} disabled={currentPage === data["totalPages"]}>Next
                            Page</Button>

                    </div>
                ) : (
                    <div>Loading...</div>
                )}

            </Container>

        </Box>
    );
}
export default MainPage;
