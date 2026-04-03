"use server"

// Demo mode: mutations are no-ops. No database connection required.
import type { FileRecordFormValues } from "@/lib/validations/file-record"

type ActionResult = { success: true; id: string } | { success: false; error: string }

export async function createFileRecord(_data: FileRecordFormValues): Promise<ActionResult> {
  return { success: true, id: 'demo-file-new' }
}

export async function updateFileRecord(id: string, _data: FileRecordFormValues): Promise<ActionResult> {
  return { success: true, id }
}

export async function deleteFileRecord(id: string, _propertyId: string): Promise<ActionResult> {
  return { success: true, id }
}
