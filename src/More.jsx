import { useState } from "react";
import "./More.css";


function NewsCard(props) {
    return (
        <>
            <div style={{ width: "100%", marginBottom: "50px", display: "flex", flexDirection: "column", alignItems: "self-start", gap: "10px" }}>
                <div style={{ display: "flex", gap: "5px", color: "gray", fontSize: ".8em", alignItems: "center" }}>
                    {/* <div className="avatars">
                        <a href="#" className="avatars__item"><img className="avatar" src="https://randomuser.me/api/portraits/women/65.jpg" alt="" /></a>
                        <a href="#" className="avatars__item"><img className="avatar" src="https://randomuser.me/api/portraits/men/25.jpg" alt="" /></a>
                        <a href="#" className="avatars__item"><img className="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="" /></a>
                        <a href="#" className="avatars__item"><img className="avatar" src="https://randomuser.me/api/portraits/men/55.jpg" alt="" /></a>
                        <a href="#" className="avatars__item"><img className="avatar" src="https://via.placeholder.com/300/09f/fff.png" alt="" /></a>
                    </div> */}
                    <span>17:05</span>
                    <span>·</span>
                    <span>24 Oct</span>
                    <span>·</span>
                    <span>Reuters</span>
                </div>
                <span style={{ fontSize: "1.5em", fontWeight: "bold", color: '#D1D2D9', textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</span>
            </div>
        </>
    )
}

function NewsSection() {
    return (
        <>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </>
    )
}

function AboutSection() {
    return (
        <>
            <div
                style={{
                    // marginTop: "16px",
                    // padding: "12px 20px",
                    width: "100%",
                    // backgroundColor: "#111111",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <span
                    style={{
                        color: "#ffffff",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        letterSpacing: "0.1rem",
                    }}
                >
                    About
                </span>
                <ReadMoreLess text="Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009. Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.” Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use." maxChars={300} />
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <span style={{ color: "#82828f", textAlign: "center", borderBottom: "0.5px dashed #82828f", fontSize: "0.8rem" }}>Token address</span>
                    <span style={{ cfontWeight: "bold", textAlign: "center", fontSize: "0.75rem" }}>0x0000...1010</span>
                </div>
                <div style={{ height: "1px", width: "100%", backgroundColor: "#282A2F", margin: "12px 0" }}></div>
                <span
                    style={{
                        color: "#ffffff",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        letterSpacing: "0.1rem",
                    }}
                >
                    Market Stats
                </span>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#82828f", textAlign: "center", borderBottom: "0.5px dashed #82828f", fontSize: "0.8rem" }}>Market Cap</span>
                    <span style={{ cfontWeight: "bold", textAlign: "center", fontSize: "0.75rem" }}>$4,842,278,239.00</span>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#82828f", textAlign: "center", borderBottom: "0.5px dashed #82828f", fontSize: "0.8rem" }}>All Time Hight</span>
                    <span style={{ cfontWeight: "bold", textAlign: "center", fontSize: "0.75rem" }}>$2.92</span>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#82828f", textAlign: "center", borderBottom: "0.5px dashed #82828f", fontSize: "0.8rem" }}>All Time Low</span>
                    <span style={{ cfontWeight: "bold", textAlign: "center", fontSize: "0.75rem" }}>$0.00</span>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#82828f", textAlign: "center", borderBottom: "0.5px dashed #82828f", fontSize: "0.8rem" }}>Fully Diluted Value</span>
                    <span style={{ cfontWeight: "bold", textAlign: "center", fontSize: "0.75rem" }}>$5,206,861,073.00</span>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#82828f", textAlign: "center", borderBottom: "0.5px dashed #82828f", fontSize: "0.8rem" }}>Total Volume Locked</span>
                    <span style={{ cfontWeight: "bold", textAlign: "center", fontSize: "0.75rem" }}>$185,038,398.00</span>
                </div>
                <div style={{ height: "1px", width: "100%", backgroundColor: "#282A2F", margin: "12px 0" }}></div>
                <span
                    style={{
                        color: "#ffffff",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        letterSpacing: "0.1rem",
                        marginBottom: "5px"
                    }}
                >
                    Resources
                </span>
                <a href="https://bitcoin.org/" style={{ color: "#4F9CD9", fontSize: "0.9rem", textDecoration: "none" }}>https://bitcoin.org/</a>
                <a href="https://blog.bitcoin.com/" style={{ color: "#4F9CD9", fontSize: "0.9rem", textDecoration: "none" }}>https://blog.bitcoin.com/</a>
            </div>
        </>
    )
}


function More() {
    const [section, setSection] = useState("news");

    return (
        <>
            <div style={{ background: "#0E0E0E", padding: 14, paddingTop: 8, color: "white", fontFamily: "Sarala, sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", display: "flex", height: "32px", borderRadius: "10px", backgroundColor: "#1C1B20", alignItems: "center", justifyContent: "space-between", padding: 4, marginBottom: "24px" }}>
                    <span style={section === "news" ? { padding: "9px 30px", fontWeight: "bold", backgroundColor: "#5B5A60", borderRadius: "10px", color: "#FAF9FC", fontSize: ".85em", cursor: "pointer" } : { color: "#ADADAF", fontWeight: "bold", fontSize: ".85em", padding: "12px 30px", cursor: "pointer" }} onClick={() => setSection("news")}>News</span>
                    <span style={section === "analytics" ? { padding: "9px 30px", fontWeight: "bold", backgroundColor: "#5B5A60", borderRadius: "10px", color: "#FAF9FC", fontSize: ".85em", cursor: "pointer" } : { color: "#ADADAF", fontWeight: "bold", fontSize: ".85em", padding: "12px 30px", cursor: "pointer" }} onClick={() => setSection("analytics")}>Analytics</span>
                    <span style={section === "about" ? { padding: "9px 30px", fontWeight: "bold", backgroundColor: "#5B5A60", borderRadius: "10px", color: "#FAF9FC", fontSize: ".85em", cursor: "pointer" } : { color: "#ADADAF", fontWeight: "bold", fontSize: ".85em", padding: "12px 30px", cursor: "pointer" }} onClick={() => setSection("about")}>About</span>
                </div>
                {section === "news" ? <NewsSection /> : null}
                {/* {section === "analytics" ? <AnalyticsSection /> : null} */}
                {section === "about" ? <AboutSection /> : null}
            </div>
        </>
    )
}


export default More;


// Helper funtions

const ReadMoreLess = ({ text, maxChars }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded ? text : `${text.slice(0, maxChars)}`;

    return (
        <div>
            <p style={{ margin: 0, marginBottom: "8px" }}>{displayText}</p>
            {text.length > maxChars && (
                <span onClick={() => setIsExpanded(!isExpanded)} style={{ color: "#4F9CD9", fontWeight: "bold", fontSize: ".85em", cursor: "pointer" }}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </span>
            )}
        </div>
    );
};


