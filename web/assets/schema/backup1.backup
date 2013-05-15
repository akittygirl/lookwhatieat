--
-- PostgreSQL database dump
--

-- Dumped from database version 9.2.4
-- Dumped by pg_dump version 9.2.4
-- Started on 2013-05-15 22:49:15

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

DROP DATABASE eat;
--
-- TOC entry 2054 (class 1262 OID 16393)
-- Name: eat; Type: DATABASE; Schema: -; Owner: eat
--

CREATE DATABASE eat WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Australia.1252' LC_CTYPE = 'English_Australia.1252';


ALTER DATABASE eat OWNER TO eat;

\connect eat

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2055 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 190 (class 3079 OID 11727)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2057 (class 0 OID 0)
-- Dependencies: 190
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 168 (class 1259 OID 24598)
-- Name: account; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account (
    account_id integer NOT NULL,
    account_status_id smallint NOT NULL,
    account_group_id smallint NOT NULL,
    date_created timestamp without time zone NOT NULL,
    date_last_login timestamp without time zone,
    email character varying,
    email_status_id smallint
);


ALTER TABLE public.account OWNER TO eat;

--
-- TOC entry 169 (class 1259 OID 24601)
-- Name: account_account_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_account_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_account_id_seq OWNER TO eat;

--
-- TOC entry 2059 (class 0 OID 0)
-- Dependencies: 169
-- Name: account_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_account_id_seq OWNED BY account.account_id;


--
-- TOC entry 180 (class 1259 OID 24670)
-- Name: account_audit; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_audit (
    account_audit_id integer NOT NULL,
    account_audit_type_id integer NOT NULL
);


ALTER TABLE public.account_audit OWNER TO eat;

--
-- TOC entry 189 (class 1259 OID 24733)
-- Name: account_audit_account_audit_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_audit_account_audit_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_audit_account_audit_id_seq OWNER TO eat;

--
-- TOC entry 2061 (class 0 OID 0)
-- Dependencies: 189
-- Name: account_audit_account_audit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_audit_account_audit_id_seq OWNED BY account_audit.account_audit_id;


--
-- TOC entry 182 (class 1259 OID 24675)
-- Name: account_audit_type; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_audit_type (
    account_audit_type_id integer NOT NULL,
    account_audit_type character varying NOT NULL
);


ALTER TABLE public.account_audit_type OWNER TO eat;

--
-- TOC entry 181 (class 1259 OID 24673)
-- Name: account_audit_type_account_audit_type_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_audit_type_account_audit_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_audit_type_account_audit_type_id_seq OWNER TO eat;

--
-- TOC entry 2063 (class 0 OID 0)
-- Dependencies: 181
-- Name: account_audit_type_account_audit_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_audit_type_account_audit_type_id_seq OWNED BY account_audit_type.account_audit_type_id;


--
-- TOC entry 184 (class 1259 OID 24687)
-- Name: account_auth; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_auth (
    account_auth_id integer NOT NULL,
    account_id integer NOT NULL,
    account_auth_type_id integer NOT NULL,
    password character varying,
    password_status_id integer,
    external_token character varying,
    external_id integer
);


ALTER TABLE public.account_auth OWNER TO eat;

--
-- TOC entry 183 (class 1259 OID 24685)
-- Name: account_auth_account_auth_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_auth_account_auth_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_auth_account_auth_id_seq OWNER TO eat;

--
-- TOC entry 2065 (class 0 OID 0)
-- Dependencies: 183
-- Name: account_auth_account_auth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_auth_account_auth_id_seq OWNED BY account_auth.account_auth_id;


--
-- TOC entry 188 (class 1259 OID 24709)
-- Name: account_auth_status; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_auth_status (
    account_auth_status_id integer NOT NULL,
    account_auth_status character varying NOT NULL
);


ALTER TABLE public.account_auth_status OWNER TO eat;

--
-- TOC entry 187 (class 1259 OID 24707)
-- Name: account_auth_status_account_auth_status_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_auth_status_account_auth_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_auth_status_account_auth_status_id_seq OWNER TO eat;

