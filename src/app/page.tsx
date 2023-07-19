import { SignInForm } from "@/components/forms/SignInForm";
import { Card, Divider, Flex, Subtitle, Title } from "@tremor/react";

import logoImage from "../../public/images/file.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center px-6 gap-4">
      <Image src={logoImage} alt="logo" />
      <Card className="mx-auto space-y-6 min-w-lg max-w-md">
        <div>
          <Title>Login</Title>
          <Subtitle>É rápido, fácil e seguro!</Subtitle>
        </div>

        <Divider />

        <SignInForm />
      </Card>
    </main>
  );
}
