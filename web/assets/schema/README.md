###Backup the database schema  
`
"C:\Program Files\PostgreSQL\9.2\bin\pg_dump.exe" --host localhost --port 5432 --username "postgres"  --format plain --schema-only --create --verbose --file "C:\akittygirl\lookwhatieat\web\assets\schema\eat.sql" "eat"
`
  
###Backup the database base data  (INCOMPLETE - NO LOOKUP TABLES TO EXPORT YET)
`
"C:\Program Files\PostgreSQL\9.2\bin\pg_dump.exe" --host localhost --port 5432 --username "postgres" --format plain --data-only --verbose --file "C:\akittygirl\lookwhatieat\web\assets\schema\eat-data.sql" --table "public.member_type" --table "public.topic_status" --table "public.topic_style" --table "public.topic_type" "topicbash"
`
  

###ALTER DATABASE eat SET TIMEZONE TO GMT



Import backup from Daniel's computer

D:\Program Files\PostgreSQL\9.2\bin>psql --dbname eat --file "D:\akittygirl\lookwhatieat\web\assets\schema\backup1.sql" --username eat