--
-- TOC entry 2067 (class 0 OID 0)
-- Dependencies: 187
-- Name: account_auth_status_account_auth_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_auth_status_account_auth_status_id_seq OWNED BY account_auth_status.account_auth_status_id;


--
-- TOC entry 186 (class 1259 OID 24698)
-- Name: account_auth_type; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_auth_type (
    account_auth_type_id integer NOT NULL,
    account_auth_type character varying NOT NULL
);


ALTER TABLE public.account_auth_type OWNER TO eat;

--
-- TOC entry 185 (class 1259 OID 24696)
-- Name: account_auth_type_account_auth_type_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_auth_type_account_auth_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_auth_type_account_auth_type_id_seq OWNER TO eat;

--
-- TOC entry 2069 (class 0 OID 0)
-- Dependencies: 185
-- Name: account_auth_type_account_auth_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_auth_type_account_auth_type_id_seq OWNED BY account_auth_type.account_auth_type_id;


--
-- TOC entry 179 (class 1259 OID 24664)
-- Name: account_email_history; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_email_history (
    account_id integer NOT NULL,
    email character varying NOT NULL,
    email_status_id smallint
);


ALTER TABLE public.account_email_history OWNER TO eat;

--
-- TOC entry 171 (class 1259 OID 24614)
-- Name: account_group; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_group (
    account_group_id integer NOT NULL,
    account_group character varying
);


ALTER TABLE public.account_group OWNER TO eat;

--
-- TOC entry 170 (class 1259 OID 24612)
-- Name: account_group_account_group_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_group_account_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_group_account_group_id_seq OWNER TO eat;

--
-- TOC entry 2072 (class 0 OID 0)
-- Dependencies: 170
-- Name: account_group_account_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_group_account_group_id_seq OWNED BY account_group.account_group_id;


--
-- TOC entry 174 (class 1259 OID 24639)
-- Name: account_login_history; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_login_history (
    account_id integer NOT NULL,
    account_login timestamp without time zone
);


ALTER TABLE public.account_login_history OWNER TO eat;

--
-- TOC entry 176 (class 1259 OID 24644)
-- Name: account_status; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE account_status (
    account_status_id integer NOT NULL,
    account_status character varying NOT NULL
);


ALTER TABLE public.account_status OWNER TO eat;

--
-- TOC entry 175 (class 1259 OID 24642)
-- Name: account_status_account_status_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE account_status_account_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_status_account_status_id_seq OWNER TO eat;

--
-- TOC entry 2075 (class 0 OID 0)
-- Dependencies: 175
-- Name: account_status_account_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE account_status_account_status_id_seq OWNED BY account_status.account_status_id;


--
-- TOC entry 178 (class 1259 OID 24655)
-- Name: email_status; Type: TABLE; Schema: public; Owner: eat; Tablespace: 
--

CREATE TABLE email_status (
    email_status_id integer NOT NULL,
    email_status character varying
);


ALTER TABLE public.email_status OWNER TO eat;

--
-- TOC entry 177 (class 1259 OID 24653)
-- Name: email_status_email_status_id_seq; Type: SEQUENCE; Schema: public; Owner: eat
--

CREATE SEQUENCE email_status_email_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.email_status_email_status_id_seq OWNER TO eat;

--
-- TOC entry 2077 (class 0 OID 0)
-- Dependencies: 177
-- Name: email_status_email_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eat
--

ALTER SEQUENCE email_status_email_status_id_seq OWNED BY email_status.email_status_id;


--
-- TOC entry 173 (class 1259 OID 24630)
-- Name: password_status; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE password_status (
    password_status_id integer NOT NULL,
    password_status_name character varying
);


ALTER TABLE public.password_status OWNER TO postgres;

--
-- TOC entry 172 (class 1259 OID 24628)
-- Name: password_status_password_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE password_status_password_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.password_status_password_status_id_seq OWNER TO postgres;

