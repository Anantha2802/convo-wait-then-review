
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  income: z.string().min(1, {
    message: "Please enter your monthly income.",
  }),
  savingsGoal: z.string().min(1, {
    message: "Please enter your savings goal.",
  }),
  riskTolerance: z.string({
    required_error: "Please select your risk tolerance.",
  }),
});

type OnboardingFormProps = {
  onComplete: () => void;
};

export function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      income: "",
      savingsGoal: "",
      riskTolerance: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(values));
    localStorage.setItem("onboardingComplete", "true");
    
    toast({
      title: "Welcome to FinPlan Pro!",
      description: "Your financial journey starts now.",
    });
    
    onComplete();
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome to FinPlan Pro</h1>
        <p className="text-muted-foreground">Let's set up your financial profile</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Income ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="5000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="savingsGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Savings Goal ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="20000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="riskTolerance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Risk Tolerance</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your risk tolerance" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="low">Low - Conservative</SelectItem>
                    <SelectItem value="medium">Medium - Balanced</SelectItem>
                    <SelectItem value="high">High - Aggressive</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This helps us tailor investment recommendations to your comfort level.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full">Get Started</Button>
        </form>
      </Form>
    </div>
  );
}
