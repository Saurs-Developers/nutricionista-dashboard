import { FormProvider, useForm } from "react-hook-form"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/form"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { Textarea } from "@/components/shared/textarea"
import { Typography } from "@/components/shared/typography"

import { DynamicRadioField } from "../dynamic-radio-field"

import { StepOne } from "./setp-1"
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

export function AddPatientDialog() {
  const methods = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar paciente</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full h-[578px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar paciente</DialogTitle>
        </DialogHeader>
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* <StepOne /> */}
            <StepTwo />
            {/* <StepThree /> */}
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
