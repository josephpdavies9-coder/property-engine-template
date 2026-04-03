"use server"

// Demo mode: mutations are no-ops. No database connection required.
import type { ComplianceFormValues } from "@/lib/validations/compliance"

type ActionResult = { success: true; id: string } | { success: false; error: string }

export async function createComplianceDoc(_data: ComplianceFormValues): Promise<ActionResult> {
  return { success: true, id: 'demo-comp-new' }
}

export async function updateComplianceDoc(id: string, _data: ComplianceFormValues): Promise<ActionResult> {
  return { success: true, id }
}

export async function deleteComplianceDoc(id: string, _propertyId: string): Promise<ActionResult> {
  return { success: true, id }
}
