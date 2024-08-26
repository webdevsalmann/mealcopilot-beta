"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import FormInput from "@/components/ui/form/form-input";
import FormSelect from "@/components/ui/form/form-select";
import { formatData } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactForm } from "@/lib/cms/contact";
import { z } from "zod";

const {
    firstName,
    lastName,
    email,
    phone,
    preferredMethod,
    messageType,
    message
} = contactForm;
const formSchema = z.object({
    [firstName]: z.string().min(1, "First Name is required").regex(/^[A-Za-z\s]+$/, "First Name should only contain letters"),
    [lastName]: z.string().min(1, "Last Name is required").regex(/^[A-Za-z\s]+$/, "Last Name should only contain letters"),
    [email]: z.string().min(1, "Email is required").email("Email format is not valid"),
    [phone]: z.string().optional(),
    [preferredMethod]: z.string().optional(),
    [messageType]: z.string().min(1, "Please select message type"),
    [message]: z.string().optional(),
});

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const form = useForm({
        mode: "onTouched",
        resolver: zodResolver(formSchema),
    });
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

    const onSubmit = async (data) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_API, {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            toast({
                title: "🙂 Thank you for reaching out to us.",
                description: (
                    <div>
                        We&apos;ll be in touch soon! In the meantime, check out{" "}
                        <Link className="underline underline-offset-2 hover:text-primary" href="/how-it-works">
                            how our product works
                        </Link>{" "}
                        for more info.
                    </div>
                ),
                duration: 7000,
            });

            setSubmitted(true);
        } catch (err) {
            console.error("Error:", err);
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
            <form className="space-y-lg" onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* First Name & Last Name */}
                <div className="form-group">
                    <FormInput
                        required
                        placeholder="John"
                        label="First Name"
                        id={firstName}
                        {...register(firstName)}
                        error={errors[firstName]?.message}
                    />
                    <FormInput
                        required
                        placeholder="Doe"
                        label="Last Name"
                        id={lastName}
                        {...register(lastName)}
                        error={errors[lastName]?.message}
                    />
                </div>

                {/* Email & Phone */}
                <div className="form-group">
                    <FormInput
                        required
                        placeholder="mail@address.com"
                        label="Email"
                        type="email"
                        id={email}
                        {...register(email)}
                        error={errors[email]?.message}
                    />
                    <FormInput
                        placeholder="+1 (123) 456-7890"
                        label="Phone"
                        type="tel"
                        id={phone}
                        {...register(phone)}
                        error={errors[phone]?.message}
                    />
                </div>

                {/* Preferred Method & Message Type */}
                <div className="form-group">
                    <Controller
                        name={preferredMethod}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Preferred Contact Method"
                                id={preferredMethod}
                                items={["Email", "Phone"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors[preferredMethod]?.message}
                            />
                        )}
                    />
                    <Controller
                        name={messageType}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Message Type"
                                id={messageType}
                                items={["Business", "Conference", "Question", "Suggestion", "Other"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors[messageType]?.message}
                                required
                            />
                        )}
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
                    <Button className="flex items-center capitalize" type="submit" disabled={!isDirty || !isValid || isSubmitting || isSubmitSuccessful}>
                        {isSubmitting && <LoaderCircle className="mr-xs size-base animate-spin" />}
                        Submit{submitted ? "ed" : (isSubmitting && "ing")}
                    </Button>
                </div>
            </form>
        </div>
    );
}