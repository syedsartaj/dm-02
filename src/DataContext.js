import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSheetData = async () => {
                console.log("data");

      try {
        const res = await fetch('https://opensheet.elk.sh/1AwQWWJTAuf__DsRtL2Ma3BeP5xUh_5N15k5MDki-aUE/Sheet1');
        const data = await res.json();
        setSheetData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching sheet data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSheetData();
  }, []);

  return (
    <DataContext.Provider value={{ sheetData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
