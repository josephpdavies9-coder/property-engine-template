-- ============================================================
-- Property Engine — Demo Seed Data
-- ============================================================
-- Run this in your demo Supabase project's SQL editor AFTER
-- running schema.sql. This populates fictional UK properties
-- and disables RLS so the public demo works without login.
-- ============================================================


-- ============================================================
-- Add columns present in the app but not in the base schema
-- ============================================================

alter table properties
  add column if not exists current_value             numeric(12,2),
  add column if not exists estimated_monthly_income  numeric(10,2),
  add column if not exists latitude                  double precision,
  add column if not exists longitude                 double precision;


-- ============================================================
-- Disable RLS (demo has no auth — all data is fictional)
-- ============================================================

alter table properties           disable row level security;
alter table mortgages            disable row level security;
alter table utilities            disable row level security;
alter table utility_credentials  disable row level security;
alter table contacts             disable row level security;
alter table property_contacts    disable row level security;
alter table compliance_documents disable row level security;
alter table file_records         disable row level security;


-- ============================================================
-- Properties
-- ============================================================

insert into properties (
  id, name, address_line_1, address_line_2, city, postcode,
  bedrooms, property_type, entity_name, tenure, status, notes,
  current_value, estimated_monthly_income, latitude, longitude,
  created_at, updated_at
) values
  (
    '00000000-0000-0000-0000-000000000001',
    'Flat 3, 14 Maple Avenue', '14 Maple Avenue', 'Flat 3',
    'Manchester', 'M14 5TH', 2, 'flat', 'Elm Properties Ltd', 'leasehold', 'let',
    'Long-term tenant in situ since 2021. Good condition.',
    185000, 1050, 53.4453, -2.2175,
    '2024-01-15T09:00:00Z', '2026-02-10T14:30:00Z'
  ),
  (
    '00000000-0000-0000-0000-000000000002',
    '22 Victoria Road', '22 Victoria Road', null,
    'Leeds', 'LS6 1DJ', 6, 'hmo', 'Elm Properties Ltd', 'freehold', 'let',
    'Licensed HMO. All 6 rooms occupied. Managed by Sunrise Lettings.',
    340000, 2700, 53.8198, -1.5412,
    '2023-08-20T09:00:00Z', '2026-01-22T11:00:00Z'
  ),
  (
    '00000000-0000-0000-0000-000000000003',
    '8 Park Grove', '8 Park Grove', null,
    'Birmingham', 'B17 9BJ', 3, 'house', 'J. Rawlins Personal', 'freehold', 'let',
    'BTL. Gas cert due for renewal — chasing landlord certificate.',
    265000, 1200, 52.4774, -1.9317,
    '2022-11-05T09:00:00Z', '2026-03-28T16:00:00Z'
  ),
  (
    '00000000-0000-0000-0000-000000000004',
    'Flat 5, 1 Harbour View', '1 Harbour View', 'Flat 5',
    'Liverpool', 'L3 4BG', 1, 'flat', 'Elm Properties Ltd', 'leasehold', 'vacant',
    'Between tenants. Light refresh underway before re-letting.',
    148000, null, 53.4005, -2.9831,
    '2024-06-01T09:00:00Z', '2026-03-15T10:00:00Z'
  ),
  (
    '00000000-0000-0000-0000-000000000005',
    '31 Church Street', '31 Church Street', null,
    'Sheffield', 'S1 2GJ', 4, 'house', 'J. Rawlins Personal', 'freehold', 'under_refurb',
    'Full renovation. New kitchen, bathroom, and roof. Expected completion Q3 2026.',
    195000, null, 53.3828, -1.4702,
    '2025-10-01T09:00:00Z', '2026-04-01T08:00:00Z'
  );


-- ============================================================
-- Mortgages
-- ============================================================

