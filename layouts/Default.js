import Nav from '../components/Nav';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Nav />
            <main>{children}</main>
        </div>
    )
}