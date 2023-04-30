CREATE DATABASE pern_todo_database;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

/* (lines 1 - 6)
These scripts are executed within the
postgreSQL shell on my local device,
within the 'postgres' built in
superuser.

Setting todo_id to SERIAL PRIMARY KEY
allows it to increment based on the
amount of rows in the table, without
the request having to specify the id.

I downloaded postgres using 
homebrew on my mac. You can
also download without
homebrew manually.
*/