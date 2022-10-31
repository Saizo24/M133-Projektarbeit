INSERT INTO users(user_id, user_name, user_pw)
VALUES (1, 'Bob_Ross', 'theRossinator')
ON CONFLICT DO NOTHING;

INSERT INTO role(role_id, role_name)
VALUES (1, 'USER')
ON CONFLICT DO NOTHING;

INSERT INTO authority(authority_id, authority_name)
VALUES (1, 'WRITE')
ON CONFLICT DO NOTHING;

INSERT INTO authority(authority_id, authority_name)
VALUES (2, 'READ')
ON CONFLICT DO NOTHING;