###Backup the database schema  
`
"D:/Program Files/PostgreSQL/9.1/bin\pg_dump.exe" --host localhost --port 5432 --username "postgres" --no-password  --format plain --schema-only --create --verbose --file "D:\vtxcode\topicbash\assets\schema\topicbash.sql" "topicbash"
`
  
###Backup the database base data  
`
"D:/Program Files/PostgreSQL/9.1/bin\pg_dump.exe" --host localhost --port 5432 --username "postgres" --no-password  --format plain --data-only --verbose --file "D:\vtxcode\topicbash\assets\schema\topicbash-data.sql" --table "public.member_type" --table "public.topic_status" --table "public.topic_style" --table "public.topic_type" "topicbash"
`
  

###ALTER DATABASE eat SET TIMEZONE TO GMT
