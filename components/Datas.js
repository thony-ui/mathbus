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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Image from "next/image";
import chart from "../images/Chart.png";
import { Router, useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    alert("Just be better sigh... 😔");
    
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} variant="outlined">
        Complain!
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <div className="flex flex-col items-center gap-3">
            <textarea className="border rounded-md w-[200px] h-[150px] border-gray-500" />

            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ cursor: "pointer" }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Datas() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false);

  const handleWordClick = (word) => {
    // Replace this with the action you want to perform when a word is clicked
    if (word == "better") {
      alert("You found the word!")
      setIsHovered(false);
      setOpen(false)
    }
    console.log(`Clicked on: ${word}`);
  };

  const text = "Even Primary school kids can do better than you LAH";
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

  const handleHover = () => {
    if (isHovered == false) {
      alert(
        "You must remember the equation 😈 Find the secret word to get back the details :)"
      );
    }
    setIsHovered(true);
  };

  const handleTransitionEnd = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };
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
  function generate(n) {
    if (isNaN(n)) {
      return "Service Unavailable";
    }

    const b = Math.floor(Math.random() * 201) - 100;
    const c = n * n * -1 - n * b;

    if (b < 0 && c < 0) {
      return `x² - ${Math.abs(b)}x - ${Math.abs(c)} = 0`;
    } else if (b < 0) {
      return `x² - ${Math.abs(b)}x + ${c} = 0`;
    } else if (c < 0) {
      return `x² + ${b}x - ${Math.abs(c)} = 0`;
    }

    return `x² + ${b}x + ${c} = 0`;
  }

  const a = [generate, generateProblem];
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
  }, [msg]);

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
          renderInput={(params) => (
            <TextField {...params} label="Destination" />
          )}
          inputValue={msg}
          onInputChange={(event, newInputValue) => {
            curMsg(newInputValue);
          }}
        />
        <Button
          variant="outlined"
          onClick={handleOpen}
          sx={{ cursor: "pointer" }}
        >
          Please Help Me
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              sx={{
                mb: 2,
                fontSize: "40px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {text.split(" ").map((word, index) => (
                <span
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleWordClick(word)}
                >
                  {word}{" "}
                </span>
              ))}
            </Typography>

            <Image src={chart} alt="loser" className="z-[-1]" />

            <div className="flex flex-col items-center mt-[10px]">
              <ChildModal />
            </div>
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
                        className="flex gap-3 flex-row justify-between cursor-pointer"
                      >
                        <p className="w-[100px]">{shuttle.name}</p>
                        <p
                          className={`w-[200px] cursor-pointer ${
                            isHovered ? "text-white" : ""
                          }`}
                          onMouseEnter={handleHover}
                          onTransitionEnd={handleTransitionEnd}
                        >
                          {" "}
                          {a[Math.floor(Math.random() * a.length)](
                            shuttle.arrivalTime
                          )}
                        </p>
                        <p
                          className={`w-[200px] cursor-pointer ${
                            isHovered ? "text-white" : ""
                          }`}
                          onMouseEnter={handleHover}
                          onTransitionEnd={handleTransitionEnd}
                        >
                          {a[Math.floor(Math.random() * a.length)](
                            shuttle.nextArrivalTime
                          )}
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
