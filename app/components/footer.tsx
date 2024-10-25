export default function Footer() {
    return (
        <footer className="bg-transparent py-6">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#">
                    <img src="/fb.svg" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="#">
                    <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="#">
                    <img src="/twitter.svg" alt="Twitter" className="w-8 h-8" />
                </a>
                <a href="#">
                    <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                </a>
            </div>
            <p className="text-center text-gray-600">&copy; 2020 All rights reserved</p>
        </footer>
    );
}



