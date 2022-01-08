import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

export default function Visacards() {
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
            <div className="inner_div_table">
              <div className="udpated">VISA</div>
              <div className="udpated">
                VISA USA Good for online shopping and Bills pay all cards are
                valid and with a balance| UPDATED 31-12-2021
              </div>
              <div>
                <table className="table table-bordered table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Logs Name</th>
                      <th scope="col">Bin</th>
                      <th scope="col">Includes</th>
                      <th scope="col"> verfied Balance</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buy Now</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>426164</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>485155</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>401312</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>447712</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>466343</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>445387</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>445106</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>462852</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>475889</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>44532976</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>443122</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>4446083</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>446083</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>437811</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">VISA</th>
                      <td>448865</td>
                      <td>
                        {" "}
                        Exp,CVV, Name On the Card Address City State,Zip USA
                      </td>
                      <td>GOOD</td>
                      <td>50$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Live
                        </label>
                      </td>
                      <td>
                        <Link to="/addfunds" style={{ textDecoration: "none" }}>
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* close of row */}
      </div>
    </div>
  );
}
