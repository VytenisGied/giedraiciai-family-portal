import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { UploadCloud, AlertTriangle, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const SubmitGenealogy = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    lineageInfo: "",
    notes: "",
    file: null as File | null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation
    if (!formState.fullName || !formState.email || !formState.lineageInfo) {
      toast({
        title: t("submitGenealogy.missingInformation"),
        description: t("submitGenealogy.fillRequired"),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: t("submitGenealogy.submissionSuccessful"),
        description: t("submitGenealogy.infoSubmitted"),
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">{t("submitGenealogy.title")}</h1>
        
        {!isSubmitted ? (
          <>
            <p className="text-lg mb-8 text-center">
              {t("submitGenealogy.description")}
            </p>
            
            <Card className="border-[#C9A13B]/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#8B1E3F]">{t("submitGenealogy.formTitle")}</CardTitle>
                <CardDescription>
                  {t("submitGenealogy.formDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t("submitGenealogy.fullName")} <span className="text-red-500">*</span></Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formState.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("submitGenealogy.emailAddress")} <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lineageInfo">{t("submitGenealogy.lineageInfo")} <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="lineageInfo"
                      name="lineageInfo"
                      value={formState.lineageInfo}
                      onChange={handleInputChange}
                      placeholder={t("submitGenealogy.lineagePlaceholder")}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="file">{t("submitGenealogy.supportingDocuments")}</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        {t("submitGenealogy.dragDrop")}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("submitGenealogy.fileTypes")}
                      </p>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4"
                        onClick={() => document.getElementById("file")?.click()}
                      >
                        {t("submitGenealogy.selectFile")}
                      </Button>
                      {formState.file && (
                        <p className="mt-2 text-sm text-green-600">
                          {t("submitGenealogy.selected")} {formState.file.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">{t("submitGenealogy.notes")}</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formState.notes}
                      onChange={handleInputChange}
                      placeholder={t("submitGenealogy.notesPlaceholder")}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                    <AlertTriangle className="text-amber-500 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                      {t("submitGenealogy.privacyNotice")}
                    </p>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("submitGenealogy.submitting") : t("submitGenealogy.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="border-[#C9A13B]/20 text-center p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <CardTitle className="text-2xl font-serif text-[#8B1E3F] mb-4">{t("submitGenealogy.thankYou")}</CardTitle>
            <CardDescription className="text-lg mb-6">
              {t("submitGenealogy.successMessage")}
            </CardDescription>
            <p className="text-gray-600 mb-8">
              {t("submitGenealogy.confirmationEmail")} {formState.email}.
            </p>
            <Button
              className="bg-[#C9A13B] hover:bg-[#8B1E3F] text-white"
              onClick={() => {
                setFormState({
                  fullName: "",
                  email: "",
                  lineageInfo: "",
                  notes: "",
                  file: null,
                });
                setIsSubmitted(false);
              }}
            >
              {t("submitGenealogy.submitAnother")}
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SubmitGenealogy;
