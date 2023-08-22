import { Grid, Paper } from "@mui/material";
import Launch from "../Launch";
import styles from './launches.module.css';
// import { Link } from "react-router-dom";

const Launches = ({ launches }) => {
    return (
        <Grid container spacing={2} >
            {
                launches.map((launch) => (
                    <Grid key={launch.id} item xs={12} sm={6} md={4}>
                        {/* <Link to='/rocket-info' state={launch} style={{ textDecoration: 'none' }}> */}
                        <Paper className={`${styles.page} ${styles.hoverEffect}`}
                            sx={{
                                backgroundColor: 'transparent', color: 'white', borderColor: 'black', boxShadow: "1px 4px 5px 5px rgba(255,253,253, 0.5)"
                            }}
                            elevation={10}
                        >
                            <Launch props={launch} />
                        </Paper>
                        {/* </Link> */}
                    </Grid>
                ))
            }
        </Grid >
    );
}


export default Launches