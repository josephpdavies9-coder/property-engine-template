// ── Demo mock data ─────────────────────────────────────────────────────────
// All data in this file is entirely fictional. Used for the public demo only.

import type { Property, PropertyStatus } from '@/lib/types/database.types'
import type { PropertyRow } from '@/components/properties/PropertiesTable'
import type { MortgageRow } from '@/components/mortgages/MortgagesTable'
import type { ComplianceRow } from '@/components/compliance/ComplianceTable'
import type { ContactRow } from '@/components/contacts/ContactsTable'
import type { UtilityRow } from '@/components/utilities/UtilitiesTable'
import type { FileRecordRow } from '@/components/files/FileRecordsTable'
import type { MapProperty } from '@/app/(dashboard)/map/page'

// ── IDs ─────────────────────────────────────────────────────────────────────

export const PROP_IDS = {
  p1: 'demo-prop-0000-0000-0000-000000000001',
  p2: 'demo-prop-0000-0000-0000-000000000002',
  p3: 'demo-prop-0000-0000-0000-000000000003',
  p4: 'demo-prop-0000-0000-0000-000000000004',
  p5: 'demo-prop-0000-0000-0000-000000000005',
}

// ── Properties ───────────────────────────────────────────────────────────────

export const DEMO_PROPERTIES: Property[] = [
  {
    id: PROP_IDS.p1,
    name: 'Flat 3, 14 Maple Avenue',
    address_line_1: '14 Maple Avenue',
    address_line_2: 'Flat 3',
    city: 'Manchester',
    postcode: 'M14 5TH',
    bedrooms: 2,
    property_type: 'flat',
    entity_name: 'Elm Properties Ltd',
    tenure: 'leasehold',
    status: 'let',
    notes: 'Long-term tenant in situ since 2021. Good condition.',
    google_drive_photos_url: null,
    current_value: 185000,
    estimated_monthly_income: 1050,
    created_at: '2024-01-15T09:00:00Z',
    updated_at: '2026-02-10T14:30:00Z',
  },
  {
    id: PROP_IDS.p2,
    name: '22 Victoria Road',
    address_line_1: '22 Victoria Road',
    address_line_2: null,
    city: 'Leeds',
    postcode: 'LS6 1DJ',
    bedrooms: 6,
    property_type: 'hmo',
    entity_name: 'Elm Properties Ltd',
    tenure: 'freehold',
    status: 'let',
    notes: 'Licensed HMO. All 6 rooms occupied. Managed by Sunrise Lettings.',
    google_drive_photos_url: null,
    current_value: 340000,
    estimated_monthly_income: 2700,
    created_at: '2023-08-20T09:00:00Z',
    updated_at: '2026-01-22T11:00:00Z',
  },
  {
    id: PROP_IDS.p3,
    name: '8 Park Grove',
    address_line_1: '8 Park Grove',
    address_line_2: null,
    city: 'Birmingham',
    postcode: 'B17 9BJ',
    bedrooms: 3,
    property_type: 'house',
    entity_name: 'J. Rawlins Personal',
    tenure: 'freehold',
    status: 'let',
    notes: 'BTL. Gas cert due for renewal — chasing landlord certificate.',
    google_drive_photos_url: null,
    current_value: 265000,
    estimated_monthly_income: 1200,
    created_at: '2022-11-05T09:00:00Z',
    updated_at: '2026-03-28T16:00:00Z',
  },
  {
    id: PROP_IDS.p4,
    name: 'Flat 5, 1 Harbour View',
    address_line_1: '1 Harbour View',
    address_line_2: 'Flat 5',
    city: 'Liverpool',
    postcode: 'L3 4BG',
    bedrooms: 1,
    property_type: 'flat',
    entity_name: 'Elm Properties Ltd',
    tenure: 'leasehold',
    status: 'vacant',
    notes: 'Between tenants. Light refresh underway before re-letting.',
    google_drive_photos_url: null,
    current_value: 148000,
    estimated_monthly_income: null,
    created_at: '2024-06-01T09:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: PROP_IDS.p5,
    name: '31 Church Street',
    address_line_1: '31 Church Street',
    address_line_2: null,
    city: 'Sheffield',
    postcode: 'S1 2GJ',
    bedrooms: 4,
    property_type: 'house',
    entity_name: 'J. Rawlins Personal',
    tenure: 'freehold',
    status: 'under_refurb',
    notes: 'Full renovation. New kitchen, bathroom, and roof. Expected completion Q3 2026.',
    google_drive_photos_url: null,
    current_value: 195000,
    estimated_monthly_income: null,
    created_at: '2025-10-01T09:00:00Z',
    updated_at: '2026-04-01T08:00:00Z',
  },
]

