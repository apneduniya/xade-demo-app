import { useEffect, useState } from 'react';
import './App.css';
import algo from './assets/algo.png';
import leverage from './assets/leverage.png';
import limit from './assets/limit.png';
import stop from './assets/stop.png';

function App() {
  // buy and sell
  const [tradeType, setTradeType] = useState("buy");
  const [orderType, setOrderType] = useState("market");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedDropDownValue, setSelectedDropDownValue] = useState("Spot");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState("token");
  const [commingSoon, setCommingSoon] = useState(false);
  const [changeSlipage, setChangeSlipage] = useState(false);
  const [slipageValue, setSlipageValue] = useState(1);

  useEffect(() => {
    if (selectedDropDownValue === "Margin" || selectedDropDownValue === "Algo" || orderType === "limit" || orderType === "stop") {
      setCommingSoon(true);
    } else {
      setCommingSoon(false);
    }
  }, [selectedDropDownValue, orderType])

  return (
    <>
      <div style={{ background: "#0E0E0E", padding: 14, paddingTop: 34, color: "white", fontFamily: "sans-serif", display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Top bar */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M20 8L12 16L20 24" stroke="white" strokeWidth="2" />
            </svg>
            <span style={{ fontSize: "1.05em", fontWeight: "bold" }}>Trade</span>
          </div>
          {
            commingSoon ?
              null
              :
              <>
                <div style={{ position: "relative" }} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <div style={{ background: "linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)", padding: "7px 14px", display: "flex", gap: "5px", alignItems: "center", cursor: "pointer", borderRadius: "1000px", justifyContent: "center" }}>
                    <span style={{ fontSize: "1em", fontWeight: "bold" }}>{selectedDropDownValue}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 9L12 15L6 9" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <ul style={{ position: "absolute", top: "100%", right: 0, width: "max-content", background: "#151515", borderRadius: "10px", padding: "10px 0", display: isDropDownOpen ? "flex" : "none", paddingLeft: "40px", paddingRight: "40px", flexDirection: "column", gap: "24px", zIndex: 1000, border: "1.5px solid #252525" }}>
                    <li onClick={() => setSelectedDropDownValue("Spot")} style={{ listStyle: "none", cursor: "pointer", color: "#848484", fontWeight: "bold" }}>Spot</li>
                    <li onClick={() => setSelectedDropDownValue("Margin")} style={{ listStyle: "none", cursor: "pointer", color: "#848484", fontWeight: "bold" }}>Margin</li>
                    <li onClick={() => setSelectedDropDownValue("Algo")} style={{ listStyle: "none", cursor: "pointer", color: "#848484", fontWeight: "bold" }}>Algo</li>
                  </ul>
                </div>
              </>
          }
        </div>
        {
          commingSoon ?
            <div style={{ width: "100%", height: "80vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", justifyContent: "center" }}>
              <img 
                alt="" 
                style={{ width: "300px", height: "300px" }} 
                src={
                  selectedDropDownValue === "Margin" ? leverage :
                  selectedDropDownValue === "Algo" ? algo :
                  orderType === "limit"? limit : 
                  stop
                }
                />
              <span style={{ fontSize: "2.2em", fontWeight: "bold", textAlign: "center", fontFamily: "Benzin-Semibold" }}>Coming Soon</span>
            </div>
            :
            <>
              {/* Buy/Sell */}
              <div style={{ width: "100%", display: "flex", height: "44px", borderRadius: "100px", backgroundColor: "#151515", alignItems: "center", justifyContent: "space-between", padding: 4 }}>
                <span style={tradeType === "buy" ? { padding: "12px 70px", fontWeight: "bold", background: "linear-gradient(94deg, #183E27 -3.78%, #1D5433 112.05%)", borderRadius: "100px", color: "#ACFF8E", fontSize: "1em", cursor: "pointer" } : { color: "#848484", fontWeight: "bold", fontSize: "1em", padding: "12px 70px", cursor: "pointer" }} onClick={() => { setTradeType("buy"); setConvertedValue("token") }}>Buy</span>
                <span style={tradeType === "sell" ? { padding: "12px 70px", fontWeight: "bold", background: "linear-gradient(94deg, #183E27 -3.78%, #1D5433 112.05%)", borderRadius: "100px", color: "#ACFF8E", fontSize: "1em", cursor: "pointer" } : { color: "#848484", fontWeight: "bold", fontSize: "1em", padding: "12px 70px", cursor: "pointer" }} onClick={() => setTradeType("sell")}>Sell</span>
              </div>
              {/* Market, Limit, Stop */}
              <div style={{ width: "100%", display: "flex", height: "44px", borderRadius: "100px", backgroundColor: "#151515", alignItems: "center", justifyContent: "space-between", padding: 4 }}>
                <span style={orderType === "market" ? { padding: "12px 30px", fontWeight: "bold", background: "linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)", borderRadius: "100px", color: "#FFFFFF", fontSize: "1em", cursor: "pointer" } : { color: "#848484", fontWeight: "bold", fontSize: "1em", padding: "12px 30px", cursor: "pointer" }} onClick={() => setOrderType("market")}>Market</span>
                <span style={orderType === "limit" ? { padding: "12px 30px", fontWeight: "bold", background: "linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)", borderRadius: "100px", color: "#FFFFFF", fontSize: "1em", cursor: "pointer" } : { color: "#848484", fontWeight: "bold", fontSize: "1em", padding: "12px 30px", cursor: "pointer" }} onClick={() => setOrderType("limit")}>Limit</span>
                <span style={orderType === "stop" ? { padding: "12px 30px", fontWeight: "bold", background: "linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)", borderRadius: "100px", color: "#FFFFFF", fontSize: "1em", cursor: "pointer" } : { color: "#848484", fontWeight: "bold", fontSize: "1em", padding: "12px 30px", cursor: "pointer" }} onClick={() => setOrderType("stop")}>Stop</span>
              </div>
              {/* How much? */}
              <div style={{ marginTop: "45px", display: 'flex', flexDirection: "column", alignItems: "center" }}>
                <span style={{ color: "#7E7E7E", fontSize: "1em" }}>How much would you like to invest?</span>
                <div style={{ marginTop: "48px", display: "flex", gap: 10, alignItems: "center", width: "100%" }}>
                  {/* <span style={{ color: "#ffffff", fontSize: '3.5em' }}>1</span> */}
                  <input type="number" value={value} onChange={(e) => setValue(e.target.value)} style={{ background: "transparent", border: "0", color: "#ffffff", fontSize: '3.5em', width: "50%", textAlign: "right", outline: "none" }} />
                  <span style={{ color: "#252525", fontSize: '3.5em' }}>{convertedValue === "token" ? "$" : "₿"}</span>
                </div>
                <div style={{ marginTop: "24px", display: "flex", gap: 8 }}>
                  <div>
                    <span style={{ color: "#7E7E7E" }}>You&apos;ll get</span>
                    {
                      convertedValue === "token" ?
                        <span style={{ color: "#7E7E7E", fontWeight: "bold", marginLeft: ".3em" }}>0.000029 BTC</span>
                        :
                        <span style={{ color: "#7E7E7E", fontWeight: "bold", marginLeft: ".3em" }}>29 USDT</span>
                    }
                  </div>
                  {
                    tradeType === "sell" ?
                      <>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer" onClick={() => setConvertedValue(convertedValue === "token" ? "usdt" : "token")}>
                          <g id="vuesax/linear/arrow-3">
                            <g id="arrow-3">
                              <g id="Group">
                                <path id="Vector" d="M6.96659 4.47998L4.48657 2L2.00659 4.47998" stroke="#C397FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_2" d="M4.48657 14V2" stroke="#C397FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_3" d="M9.0332 11.52L11.5132 14L13.9932 11.52" stroke="#C397FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_4" d="M11.5132 2V14" stroke="#C397FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </>
                      :
                      null
                  }
                </div>
              </div>
              {/* Order Summary */}
              <div style={{ marginTop: "45px", display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }} onClick={() => setIsModalOpen(!isModalOpen)}>
                  <span style={{ fontWeight: "bold" }}>Order summary</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transform: isModalOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.3s ease-in-out" }}>
                    <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                {
                  isModalOpen ? (
                    <>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: "16px" }}>
                          <div style={{ padding: 8, backgroundColor: "#1E1E1E", height: 28, width: 28, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="url(#paint0_linear_1304_152)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M12 6V18" stroke="url(#paint1_linear_1304_152)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#paint2_linear_1304_152)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <defs>
                                <linearGradient id="paint0_linear_1304_152" x1="12.0069" y1="7.33984" x2="12.0069" y2="16.6598" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1304_152" x1="12.5" y1="6" x2="12.5" y2="18" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1304_152" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <span style={{ color: "#7E7E7E" }}>Entry price</span>
                            <span style={{ fontWeight: "bold" }}>$34,909.12</span>
                          </div>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="vuesax/linear/info-circle">
                            <g id="info-circle">
                              <path id="Vector" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path id="Vector_2" d="M12 8V13" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path id="Vector_3" d="M11.9946 16H12.0036" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: "16px" }}>
                          <div style={{ padding: 8, backgroundColor: "#1E1E1E", height: 28, width: 28, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <circle cx="20" cy="20" r="20" fill="#1E1E1E" />
                              <path d="M26.0697 16.57L19.9997 10.5L13.9297 16.57M26.0697 23L19.9997 29.07L13.9297 23" stroke="url(#paint0_linear_1265_3598)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M20 27.5V10.67" stroke="url(#paint1_linear_1265_3598)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                              <defs>
                                <linearGradient id="paint0_linear_1265_3598" x1="19.9997" y1="10.5" x2="19.9997" y2="29.07" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1265_3598" x1="20.5" y1="10.67" x2="20.5" y2="27.5" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <span style={{ color: "#7E7E7E" }}>Slippage</span>
                            {
                              changeSlipage ?
                                <div style={{display: "flex", alignItems: "center", gap: 8}}>
                                  <input type="number" value={slipageValue} onChange={(e) => setSlipageValue(e.target.value)} style={{ background: "transparent", border: "0", color: "#ffffff", fontSize: '1em', width: "min-content", textAlign: "left", outline: "none" }} />%
                                </div>
                                :
                                <span style={{ fontWeight: "bold" }}>{slipageValue}%</span>
                            }
                          </div>
                        </div>
                        <span style={{ color: "#C397FF", cursor: 'pointer' }} onClick={() => setChangeSlipage(!changeSlipage)}>{changeSlipage ? "Done" : "Change"}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: "16px" }}>
                          <div style={{ padding: 8, backgroundColor: "#1E1E1E", height: 28, width: 28, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="vuesax/linear/receipt-disscount">
                                <g id="receipt-disscount">
                                  <path id="Vector" d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" stroke="url(#paint0_linear_1304_199)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path id="Vector_2" d="M9 13L15 7" stroke="url(#paint1_linear_1304_199)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path id="Vector_3" d="M14.9945 13H15.0035" stroke="url(#paint2_linear_1304_199)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path id="Vector_4" d="M8.99451 7.5H9.00349" stroke="url(#paint3_linear_1304_199)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                              </g>
                              <defs>
                                <linearGradient id="paint0_linear_1304_199" x1="11.995" y1="2" x2="11.995" y2="22.0025" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1304_199" x1="12" y1="7" x2="12" y2="13" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1304_199" x1="14.999" y1="12.5" x2="14.999" y2="13.5" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1304_199" x1="8.999" y1="7" x2="8.999" y2="8" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#C397FF" />
                                  <stop offset="1" stopColor="#82FFC3" />
                                </linearGradient>
                              </defs>
                            </svg>

                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <span style={{ color: "#7E7E7E" }}>Estimated fee</span>
                            <span style={{ fontWeight: "bold" }}>$0.01</span>
                          </div>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="vuesax/linear/info-circle">
                            <g id="info-circle">
                              <path id="Vector" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path id="Vector_2" d="M12 8V13" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path id="Vector_3" d="M11.9946 16H12.0036" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </>
                  )
                    :
                    null
                }
              </div>
              {/* Confirm Order Button */}
              <button style={{ color: "#ACFF8E", padding: "22px", width: "100%", borderRadius: "100px", border: "0", background: "linear-gradient(96deg, #1B4D30 45.28%, #328454 89.42%)", fontWeight: "bold", cursor: "pointer", fontSize: "1em" }}>
                Confirm order
              </button>
            </>
        }
      </div>
    </>
  )
}

export default App;
