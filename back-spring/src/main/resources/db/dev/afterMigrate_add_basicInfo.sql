INSERT INTO users(user_name, user_pw)
VALUES ('Bob_Ross', 'theRossinator')
ON CONFLICT DO NOTHING;

INSERT INTO role(role_name)
VALUES ('USER')
ON CONFLICT DO NOTHING;

INSERT INTO authority(authority_name)
VALUES ('WRITE')
ON CONFLICT DO NOTHING;

INSERT INTO authority(authority_name)
VALUES ('READ')
ON CONFLICT DO NOTHING;