// ── Property table rows ───────────────────────────────────────────────────────

export const DEMO_PROPERTY_ROWS: PropertyRow[] = [
  {
    id: PROP_IDS.p1,
    name: 'Flat 3, 14 Maple Avenue',
    address: '14 Maple Avenue, Manchester',
    bedrooms: 2,
    status: 'let',
    entity: 'Elm Properties Ltd',
    mortgage_lender: 'Nationwide',
    next_expiry: '2026-01-01', // EICR expired
  },
  {
    id: PROP_IDS.p2,
    name: '22 Victoria Road',
    address: '22 Victoria Road, Leeds',
    bedrooms: 6,
    status: 'let',
    entity: 'Elm Properties Ltd',
    mortgage_lender: 'NatWest',
    next_expiry: '2026-11-01',
  },
  {
    id: PROP_IDS.p3,
    name: '8 Park Grove',
    address: '8 Park Grove, Birmingham',
    bedrooms: 3,
    status: 'let',
    entity: 'J. Rawlins Personal',
    mortgage_lender: 'Barclays',
    next_expiry: '2026-04-15', // gas cert expiring in 12 days
  },
  {
    id: PROP_IDS.p4,
    name: 'Flat 5, 1 Harbour View',
    address: '1 Harbour View, Liverpool',
    bedrooms: 1,
    status: 'vacant',
    entity: 'Elm Properties Ltd',
    mortgage_lender: null,
    next_expiry: '2026-09-01',
  },
  {
    id: PROP_IDS.p5,
    name: '31 Church Street',
    address: '31 Church Street, Sheffield',
    bedrooms: 4,
    status: 'under_refurb',
    entity: 'J. Rawlins Personal',
    mortgage_lender: 'Halifax',
    next_expiry: null,
  },
]

// ── Mortgages ─────────────────────────────────────────────────────────────────

export const DEMO_MORTGAGE_ROWS: MortgageRow[] = [
  {
    id: 'demo-mort-0001',
    property_id: PROP_IDS.p3,
    property_name: '8 Park Grove',
    lender_name: 'Barclays',
    product_name: '2-Year Fixed 5.25%',
    fixed_start_date: '2024-06-01',
    fixed_end_date: '2026-06-01',
    monthly_payment: 975,
    loan_balance: 198750,
    review_date: '2026-05-01',
  },
  {
    id: 'demo-mort-0002',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    lender_name: 'Nationwide',
    product_name: '5-Year Fixed 4.5%',
    fixed_start_date: '2021-08-15',
    fixed_end_date: '2026-08-15',
    monthly_payment: 780,
    loan_balance: 138750,
    review_date: '2026-07-01',
  },
  {
    id: 'demo-mort-0003',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    lender_name: 'NatWest',
    product_name: '5-Year Fixed 3.9%',
    fixed_start_date: '2022-03-01',
    fixed_end_date: '2027-03-01',
    monthly_payment: 1280,
    loan_balance: 255000,
    review_date: null,
  },
  {
    id: 'demo-mort-0004',
    property_id: PROP_IDS.p5,
    property_name: '31 Church Street',
    lender_name: 'Halifax',
    product_name: '5-Year Fixed 4.8%',
    fixed_start_date: '2025-10-01',
    fixed_end_date: '2030-10-01',
    monthly_payment: 650,
    loan_balance: 146250,
    review_date: null,
  },
]

// ── Compliance ────────────────────────────────────────────────────────────────

