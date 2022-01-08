import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

export default function Addfunds() {
  const [setByChange, setsetByChange] = useState("");
  const [accordionWidth, setAccordionWidth] = useState(true);
  const [accordionWidthSmall, setAccordionWidthSmall] = useState(true);
  const [showDisplay, setshowDisplay] = useState(false);
  const [showDisplaysc, setshowDisplaysc] = useState(false);
  const [showDisplaysc2, setshowDisplaysc2] = useState(false);
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div>
      <div
        className="cointainer-fluid coinbase"
        style={{ width: accordionWidth ? "99%" : "100%" }}
      >
        <div className="row">
          <header className="header-content">
            <div className="imgHam">
              <Link to="/coinbase">
                {" "}
                <img
                  className="coinbaseLogo"
                  src="/logs.png"
                  alt="headerLogos"
                />
              </Link>
              <span
                className="hambergerbars"
                onClick={() => {
                  setAccordionWidth(!accordionWidth);
                }}
              >
                {" "}
                <i className="fa fa-bars bigScreens" aria-hidden="true"></i>
              </span>
              <span
                className="hambergerbars smallerscreens"
                onClick={() => {
                  setAccordionWidthSmall(!accordionWidthSmall);
                }}
              >
                {" "}
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </div>

            <div className="addbal">
              <span className="badgere badge-dangere">
                <Link
                  to="/Addfunds"
                  style={{ textDecoration: "none", color: "#ffff" }}
                >
                  {" "}
                  <b>Add Balance</b>{" "}
                </Link>
              </span>

              <img
                src="usericon.png"
                className="usericonImg"
                alt="usericon"
                height={"50px"}
                onClick={() => setshowDisplay(!showDisplay)}
              />
              <i
                className="fa fa-arrow-down arowDown"
                aria-hidden="true"
                onClick={() => setshowDisplay(!showDisplay)}
              ></i>
              <div
                className="profilehideShow"
                style={{ opacity: showDisplay ? "1" : "0" }}
              >
                <div className="welcomeLem">Welcome : Lem</div>
                <div className="submitTicket">
                  {" "}
                  <li>
                    {" "}
                    <Link
                      className="submitLinkHover"
                      to="/Support"
                      style={{ color: "#3ac47d" }}
                    >
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      submit ticket{" "}
                    </Link>
                  </li>{" "}
                </div>
                <div className="logoutBtn">
                  {" "}
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
            </div>
            <div
              className="smallerscreensMn"
              onClick={() => setshowDisplaysc2(!showDisplaysc2)}
            >
              <div className="mcchild"></div>
              <div className="mcchild"></div>
              <div className="mcchild"></div>
            </div>
          </header>
        </div>

        <div className="row">
          <div
            className="addBalsmc"
            style={{
              opacity: showDisplaysc2 ? "1" : "0",
              PointerEvent: showDisplaysc2 ? "all" : "none",
            }}
          >
            <span className="addbalbtnsmc">
              <Link
                to="/Addfunds"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                {" "}
                <b>Add Balance</b>{" "}
              </Link>
            </span>
            <img
              src="/usericon.png"
              className="usrsmalsc"
              alt="usericon"
              height={"50px"}
              onClick={() => setshowDisplaysc(!showDisplaysc)}
            />
            <i
              className="fa fa-arrow-down arowDsc"
              aria-hidden="true"
              onClick={() => setshowDisplaysc(!showDisplaysc)}
            ></i>
          </div>
          {/* start of small welcome lem */}
          <div
            className="profilehideShowsc"
            style={{
              opacity: showDisplaysc ? "1" : "0",
              PointerEvent: showDisplaysc ? "all" : "none",
            }}
          >
            <div className="welcomeLem">Welcome : Lem</div>
            <div className="submitTicket">
              {" "}
              <li>
                {" "}
                <Link
                  className="submitLinkHover"
                  to="/Support"
                  style={{ color: "#3ac47d" }}
                >
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  submit ticket{" "}
                </Link>
              </li>{" "}
            </div>
            <div className="logoutBtn">
              {" "}
              <button onClick={logout}>Logout</button>
            </div>
          </div>
          {/* end of small welcome lem */}

          <div
            className={
              accordionWidthSmall
                ? "hideaccordion"
                : "accordion accordion_menu col-md-2"
            }
            id="accordionExample"
            style={{ width: accordionWidth ? "18%" : "0", marginTop: "100px" }}
          >
            <Link to="/coinbase" style={{ textDecoration: "none" }}>
              {" "}
              <h2 className="mb-0 homeLogout">
                <i className="fa fa-home" aria-hidden="true"></i> HOME{" "}
              </h2>
            </Link>

            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i className="fa fa-university" aria-hidden="true"></i> BANK
                    LOG 1<i className="fa fa-arrow-down" aria-hidden="true"></i>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/applebank">
                    {" "}
                    <li>Apple Bank</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/bankwest">
                    <li>Bank West</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/boalogs">
                    <li>BOA Logs</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/suntrustlogs">
                    <li>Suntrust Logs</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/simplebanklogs">
                    <li>Simple bank Logs</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/citibanklogs">
                    <li>Citi bank Logs</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/mandtbanklogs">
                    <li>M$t-bank Logs</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/hsbclogs">
                    <li>Hsbc Logs</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/usbanklogs">
                    <li>Usbanklogs</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/pnclogs">
                    <li>Pnc Logs</li>
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/regionsbanklogs"
                  >
                    <li> Regions- Bank Logs</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i className="fa fa-university" aria-hidden="true"></i>
                    BANK LOGS 2{" "}
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/capitalonelogs">
                    <li>Capital One Logs</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/bbtbanklogs">
                    <li>Bbt-bank Logs</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/usaalogs">
                    <li>Usaa logs</li>
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/navyfederallogs"
                  >
                    <li>Navy Fedral Logs</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/citizenslogs">
                    <li>Citizen Logs</li>
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/gotwobebanklogs"
                  >
                    <li>Go2b Bank Logs</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/chimebanklogs">
                    <li>Chime Bank Logs</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/fifththirdlogs">
                    <li>Fifth Third Logs</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/keybanklogs">
                    <li> Keybank Logs</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <i className="fa fa-university" aria-hidden="true"></i>Logs{" "}
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/cashappaccount">
                    <li>Cashapp Account</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/paypalaccount">
                    <li>Paypal Account</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/shopwithscrip">
                    <li>Shopwithscrip</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/zelleaccount">
                    <li>Zelle Account</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/westernunion">
                    <li>Westernunion</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                    CREDIT CARDS{" "}
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/visacards">
                    <li>Visa Cards</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/mastercards">
                    <li>Master Cards</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/amexcards">
                    <li>Amex Cards</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/discovercards">
                    <li>Discover Cards</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <i className="fa fa-credit-card" aria-hidden="true"></i>PUA
                    $ FULIZ
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/newyorkpua">
                    <li>Newyork Pua</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/newyorkfuliz">
                    <li>Newyork Fuliz</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/idahopua">
                    <li>Idaho Pua</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/idahofuliz">
                    <li>Idaho Fuliz</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/texaspua">
                    <li>Texas Pua</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/texasfuliz">
                    <li>Texas Fuliz</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/illionspua">
                    <li>Illions Pua</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>
                    ACCOUNTS
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/blockchainwallet"
                  >
                    <li>Blockchanin wallet</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/coinbasewallet">
                    <li>Coinbase wallet</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    <i className="fa fa-user" aria-hidden="true"></i>
                    PROFILE
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseEight"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/support">
                    <li>Contact Support</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/purchasedtools">
                    <li>Purchased Tools</li>
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="mb-0 homeLogout" onClick={logout}>
              <i class="fa fa-power-off" aria-hidden="true"></i>
              LOGOUT
            </h2>
          </div>
          <div
            className="thirdSection with_tables col-md-8"
            style={{ width: accordionWidth ? "1000px" : "1200px" }}
          >
            <div className="inner_div_table addfundspage">
              <div className="row addfundsPage">
                <div className="col-md-4">
                  <div className="automaticPayment">
                    <div className="out1">
                      <div className="avatorimgDiv">
                        <img src="dw.jpg" alt="avtimg" />{" "}
                      </div>
                      <p className="bitcoinAutomaticPayment">
                        Bitcoin Automatic Payment
                      </p>
                      <p className="bitcoinpay">Bitcoinpay.com</p>
                    </div>
                    <div className="out2">
                      <p className="btcrate">BTC Rate</p>
                      <p>
                        <input
                          type="number"
                          defaultValue={setByChange}
                          className="readonlyinput"
                          readOnly
                        />{" "}
                      </p>
                      <p>
                        <select className="btcdropdown">
                          <option>BTC</option>
                        </select>
                      </p>
                      <p className="calc">Bitcoin Calculator</p>
                      <p className="asteric"> *One confirmation required</p>
                    </div>
                    <div className="out3">
                      <div className="threethings">
                        <input
                          type="number"
                          className="bitcoininput"
                          defaultValue={1}
                          step="0.01"
                          onChange={(e) => {
                            setsetByChange(
                              e.target.value * 0.0000023631164780112013
                            );
                          }}
                        />
                        <select className="fiatselect" id="fiatselect">
                          <option
                            title="United States Dollar"
                            value="USD"
                            class="calcoption"
                          >
                            USD
                          </option>
                          <option title="Euro" value="EUR" class="calcoption">
                            EUR
                          </option>
                          <option
                            title="British Pound Sterling"
                            value="GBP"
                            class="calcoption"
                          >
                            GBP
                          </option>
                          <option
                            title="Japanese Yen"
                            value="JPY"
                            class="calcoption"
                          >
                            JPY
                          </option>
                          <option
                            title="United Arab Emirates Dirham"
                            value="AED"
                            class="calcoption"
                          >
                            AED
                          </option>
                          <option
                            title="Afghan Afghani"
                            value="AFN"
                            class="calcoption"
                          >
                            AFN
                          </option>
                          <option
                            title="Albanian Lek"
                            value="ALL"
                            class="calcoption"
                          >
                            ALL
                          </option>
                          <option
                            title="Armenian Dram"
                            value="AMD"
                            class="calcoption"
                          >
                            AMD
                          </option>
                          <option
                            title="Netherlands Antillean Guilder"
                            value="ANG"
                            class="calcoption"
                          >
                            ANG
                          </option>
                          <option
                            title="Angolan Kwanza"
                            value="AOA"
                            class="calcoption"
                          >
                            AOA
                          </option>
                          <option
                            title="Argentine Peso"
                            value="ARS"
                            class="calcoption"
                          >
                            ARS
                          </option>
                          <option
                            title="Australian Dollar"
                            value="AUD"
                            class="calcoption"
                          >
                            AUD
                          </option>
                          <option
                            title="Aruban Florin"
                            value="AWG"
                            class="calcoption"
                          >
                            AWG
                          </option>
                          <option
                            title="Azerbaijani Manat"
                            value="AZN"
                            class="calcoption"
                          >
                            AZN
                          </option>
                          <option
                            title="Bosnia-Herzegovina Convertible Mark"
                            value="BAM"
                            class="calcoption"
                          >
                            BAM
                          </option>
                          <option
                            title="Barbadian Dollar"
                            value="BBD"
                            class="calcoption"
                          >
                            BBD
                          </option>
                          <option
                            title="Bangladeshi Taka"
                            value="BDT"
                            class="calcoption"
                          >
                            BDT
                          </option>
                          <option
                            title="Bulgarian Lev"
                            value="BGN"
                            class="calcoption"
                          >
                            BGN
                          </option>
                          <option
                            title="Bahraini Dinar"
                            value="BHD"
                            class="calcoption"
                          >
                            BHD
                          </option>
                          <option
                            title="Burundian Franc"
                            value="BIF"
                            class="calcoption"
                          >
                            BIF
                          </option>
                          <option
                            title="Bermudan Dollar"
                            value="BMD"
                            class="calcoption"
                          >
                            BMD
                          </option>
                          <option
                            title="Brunei Dollar"
                            value="BND"
                            class="calcoption"
                          >
                            BND
                          </option>
                          <option
                            title="Bolivian Boliviano"
                            value="BOB"
                            class="calcoption"
                          >
                            BOB
                          </option>
                          <option
                            title="Brazilian Real"
                            value="BRL"
                            class="calcoption"
                          >
                            BRL
                          </option>
                          <option
                            title="Bahamian Dollar"
                            value="BSD"
                            class="calcoption"
                          >
                            BSD
                          </option>
                          <option
                            title="Bhutanese Ngultrum"
                            value="BTN"
                            class="calcoption"
                          >
                            BTN
                          </option>
                          <option
                            title="Botswanan Pula"
                            value="BWP"
                            class="calcoption"
                          >
                            BWP
                          </option>
                          <option
                            title="Belarusian Ruble"
                            value="BYR"
                            class="calcoption"
                          >
                            BYR
                          </option>
                          <option
                            title="Belize Dollar"
                            value="BZD"
                            class="calcoption"
                          >
                            BZD
                          </option>
                          <option
                            title="Canadian Dollar"
                            value="CAD"
                            class="calcoption"
                          >
                            CAD
                          </option>
                          <option
                            title="Congolese Franc"
                            value="CDF"
                            class="calcoption"
                          >
                            CDF
                          </option>
                          <option
                            title="Swiss Franc"
                            value="CHF"
                            class="calcoption"
                          >
                            CHF
                          </option>
                          <option
                            title="Chilean Unit of Account (UF)"
                            value="CLF"
                            class="calcoption"
                          >
                            CLF
                          </option>
                          <option
                            title="Chilean Peso"
                            value="CLP"
                            class="calcoption"
                          >
                            CLP
                          </option>
                          <option
                            title="Chinese Yuan"
                            value="CNY"
                            class="calcoption"
                          >
                            CNY
                          </option>
                          <option
                            title="Colombian Peso"
                            value="COP"
                            class="calcoption"
                          >
                            COP
                          </option>
                          <option
                            title="Costa Rican Colón"
                            value="CRC"
                            class="calcoption"
                          >
                            CRC
                          </option>
                          <option
                            title="Cuban Peso"
                            value="CUP"
                            class="calcoption"
                          >
                            CUP
                          </option>
                          <option
                            title="Cape Verdean Escudo"
                            value="CVE"
                            class="calcoption"
                          >
                            CVE
                          </option>
                          <option
                            title="Czech Republic Koruna"
                            value="CZK"
                            class="calcoption"
                          >
                            CZK
                          </option>
                          <option
                            title="Djiboutian Franc"
                            value="DJF"
                            class="calcoption"
                          >
                            DJF
                          </option>
                          <option
                            title="Danish Krone"
                            value="DKK"
                            class="calcoption"
                          >
                            DKK
                          </option>
                          <option
                            title="Dominican Peso"
                            value="DOP"
                            class="calcoption"
                          >
                            DOP
                          </option>
                          <option
                            title="Algerian Dinar"
                            value="DZD"
                            class="calcoption"
                          >
                            DZD
                          </option>
                          <option
                            title="Estonian Kroon"
                            value="EEK"
                            class="calcoption"
                          >
                            EEK
                          </option>
                          <option
                            title="Egyptian Pound"
                            value="EGP"
                            class="calcoption"
                          >
                            EGP
                          </option>
                          <option
                            title="Eritrean Nnakfa"
                            value="ERN"
                            class="calcoption"
                          >
                            ERN
                          </option>
                          <option
                            title="Ethiopian Birr"
                            value="ETB"
                            class="calcoption"
                          >
                            ETB
                          </option>
                          <option
                            title="Fijian Dollar"
                            value="FJD"
                            class="calcoption"
                          >
                            FJD
                          </option>
                          <option
                            title="Falkland Islands Pound"
                            value="FKP"
                            class="calcoption"
                          >
                            FKP
                          </option>
                          <option
                            title="Georgian Lari"
                            value="GEL"
                            class="calcoption"
                          >
                            GEL
                          </option>
                          <option
                            title="Ghanaian Cedi"
                            value="GHS"
                            class="calcoption"
                          >
                            GHS
                          </option>
                          <option
                            title="Gibraltar Pound"
                            value="GIP"
                            class="calcoption"
                          >
                            GIP
                          </option>
                          <option
                            title="Gambian Dalasi"
                            value="GMD"
                            class="calcoption"
                          >
                            GMD
                          </option>
                          <option
                            title="Guinean Franc"
                            value="GNF"
                            class="calcoption"
                          >
                            GNF
                          </option>
                          <option
                            title="Guatemalan Quetzal"
                            value="GTQ"
                            class="calcoption"
                          >
                            GTQ
                          </option>
                          <option
                            title="Guyanaese Dollar"
                            value="GYD"
                            class="calcoption"
                          >
                            GYD
                          </option>
                          <option
                            title="Hong Kong Dollar"
                            value="HKD"
                            class="calcoption"
                          >
                            HKD
                          </option>
                          <option
                            title="Honduran Lempira"
                            value="HNL"
                            class="calcoption"
                          >
                            HNL
                          </option>
                          <option
                            title="Croatian Kuna"
                            value="HRK"
                            class="calcoption"
                          >
                            HRK
                          </option>
                          <option
                            title="Haitian Gourde"
                            value="HTG"
                            class="calcoption"
                          >
                            HTG
                          </option>
                          <option
                            title="Hungarian Forint"
                            value="HUF"
                            class="calcoption"
                          >
                            HUF
                          </option>
                          <option
                            title="Indonesian Rupiah"
                            value="IDR"
                            class="calcoption"
                          >
                            IDR
                          </option>
                          <option
                            title="Israeli New Sheqel"
                            value="ILS"
                            class="calcoption"
                          >
                            ILS
                          </option>
                          <option
                            title="Indian Rupee"
                            value="INR"
                            class="calcoption"
                          >
                            INR
                          </option>
                          <option
                            title="Iraqi Dinar"
                            value="IQD"
                            class="calcoption"
                          >
                            IQD
                          </option>
                          <option
                            title="Iranian Rial"
                            value="IRR"
                            class="calcoption"
                          >
                            IRR
                          </option>
                          <option
                            title="Icelandic Króna"
                            value="ISK"
                            class="calcoption"
                          >
                            ISK
                          </option>
                          <option
                            title="Jersey Pound"
                            value="JEP"
                            class="calcoption"
                          >
                            JEP
                          </option>
                          <option
                            title="Jamaican Dollar"
                            value="JMD"
                            class="calcoption"
                          >
                            JMD
                          </option>
                          <option
                            title="Jordanian Dinar"
                            value="JOD"
                            class="calcoption"
                          >
                            JOD
                          </option>
                          <option
                            title="Kenyan Shilling"
                            value="KES"
                            class="calcoption"
                          >
                            KES
                          </option>
                          <option
                            title="Kyrgystani Som"
                            value="KGS"
                            class="calcoption"
                          >
                            KGS
                          </option>
                          <option
                            title="Cambodian Riel"
                            value="KHR"
                            class="calcoption"
                          >
                            KHR
                          </option>
                          <option
                            title="Comorian Franc"
                            value="KMF"
                            class="calcoption"
                          >
                            KMF
                          </option>
                          <option
                            title="North Korean Won"
                            value="KPW"
                            class="calcoption"
                          >
                            KPW
                          </option>
                          <option
                            title="South Korean Won"
                            value="KRW"
                            class="calcoption"
                          >
                            KRW
                          </option>
                          <option
                            title="Kuwaiti Dinar"
                            value="KWD"
                            class="calcoption"
                          >
                            KWD
                          </option>
                          <option
                            title="Cayman Islands Dollar"
                            value="KYD"
                            class="calcoption"
                          >
                            KYD
                          </option>
                          <option
                            title="Kazakhstani Tenge"
                            value="KZT"
                            class="calcoption"
                          >
                            KZT
                          </option>
                          <option
                            title="Laotian Kip"
                            value="LAK"
                            class="calcoption"
                          >
                            LAK
                          </option>
                          <option
                            title="Lebanese Pound"
                            value="LBP"
                            class="calcoption"
                          >
                            LBP
                          </option>
                          <option
                            title="Sri Lankan Rupee"
                            value="LKR"
                            class="calcoption"
                          >
                            LKR
                          </option>
                          <option
                            title="Liberian Dollar"
                            value="LRD"
                            class="calcoption"
                          >
                            LRD
                          </option>
                          <option
                            title="Lesotho Loti"
                            value="LSL"
                            class="calcoption"
                          >
                            LSL
                          </option>
                          <option
                            title="Lithuanian Litas"
                            value="LTL"
                            class="calcoption"
                          >
                            LTL
                          </option>
                          <option
                            title="Latvian Lats"
                            value="LVL"
                            class="calcoption"
                          >
                            LVL
                          </option>
                          <option
                            title="Libyan Dinar"
                            value="LYD"
                            class="calcoption"
                          >
                            LYD
                          </option>
                          <option
                            title="Moroccan Dirham"
                            value="MAD"
                            class="calcoption"
                          >
                            MAD
                          </option>
                          <option
                            title="Moldovan Leu"
                            value="MDL"
                            class="calcoption"
                          >
                            MDL
                          </option>
                          <option
                            title="Malagasy Ariary"
                            value="MGA"
                            class="calcoption"
                          >
                            MGA
                          </option>
                          <option
                            title="Macedonian Denar"
                            value="MKD"
                            class="calcoption"
                          >
                            MKD
                          </option>
                          <option
                            title="Myanma Kyat"
                            value="MMK"
                            class="calcoption"
                          >
                            MMK
                          </option>
                          <option
                            title="Mongolian Tugrik"
                            value="MNT"
                            class="calcoption"
                          >
                            MNT
                          </option>
                          <option
                            title="Macanese Pataca"
                            value="MOP"
                            class="calcoption"
                          >
                            MOP
                          </option>
                          <option
                            title="Mauritanian Ouguiya"
                            value="MRO"
                            class="calcoption"
                          >
                            MRO
                          </option>
                          <option
                            title="Maltese Lira"
                            value="MTL"
                            class="calcoption"
                          >
                            MTL
                          </option>
                          <option
                            title="Mauritian Rupee"
                            value="MUR"
                            class="calcoption"
                          >
                            MUR
                          </option>
                          <option
                            title="Maldivian Rufiyaa"
                            value="MVR"
                            class="calcoption"
                          >
                            MVR
                          </option>
                          <option
                            title="Malawian Kwacha"
                            value="MWK"
                            class="calcoption"
                          >
                            MWK
                          </option>
                          <option
                            title="Mexican Peso"
                            value="MXN"
                            class="calcoption"
                          >
                            MXN
                          </option>
                          <option
                            title="Malaysian Ringgit"
                            value="MYR"
                            class="calcoption"
                          >
                            MYR
                          </option>
                          <option
                            title="Mozambican Metical"
                            value="MZN"
                            class="calcoption"
                          >
                            MZN
                          </option>
                          <option
                            title="Namibian Dollar"
                            value="NAD"
                            class="calcoption"
                          >
                            NAD
                          </option>
                          <option
                            title="Nigerian Naira"
                            value="NGN"
                            class="calcoption"
                          >
                            NGN
                          </option>
                          <option
                            title="Nicaraguan Córdoba"
                            value="NIO"
                            class="calcoption"
                          >
                            NIO
                          </option>
                          <option
                            title="Norwegian Krone"
                            value="NOK"
                            class="calcoption"
                          >
                            NOK
                          </option>
                          <option
                            title="Nepalese Rupee"
                            value="NPR"
                            class="calcoption"
                          >
                            NPR
                          </option>
                          <option
                            title="New Zealand Dollar"
                            value="NZD"
                            class="calcoption"
                          >
                            NZD
                          </option>
                          <option
                            title="Omani Rial"
                            value="OMR"
                            class="calcoption"
                          >
                            OMR
                          </option>
                          <option
                            title="Panamanian Balboa"
                            value="PAB"
                            class="calcoption"
                          >
                            PAB
                          </option>
                          <option
                            title="Peruvian Nuevo Sol"
                            value="PEN"
                            class="calcoption"
                          >
                            PEN
                          </option>
                          <option
                            title="Papua New Guinean Kina"
                            value="PGK"
                            class="calcoption"
                          >
                            PGK
                          </option>
                          <option
                            title="Philippine Peso"
                            value="PHP"
                            class="calcoption"
                          >
                            PHP
                          </option>
                          <option
                            title="Pakistani Rupee"
                            value="PKR"
                            class="calcoption"
                          >
                            PKR
                          </option>
                          <option
                            title="Polish Zloty"
                            value="PLN"
                            class="calcoption"
                          >
                            PLN
                          </option>
                          <option
                            title="Paraguayan Guarani"
                            value="PYG"
                            class="calcoption"
                          >
                            PYG
                          </option>
                          <option
                            title="Qatari Rial"
                            value="QAR"
                            class="calcoption"
                          >
                            QAR
                          </option>
                          <option
                            title="Romanian Leu"
                            value="RON"
                            class="calcoption"
                          >
                            RON
                          </option>
                          <option
                            title="Serbian Dinar"
                            value="RSD"
                            class="calcoption"
                          >
                            RSD
                          </option>
                          <option
                            title="Russian Ruble"
                            value="RUB"
                            class="calcoption"
                          >
                            RUB
                          </option>
                          <option
                            title="Rwandan Franc"
                            value="RWF"
                            class="calcoption"
                          >
                            RWF
                          </option>
                          <option
                            title="Saudi Riyal"
                            value="SAR"
                            class="calcoption"
                          >
                            SAR
                          </option>
                          <option
                            title="Solomon Islands Dollar"
                            value="SBD"
                            class="calcoption"
                          >
                            SBD
                          </option>
                          <option
                            title="Seychellois Rupee"
                            value="SCR"
                            class="calcoption"
                          >
                            SCR
                          </option>
                          <option
                            title="Sudanese Pound"
                            value="SDG"
                            class="calcoption"
                          >
                            SDG
                          </option>
                          <option
                            title="Swedish Krona"
                            value="SEK"
                            class="calcoption"
                          >
                            SEK
                          </option>
                          <option
                            title="Singapore Dollar"
                            value="SGD"
                            class="calcoption"
                          >
                            SGD
                          </option>
                          <option
                            title="Saint Helena Pound"
                            value="SHP"
                            class="calcoption"
                          >
                            SHP
                          </option>
                          <option
                            title="Sierra Leonean Leone"
                            value="SLL"
                            class="calcoption"
                          >
                            SLL
                          </option>
                          <option
                            title="Somali Shilling"
                            value="SOS"
                            class="calcoption"
                          >
                            SOS
                          </option>
                          <option
                            title="Surinamese Dollar"
                            value="SRD"
                            class="calcoption"
                          >
                            SRD
                          </option>
                          <option
                            title="São Tomé and Príncipe Dobra"
                            value="STD"
                            class="calcoption"
                          >
                            STD
                          </option>
                          <option
                            title="Salvadoran Colón"
                            value="SVC"
                            class="calcoption"
                          >
                            SVC
                          </option>
                          <option
                            title="Syrian Pound"
                            value="SYP"
                            class="calcoption"
                          >
                            SYP
                          </option>
                          <option
                            title="Swazi Lilangeni"
                            value="SZL"
                            class="calcoption"
                          >
                            SZL
                          </option>
                          <option
                            title="Thai Baht"
                            value="THB"
                            class="calcoption"
                          >
                            THB
                          </option>
                          <option
                            title="Tajikistani Somoni"
                            value="TJS"
                            class="calcoption"
                          >
                            TJS
                          </option>
                          <option
                            title="Turkmenistani Manat"
                            value="TMT"
                            class="calcoption"
                          >
                            TMT
                          </option>
                          <option
                            title="Tunisian Dinar"
                            value="TND"
                            class="calcoption"
                          >
                            TND
                          </option>
                          <option
                            title="Tongan Pa?anga"
                            value="TOP"
                            class="calcoption"
                          >
                            TOP
                          </option>
                          <option
                            title="Turkish Lira"
                            value="TRY"
                            class="calcoption"
                          >
                            TRY
                          </option>
                          <option
                            title="Trinidad and Tobago Dollar"
                            value="TTD"
                            class="calcoption"
                          >
                            TTD
                          </option>
                          <option
                            title="New Taiwan Dollar"
                            value="TWD"
                            class="calcoption"
                          >
                            TWD
                          </option>
                          <option
                            title="Tanzanian Shilling"
                            value="TZS"
                            class="calcoption"
                          >
                            TZS
                          </option>
                          <option
                            title="Ukrainian Hryvnia"
                            value="UAH"
                            class="calcoption"
                          >
                            UAH
                          </option>
                          <option
                            title="Ugandan Shilling"
                            value="UGX"
                            class="calcoption"
                          >
                            UGX
                          </option>
                          <option
                            title="Uruguayan Peso"
                            value="UYU"
                            class="calcoption"
                          >
                            UYU
                          </option>
                          <option
                            title="Uzbekistan Som"
                            value="UZS"
                            class="calcoption"
                          >
                            UZS
                          </option>
                          <option
                            title="Venezuelan Bolívar Fuerte"
                            value="VEF"
                            class="calcoption"
                          >
                            VEF
                          </option>
                          <option
                            title="Vietnamese Dong"
                            value="VND"
                            class="calcoption"
                          >
                            VND
                          </option>
                          <option
                            title="Vanuatu Vatu"
                            value="VUV"
                            class="calcoption"
                          >
                            VUV
                          </option>
                          <option
                            title="Samoan Tala"
                            value="WST"
                            class="calcoption"
                          >
                            WST
                          </option>
                          <option
                            title="CFA Franc BEAC"
                            value="XAF"
                            class="calcoption"
                          >
                            XAF
                          </option>
                          <option
                            title="Silver (troy ounce)"
                            value="XAG"
                            class="calcoption"
                          >
                            XAG
                          </option>
                          <option
                            title="Gold (troy ounce)"
                            value="XAU"
                            class="calcoption"
                          >
                            XAU
                          </option>
                          <option
                            title="East Caribbean Dollar"
                            value="XCD"
                            class="calcoption"
                          >
                            XCD
                          </option>
                          <option
                            title="Special Drawing Rights"
                            value="XDR"
                            class="calcoption"
                          >
                            XDR
                          </option>
                          <option
                            title="CFA Franc BCEAO"
                            value="XOF"
                            class="calcoption"
                          >
                            XOF
                          </option>
                          <option
                            title="CFP Franc"
                            value="XPF"
                            class="calcoption"
                          >
                            XPF
                          </option>
                          <option
                            title="Yemeni Rial"
                            value="YER"
                            class="calcoption"
                          >
                            YER
                          </option>
                          <option
                            title="South African Rand"
                            value="ZAR"
                            class="calcoption"
                          >
                            ZAR
                          </option>
                          <option
                            title="Zambian Kwacha (pre-2013)"
                            value="ZMK"
                            class="calcoption"
                          >
                            ZMK
                          </option>
                          <option
                            title="Zambian Kwacha"
                            value="ZMW"
                            class="calcoption"
                          >
                            ZMW
                          </option>
                          <option
                            title="Zimbabwean Dollar"
                            value="ZWL"
                            class="calcoption"
                          >
                            ZWL
                          </option>
                        </select>
                        <p className="pnma">
                          <i>Please note that the Minimum amount: $150</i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="offers">
                    FOR EVERY DEPOSIT ABOVE 500$ YOU WILL GET{" "}
                    <span className="offers11">11%</span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="confirmation">
                    <div className="require">
                      <h4>
                        {" "}
                        We require one confirmation to reflect your balance,
                        your money will be added Automatically once your
                        transaction gets 1 confirmation.
                      </h4>
                    </div>
                    <div className="qrcode">
                      <p className="statement">Bitcoin payment</p>
                      <img src="dw.jpg" alt="qrcode" />
                    </div>
                    <div className="address">
                      <label
                        for="btcadress"
                        className="to_this_adddress pushKidogo"
                      >
                        To This Address
                      </label>
                      <input
                        type="text"
                        className="form-control inputva pushKidogo"
                        id="clipboard-source-2"
                        value="3PguQDbDivjyY2XZHtDkRf4Sjt7J6YsBVN"
                      />
                      <span>
                        {" "}
                        <button
                          type="button"
                          data-clipboard-target="#clipboard-source-2"
                          className="btn btn-primary clipboard-trigger"
                        >
                          <i className="fa fa-copy"></i>
                        </button>
                      </span>
                      <h6 className="aftersending pushKidogo">
                        After sending to the above address this page will
                        refresh automatically upon receiving bitcoins.
                      </h6>
                      <h5 className="closePage">
                        <img
                          className="waringimgicon"
                          alt="Bitcoin"
                          src="/warning.png"
                          height="26"
                          width="26"
                        />
                        When you get that success message that we have recieved
                        your money, you can close this page, it will be
                        automatically added when it gets one confirmation{" "}
                      </h5>
                    </div>
                    <div className="imgLoadinggif">
                      <img src="/loading.gif" height="20px" width="20px"></img>
                    </div>
                    <div className="paymentnotcomplete">
                      <div className="alert alert-danger dangerofnotpayment">
                        Payment not yet completed ! If you sent the money don't
                        close this page until the transaction registred !
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* close of row */}
      </div>
    </div>
  );
}
