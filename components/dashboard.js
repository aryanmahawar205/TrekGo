import React from 'react';
import dashboardImage from '../images/dashboard-view.jpg'; // Adjust the path if needed

function Dashboard() {
    return (
            <div>
                <h1>Your Dashboard</h1>
                <img src={dashboardImage} alt="Dashboard View" style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
                <p>View your saved trips and preferences here.</p>
            </div>
        );
    }
export default Dashboard;