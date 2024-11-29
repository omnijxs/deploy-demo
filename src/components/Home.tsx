import {Link} from "react-router-dom";

export default function HomeComponent() {
    return (
        <>
            <h1>Home</h1>
            <div>
                <Link to="/foo">Foo</Link>
            </div>

            <div>
                <Link to="/bar">Bar</Link>
            </div>
        </>
    )
}
