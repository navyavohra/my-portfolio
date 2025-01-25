import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./ui/toast";
import { useToast } from "./ui/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  onSubmit?: (data: ContactFormData) => void;
  isSubmitting?: boolean;
  isSuccess?: boolean;
}

const ContactSection = ({
  onSubmit = () => {},
  isSubmitting = false,
  isSuccess = false,
}: ContactSectionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const { toast } = useToast();

  const handleFormSubmit = (data: ContactFormData) => {
    onSubmit(data);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section className="w-full min-h-screen bg-background py-16 px-4">
      <ToastProvider>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2">
                Let's Connect
              </CardTitle>
              <CardDescription className="text-lg">
                Have a project in mind? I'd love to hear about it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name", { required: true })}
                    className="w-full"
                  />
                  {errors.name && (
                    <span className="text-sm text-destructive">
                      Name is required
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    className="w-full"
                  />
                  {errors.email && (
                    <span className="text-sm text-destructive">
                      Valid email is required
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    {...register("message", { required: true })}
                    className="w-full min-h-[150px]"
                  />
                  {errors.message && (
                    <span className="text-sm text-destructive">
                      Message is required
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                    </motion.div>
                  ) : isSuccess ? (
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting
                    ? "Sending..."
                    : isSuccess
                      ? "Sent!"
                      : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        <ToastViewport />
      </ToastProvider>
    </section>
  );
};

export default ContactSection;