export const DEMO_COMPLIANCE_ROWS: ComplianceRow[] = [
  // Expired
  {
    id: 'demo-comp-0001',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    document_type: 'eicr',
    issue_date: '2021-01-01',
    expiry_date: '2026-01-01',
    file_url: null,
  },
  // Expiring very soon (12 days)
  {
    id: 'demo-comp-0002',
    property_id: PROP_IDS.p3,
    property_name: '8 Park Grove',
    document_type: 'gas_safety_certificate',
    issue_date: '2025-04-15',
    expiry_date: '2026-04-15',
    file_url: null,
  },
  // Expiring in ~4 months
  {
    id: 'demo-comp-0003',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    document_type: 'gas_safety_certificate',
    issue_date: '2025-08-01',
    expiry_date: '2026-08-01',
    file_url: null,
  },
  // Valid
  {
    id: 'demo-comp-0004',
    property_id: PROP_IDS.p4,
    property_name: 'Flat 5, 1 Harbour View',
    document_type: 'gas_safety_certificate',
    issue_date: '2025-09-01',
    expiry_date: '2026-09-01',
    file_url: null,
  },
  {
    id: 'demo-comp-0005',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    document_type: 'gas_safety_certificate',
    issue_date: '2025-11-01',
    expiry_date: '2026-11-01',
    file_url: null,
  },
  {
    id: 'demo-comp-0006',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    document_type: 'hmo_licence',
    issue_date: '2022-07-15',
    expiry_date: '2027-07-15',
    file_url: null,
  },
  {
    id: 'demo-comp-0007',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    document_type: 'eicr',
    issue_date: '2022-06-01',
    expiry_date: '2027-06-01',
    file_url: null,
  },
  {
    id: 'demo-comp-0008',
    property_id: PROP_IDS.p3,
    property_name: '8 Park Grove',
    document_type: 'eicr',
    issue_date: '2023-03-01',
    expiry_date: '2028-03-01',
    file_url: null,
  },
  {
    id: 'demo-comp-0009',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    document_type: 'epc',
    issue_date: '2022-05-01',
    expiry_date: '2032-05-01',
    file_url: null,
  },
  {
    id: 'demo-comp-0010',
    property_id: PROP_IDS.p3,
    property_name: '8 Park Grove',
    document_type: 'epc',
    issue_date: '2021-06-01',
    expiry_date: '2031-06-01',
    file_url: null,
  },
  {
    id: 'demo-comp-0011',
    property_id: PROP_IDS.p4,
    property_name: 'Flat 5, 1 Harbour View',
    document_type: 'epc',
    issue_date: '2023-01-01',
    expiry_date: '2033-01-01',
    file_url: null,
  },
]

// Sorted by expiry ascending (nulls last) — matches the page query order
export const DEMO_COMPLIANCE_SORTED = [...DEMO_COMPLIANCE_ROWS].sort((a, b) => {
  if (!a.expiry_date && !b.expiry_date) return 0
  if (!a.expiry_date) return 1
  if (!b.expiry_date) return -1
  return a.expiry_date.localeCompare(b.expiry_date)
})

// ── Contacts ──────────────────────────────────────────────────────────────────

export const DEMO_CONTACT_ROWS: ContactRow[] = [
  {
    id: 'demo-contact-0001',
    full_name: 'Sarah Mitchell',
    company_name: null,
    category: 'tenant',
    phone: '07700 900001',
    email: 'sarah.mitchell@example.com',
    property_count: 1,
  },
  {
    id: 'demo-contact-0002',
    full_name: 'James Fletcher',
    company_name: null,
    category: 'tenant',
    phone: '07700 900002',
    email: 'james.fletcher@example.com',
    property_count: 1,
  },
  {
    id: 'demo-contact-0003',
    full_name: 'Ahmed Al-Rashid',
    company_name: null,
    category: 'tenant',
    phone: '07700 900003',
    email: null,
    property_count: 1,
  },
  {
    id: 'demo-contact-0004',
    full_name: 'Priya Sharma',
    company_name: null,
    category: 'tenant',
    phone: '07700 900004',
    email: 'priya.sharma@example.com',
    property_count: 1,
  },
  {
    id: 'demo-contact-0005',
    full_name: 'Matt Cooper',
    company_name: 'Cooper Plumbing & Heating',
    category: 'plumber',
    phone: '07700 900005',
    email: 'matt@cooperplumbing.example.com',
    property_count: 4,
  },
  {
    id: 'demo-contact-0006',
    full_name: 'Dave Hinton',
    company_name: 'DH Electrical',
    category: 'electrician',
    phone: '07700 900006',
    email: 'dave@dhelectrical.example.com',
    property_count: 3,
  },
  {
    id: 'demo-contact-0007',
    full_name: 'Sunrise Lettings',
    company_name: 'Sunrise Lettings Ltd',
    category: 'letting_agent',
    phone: '0113 900 0007',
    email: 'info@sunriselettings.example.com',
    property_count: 2,
  },
  {
    id: 'demo-contact-0008',
    full_name: 'Fiona Blake',
    company_name: 'Blake Mortgage Solutions',
    category: 'mortgage_broker',
    phone: '07700 900008',
    email: 'fiona@blakemortgages.example.com',
    property_count: 0,
  },
]

