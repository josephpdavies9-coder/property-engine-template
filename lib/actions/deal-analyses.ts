"use server"

// Demo mode: deal analyses are not persisted to a database.
// Saves appear to succeed; data lives in the browser session only (DealAnalyser manages its own state).
import type { DealInputs } from "@/lib/utils/deal-calculator"

export interface SavedDeal {
  id: string
  name: string
  deal_type: string
  inputs: DealInputs
  created_at: string
  updated_at: string
}

export async function listDeals(): Promise<SavedDeal[]> {
  return []
}

export async function saveDeal(
  inputs: DealInputs,
  existingId?: string
): Promise<{ success: true; id: string } | { success: false; error: string }> {
  const id = existingId ?? `demo-deal-${Date.now()}`
  return { success: true, id }
}

export async function deleteDeal(
  _id: string
): Promise<{ success: boolean; error?: string }> {
  return { success: true }
}
