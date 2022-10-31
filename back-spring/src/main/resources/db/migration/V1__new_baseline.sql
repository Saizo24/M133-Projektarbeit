-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id          varchar(255) NOT NULL,
    name        varchar(255) NOT NULL,
    password     varchar(255) NOT NULL,
    CONSTRAINT  pk_users PRIMARY KEY (id)
);


-- public."role" definition

-- Drop table

-- DROP TABLE public.role;

CREATE TABLE public.role
(
    id          varchar(255) NOT NULL,
    role_name   varchar(255) NULL,
    CONSTRAINT  pk_role PRIMARY KEY (id)
);


-- public.authority definition

-- Drop table

-- DROP TABLE public.authority;

CREATE TABLE public.authority
(
    id              varchar(255) NOT NULL,
    authority_name  varchar(255) NULL,
    CONSTRAINT      pk_authority PRIMARY KEY (id)
);


-- public.user_role definition

-- Drop table

-- DROP TABLE public.user_role;

CREATE TABLE public.user_role
(
    id_user     varchar(255) NOT NULL,
    id_role     varchar(255) NOT NULL,
    CONSTRAINT  pk_user_role PRIMARY KEY (id_user, id_role),
    CONSTRAINT  fk_role FOREIGN KEY (id_role) REFERENCES public."role" (id),
    CONSTRAINT  fk_user FOREIGN KEY (id_user) REFERENCES public.users (id)
);


-- public.role_authority definition

-- Drop table

-- DROP TABLE public.role_authority;

CREATE TABLE public.role_authority
(
    id_role         varchar(255) NOT NULL,
    id_authority    varchar(255) NOT NULL,
    CONSTRAINT      pk_role_authority PRIMARY KEY (id_role, id_authority),
    CONSTRAINT      fk_role FOREIGN KEY (id_role) REFERENCES public."role" (id),
    CONSTRAINT      fk_authority FOREIGN KEY (id_authority) REFERENCES public.authority (id)
);


-- public.picture definition

-- Drop table

-- DROP TABLE public.picture;

CREATE TABLE public.picture
(
    id          varchar(255) NOT NULL,
    base_url    varchar(255) NOT NULL,
    title       varchar(255) NULL,
    id_users    varchar(255) NULL,
    CONSTRAINT  pk_picture PRIMARY KEY (id),
    CONSTRAINT  fk_user FOREIGN KEY (id_users) REFERENCES public.users (id)

);


-- public.user_picture definition

-- Drop table

-- DROP TABLE public.user_picture;

CREATE TABLE public.user_picture
(
    id_user     varchar(255)   NOT NULL,
    id_picture  varchar(255)   NOT NULL,
    CONSTRAINT  user_picture_pk PRIMARY KEY (id_user, id_picture),
    CONSTRAINT  user_fk FOREIGN KEY (id_user) REFERENCES public.users(id),
    CONSTRAINT  picture_fk FOREIGN KEY (id_picture) REFERENCES public.picture (id)
);

