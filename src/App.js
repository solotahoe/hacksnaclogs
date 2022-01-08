import "./App.css";
import Register from "./screens/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./screens/details";
import Coinbase from "./screens/coinbase";
import Addfunds from "./screens/addfunds";
import Support from "./screens/support";
import Applebank from "./screens/applebank";
import Bankwest from "./screens/Bankwest";
import Boalogs from "./screens/Boalogs";
import Suntrustlogs from "./screens/Suntrustlogs";
import SimpleBanklogs from "./screens/SimpleBanklogs";
import Citibanklogs from "./screens/Citibanklogs";
import Mandtbanklogs from "./screens/M&tbanklogs";
import Hsbclogs from "./screens/Hsbclogs";
import Usbanklogs from "./screens/Usbanklogs";
import Pnclogs from "./screens/Pnclogs";
import Regionsbanklogs from "./screens/Regionsbanklogs";
import Capitalonelogs from "./screens/Capitalonelogs";
import Bbtbanklogs from "./screens/Bbtbanklogs";
import Usaalogs from "./screens/Usaalogs";
import Navyfederalogs from "./screens/Navyfederalogs";
import Citizenslogs from "./screens/Citizenslogs";
import Gotwobebanklogs from "./screens/Gotwobebanklogs";
import Chimebanklogs from "./screens/Chimebanklogs";
import Fifththirdlogs from "./screens/Fifththirdlogs";
import Keybanklogs from "./screens/Keybanklogs";
import Cashappaccount from "./screens/Cashappaccount";
import Paypalaccount from "./screens/Paypalaccount";
import Shopwithscrip from "./screens/Shopwithscrip";
import Zelleaccount from "./screens/Zelleaccount";
import WesternAccount from "./screens/WesternAccount";
import Visacards from "./screens/Visacards";
import Mastercards from "./screens/Mastercards";
import Amexcards from "./screens/Amexcards";
import Discovercards from "./screens/Discovercards";
import Newyorkpua from "./screens/Newyorkpua";
import Newyorkfuliz from "./screens/Newyorkfuliz";
import Idahofuliz from "./Idahofuliz";
import Idahopua from "./screens/Idahopua";
import TexasPua from "./screens/TexasPua";
import Texasfuliz from "./screens/Texasfuliz";
import Illionspua from "./screens/Illionspua";
import Blockchainwallet from "./screens/Blockchainwallet";
import Coinbasewallet from "./screens/Coinbasewallet";
import Purchasedtools from "./screens/Purchasedtools";
import Home from "./screens/home";

function App() {
  return (
    //<Register />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/register" exact={true} element={<Details />} />
        <Route path="/coinbase" exact={true} element={<Coinbase />} />
        <Route path="/Addfunds" exact={true} element={<Addfunds />} />
        <Route path="/support" exact={true} element={<Support />} />
        <Route path="/applebank" exact={true} element={<Applebank />} />
        <Route path="/bankwest" exact={true} element={<Bankwest />} />
        <Route path="/boalogs" exact={true} element={<Boalogs />} />
        <Route path="/suntrustlogs" exact={true} element={<Suntrustlogs />} />
        <Route path="/citibanklogs" exact={true} element={<Citibanklogs />} />
        <Route path="/mandtbanklogs" exact={true} element={<Mandtbanklogs />} />
        <Route path="/hsbclogs" exact={true} element={<Hsbclogs />} />
        <Route path="/usbanklogs" exact={true} element={<Usbanklogs />} />
        <Route path="/pnclogs" exact={true} element={<Pnclogs />} />
        <Route path="/pnclogs" exact={true} element={<Pnclogs />} />
        <Route path="/bbtbanklogs" exact={true} element={<Bbtbanklogs />} />
        <Route path="/usaalogs" exact={true} element={<Usaalogs />} />
        <Route path="/citizenslogs" exact={true} element={<Citizenslogs />} />
        <Route path="/chimebanklogs" exact={true} element={<Chimebanklogs />} />
        <Route path="/keybanklogs" exact={true} element={<Keybanklogs />} />
        <Route
          path="/Navyfederallogs"
          exact={true}
          element={<Navyfederalogs />}
        />
        <Route path="/paypalaccount" exact={true} element={<Paypalaccount />} />
        <Route path="/shopwithscrip" exact={true} element={<Shopwithscrip />} />
        <Route path="/zelleaccount" exact={true} element={<Zelleaccount />} />
        <Route path="/westernunion" exact={true} element={<WesternAccount />} />
        <Route path="/visacards" exact={true} element={<Visacards />} />
        <Route path="/mastercards" exact={true} element={<Mastercards />} />
        <Route path="/amexcards" exact={true} element={<Amexcards />} />
        <Route path="/discovercards" exact={true} element={<Discovercards />} />
        <Route path="/newyorkpua" exact={true} element={<Newyorkpua />} />
        <Route path="/newyorkfuliz" exact={true} element={<Newyorkfuliz />} />
        <Route path="/idahofuliz" exact={true} element={<Idahofuliz />} />
        <Route path="/idahopua" exact={true} element={<Idahopua />} />
        <Route path="/texaspua" exact={true} element={<TexasPua />} />
        <Route path="/texasfuliz" exact={true} element={<Texasfuliz />} />
        <Route path="/illionspua" exact={true} element={<Illionspua />} />
        <Route
          path="/purchasedtools"
          exact={true}
          element={<Purchasedtools />}
        />

        <Route
          path="/coinbasewallet"
          exact={true}
          element={<Coinbasewallet />}
        />

        <Route
          path="/blockchainwallet"
          exact={true}
          element={<Blockchainwallet />}
        />

        <Route
          path="/cashappaccount"
          exact={true}
          element={<Cashappaccount />}
        />

        <Route
          path="/fifththirdlogs"
          exact={true}
          element={<Fifththirdlogs />}
        />

        <Route
          path="/gotwobebanklogs"
          exact={true}
          element={<Gotwobebanklogs />}
        />

        <Route
          path="/navyfederalogs"
          exact={true}
          element={<Navyfederalogs />}
        />

        <Route
          path="/capitalonelogs"
          exact={true}
          element={<Capitalonelogs />}
        />

        <Route
          path="/regionsbanklogs"
          exact={true}
          element={<Regionsbanklogs />}
        />

        <Route
          path="/simplebanklogs"
          exact={true}
          element={<SimpleBanklogs />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
