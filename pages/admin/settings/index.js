import { Container } from "@mui/material";
import { Row } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./settings.module.scss";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  marginBottom: "1.8rem",
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
const Settings = () => {
  return (
    <DashBoardLayout appbar_title={"Settings"}>
      <section className={classes.settings}>
        <Container>
          <Row>
            <h4 className={classes.setting_title}>Job Fee</h4>
            <div className={classes.setting_block}>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Seller Fee is <span>15%</span></p>
                  <button>Change</button>
                </div>
                <div className={`${classes.setting_inner_block}`}>
                  <p>Deposit Fee is <span>5%</span></p>
                  <button>Change</button>
                </div>
              </div>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Flutterwave Fee is <span>2.5%</span></p>
                  <button>Change</button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <h4 className={classes.setting_title}>Payment Gateway</h4>
            <div className={classes.setting_block}>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Pay with Flutterwave</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID"/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Enabled</p>
                  </div>
                </div>
                <div className={`${classes.setting_inner_block}`}>
                  <p>Pay with Bank Transfar</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID"/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Enabled</p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <h4 className={classes.setting_title}>Milestones</h4>
            <div className={classes.setting_block}>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Milestone</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID"/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Enabled</p>
                  </div>
                </div>
                <div className={`${classes.setting_inner_block}`}>
                  <p>Max number of Milestones is <span>6</span></p>
                  <button>Change</button>
                </div>
              </div>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Min. Milestone Amount is <span>N20000</span></p>
                  <button>change</button>
                </div>
                <div className={`${classes.setting_inner_block}`}>
                  <p>Days to Stop Milestone Order is <span>10</span></p>
                  <button>Change</button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <h4 className={classes.setting_title}>Others</h4>
            <div className={classes.setting_block}>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>All Fixes To Require Approval</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID"/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Enabled</p>
                  </div>
                </div>
                <div className={classes.setting_inner_block}>
                  <p>Extras</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID"/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Enabled</p>
                  </div>
                </div>
              </div>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Registretion</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID"/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Enabled</p>
                  </div>
                </div>
                <div className={classes.setting_inner_block}>
                  <p>Withdrawals</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID"/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Enabled</p>
                  </div>
                </div>
              </div>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Min. Withdrwal is <span>N1500</span></p>
                  <button>change</button>
                </div>
                <div className={classes.setting_inner_block}>
                  <p>User to withdraw Deposites</p>
                  <div className={classes.utils}>
                    <label className={classes.toggle} htmlFfor="uniqueID">
                      <input type="checkbox" className={classes.toggle__input} id="uniqueID" disabled/>
                      <span className={classes.toggle_track}>
                        <span className={classes.toggle_indicator}>
                          {/* <!-- 	This check mark is optional	 --> */}
                          <span className={classes.checkMark}>
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                              <path
                                d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </label>
                    <p>Disabled</p>
                  </div>
                </div>
              </div>
              <div className={classes.setting_inner_blocks}>
                <div className={classes.setting_inner_block}>
                  <p>Withdrawal Fee is <span>N100</span></p>
                  <button>change</button>
                </div>
                <div className={classes.setting_inner_block}>
                  <p>Max. fix to be created is <span>7</span></p>
                  <button>change</button>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Settings;

Settings.getLayout = (page) => <>{page} </>;
