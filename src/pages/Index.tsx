import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Intern Portal</h1>
        <p className="text-xl text-muted-foreground">Welcome to the Donation Tracking Platform</p>
        <div className="space-x-4">
          <Button onClick={() => navigate("/login")}>
            Get Started
          </Button>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            View Demo Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