--
-- TOC entry 2079 (class 0 OID 0)
-- Dependencies: 172
-- Name: password_status_password_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE password_status_password_status_id_seq OWNED BY password_status.password_status_id;


--
-- TOC entry 1989 (class 2604 OID 24603)
-- Name: account_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account ALTER COLUMN account_id SET DEFAULT nextval('account_account_id_seq'::regclass);


--
-- TOC entry 1994 (class 2604 OID 24735)
-- Name: account_audit_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_audit ALTER COLUMN account_audit_id SET DEFAULT nextval('account_audit_account_audit_id_seq'::regclass);


--
-- TOC entry 1995 (class 2604 OID 24678)
-- Name: account_audit_type_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_audit_type ALTER COLUMN account_audit_type_id SET DEFAULT nextval('account_audit_type_account_audit_type_id_seq'::regclass);


--
-- TOC entry 1996 (class 2604 OID 24690)
-- Name: account_auth_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_auth ALTER COLUMN account_auth_id SET DEFAULT nextval('account_auth_account_auth_id_seq'::regclass);


--
-- TOC entry 1998 (class 2604 OID 24712)
-- Name: account_auth_status_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_auth_status ALTER COLUMN account_auth_status_id SET DEFAULT nextval('account_auth_status_account_auth_status_id_seq'::regclass);


--
-- TOC entry 1997 (class 2604 OID 24701)
-- Name: account_auth_type_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_auth_type ALTER COLUMN account_auth_type_id SET DEFAULT nextval('account_auth_type_account_auth_type_id_seq'::regclass);


--
-- TOC entry 1990 (class 2604 OID 24617)
-- Name: account_group_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_group ALTER COLUMN account_group_id SET DEFAULT nextval('account_group_account_group_id_seq'::regclass);


--
-- TOC entry 1992 (class 2604 OID 24647)
-- Name: account_status_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_status ALTER COLUMN account_status_id SET DEFAULT nextval('account_status_account_status_id_seq'::regclass);


--
-- TOC entry 1993 (class 2604 OID 24658)
-- Name: email_status_id; Type: DEFAULT; Schema: public; Owner: eat
--

ALTER TABLE ONLY email_status ALTER COLUMN email_status_id SET DEFAULT nextval('email_status_email_status_id_seq'::regclass);


--
-- TOC entry 1991 (class 2604 OID 24633)
-- Name: password_status_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY password_status ALTER COLUMN password_status_id SET DEFAULT nextval('password_status_password_status_id_seq'::regclass);


--
-- TOC entry 2028 (class 0 OID 24598)
-- Dependencies: 168
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account (account_id, account_status_id, account_group_id, date_created, date_last_login, email, email_status_id) FROM stdin;
\.


--
-- TOC entry 2080 (class 0 OID 0)
-- Dependencies: 169
-- Name: account_account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_account_id_seq', 1, false);


--
-- TOC entry 2040 (class 0 OID 24670)
-- Dependencies: 180
-- Data for Name: account_audit; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_audit (account_audit_id, account_audit_type_id) FROM stdin;
\.


--
-- TOC entry 2081 (class 0 OID 0)
-- Dependencies: 189
-- Name: account_audit_account_audit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_audit_account_audit_id_seq', 1, false);


--
-- TOC entry 2042 (class 0 OID 24675)
-- Dependencies: 182
-- Data for Name: account_audit_type; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_audit_type (account_audit_type_id, account_audit_type) FROM stdin;
\.


--
-- TOC entry 2082 (class 0 OID 0)
-- Dependencies: 181
-- Name: account_audit_type_account_audit_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_audit_type_account_audit_type_id_seq', 1, false);


--
-- TOC entry 2044 (class 0 OID 24687)
-- Dependencies: 184
-- Data for Name: account_auth; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_auth (account_auth_id, account_id, account_auth_type_id, password, password_status_id, external_token, external_id) FROM stdin;
\.