// ── Utilities ─────────────────────────────────────────────────────────────────

export const DEMO_UTILITY_ROWS: UtilityRow[] = [
  {
    id: 'demo-util-0001',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    utility_type: 'gas',
    supplier_name: 'British Gas',
    account_number: 'BG-443921',
    login_url: null,
    billing_name: 'Elm Properties Ltd',
    username: null,
  },
  {
    id: 'demo-util-0002',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    utility_type: 'electric',
    supplier_name: 'EDF Energy',
    account_number: 'EDF-7821045',
    login_url: null,
    billing_name: 'Elm Properties Ltd',
    username: null,
  },
  {
    id: 'demo-util-0003',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    utility_type: 'broadband',
    supplier_name: 'BT Broadband',
    account_number: null,
    login_url: null,
    billing_name: 'Sarah Mitchell',
    username: null,
  },
  {
    id: 'demo-util-0004',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    utility_type: 'gas',
    supplier_name: 'Octopus Energy',
    account_number: 'OCT-A-2198834',
    login_url: null,
    billing_name: 'Elm Properties Ltd',
    username: 'hmo22victoria',
  },
  {
    id: 'demo-util-0005',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    utility_type: 'electric',
    supplier_name: 'Octopus Energy',
    account_number: 'OCT-A-2198835',
    login_url: null,
    billing_name: 'Elm Properties Ltd',
    username: 'hmo22victoria',
  },
  {
    id: 'demo-util-0006',
    property_id: PROP_IDS.p3,
    property_name: '8 Park Grove',
    utility_type: 'gas',
    supplier_name: 'E.ON Next',
    account_number: 'EON-998812',
    login_url: null,
    billing_name: 'J. Rawlins Personal',
    username: null,
  },
  {
    id: 'demo-util-0007',
    property_id: PROP_IDS.p3,
    property_name: '8 Park Grove',
    utility_type: 'electric',
    supplier_name: 'E.ON Next',
    account_number: 'EON-998813',
    login_url: null,
    billing_name: 'J. Rawlins Personal',
    username: null,
  },
]

// ── Files ─────────────────────────────────────────────────────────────────────

export const DEMO_FILE_ROWS: FileRecordRow[] = [
  {
    id: 'demo-file-0001',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    file_name: 'Tenancy Agreement — Sarah Mitchell 2021.pdf',
    category: 'tenancy',
    file_url: null,
    description: 'AST signed Jan 2021, rolling since Jan 2022',
  },
  {
    id: 'demo-file-0002',
    property_id: PROP_IDS.p1,
    property_name: 'Flat 3, 14 Maple Avenue',
    file_name: 'Mortgage Offer — Nationwide 2021.pdf',
    category: 'mortgage_offer',
    file_url: null,
    description: '5-year fixed 4.5%',
  },
  {
    id: 'demo-file-0003',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    file_name: 'HMO Licence 2022—2027.pdf',
    category: 'legal',
    file_url: null,
    description: '6-person HMO licence issued by Leeds City Council',
  },
  {
    id: 'demo-file-0004',
    property_id: PROP_IDS.p2,
    property_name: '22 Victoria Road',
    file_name: 'Floor Plan — 22 Victoria Road.pdf',
    category: 'photos',
    file_url: null,
    description: 'Architectural floor plan for HMO licence application',
  },
  {
    id: 'demo-file-0005',
    property_id: PROP_IDS.p3,
    property_name: '8 Park Grove',
    file_name: 'Building Survey Report — 8 Park Grove.pdf',
    category: 'miscellaneous',
    file_url: null,
    description: 'Full structural survey prior to purchase',
  },
  {
    id: 'demo-file-0006',
    property_id: PROP_IDS.p5,
    property_name: '31 Church Street',
    file_name: 'Refurb Specification — 31 Church Street.pdf',
    category: 'refurb',
    file_url: null,
    description: 'Scope of works and cost breakdown',
  },
]

