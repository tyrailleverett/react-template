import { Helmet } from "react-helmet-async";

function App() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </>
    );
}

export default App;
