
import { FinancialHeader } from "@/components/FinancialHeader";
import { FinancialSidebar } from "@/components/FinancialSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqs = [
    {
      question: "How do I set financial goals?",
      answer: "You can set financial goals by going to the Dashboard page and clicking the 'Add Goal' button in the Financial Goals section. Fill in the required details and save your goal to start tracking progress."
    },
    {
      question: "How are investment recommendations generated?",
      answer: "Investment recommendations are personalized based on your risk tolerance and financial situation provided during onboarding. Our system analyzes this information to suggest appropriate investment strategies."
    },
    {
      question: "Can I change my risk tolerance level?",
      answer: "Yes, you can update your risk tolerance by going to the Profile page and using the 'Reset Profile' button to update your information. This will trigger the onboarding process where you can select a new risk tolerance level."
    },
    {
      question: "How do I read the financial charts?",
      answer: "The financial charts display your income, expenses, and savings trends over time. You can hover over data points to see specific values and switch between different chart types using the tabs at the top of each chart."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all your financial data is stored locally on your device and isn't transmitted to any servers. Your information remains private and is only accessible from your current browser."
    },
    {
      question: "How do I reset my profile?",
      answer: "You can reset your profile by going to the Profile page and clicking the 'Reset Profile & Start Over' button. This will clear all your data and return you to the onboarding process."
    }
  ];
  
  const filteredFaqs = faqs.filter(
    faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
           faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSupport = () => {
    toast({
      title: "Support Request Received",
      description: "Thank you for reaching out. Our team will contact you soon.",
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
              <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
              <p className="text-muted-foreground">
                Get assistance and answers to your questions.
              </p>
            </div>
            
            <div className="relative mb-6">
              <Input
                type="search"
                placeholder="Search for help topics..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions about using FinPlan Pro</CardDescription>
                </CardHeader>
                <CardContent>
                  {filteredFaqs.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-center py-4 text-muted-foreground">No results found for "{searchQuery}"</p>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Need more help? Our support team is here to assist you.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea 
                        id="message" 
                        placeholder="Describe your issue or question..." 
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      />
                    </div>
                    <Button onClick={handleSupport}>Submit Request</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Help;

// Define Label component locally since we're using it
const Label = ({ htmlFor, children }: { htmlFor?: string, children: React.ReactNode }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </label>
  );
};
