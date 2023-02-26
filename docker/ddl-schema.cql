-- Create a keyspace
CREATE KEYSPACE IF NOT EXISTS test
    WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 }
    AND DURABLE_WRITES = true;

USE test;


-- Create a tables

CREATE TABLE IF NOT EXISTS product(
    id int PRIMARY KEY,
    title text
);
