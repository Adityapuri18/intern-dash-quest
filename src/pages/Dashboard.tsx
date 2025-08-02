import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Gift, Target, Star } from "lucide-react";

// Mock data simulating backend API response
const internData = {
  name: "Aditya",
  referralCode: "aditya2025",
  totalDonations: 1200
};

const rewards = [
  {
    id: 1,
    title: "Bronze Badge",
    description: "Raise $500 in donations",
    requirement: 500,
    unlocked: true,
    icon: Trophy,
    color: "bg-amber-100 text-amber-800"
  },
  {
    id: 2,
    title: "Silver Achievement",
    description: "Raise $1000 in donations",
    requirement: 1000,
    unlocked: true,
    icon: Star,
    color: "bg-gray-100 text-gray-800"
  },
  {
    id: 3,
    title: "Gold Medal",
    description: "Raise $1500 in donations",
    requirement: 1500,
    unlocked: false,
    icon: Gift,
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 4,
    title: "Platinum Status",
    description: "Raise $2500 in donations",
    requirement: 2500,
    unlocked: false,
    icon: Target,
    color: "bg-purple-100 text-purple-800"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Welcome, {internData.name}!</h1>
          <p className="text-muted-foreground">Track your progress and unlock amazing rewards</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Your Referral Code</CardDescription>
              <CardTitle className="text-2xl font-mono bg-muted p-2 rounded text-center">
                {internData.referralCode}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Copy Code
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Donations Raised</CardDescription>
              <CardTitle className="text-3xl text-green-600">
                ${internData.totalDonations.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Great progress! Keep it up!
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Progress to Next Reward</CardDescription>
              <CardTitle className="text-2xl">
                ${Math.max(0, 1500 - internData.totalDonations)} to go
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${Math.min(100, (internData.totalDonations / 1500) * 100)}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rewards Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Rewards & Achievements
            </CardTitle>
            <CardDescription>
              Unlock exclusive rewards as you raise more donations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {rewards.map((reward) => {
                const IconComponent = reward.icon;
                return (
                  <Card key={reward.id} className={`${reward.unlocked ? 'border-green-200' : 'border-muted'} transition-all hover:shadow-md`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <IconComponent className={`h-6 w-6 ${reward.unlocked ? 'text-green-600' : 'text-muted-foreground'}`} />
                        <Badge variant={reward.unlocked ? "default" : "secondary"} className={reward.unlocked ? reward.color : ""}>
                          {reward.unlocked ? "Unlocked" : "Locked"}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{reward.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {reward.description}
                      </p>
                      <div className="text-xs">
                        <strong>${reward.requirement}</strong> requirement
                      </div>
                      {reward.unlocked && (
                        <div className="mt-2">
                          <span className="text-xs text-green-600 font-medium">✓ Achievement Unlocked!</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;