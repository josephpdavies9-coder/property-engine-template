"use server"

// Demo mode: mutations are no-ops. No database connection required.
import type { ContactFormValues } from "@/lib/validations/contact"

type ActionResult = { success: true; id: string } | { success: false; error: string }

export async function createContact(_data: ContactFormValues, _propertyId?: string): Promise<ActionResult> {
  return { success: true, id: 'demo-contact-new' }
}

export async function updateContact(id: string, _data: ContactFormValues): Promise<ActionResult> {
  return { success: true, id }
}

export async function deleteContact(id: string): Promise<ActionResult> {
  return { success: true, id }
}

export async function unlinkContactFromProperty(_contactId: string, _propertyId: string): Promise<ActionResult> {
  return { success: true, id: _contactId }
}
