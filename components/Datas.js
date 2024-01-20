import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from "next/image";
import chart from "../images/Chart.png"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Datas() {
  
  const [msg, curMsg] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [busStopNames, setBusStopNames] = useState([
    "Oei Tiong Ham Building",
    "Botanic Gardens MRT",
    "Kent Ridge MRT",
    "LT 27",
    "University Hall",
    "Opp University Health Centre",
    "University Town",
    "Raffles Hall",
    "Kent Vale",
    "Museum",
    "Yusof Ishak House",
    "Central Library",
    "LT 13",
    "AS 5",
    "BIZ 2",
    "Prince George's Park",
    "College Green",
    "COM 3",
    "Opp TCOMS",
    "University Health Centre",
    "Opp University Hall",
    "S 17",
    "Opp Kent Ridge MRT",
    "Prince George's Park Foyer",
    "TCOMS",
    "Opp Hon Sui Sen Memorial Library",
    "Opp NUSS",
    "Ventus",
    "Information Technology",
    "Opp Yusof Ishak House",
    "Kent Ridge Bus Terminal",
    "Opp SDE 3",
    "The Japanese Primary School",
    "EA",
    "SDE 3",
  ]);
  const [filteredBusStopNames, setFilteredBusStopNames] = useState([]);
  function generateProblem(n) {
    if (isNaN(n)) {
      return "Service Unavailable";
    }
    const rand1 = Math.floor(Math.random() * 100 + 1) + 1;
    let rand2 =
      Math.floor(Math.random() * 100 + 1) - Math.floor(Math.random() * 100 + 1);
    const result = rand1 * n + rand2;
    const symbol = rand2 < 0 ? "-" : "+";
    rand2 = Math.abs(rand2);
    return `${rand1}x ${symbol} ${rand2} = ${result}`;
  }

  const [data, setData] = useState([]);
  const fullName = {
    "Oei Tiong Ham Building": "OTH",
    "Botanic Gardens MRT": "BG-MRT",
    "Kent Ridge MRT": "KR-MRT",
    "LT 27": "LT27",
    "University Hall": "UHALL",
    "Opp University Health Centre": "UHC-OPP",
    "University Town": "UTOWN",
    "Raffles Hall": "RAFFLES",
    "Kent Vale": "KV",
    Museum: "MUSEUM",
    "Yusof Ishak House": "YIH",
    "Central Library": "CLB",
    "LT 13": "LT13",
    "AS 5": "AS5",
    "BIZ 2": "BIZ2",
    "Prince George's Park": "PGP",
    "College Green": "CG",
    "COM 3": "COM3",
    "Opp TCOMS": "TCOMS-OPP",
    "University Health Centre": "UHC",
    "Opp University Hall": "UHALL-OPP",
    "S 17": "S17",
    "Opp Kent Ridge MRT": "KR-MRT-OPP",
    "Prince George's Park Foyer": "PGPR",
    TCOMS: "TCOMS",
    "Opp Hon Sui Sen Memorial Library": "HSSML-OPP",
    "Opp NUSS": "NUSS-OPP",
    Ventus: "LT13-OPP",
    "Information Technology": "IT",
    "Opp Yusof Ishak House": "YIH-OPP",
    "Kent Ridge Bus Terminal": "KRB",
    "Opp SDE 3": "SDE3-OPP",
    "The Japanese Primary School": "JP-SCH-16151",
    EA: "EA",
    "SDE 3": "SDE3",
  };

  const fetchData = async () => {
    try {
      const fetchDataPromises = busStopNames.map(async (busstopname) => {
        const response = await fetch(
          `https://nnextbus.nus.edu.sg/ShuttleService?busstopname=${fullName[busstopname]}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: "Basic TlVTbmV4dGJ1czoxM2RMP3pZLDNmZVdSXiJU",
            },
          }
        );

        if (!response.ok) {
          console.error(`Failed to fetch data for bus stop ${busstopname}`);
          return null;
        }

        const data = await response.json();
        return { [busstopname]: data };
      });

      const results = await Promise.all(fetchDataPromises);

      const allData = results.reduce((acc, current) => {
        if (current) {
          return { ...acc, ...current };
        }
        return acc;
      }, {});

      setData(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    // Set up an interval to refetch data every minute
    const intervalId = setInterval(fetchData, 30000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const rem = busStopNames.filter((x) =>
      x.toUpperCase().includes(msg.toUpperCase())
    );
    setFilteredBusStopNames(rem);
  }, [msg, busStopNames]);

  return (
    <div>
      <div className="flex gap-3 justify-center">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={busStopNames}
        sx={{
          width: 300,
          
        }}
        renderInput={(params) => <TextField {...params} label="Destination" />}
        inputValue={msg}
        onInputChange={(event, newInputValue) => {
          curMsg(newInputValue);
        }}
        
      />
         <Button variant="outlined" onClick={handleOpen} sx = {{cursor:"pointer"}}>Please Help Me</Button>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mb: 2, fontSize: "40px", textAlign:"center", fontWeight:"bold"}}>
            Even Primary school kids can do better than you LAH
          </Typography>
          <Image src = {chart} alt = 'loser' />
        </Box>
      </Modal>
      </div>
      <Grid
        container
        spacing={{ xs: 1 }}
        alignItems="center" // Align items vertically in the center
        justifyContent="center"
        columns={1} // Set the number of columns to 1 for all screen sizes
        sx={{ width: "full" }}
      >
        {filteredBusStopNames?.map((name, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: "500px", mx: "auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                {data &&
                  data[name]?.ShuttleServiceResult.shuttles.map(
                    (shuttle, shuttleIndex) => (
                      <div
                        key={shuttleIndex}
                        className="flex gap-3 flex-row justify-between"
                      >
                        <p className="w-[100px]">{shuttle.name}</p>
                        <p className="w-[200px]">
                          {" "}
                          {generateProblem(shuttle.arrivalTime)}
                        </p>
                        <p className="w-[200px]">
                          {generateProblem(shuttle.nextArrivalTime)}
                        </p>
                      </div>
                    )
                  )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Datas;