--
-- TOC entry 2083 (class 0 OID 0)
-- Dependencies: 183
-- Name: account_auth_account_auth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_auth_account_auth_id_seq', 1, false);


--
-- TOC entry 2048 (class 0 OID 24709)
-- Dependencies: 188
-- Data for Name: account_auth_status; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_auth_status (account_auth_status_id, account_auth_status) FROM stdin;
\.


--
-- TOC entry 2084 (class 0 OID 0)
-- Dependencies: 187
-- Name: account_auth_status_account_auth_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_auth_status_account_auth_status_id_seq', 1, false);


--
-- TOC entry 2046 (class 0 OID 24698)
-- Dependencies: 186
-- Data for Name: account_auth_type; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_auth_type (account_auth_type_id, account_auth_type) FROM stdin;
\.


--
-- TOC entry 2085 (class 0 OID 0)
-- Dependencies: 185
-- Name: account_auth_type_account_auth_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_auth_type_account_auth_type_id_seq', 1, false);


--
-- TOC entry 2039 (class 0 OID 24664)
-- Dependencies: 179
-- Data for Name: account_email_history; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_email_history (account_id, email, email_status_id) FROM stdin;
\.


--
-- TOC entry 2031 (class 0 OID 24614)
-- Dependencies: 171
-- Data for Name: account_group; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_group (account_group_id, account_group) FROM stdin;
\.


--
-- TOC entry 2086 (class 0 OID 0)
-- Dependencies: 170
-- Name: account_group_account_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_group_account_group_id_seq', 1, false);


--
-- TOC entry 2034 (class 0 OID 24639)
-- Dependencies: 174
-- Data for Name: account_login_history; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_login_history (account_id, account_login) FROM stdin;
\.


--
-- TOC entry 2036 (class 0 OID 24644)
-- Dependencies: 176
-- Data for Name: account_status; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY account_status (account_status_id, account_status) FROM stdin;
\.


--
-- TOC entry 2087 (class 0 OID 0)
-- Dependencies: 175
-- Name: account_status_account_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('account_status_account_status_id_seq', 1, false);


--
-- TOC entry 2038 (class 0 OID 24655)
-- Dependencies: 178
-- Data for Name: email_status; Type: TABLE DATA; Schema: public; Owner: eat
--

COPY email_status (email_status_id, email_status) FROM stdin;
\.


--
-- TOC entry 2088 (class 0 OID 0)
-- Dependencies: 177
-- Name: email_status_email_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eat
--

SELECT pg_catalog.setval('email_status_email_status_id_seq', 1, false);


--
-- TOC entry 2033 (class 0 OID 24630)
-- Dependencies: 173
-- Data for Name: password_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY password_status (password_status_id, password_status_name) FROM stdin;
\.


--
-- TOC entry 2089 (class 0 OID 0)
-- Dependencies: 172
-- Name: password_status_password_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('password_status_password_status_id_seq', 1, false);


--
-- TOC entry 2010 (class 2606 OID 24740)
-- Name: account_audit_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account_audit
    ADD CONSTRAINT account_audit_pkey PRIMARY KEY (account_audit_id);


--
-- TOC entry 2012 (class 2606 OID 24683)
-- Name: account_audit_type_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account_audit_type
    ADD CONSTRAINT account_audit_type_pkey PRIMARY KEY (account_audit_type_id);


--
-- TOC entry 2014 (class 2606 OID 24695)
-- Name: account_auth_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account_auth
    ADD CONSTRAINT account_auth_pkey PRIMARY KEY (account_auth_id);


--
-- TOC entry 2018 (class 2606 OID 24717)
-- Name: account_auth_status_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account_auth_status
    ADD CONSTRAINT account_auth_status_pkey PRIMARY KEY (account_auth_status_id);


--
-- TOC entry 2016 (class 2606 OID 24706)
-- Name: account_auth_type_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account_auth_type
    ADD CONSTRAINT account_auth_type_pkey PRIMARY KEY (account_auth_type_id);


