import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);
  const busStopNames = [
    "OTH",
    "BG-MRT",
    "KR-MRT",
    "LT27",
    "UHALL",
    "UHC-OPP",
    "UTOWN",
    "RAFFLES",
    "KV",
    "MUSEUM",
    "YIH",
    "CLB",
    "LT13",
    "AS5",
    "BIZ2",
    "PGP",
    "CG",
    "COM3",
    "TCOMS-OPP",
    "UHC",
    "UHALL-OPP",
    "S17",
    "KR-MRT-OPP",
    "PGPR",
    "TCOMS",
    "HSSML-OPP",
    "NUSS-OPP",
    "LT13-OPP",
    "IT",
    "YIH-OPP",
    "KRB",
    "SDE3-OPP",
    "JP-SCH-16151",
    "EA",
    "SDE3",
  ];

  const fetchData = async () => {
    try {
      const fetchDataPromises = busStopNames.map(async (busstopname) => {
        const response = await fetch(
          `https://nnextbus.nus.edu.sg/ShuttleService?busstopname=${busstopname}`,
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

  return (
    <div className="flex flex-col gap-[20px]">
      {busStopNames.map((busStopName, busStopIndex) => (
        <div key={busStopIndex} className="flex flex-col gap-[20px]">
          <h1 className="mb-[10px] font-bold">{busStopName}</h1>
          {data &&
            data[busStopName]?.ShuttleServiceResult.shuttles.map(
              (shuttle, shuttleIndex) => (
                <div key={shuttleIndex} className="flex gap-3 flex-row">
                    
                  <p>{shuttle.name}</p>
                  <p>{shuttle.arrivalTime}</p>
                  <p>{shuttle.nextArrivalTime}</p>
                </div>
              )
            )}
        </div>
      ))}
    </div>
  );
}

export default Data;
