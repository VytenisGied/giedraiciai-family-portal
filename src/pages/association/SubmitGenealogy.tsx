
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { UploadCloud, AlertTriangle, CheckCircle } from "lucide-react";

const SubmitGenealogy = () => {
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
        title: "Missing information",
        description: "Please fill in all required fields.",
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
        title: "Submission successful",
        description: "Your genealogy information has been submitted.",
      });
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8B1E3F] mb-6 text-center">Submit Genealogy</h1>
          
          {!isSubmitted ? (
            <>
              <p className="text-lg mb-8 text-center">
                If you believe you may be connected to the Giedraičiai lineage, please submit your family information below. Our genealogy researchers will review your submission and contact you with any findings.
              </p>
              
              <Card className="border-[#C9A13B]/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[#8B1E3F]">Genealogy Submission Form</CardTitle>
                  <CardDescription>
                    Please provide as much detail as possible about your family connection to the House of Giedraičiai.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
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
                      <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
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
                      <Label htmlFor="lineageInfo">Lineage Information <span className="text-red-500">*</span></Label>
                      <Textarea
                        id="lineageInfo"
                        name="lineageInfo"
                        value={formState.lineageInfo}
                        onChange={handleInputChange}
                        placeholder="Please describe your known family lineage, including names, dates, and locations that may connect to the Giedraičiai family."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="file">Supporting Documents (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          Drag and drop files here, or click to select files
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG, PNG up to 10MB
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
                          Select File
                        </Button>
                        {formState.file && (
                          <p className="mt-2 text-sm text-green-600">
                            Selected: {formState.file.name}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formState.notes}
                        onChange={handleInputChange}
                        placeholder="Any additional information you'd like to share"
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                      <AlertTriangle className="text-amber-500 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-sm text-amber-800">
                        By submitting this form, you consent to our genealogy researchers reviewing your information and potentially contacting you regarding your family history. We respect your privacy and will not share your information with third parties.
                      </p>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-[#C9A13B] hover:bg-[#8B1E3F] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Genealogy"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="border-[#C9A13B]/20 text-center p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <CardTitle className="text-2xl font-serif text-[#8B1E3F] mb-4">Thank You for Your Submission</CardTitle>
              <CardDescription className="text-lg mb-6">
                Your genealogy information has been successfully submitted to our researchers. We will review your information and contact you if we find connections to the Giedraičiai lineage.
              </CardDescription>
              <p className="text-gray-600 mb-8">
                A confirmation email has been sent to {formState.email}.
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
                Submit Another
              </Button>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SubmitGenealogy;
