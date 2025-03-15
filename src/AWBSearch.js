import React, { useState } from "react";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";

const AWBSearch = () => {
    const [awb, setAwb] = useState("");
    const [awbData, setAwbData] = useState(null);
    const [error, setError] = useState("");

    const searchAWB = async () => {
        setError("");
        setAwbData(null);
        try {
            const snapshot = await get(ref(database, "BOX/" + awb));
            if (snapshot.exists()) {
                setAwbData(snapshot.val());
            } else {
                setError("AWB not found.");
            }
        } catch (error) {
            setError("Error fetching data.");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter AWB"
                value={awb}
                onChange={(e) => setAwb(e.target.value)}
            />
            <button onClick={searchAWB}>Search</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {awbData && (
                <div>
                    <h3>AWB Details:</h3>
                    <p><strong>Address:</strong> {awbData.Address}</p>
                    <p><strong>City:</strong> {awbData.City}</p>
                    <p><strong>Status:</strong> {awbData.Status}</p>
                    <p><strong>Product Name:</strong> {awbData.productName}</p>
                </div>
            )}
        </div>
    );
};

export default AWBSearch;