--
-- TOC entry 2002 (class 2606 OID 24622)
-- Name: account_group_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account_group
    ADD CONSTRAINT account_group_pkey PRIMARY KEY (account_group_id);


--
-- TOC entry 2000 (class 2606 OID 24608)
-- Name: account_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account
    ADD CONSTRAINT account_pkey PRIMARY KEY (account_id);


--
-- TOC entry 2006 (class 2606 OID 24652)
-- Name: account_status_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY account_status
    ADD CONSTRAINT account_status_pkey PRIMARY KEY (account_status_id);


--
-- TOC entry 2008 (class 2606 OID 24663)
-- Name: email_status_pkey; Type: CONSTRAINT; Schema: public; Owner: eat; Tablespace: 
--

ALTER TABLE ONLY email_status
    ADD CONSTRAINT email_status_pkey PRIMARY KEY (email_status_id);


--
-- TOC entry 2004 (class 2606 OID 24638)
-- Name: password_status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY password_status
    ADD CONSTRAINT password_status_pkey PRIMARY KEY (password_status_id);


--
-- TOC entry 2019 (class 2606 OID 24718)
-- Name: account_account_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account
    ADD CONSTRAINT account_account_group_id_fkey FOREIGN KEY (account_group_id) REFERENCES account_group(account_group_id);


--
-- TOC entry 2020 (class 2606 OID 24723)
-- Name: account_account_status_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account
    ADD CONSTRAINT account_account_status_id_fkey FOREIGN KEY (account_status_id) REFERENCES account_status(account_status_id);


--
-- TOC entry 2024 (class 2606 OID 24741)
-- Name: account_audit_account_audit_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_audit
    ADD CONSTRAINT account_audit_account_audit_type_id_fkey FOREIGN KEY (account_audit_type_id) REFERENCES account_audit_type(account_audit_type_id);


--
-- TOC entry 2026 (class 2606 OID 24751)
-- Name: account_auth_account_auth_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_auth
    ADD CONSTRAINT account_auth_account_auth_type_id_fkey FOREIGN KEY (account_auth_type_id) REFERENCES account_audit_type(account_audit_type_id);


--
-- TOC entry 2025 (class 2606 OID 24746)
-- Name: account_auth_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_auth
    ADD CONSTRAINT account_auth_account_id_fkey FOREIGN KEY (account_id) REFERENCES account(account_id);


--
-- TOC entry 2027 (class 2606 OID 24756)
-- Name: account_auth_password_status_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_auth
    ADD CONSTRAINT account_auth_password_status_id_fkey FOREIGN KEY (password_status_id) REFERENCES password_status(password_status_id);


--
-- TOC entry 2022 (class 2606 OID 24761)
-- Name: account_email_history_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_email_history
    ADD CONSTRAINT account_email_history_account_id_fkey FOREIGN KEY (account_id) REFERENCES account(account_id);


--
-- TOC entry 2023 (class 2606 OID 24766)
-- Name: account_email_history_email_status_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account_email_history
    ADD CONSTRAINT account_email_history_email_status_id_fkey FOREIGN KEY (email_status_id) REFERENCES email_status(email_status_id);


--
-- TOC entry 2021 (class 2606 OID 24728)
-- Name: account_email_status_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eat
--

ALTER TABLE ONLY account
    ADD CONSTRAINT account_email_status_id_fkey FOREIGN KEY (email_status_id) REFERENCES email_status(email_status_id);


--
-- TOC entry 2056 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 2058 (class 0 OID 0)
-- Dependencies: 168
-- Name: account; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account FROM PUBLIC;
REVOKE ALL ON TABLE account FROM eat;
GRANT ALL ON TABLE account TO eat;
GRANT ALL ON TABLE account TO PUBLIC;


--
-- TOC entry 2060 (class 0 OID 0)
-- Dependencies: 180
-- Name: account_audit; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_audit FROM PUBLIC;
REVOKE ALL ON TABLE account_audit FROM eat;
GRANT ALL ON TABLE account_audit TO eat;
GRANT ALL ON TABLE account_audit TO PUBLIC;