insert into mortgages (
  id, property_id, lender_name, product_name,
  fixed_start_date, fixed_end_date, monthly_payment, loan_balance, review_date
) values
  (
    '00000000-0000-0000-0001-000000000001',
    '00000000-0000-0000-0000-000000000003',
    'Barclays', '2-Year Fixed 5.25%',
    '2024-06-01', '2026-06-01', 975, 198750, '2026-05-01'
  ),
  (
    '00000000-0000-0000-0001-000000000002',
    '00000000-0000-0000-0000-000000000001',
    'Nationwide', '5-Year Fixed 4.5%',
    '2021-08-15', '2026-08-15', 780, 138750, '2026-07-01'
  ),
  (
    '00000000-0000-0000-0001-000000000003',
    '00000000-0000-0000-0000-000000000002',
    'NatWest', '5-Year Fixed 3.9%',
    '2022-03-01', '2027-03-01', 1280, 255000, null
  ),
  (
    '00000000-0000-0000-0001-000000000004',
    '00000000-0000-0000-0000-000000000005',
    'Halifax', '5-Year Fixed 4.8%',
    '2025-10-01', '2030-10-01', 650, 146250, null
  );


-- ============================================================
-- Compliance Documents
-- ============================================================

insert into compliance_documents (
  id, property_id, document_type, issue_date, expiry_date, file_url
) values
  ('00000000-0000-0000-0002-000000000001', '00000000-0000-0000-0000-000000000001', 'eicr',                   '2021-01-01', '2026-01-01', null),
  ('00000000-0000-0000-0002-000000000002', '00000000-0000-0000-0000-000000000003', 'gas_safety_certificate', '2025-04-15', '2026-04-15', null),
  ('00000000-0000-0000-0002-000000000003', '00000000-0000-0000-0000-000000000001', 'gas_safety_certificate', '2025-08-01', '2026-08-01', null),
  ('00000000-0000-0000-0002-000000000004', '00000000-0000-0000-0000-000000000004', 'gas_safety_certificate', '2025-09-01', '2026-09-01', null),
  ('00000000-0000-0000-0002-000000000005', '00000000-0000-0000-0000-000000000002', 'gas_safety_certificate', '2025-11-01', '2026-11-01', null),
  ('00000000-0000-0000-0002-000000000006', '00000000-0000-0000-0000-000000000002', 'hmo_licence',            '2022-07-15', '2027-07-15', null),
  ('00000000-0000-0000-0002-000000000007', '00000000-0000-0000-0000-000000000002', 'eicr',                   '2022-06-01', '2027-06-01', null),
  ('00000000-0000-0000-0002-000000000008', '00000000-0000-0000-0000-000000000003', 'eicr',                   '2023-03-01', '2028-03-01', null),
  ('00000000-0000-0000-0002-000000000009', '00000000-0000-0000-0000-000000000001', 'epc',                    '2022-05-01', '2032-05-01', null),
  ('00000000-0000-0000-0002-000000000010', '00000000-0000-0000-0000-000000000003', 'epc',                    '2021-06-01', '2031-06-01', null),
  ('00000000-0000-0000-0002-000000000011', '00000000-0000-0000-0000-000000000004', 'epc',                    '2023-01-01', '2033-01-01', null);


-- ============================================================
-- Contacts
-- ============================================================

insert into contacts (id, full_name, company_name, category, phone, email) values
  ('00000000-0000-0000-0003-000000000001', 'Sarah Mitchell',   null,                        'tenant',          '07700 900001', 'sarah.mitchell@example.com'),
  ('00000000-0000-0000-0003-000000000002', 'James Fletcher',   null,                        'tenant',          '07700 900002', 'james.fletcher@example.com'),
  ('00000000-0000-0000-0003-000000000003', 'Ahmed Al-Rashid',  null,                        'tenant',          '07700 900003', null),
  ('00000000-0000-0000-0003-000000000004', 'Priya Sharma',     null,                        'tenant',          '07700 900004', 'priya.sharma@example.com'),
  ('00000000-0000-0000-0003-000000000005', 'Matt Cooper',      'Cooper Plumbing & Heating', 'plumber',         '07700 900005', 'matt@cooperplumbing.example.com'),
  ('00000000-0000-0000-0003-000000000006', 'Dave Hinton',      'DH Electrical',             'electrician',     '07700 900006', 'dave@dhelectrical.example.com'),
  ('00000000-0000-0000-0003-000000000007', 'Sunrise Lettings', 'Sunrise Lettings Ltd',      'letting_agent',   '0113 900 0007', 'info@sunriselettings.example.com'),
  ('00000000-0000-0000-0003-000000000008', 'Fiona Blake',      'Blake Mortgage Solutions',  'mortgage_broker', '07700 900008', 'fiona@blakemortgages.example.com');


