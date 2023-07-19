"use client";

import { Button, TextInput } from "@tremor/react";
import { MailIcon, LockClosedIcon } from "@heroicons/react/outline";

export interface SignInFormProps {}

export function SignInForm(props: SignInFormProps) {
  return (
    <form className="flex flex-col w-full gap-2">
      <TextInput placeholder="m@excample.com" icon={MailIcon} />
      <TextInput
        type="password"
        placeholder="**************"
        icon={LockClosedIcon}
      />
      <Button type="submit" className="transition-colors">
        Login
      </Button>
    </form>
  );
}
