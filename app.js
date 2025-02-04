const { useState } = React;

function App() {
    const [page, setPage] = useState("home");

    return (
        <div>
            <nav className="navbar">
                <a href="#" onClick={() => setPage("home")}><i className="fas fa-home"></i> Home</a>
                <a href="#" onClick={() => setPage("search")}><i className="fas fa-search"></i> Search</a>
                <a href="#" onClick={() => setPage("itinerary")}><i className="fas fa-map"></i> Itinerary</a>
                <a href="#" onClick={() => setPage("dashboard")}><i className="fas fa-user"></i> Dashboard</a>
            </nav>
            <div className="container">
                {page === "home" && <Home />}
                {page === "search" && <Search />}
                {page === "itinerary" && <Itinerary />}
                {page === "dashboard" && <Dashboard />}
            </div>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1>Welcome to TrekGo</h1>
            <p>Plan and book your next trip easily.</p>
        </div>
    );
}

function Search() {
    return (
        <div>
            <h1>Search Results</h1>
            <p>List of travel options will be displayed here.</p>
        </div>
    );
}

function Itinerary() {
    return (
        <div>
            <h1>Plan Your Trip</h1>
            <p>Your saved itinerary will be displayed here.</p>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h1>Your Dashboard</h1>
            <p>View your saved trips and preferences here.</p>
        </div>
    );
}

// This will render the App inside the root div.
ReactDOM.render(<App />, document.getElementById("root"));