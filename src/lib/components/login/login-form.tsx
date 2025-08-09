import { Button } from '@/components/ui/button.js'
import { Card, CardContent } from '@/components/ui/card.js'
import { Input } from '@/components/ui/input.js'
import { cn } from '@/lib/utils.js'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trans } from '@lingui/react/macro'
import { Loader2 } from 'lucide-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form.js'

export interface LoginFormProps extends React.ComponentProps<'div'> {
  loginError?: string
  isVerifying?: boolean
  onFormSubmit?: (username: string, password: string) => void
}

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

export function LoginForm({
  className,
  onFormSubmit,
  isVerifying,
  loginError,
  ...props
}: LoginFormProps) {
  React.useEffect(() => {
    if (loginError && !isVerifying) {
      toast.error(loginError)
    }
  }, [loginError, isVerifying])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  return (
    <div className={cn('flex flex-col gap-6 bg-sidebar', className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Form {...form}>
            <form
              className="p-6 md:p-8 flex flex-col items-stretch justify-center"
              onSubmit={form.handleSubmit((data) =>
                onFormSubmit?.(data.username, data.password),
              )}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-start space-y-4">
                  <div>
                    <h1 className="text-2xl font-medium">
                      <Trans>Welcome back!</Trans>
                    </h1>
                    <p className="text-muted-foreground text-balance">
                      Login to your store
                    </p>
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email" asChild>
                        <Trans>Username</Trans>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Username or email address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel htmlFor="password" asChild>
                          <Trans>Password</Trans>
                        </FormLabel>
                        <a
                          tabIndex={-1}
                          href="#"
                          className="ml-auto text-sm underline-offset-2 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isVerifying}>
                  {isVerifying && (
                    <>
                      <Loader2 className="animate-spin" />
                      Please wait
                    </>
                  )}
                  {!isVerifying && <span>Login</span>}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
