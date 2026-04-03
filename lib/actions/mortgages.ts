"use server"

// Demo mode: mutations are no-ops. No database connection required.
import type { MortgageFormValues } from "@/lib/validations/mortgage"

type ActionResult = { success: true; id: string } | { success: false; error: string }

export async function createMortgage(_data: MortgageFormValues): Promise<ActionResult> {
  return { success: true, id: 'demo-mort-new' }
}

export async function updateMortgage(id: string, _data: MortgageFormValues): Promise<ActionResult> {
  return { success: true, id }
}

export async function deleteMortgage(id: string, _propertyId: string): Promise<ActionResult> {
  return { success: true, id }
}
