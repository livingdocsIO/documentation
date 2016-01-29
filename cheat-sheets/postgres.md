# Postgres Cheat Sheet

### Show table size
```
$ psql > \d+
```



### Performance

#### Analyze a query
```
EXPLAIN ANALYZE SELECT * from document_revisions where document_id =1;
```

#### Vacuum

Show when database was vacuumed or analyzed last time.
```
SELECT relname, last_vacuum, last_autovacuum, last_analyze, last_autoanalyze  
FROM pg_stat_all_tables  
WHERE schemaname = 'public';  
```

Free storage that's not used anymore.
```
VACUUM [tablename];
```

Completely rewrite the database/table and free the storage.
This takes a very long time.
```
VACUUM FULL [tablename];
```

### Activity

Show active connections
```
SELECT * FROM pg_stat_activity;
```

Show read/delete/update activity
```
SELECT * from pg_stat_database;
```

Force disconnect a client
```
SELECT pg_cancel_backend([pid]); 
```


Show reads, delete and updates per table
```
SELECT *
FROM pg_stat_all_tables  
WHERE schemaname = 'public';  
```

