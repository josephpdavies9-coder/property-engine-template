"use server"

// Demo mode: mutations are no-ops. No database connection required.
import type { UtilityFormValues } from "@/lib/validations/utility"

type ActionResult = { success: true; id: string } | { success: false; error: string }

export async function createUtility(_data: UtilityFormValues): Promise<ActionResult> {
  return { success: true, id: 'demo-util-new' }
}

export async function updateUtility(id: string, _data: UtilityFormValues): Promise<ActionResult> {
  return { success: true, id }
}

export async function deleteUtility(id: string, _propertyId: string): Promise<ActionResult> {
  return { success: true, id }
}
