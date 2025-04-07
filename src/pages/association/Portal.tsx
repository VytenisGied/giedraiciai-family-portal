
import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Portal = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a placeholder for future authentication logic
    toast({
      title: t("portal.loginNotAvailable"),
      description: t("portal.comingSoon"),
    });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-serif font-bold text-deep-red mb-2">
          {t("portal.title")}
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-center">
          {t("portal.description")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Login Section */}
          <Card className="border border-gold/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-deep-red">{t("portal.memberLogin")}</CardTitle>
              <CardDescription>{t("portal.memberLoginDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t("portal.email")}</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t("portal.password")}</Label>
                  <Input id="password" type="password" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleLogin} 
                className="w-full bg-deep-red hover:bg-deep-red/90 text-white"
              >
                {t("portal.login")}
              </Button>
            </CardFooter>
          </Card>

          {/* Register Section */}
          <Card className="border border-gold/20 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-deep-red">{t("portal.newMember")}</CardTitle>
              <CardDescription>{t("portal.registerDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>{t("portal.registerBenefits")}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("portal.benefit1")}</li>
                  <li>{t("portal.benefit2")}</li>
                  <li>{t("portal.benefit3")}</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline"
                className="w-full border-deep-red text-deep-red hover:bg-deep-red/10"
                onClick={() => {
                  toast({
                    title: t("portal.registrationNotAvailable"),
                    description: t("portal.comingSoon"),
                  });
                }}
              >
                {t("portal.register")}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Separator className="my-12 w-full max-w-4xl bg-gold/30" />

        {/* Features Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-serif font-medium text-center mb-8 text-deep-red">
            {t("portal.features")}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-deep-red">
                    {t(`portal.feature${i}Title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(`portal.feature${i}Description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
