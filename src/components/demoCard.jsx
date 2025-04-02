'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MagicCard } from './magicui/magic-card';

export function MagicCardDemo() {
  return (
    <Card className="w-[30vw]">
      <MagicCard gradientColor={'#D9D9D955'}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>hi</CardContent>
        <CardFooter></CardFooter>
      </MagicCard>
    </Card>
  );
}
