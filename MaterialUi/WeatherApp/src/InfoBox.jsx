import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1599442149625-c43691f0cd72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div>
            <h2> {info.city}</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {InfoBox.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temprature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temprature = {info.tempMin}&deg;C</p>
                        <p>Max Temprature = {info.tempMax}&deg;C</p>
                        <p>The Weather can be described ad {info.weather} and feels like {info.feelsLike}&deg;C</p>

                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}