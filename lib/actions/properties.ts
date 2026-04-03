"use server"

// Demo mode: mutations are no-ops. No database connection required.
import type { PropertyFormValues } from "@/lib/validations/property"

type ActionResult = { success: true; id: string } | { success: false; error: string }

export async function createProperty(_data: PropertyFormValues): Promise<ActionResult> {
  return { success: true, id: 'demo-prop-new' }
}

export async function updateProperty(id: string, _data: PropertyFormValues): Promise<ActionResult> {
  return { success: true, id }
}

export async function deleteProperty(id: string): Promise<ActionResult> {
  return { success: true, id }
}
