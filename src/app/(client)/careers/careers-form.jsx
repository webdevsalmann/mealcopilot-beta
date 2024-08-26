// CareersForm.jsx
"use client"
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import FormInput from "@/components/ui/form/form-input";
import FormSelect from "@/components/ui/form/form-select";
import { formatData } from "@/lib/utils";
import { careerForm } from "@/lib/cms/careers";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const {
    firstName,
    lastName,
    email,
    phone,
    prefferMethod,
    applyForRole,
    education,
    workExperience,
    projectExperience,
    socialMedia,
    message,
} = careerForm;

const formSchema = z.object({
    [firstName]: z.string().min(1, "First Name is required")
        .regex(/^[A-Za-z\s]+$/, "First Name should only contain letters"),
    [lastName]: z.string().min(1, "Last Name is required")
        .regex(/^[A-Za-z\s]+$/, "Last Name should only contain letters"),
    [email]: z.string().min(1, "Email is required").email("Email format is not valid"),
    [phone]: z.string().optional(),
    [prefferMethod]: z.string().optional(),
    [applyForRole]: z.string().min(1, "Please select the role"),
    [education]: z.string().min(1, "Please mention your education"),
    [workExperience]: z.string().min(1, "Please mention your previous work experience"),
    [projectExperience]: z.string().optional(),
    [socialMedia]: z.string().optional(),
    [message]: z.string().optional(),
});

export default function CareersForm() {
    const [submitted, setSubmitted] = useState(false);
    const form = useForm({
        mode: "onTouched",
        resolver: zodResolver(formSchema),
    });
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

    const onSubmit = async (data) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_CAREER_FORM_API, {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            toast({
                title: "🎉 Your request for job application has been sent successfully!",
                description: <div>
                    Thank you for applying. We&apos;ll get back to you shortly!,
                    At the meantime, checkout <Link className="underline underline-offset-2 hover:text-primary" href="/products"> how it works </Link> for more info.
                </div>,
                duration: 15000,
            });

            setSubmitted(true);
        } catch (err) {
            console.error("Error~", err);
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div className="p-base bg-secondary rounded-md overflow-hidden">
            <form className="space-y-base" onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* First Name & Last Name */}
                <div className="form-group">
                    <FormInput
                        label="First Name"
                        placeholder="John"
                        id={firstName}
                        {...register(firstName)}
                        error={errors[firstName]?.message}
                        required
                    />

                    <FormInput
                        label="Last Name"
                        placeholder="Doe"
                        id={lastName}
                        {...register(lastName)}
                        error={errors[lastName]?.message}
                        required
                    />
                </div>

                {/* Email & Phone */}
                <div className="form-group">
                    {/* Email */}
                    <FormInput
                        required
                        placeholder="mail@address.com"
                        label="Email"
                        type="email"
                        id={email}
                        {...register(email)}
                        error={errors[email]?.message}
                    />

                    {/* Phone */}
                    <FormInput
                        placeholder="+1 (123) 456-7890"
                        label="Phone"
                        type="tel"
                        id={phone}
                        {...register(phone)}
                        error={errors[phone]?.message}
                    />
                </div>

                {/* Preferred Method & Apply For Role */}
                <div className="form-group">
                    <Controller
                        name={prefferMethod}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Preferred Contact Method"
                                id={prefferMethod}
                                items={["Email", "Phone"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors[prefferMethod]?.message}
                            />
                        )}
                    />

                    <Controller
                        name={applyForRole}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                required
                                label="Apply For Role"
                                id={applyForRole}
                                items={["Mechanical Engineer", "Software Engineer", "Web Developer", "Sales & Marketing Associate", "Flight Test Operator", "Other"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors[applyForRole]?.message}
                            />
                        )}
                    />
                </div>

                {/* Education & Work Experience */}
                <div className="form-group">
                    <FormInput
                        required
                        textarea
                        placeholder="School, Major, Graduation Year"
                        label="Education"
                        id={education}
                        {...register(education)}
                        error={errors[education]?.message}
                    />

                    <FormInput
                        required
                        textarea
                        placeholder="Describe your work experience"
                        label="Work Experience"
                        id={workExperience}
                        {...register(workExperience)}
                        error={errors[workExperience]?.message}
                    />
                </div>

                <div className="form-group">
                    <FormInput
                        textarea
                        placeholder="Describe the projects that you have done. (Optional)"
                        label="Project Experience"
                        id={projectExperience}
                        {...register(projectExperience)}
                        error={errors[projectExperience]?.message}
                    />

                    {/* Linkedin / Social Media Profile */}
                    <FormInput
                        textarea
                        placeholder="https://linkedin.com/..."
                        label="LinkedIn / Social Media Profile"
                        id={socialMedia}
                        {...register(socialMedia)}
                        error={errors[socialMedia]?.message}
                    />
                </div>

                {/* Message */}
                <FormInput
                    textarea
                    placeholder="Leave a Message (Optional)"
                    label="Message"
                    id={message}
                    {...register(message)}
                    error={errors[message]?.message}
                />

                {/* Submit Button */}
                <div className="flex-center md:block">
                    <Button
                        className="flex items-center capitalize"
                        type="submit"
                        disabled={!isDirty || !isValid || isSubmitting || isSubmitSuccessful}
                    >
                        {isSubmitting && <LoaderCircle className="mr-xs size-base animate-spin" />}
                        Appl{submitted ? "ied" : (isSubmitting ? "ing" : "y")}
                    </Button>
                </div>
            </form>
        </div>
    );
}
