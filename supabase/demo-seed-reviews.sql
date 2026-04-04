-- ============================================================
-- Property Engine Demo — Reviews Seed
-- ============================================================
-- Run this in the DEMO Supabase project's SQL editor
-- (after demo-seed.sql has already been run)
-- ============================================================

-- Create the property_reviews table (not in base schema.sql)
create table if not exists property_reviews (
  id               uuid primary key default gen_random_uuid(),
  property_id      uuid not null references properties (id) on delete cascade,
  platform         text not null check (platform in ('airbnb', 'booking_com')),
  listing_url      text,
  overall_score    numeric,
  total_reviews    integer,
  category_scores  jsonb,
  raw_reviews      jsonb,
  synthesis        text,   -- JSON stored as text
  last_fetched_at  timestamptz,
  created_at       timestamptz not null default now()
);

-- Disable RLS for demo
alter table property_reviews disable row level security;

-- ============================================================
-- Reviews: Flat 3, 14 Maple Avenue — Airbnb
-- ============================================================

insert into property_reviews (
  id, property_id, platform, listing_url,
  overall_score, total_reviews, category_scores,
  raw_reviews, synthesis, last_fetched_at
) values (
  '00000000-0000-0000-0006-000000000001',
  '00000000-0000-0000-0000-000000000001',
  'airbnb',
  null,
  4.82,
  47,
  '{"cleanliness": 4.9, "accuracy": 4.8, "location": 4.7, "value": 4.8}',
  '[
    {"reviewer": "Sophie L.", "date": "March 2026", "rating": 5, "country": "United Kingdom", "text": "Lovely flat, spotlessly clean and exactly as described. The neighbourhood is quiet and the commute into the city was easy. Would absolutely stay again.", "negative": false},
    {"reviewer": "Marcus B.", "date": "February 2026", "rating": 5, "country": "Germany", "text": "Brilliant stay. Very comfortable bed, great shower, and plenty of kitchen equipment. Communication was fast and helpful.", "negative": false},
    {"reviewer": "Priya T.", "date": "January 2026", "rating": 4, "country": "United Kingdom", "text": "Really nice flat in a good location. Slight smell from the boiler room on arrival but it cleared quickly. Everything else was perfect.", "negative": false},
    {"reviewer": "Daniel K.", "date": "December 2025", "rating": 5, "country": "Australia", "text": "Perfect base for our Manchester trip. Immaculate, warm and cosy. Highly recommend.", "negative": false},
    {"reviewer": "Fatima A.", "date": "November 2025", "rating": 3, "country": "United Arab Emirates", "text": "The flat itself is nice but the Wi-Fi kept dropping throughout the stay. Not ideal when working remotely. Worth flagging to the host.", "negative": true}
  ]',
  '{"themes": [{"type": "positive", "title": "Cleanliness praised consistently", "detail": "Guests across all stays rate the flat spotlessly clean — a recurring highlight in nearly every review."}, {"type": "positive", "title": "Accurate listing and easy communication", "detail": "Multiple guests noted the listing matches reality and the host responds quickly to messages."}, {"type": "warning", "title": "Wi-Fi reliability issues", "detail": "At least two guests flagged broadband dropping during their stay — one was working remotely and found it disruptive."}], "action_points": [{"priority": "high", "text": "Upgrade broadband to a faster, more stable package — current connection is causing guest dissatisfaction."}, {"priority": "medium", "text": "Investigate occasional boiler room smell reported on arrival — may need a service."}, {"priority": "low", "text": "Add a welcome card with the Wi-Fi password and a few local restaurant recommendations."}]}',
  '2026-04-01T10:00:00Z'
);

-- ============================================================
-- Reviews: Flat 5, 1 Harbour View — Booking.com
-- ============================================================

insert into property_reviews (
  id, property_id, platform, listing_url,
  overall_score, total_reviews, category_scores,
  raw_reviews, synthesis, last_fetched_at
) values (
  '00000000-0000-0000-0006-000000000002',
  '00000000-0000-0000-0000-000000000004',
  'booking_com',
  null,
  8.6,
  31,
  '{"cleanliness": 8.9, "comfort": 8.5, "location": 9.1, "value": 8.3}',
  '[
    {"reviewer": "James W.", "date": "February 2026", "rating": 9, "country": "United Kingdom", "text": "Superb views over the waterfront. The flat is modern, well-equipped, and in a fantastic location. Will definitely return.", "negative": false},
    {"reviewer": "Annika S.", "date": "January 2026", "rating": 10, "country": "Sweden", "text": "Absolutely perfect stay in Liverpool. The flat is stunning and the harbour views at night are incredible. Top marks.", "negative": false},
    {"reviewer": "Roberto M.", "date": "December 2025", "rating": 8, "country": "Italy", "text": "Very good flat overall. Location is excellent for the Albert Dock. Parking was a bit confusing but the host sorted it quickly.", "negative": false},
    {"reviewer": "Claire H.", "date": "November 2025", "rating": 7, "country": "United Kingdom", "text": "Nice flat but the heating took a while to kick in on arrival. Once warm, very comfortable. The bed is excellent.", "negative": false},
    {"reviewer": "Yusuf O.", "date": "October 2025", "rating": 6, "country": "Nigeria", "text": "Good location but the flat felt a bit dated compared to the photos. The kitchen extractor fan was very noisy. Location saves it.", "negative": true}
  ]',
  '{"themes": [{"type": "positive", "title": "Outstanding waterfront location", "detail": "The Albert Dock location is the standout feature — guests rate it 9.1 and mention it in nearly every review."}, {"type": "positive", "title": "Modern and well-equipped", "detail": "The majority of guests praise the modern interior and well-stocked kitchen."}, {"type": "warning", "title": "Heating slow to warm on arrival", "detail": "Two guests noted the flat was cold when they arrived, suggesting the heating may need a timer or pre-heat option."}, {"type": "negative", "title": "Kitchen extractor fan noise", "detail": "One guest flagged the extractor fan as excessively noisy — worth inspecting before next let."}], "action_points": [{"priority": "high", "text": "Inspect and replace the kitchen extractor fan — noise is affecting guest experience."}, {"priority": "high", "text": "Set the heating to come on 1 hour before guest check-in time."}, {"priority": "medium", "text": "Clarify parking instructions in the welcome guide — current info is causing confusion on arrival."}, {"priority": "low", "text": "Update listing photos to better reflect the current interior styling."}]}',
  '2026-04-02T14:00:00Z'
);
