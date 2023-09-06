<<<<<<< HEAD
                      +-------------------+
                      |   AppModule       |
                      +-------------------+
                      | imports: [        |
                      |   BlogModule,     |
                      |   UserModule,     |
                      |   CommentModule,  |
                      |   TagModule       |
                      | ]                 |
                      +-------------------+
                               |
                               |
           +-------------+-----+----+------------+  
           |             |          |            |
+-------------------+ +-------------------+ +-------------------+
|   BlogModule      | |   UserModule      | |   CommentModule   |
+-------------------+ +-------------------+ +-------------------+
| imports: [        | | imports: [        | | imports: [        |
|   TypeOrmModule,  | |   TypeOrmModule,  | |   TypeOrmModule,  |
|   TagModule       | | ]                 | | ]                 |
| ]                 | +-------------------+ +-------------------+
+-------------------+          |
           |                   |
           |          +-------------------+
           |          |   TagModule       |
           |          +-------------------+
           |          | imports: [        |
           +--------->|   TypeOrmModule,  |
                      | ]                 |
                      +-------------------+

=======
sample only
>>>>>>> 746fd7559904a554468acbb7abf9a6f887101dc6
