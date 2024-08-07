"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mblrylwe");

  return (
    <section className="h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl text-red-600 font-light max-sm:text-3xl">
        Entre em <span className="font-bold">contato!</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-black space-y-5 w-full mt-20"
        data-aos="fade-up"
      >
        <div className="w-[50%] max-sm:w-[80%]">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            name="email"
            className=""
            placeholder="seu.email@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="w-[50%] max-sm:w-[80%]">
          <label htmlFor="email">Assunto</label>
          <Textarea
            id="message"
            name="message"
            placeholder="Quero fazer um orçamento..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="bg-red-600 hover:bg-red-500  w-[50%] max-sm:w-[80%]"
        >
          Submit
        </Button>
        <p
          className={`text-green-500 text-sm font-light ${
            state.succeeded ? "" : "hidden"
          }`}
        >
          Enviado! Entraremos em contato em breve.
        </p>
      </form>
    </section>
  );
}