// ── Map properties ────────────────────────────────────────────────────────────

export const DEMO_MAP_PROPERTIES: MapProperty[] = [
  { id: PROP_IDS.p1, name: 'Flat 3, 14 Maple Avenue', status: 'let',          address_line_1: '14 Maple Avenue',  city: 'Manchester', latitude: 53.4453, longitude: -2.2175 },
  { id: PROP_IDS.p2, name: '22 Victoria Road',         status: 'let',          address_line_1: '22 Victoria Road',  city: 'Leeds',       latitude: 53.8198, longitude: -1.5412 },
  { id: PROP_IDS.p3, name: '8 Park Grove',             status: 'let',          address_line_1: '8 Park Grove',      city: 'Birmingham',  latitude: 52.4774, longitude: -1.9317 },
  { id: PROP_IDS.p4, name: 'Flat 5, 1 Harbour View',  status: 'vacant',       address_line_1: '1 Harbour View',    city: 'Liverpool',   latitude: 53.4005, longitude: -2.9831 },
  { id: PROP_IDS.p5, name: '31 Church Street',         status: 'under_refurb', address_line_1: '31 Church Street',  city: 'Sheffield',   latitude: 53.3828, longitude: -1.4702 },
]

// ── Ownership ─────────────────────────────────────────────────────────────────

export const DEMO_OWNERSHIP: { id: string; name: string; entity_name: string | null; status: string }[] = [
  { id: PROP_IDS.p1, name: 'Flat 3, 14 Maple Avenue',  entity_name: 'Elm Properties Ltd',   status: 'let' },
  { id: PROP_IDS.p2, name: '22 Victoria Road',          entity_name: 'Elm Properties Ltd',   status: 'let' },
  { id: PROP_IDS.p4, name: 'Flat 5, 1 Harbour View',   entity_name: 'Elm Properties Ltd',   status: 'vacant' },
  { id: PROP_IDS.p3, name: '8 Park Grove',              entity_name: 'J. Rawlins Personal',  status: 'let' },
  { id: PROP_IDS.p5, name: '31 Church Street',          entity_name: 'J. Rawlins Personal',  status: 'under_refurb' },
]

// ── Dashboard aggregates ──────────────────────────────────────────────────────

export const DEMO_DASHBOARD = {
  // Property status counts
  total: 5,
  letCount: 3,
  vacantCount: 1,
  refurbCount: 1,

  // Portfolio financials
  portfolioValue: 1133000,
  totalDebt: 738750,
  portfolioEquity: 394250,
  portfolioLtv: 65,
  monthlyMortgageCost: 3685,
  monthlyIncome: 4950,
  monthlyCashflow: 1265,
  grossYield: 5.2,

  // Compliance health
  totalDocs: DEMO_COMPLIANCE_ROWS.length,
  expiredDocs: 1, // EICR on p1

  // Mortgage alerts (fixed_end within 6 months from today 2026-04-03)
  mortgageAlerts: [
    { kind: 'mortgage' as const, date: '2026-06-01', id: 'demo-mort-0001', propertyName: '8 Park Grove',              lender: 'Barclays',    isReview: false },
    { kind: 'mortgage' as const, date: '2026-07-01', id: 'demo-mort-0001', propertyName: '8 Park Grove',              lender: 'Barclays',    isReview: true },
    { kind: 'mortgage' as const, date: '2026-07-01', id: 'demo-mort-0002', propertyName: 'Flat 3, 14 Maple Avenue',   lender: 'Nationwide',  isReview: true },
    { kind: 'mortgage' as const, date: '2026-08-15', id: 'demo-mort-0002', propertyName: 'Flat 3, 14 Maple Avenue',   lender: 'Nationwide',  isReview: false },
  ],

  // Compliance alerts (expiring within 60 days from today 2026-04-03 = before 2026-06-02)
  complianceAlerts: [
    { kind: 'compliance' as const, date: '2026-01-01', id: 'demo-comp-0001', propertyName: 'Flat 3, 14 Maple Avenue', docType: 'eicr' as const,                    isReview: false },
    { kind: 'compliance' as const, date: '2026-04-15', id: 'demo-comp-0002', propertyName: '8 Park Grove',            docType: 'gas_safety_certificate' as const,   isReview: false },
  ],
}
