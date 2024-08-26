"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormSelect from "@/components/ui/form/form-select";
import FormInput from "@/components/ui/form/form-input";
import { toast } from "@/components/ui/use-toast";
import useWaitlist from "@/components/providers/waitlist-provider";
import { formatData } from "@/lib/utils";
import { waitlistForm } from "@/lib/cms/waitlist";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const { firstName, lastName, email, phone, prefferMethod, bookingType, location, findUs, message } = waitlistForm;

const formSchema = z.object({
    [firstName]: z.string().min(1, "First Name is required")
        .regex(/^[A-Za-z\s]+$/, "First Name should only contain letters"),
    [lastName]: z.string().min(1, "Last Name is required")
        .regex(/^[A-Za-z\s]+$/, "Last Name should only contain letters"),
    [email]: z.string().min(1, "Email is required").email("Email format is not valid"),
    [phone]: z.string().optional(),
    [prefferMethod]: z.string().optional(),
    [bookingType]: z.string().min(1, "Booking type is required"),
    [location]: z.string().min(1, "Location is required"),
    [findUs]: z.string().min(1, "Let us know where you find us"),
    [message]: z.string().optional(),
});

export default function WaitlistForm() {
    const [submitted, setSubmitted] = useState(false);
    const { getSubmissionCount } = useWaitlist();
    const form = useForm({
        mode: "onTouched",
        resolver: zodResolver(formSchema)
    });
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;

    const onSubmit = async (data) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_WAITLIST_FORM_API, {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            toast({
                title: "🎉 You're on the Waitlist!",
                description: <div>
                    Thank you for applying. We&apos;ll be in touch soon!,
                    At the meantime, checkout <Link className="underline underline-offset-2 hover:text-primary" href="/how-it-works"> how it works </Link> for more info.
                </div>,
                duration: 15000
            });

            setSubmitted(true);
            setTimeout(() => {
                getSubmissionCount();
            }, 3000);
        } catch (err) {
            console.error("Error~", err);
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        }
    };

    useEffect(() => { if (isSubmitSuccessful) { reset(); } }, [isSubmitSuccessful, reset]);

    return (
        <div className="p-base h-fit bg-secondary rounded-md overflow-hidden">
            <form className="space-y-base" onSubmit={handleSubmit(onSubmit)} noValidate>

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
                        // required
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
                    {/* Preferred Contact */}
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

                    {/* Booking Type */}
                    <Controller
                        name={bookingType}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                label="Booking Type"
                                id={bookingType}
                                items={["Beta User", "Business Owner", "Researcher", "Expo"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors[bookingType]?.message}
                                required
                            />
                        )}
                    />
                </div>

                {/* Location & Find Us */}
                <div className="form-group">
                    {/* Location */}
                    <FormInput
                        required
                        placeholder="City, State, Country"
                        label="Location (City, State, Country)"
                        id={location}
                        {...register(location)}
                        error={errors[location]?.message}
                    />

                    {/* Find Us */}
                    <Controller
                        name={findUs}
                        control={control}
                        render={({ field }) => (
                            <FormSelect
                                required
                                label="How did you find us?"
                                id={findUs}
                                items={["Social Media Posts", "Friends", "Ads", "Other"]}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors[findUs]?.message}
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
                    <Button className="flex items-center capitalize"
                        type="submit" disabled={!isDirty || !isValid || isSubmitting || isSubmitSuccessful}
                    >
                        {isSubmitting && <LoaderCircle className="mr-xs size-base animate-spin" />}
                        Join{submitted ? "ed" : (!isSubmitting && " For Free")}
                    </Button>
                </div>
            </form>
        </div>
    );
}