--
-- TOC entry 2062 (class 0 OID 0)
-- Dependencies: 182
-- Name: account_audit_type; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_audit_type FROM PUBLIC;
REVOKE ALL ON TABLE account_audit_type FROM eat;
GRANT ALL ON TABLE account_audit_type TO eat;
GRANT ALL ON TABLE account_audit_type TO PUBLIC;


--
-- TOC entry 2064 (class 0 OID 0)
-- Dependencies: 184
-- Name: account_auth; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_auth FROM PUBLIC;
REVOKE ALL ON TABLE account_auth FROM eat;
GRANT ALL ON TABLE account_auth TO eat;
GRANT ALL ON TABLE account_auth TO PUBLIC;


--
-- TOC entry 2066 (class 0 OID 0)
-- Dependencies: 188
-- Name: account_auth_status; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_auth_status FROM PUBLIC;
REVOKE ALL ON TABLE account_auth_status FROM eat;
GRANT ALL ON TABLE account_auth_status TO eat;
GRANT ALL ON TABLE account_auth_status TO PUBLIC;


--
-- TOC entry 2068 (class 0 OID 0)
-- Dependencies: 186
-- Name: account_auth_type; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_auth_type FROM PUBLIC;
REVOKE ALL ON TABLE account_auth_type FROM eat;
GRANT ALL ON TABLE account_auth_type TO eat;
GRANT ALL ON TABLE account_auth_type TO PUBLIC;


--
-- TOC entry 2070 (class 0 OID 0)
-- Dependencies: 179
-- Name: account_email_history; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_email_history FROM PUBLIC;
REVOKE ALL ON TABLE account_email_history FROM eat;
GRANT ALL ON TABLE account_email_history TO eat;
GRANT ALL ON TABLE account_email_history TO PUBLIC;


--
-- TOC entry 2071 (class 0 OID 0)
-- Dependencies: 171
-- Name: account_group; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_group FROM PUBLIC;
REVOKE ALL ON TABLE account_group FROM eat;
GRANT ALL ON TABLE account_group TO eat;
GRANT ALL ON TABLE account_group TO PUBLIC;


--
-- TOC entry 2073 (class 0 OID 0)
-- Dependencies: 174
-- Name: account_login_history; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_login_history FROM PUBLIC;
REVOKE ALL ON TABLE account_login_history FROM eat;
GRANT ALL ON TABLE account_login_history TO eat;
GRANT ALL ON TABLE account_login_history TO PUBLIC;


--
-- TOC entry 2074 (class 0 OID 0)
-- Dependencies: 176
-- Name: account_status; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE account_status FROM PUBLIC;
REVOKE ALL ON TABLE account_status FROM eat;
GRANT ALL ON TABLE account_status TO eat;
GRANT ALL ON TABLE account_status TO PUBLIC;


--
-- TOC entry 2076 (class 0 OID 0)
-- Dependencies: 178
-- Name: email_status; Type: ACL; Schema: public; Owner: eat
--

REVOKE ALL ON TABLE email_status FROM PUBLIC;
REVOKE ALL ON TABLE email_status FROM eat;
GRANT ALL ON TABLE email_status TO eat;
GRANT ALL ON TABLE email_status TO PUBLIC;


--
-- TOC entry 2078 (class 0 OID 0)
-- Dependencies: 173
-- Name: password_status; Type: ACL; Schema: public; Owner: postgres
--

REVOKE ALL ON TABLE password_status FROM PUBLIC;
REVOKE ALL ON TABLE password_status FROM postgres;
GRANT ALL ON TABLE password_status TO postgres;
GRANT ALL ON TABLE password_status TO PUBLIC;


--
-- TOC entry 1551 (class 826 OID 16405)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres REVOKE ALL ON TABLES  FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres REVOKE ALL ON TABLES  FROM postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO PUBLIC;


-- Completed on 2013-05-15 22:49:16

--
-- PostgreSQL database dump complete
--

