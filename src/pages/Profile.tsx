import { PageLayout } from "@/components/PageLayout";

const Profile = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and account settings.
          </p>
        </div>
        
      </div>
    </PageLayout>
  );
};

export default Profile;
