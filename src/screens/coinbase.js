import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

export default function Coinbase() {
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
              PointerEvents: showDisplaysc2 ? "all" : "none",
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
              PointerEvents: showDisplaysc ? "all" : "none",
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
            className="thirdSection col-md-8 col-sm-12"
            style={{ width: accordionWidth ? "1000px" : "1200px" }}
          >
            <div className="row">
              <div className="third1 col-md-8 mr-3">
                <div className="divHolder">
                  <div className="divChild c1">
                    <h5>
                      {" "}
                      WARNING FOR ALL USERS , WHO CHANGE PASSWORD OF LOGS AND
                      REPORTING THEM RESULTS BANNED PERMANENTLY
                      <br /> <br />
                      FOR BLOCKCHAIN/COINBASE LOGIN YOU SHOULD USE COOKIES ,
                      CHROME EXTENSION, 100% NO LOCK.
                      <br /> <br />
                      ATTENTION! USE YOUR PC FOR A BETTER VIEW
                    </h5>
                  </div>
                  <div className="divChild c2">
                    <h5>Welcome to Hackersnacklogs!</h5>
                    <p>
                      Rules & Refund Policy General Rules Hackersnacklogs
                      provides service as is. By registering you automatically
                      agree with all our rules.
                      <br />
                      <br />
                      We accept only blockchain-based payment methods (Bitcoin,
                      DASH, etc.). We do not provide moneyback from user account
                      balance. Hackersnacklogs is not a bank – you can spend
                      your balance only inside the shop.
                    </p>
                    <p> MINIMUM DEPOSIT SHOULD BE $100 OR MORE </p>
                    <button className="saveloginDetails">
                      {" "}
                      SAVE YOUR LOGIN DETAILS
                    </button>
                  </div>
                  <div className="divChild c3">
                    <h3 className="greetings"> GREETINGS DEAR USERS </h3>
                    <p>
                      We are very happy to announce that our shop is finally
                      cleared of dead tools(+200k tools deleted),this resulted
                      on 40% more sales and about 4% only refunded.
                      <br />
                      <br />
                      HackersnackLogs is since 2015 and we are very serious we
                      won't let our users and sellers down.
                      <br />
                      <br />
                      15 support team, manual checking and verifying accounts in
                      only few minutes. We guarantee the best quality of tools
                      ever !
                      <br />
                      <br />
                      IMPORTANT: Official domains are Hackersnack.com, (Beware
                      from other domains are FAKE&SCAM)
                      <br />
                      <br />
                      Everything now on store is valid and checked by our staff
                      and will be checked every day after 24hours pass.
                      <br />
                      <br />
                      We do not guarantee accuracy of additional card holder
                      info that we provide, such as state, city, ZIP, address,
                      phone, DOB, SSN, etc. NOTE! Bank logs are Updated Daily
                      <br />
                      <br />
                      Rating System Hackersnacklogs uses a special rating system
                      for its clients to prevent abuse of our service and
                      provide privileges for loyal and honest partners with a
                      proven record. Regards, hackersnack Staff.
                      <br />
                      <br />
                      <h3 className="greetings">NOTICE RULES ! </h3>
                      Refund Policy Refunds are not made if you have refunded
                      more than 70% of your orders (currently your refund ratio
                      is 0%). Default refund time is 3 hours (cc) and 15 minutes
                      (CVV2) – only for bases with refund option. Refunds are
                      only performed via the Orders section – we are not
                      replacing/refunding any of your orders via client
                      support/ticket system. Refunds are only available if your
                      check request was issued in the proper refund period. If
                      you are late, then you are late – no refunds.
                      <br />
                      There are non-refundable items for which we never provide
                      refunds. They are displayed in your cart. If you want
                      refunds – do not buy such items.
                      <br />
                      <br />
                      Refunds are not made if checker shows that a logs is VALID
                      (on your purchase History. Checker results cannot be
                      disputed. For all other auth codes we provide easy refunds
                      (except for non-refundable items such as Fullz) .
                      <br />
                      <br />
                      Refunds are not made if a bank is not working in your area
                      (REGION LOCK) but checker reports 00-APPROVAL or
                      51-DECLINE.
                      <br />
                      Having issue on login accounts? , get rdp usa, proxy or
                      private VPN > clear Cookies !
                      <br />
                      <br />
                      Verification required? follow answer of support , or use
                      emulator ANDROID for success login
                      <br />
                      <br />
                      WARNING: DO NOT CHANGE PASSWORD OF TOOLS AND REPORTING
                      THEM IS FORBIDDEN = RESULTS PERMANENT BANNED
                      <br />
                      <br />
                      14hchains - Team since 2015
                      <br />
                      <br />
                      <h3 className="greetings">BIG UPDATES </h3>
                      <p className="dearUsers"> Dear users, </p>
                      We have updated our Design we hope you enjoy it
                      <br />
                      we tried to make it much easier than the old one and much
                      clear. and friendly Best use on PC
                      <br />
                      <br />
                      MOBILE VERSION WILL BE OUT SOON!
                      <br />
                      if do you have any suggestion feel free to contact us from
                      tickets.
                      <br />
                      <br />
                      Kind Regards,
                      <br />
                      Hackersnacklogs Admins.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="third2 col-md-3 col-sm-12"
                style={{
                  width: accordionWidth ? "290px" : "320px",
                }}
              >
                <div className="third2one">
                  <h5>
                    The only way to contact us is from our tickets system. You
                    can join our newly created official channel in Telegram for
                    updates the old channel has been pined we are not accepting
                    new member anymore! Support@Hackersnacklogs.com{" "}
                  </h5>
                  <center>
                    <a href="https://t.me/hackersnacklogs" target="_blank">
                      <img
                        className="telegramImage"
                        src="/jointelegram.png"
                        height="60px"
                        width="150px"
                      />
                    </a>
                  </center>
                </div>
                <div className="third2two">
                  <div className="latestTools">
                    {" "}
                    <b className="btext">Latest tools Added 23-12-2021</b>
                  </div>
                  <div className="Added_items">
                    <ul>
                      <li>
                        Added <span style={{ color: "red" }}>25 </span> items of{" "}
                        <span style={{ color: "#000000", fontWeight: "bold" }}>
                          cashapp logs and blockchain Updated 13-08-2021
                        </span>{" "}
                        in the{" "}
                        <span style={{ color: "#008000" }}>Bank logs</span>
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>11 </span> items
                        <a href="/usaalogs" target="_blank">
                          {" "}
                          usaa(paypal){" "}
                        </a>{" "}
                        in the{" "}
                        <span style={{ color: "green" }}>bank logs </span>{" "}
                        section{" "}
                      </li>

                      <li>
                        Added <span style={{ color: "red" }}>31</span> items
                        <a href="/visacards" target="_blank">
                          {" "}
                          Visa(master){" "}
                        </a>{" "}
                        in the{" "}
                        <span style={{ color: "green" }}>
                          {" "}
                          Credit Card{" "}
                        </span>{" "}
                        section{" "}
                      </li>

                      <li>
                        Added <span style={{ color: "red" }}>7</span> items
                        <a href="/applebank" target="_blank">
                          {" "}
                          apple Bank(logs){" "}
                        </a>{" "}
                        in the{" "}
                        <span style={{ color: "green" }}> Bank logs </span>{" "}
                        section{" "}
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>19</span> items
                        <a href="/applebank" target="_blank">
                          {" "}
                          apple Bank(logs){" "}
                        </a>{" "}
                        in the{" "}
                        <span style={{ color: "green" }}> Bank logs </span>{" "}
                        section{" "}
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>11</span> items
                        <a href="/idahofuliz" target="_blank">
                          {" "}
                          idaho fuliz{" "}
                        </a>{" "}
                        in the <span style={{ color: "green" }}>
                          {" "}
                          stufs{" "}
                        </span>{" "}
                        section{" "}
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>14</span> items
                        <a href="/newyorkfuliz" target="_blank">
                          {" "}
                          Newyork fullz{" "}
                        </a>{" "}
                        in the <span style={{ color: "green" }}>
                          {" "}
                          stufs{" "}
                        </span>{" "}
                        section{" "}
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>19</span> items
                        <a href="paypalaccount" target="_blank">
                          {" "}
                          paypal{" "}
                        </a>{" "}
                        in the <span style={{ color: "green" }}>
                          {" "}
                          paypal{" "}
                        </span>{" "}
                        section{" "}
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>21</span> items
                        <a href="/cashappaccount" target="_blank">
                          {" "}
                          cashapp logs{" "}
                        </a>{" "}
                        in the <span style={{ color: "green" }}>
                          {" "}
                          cashapp{" "}
                        </span>{" "}
                        section{" "}
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>31</span> items
                        <a href="/shopwithscrip" target="_blank">
                          {" "}
                          shopwithscrip{" "}
                        </a>{" "}
                        in the{" "}
                        <span style={{ color: "green" }}> Accounts </span>{" "}
                        section{" "}
                      </li>
                      <li>
                        Added <span style={{ color: "red" }}>22</span> items
                        <a href="/shopwithscrip" target="_blank">
                          {" "}
                          shopwithscrip with balances{" "}
                        </a>{" "}
                        in the{" "}
                        <span style={{ color: "green" }}> Accounts </span>{" "}
                        section{" "}
                      </li>
                    </ul>
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
