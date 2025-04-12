import { PageLayout } from "@/components/PageLayout";

const Settings = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Customize your application preferences and configurations.
          </p>
        </div>
        
      </div>
    </PageLayout>
  );
};

export default Settings;
