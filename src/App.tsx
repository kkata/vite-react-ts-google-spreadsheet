import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET_ID;
const SHEET_ID = import.meta.env.VITE_APP_SHEET_ID;
const CLIENT_EMAIL = import.meta.env.VITE_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = import.meta.env.VITE_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const decoded = atob(PRIVATE_KEY);

const getSpreadsheetData = async () => {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: decoded,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsById[SHEET_ID];
  const rows = await sheet.getRows();

  console.log(sheet);
  console.log(rows);
};

getSpreadsheetData();

export const App = () => {
  return <div>APP</div>;
};