-- ============================================================
-- Property Contacts (junction)
-- ============================================================

insert into property_contacts (property_id, contact_id) values
  -- Tenants
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0003-000000000001'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0003-000000000002'),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0003-000000000003'),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0003-000000000004'),
  -- Matt Cooper (plumber) → 4 properties
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0003-000000000005'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0003-000000000005'),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0003-000000000005'),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0003-000000000005'),
  -- Dave Hinton (electrician) → 3 properties
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0003-000000000006'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0003-000000000006'),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0003-000000000006'),
  -- Sunrise Lettings (letting agent) → 2 properties
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0003-000000000007'),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0003-000000000007');


-- ============================================================
-- Utilities
-- ============================================================

insert into utilities (id, property_id, utility_type, supplier_name, account_number, login_url, billing_name) values
  ('00000000-0000-0000-0004-000000000001', '00000000-0000-0000-0000-000000000001', 'gas',      'British Gas',    'BG-443921',     null, 'Elm Properties Ltd'),
  ('00000000-0000-0000-0004-000000000002', '00000000-0000-0000-0000-000000000001', 'electric', 'EDF Energy',     'EDF-7821045',   null, 'Elm Properties Ltd'),
  ('00000000-0000-0000-0004-000000000003', '00000000-0000-0000-0000-000000000001', 'broadband','BT Broadband',   null,            null, 'Sarah Mitchell'),
  ('00000000-0000-0000-0004-000000000004', '00000000-0000-0000-0000-000000000002', 'gas',      'Octopus Energy', 'OCT-A-2198834', null, 'Elm Properties Ltd'),
  ('00000000-0000-0000-0004-000000000005', '00000000-0000-0000-0000-000000000002', 'electric', 'Octopus Energy', 'OCT-A-2198835', null, 'Elm Properties Ltd'),
  ('00000000-0000-0000-0004-000000000006', '00000000-0000-0000-0000-000000000003', 'gas',      'E.ON Next',      'EON-998812',    null, 'J. Rawlins Personal'),
  ('00000000-0000-0000-0004-000000000007', '00000000-0000-0000-0000-000000000003', 'electric', 'E.ON Next',      'EON-998813',    null, 'J. Rawlins Personal');


-- ============================================================
-- File Records
-- ============================================================

insert into file_records (id, property_id, file_name, category, file_url, description) values
  ('00000000-0000-0000-0005-000000000001', '00000000-0000-0000-0000-000000000001', 'Tenancy Agreement — Sarah Mitchell 2021.pdf', 'legal',          null, 'AST signed Jan 2021, rolling since Jan 2022'),
  ('00000000-0000-0000-0005-000000000002', '00000000-0000-0000-0000-000000000001', 'Mortgage Offer — Nationwide 2021.pdf',        'mortgage_offer', null, '5-year fixed 4.5%'),
  ('00000000-0000-0000-0005-000000000003', '00000000-0000-0000-0000-000000000002', 'HMO Licence 2022—2027.pdf',                   'legal',          null, '6-person HMO licence issued by Leeds City Council'),
  ('00000000-0000-0000-0005-000000000004', '00000000-0000-0000-0000-000000000002', 'Floor Plan — 22 Victoria Road.pdf',           'photos',         null, 'Architectural floor plan for HMO licence application'),
  ('00000000-0000-0000-0005-000000000005', '00000000-0000-0000-0000-000000000003', 'Building Survey Report — 8 Park Grove.pdf',   'miscellaneous',  null, 'Full structural survey prior to purchase'),
  ('00000000-0000-0000-0005-000000000006', '00000000-0000-0000-0000-000000000005', 'Refurb Specification — 31 Church Street.pdf', 'refurb',         null, 'Scope of works and cost breakdown');
