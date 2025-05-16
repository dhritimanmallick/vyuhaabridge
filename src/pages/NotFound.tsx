import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="section-padding min-h-screen bg-white flex flex-col items-center justify-center">
    <div className="mb-6">
      <h1 className="text-4xl font-bold mb-2 text-center">404 - Page Not Found</h1>
      <p className="text-gray-600 text-center">The page you’re looking for doesn’t exist.</p>
    </div>
    <Link to="/">
      <Button variant="outline" size="sm">
        Home
      </Button>
    </Link>
  </section>
);

export default NotFound;
