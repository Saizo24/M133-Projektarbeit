--user
INSERT INTO users(id, name, password)
VALUES ('b2294ab9-2a61-4407-9a51-965fb5767cae', 'BobRoss', '$2a$10$QQPjRStCBCCy1Qar.SC2uuW91N2i/kWDSS00DpdKFYN..eQNeS.dO')
ON CONFLICT DO NOTHING;

