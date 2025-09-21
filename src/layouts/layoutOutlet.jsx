import NavigationBar from '../components/NavigationBarComponent';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/contactpage';

export default function Layout() {
    return (
        <div className="flex flex-col w-full">
            <NavigationBar />
            <main className="">
                <Outlet />
                <Footer />
            </main>
        </div>

    );
}
