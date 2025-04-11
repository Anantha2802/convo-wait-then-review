
import { useState, useEffect } from "react";
import { FinancialHeader } from "@/components/FinancialHeader";
import { FinancialSidebar } from "@/components/FinancialSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [currencyFormat, setCurrencyFormat] = useState("usd");
  
  useEffect(() => {
    // Check if user has dark mode enabled
    const isDarkMode = document.documentElement.classList.contains("dark");
    setDarkMode(isDarkMode);
    
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("appSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setEmailNotifications(settings.emailNotifications ?? true);
      setCurrencyFormat(settings.currencyFormat ?? "usd");
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  const saveSettings = () => {
    const settings = {
      darkMode,
      emailNotifications,
      currencyFormat
    };
    
    localStorage.setItem("appSettings", JSON.stringify(settings));
    
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
        <FinancialSidebar />
        <div className="flex-1 flex flex-col">
          <FinancialHeader />
          <SidebarTrigger className="fixed left-4 top-4 z-50 sm:hidden" />
          
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">
                Customize your application preferences and settings.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Toggle between light and dark themes
                      </p>
                    </div>
                    <Switch
                      id="dark-mode"
                      checked={darkMode}
                      onCheckedChange={toggleDarkMode}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications about your financial goals
                      </p>
                    </div>
                    <Switch
                      id="notifications"
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Label>Currency Format</Label>
                    <RadioGroup value={currencyFormat} onValueChange={setCurrencyFormat}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="usd" id="usd" />
                        <Label htmlFor="usd">USD ($)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="eur" id="eur" />
                        <Label htmlFor="eur">EUR (€)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gbp" id="gbp" />
                        <Label htmlFor="gbp">GBP (£)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button onClick={saveSettings}>Save Settings</Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
